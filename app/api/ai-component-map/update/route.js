// app/api/ai-component-map/update/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate the payload
    if (!data || (!data.components && !data.runtimeElements)) {
      return NextResponse.json(
        { error: 'Invalid component map data' },
        { status: 400 }
      );
    }
    
    // Add timestamp
    data.generatedAt = new Date().toISOString();
    
    // Define the output path (in the public directory)
    const publicDir = path.join(process.cwd(), 'public');
    const outputPath = path.join(publicDir, 'ai-component-map.json');
    
    // Create the public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Check if a previous map exists
    let existingMap = {};
    if (fs.existsSync(outputPath)) {
      try {
        const existingData = fs.readFileSync(outputPath, 'utf8');
        existingMap = JSON.parse(existingData);
      } catch (err) {
        console.warn('Could not read existing component map:', err.message);
      }
    }
    
    // Merge with existing data, preserving build-time components
    const mergedMap = {
      components: existingMap.components || [],
      runtimeElements: data.runtimeElements || [],
      generatedAt: data.generatedAt,
      version: data.version || '1.0.0',
      pageContexts: {
        ...(existingMap.pageContexts || {}),
        [data.currentPath || '/']: {
          lastUpdated: new Date().toISOString(),
          elementsCount: (data.runtimeElements || []).length
        }
      }
    };
    
    // Write the updated map to the file
    fs.writeFileSync(outputPath, JSON.stringify(mergedMap, null, 2));
    
    return NextResponse.json({ 
      success: true,
      message: 'Component map updated successfully'
    });
  } catch (error) {
    console.error('Error updating component map:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to update component map',
        message: error.message
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const outputPath = path.join(process.cwd(), 'public', 'ai-component-map.json');
    
    if (!fs.existsSync(outputPath)) {
      return NextResponse.json({
        components: [],
        runtimeElements: [],
        generatedAt: new Date().toISOString(),
        version: '1.0.0'
      });
    }
    
    const mapData = fs.readFileSync(outputPath, 'utf8');
    const componentMap = JSON.parse(mapData);
    
    return NextResponse.json(componentMap);
  } catch (error) {
    console.error('Error retrieving component map:', error);
    
    return NextResponse.json(
      { error: 'Failed to retrieve component map' },
      { status: 500 }
    );
  }
}