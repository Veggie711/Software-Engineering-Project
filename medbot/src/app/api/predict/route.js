
import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

async function ensureUploadDirExists() {
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }
}

export async function POST(req) {
  await ensureUploadDirExists();

  const data = await req.formData();
  const file = data.get('image');

  if (!file) {
    return NextResponse.json({ error: 'No image provided' }, { status: 400 });
  }

  const imagePath = path.join(uploadDir, file.name);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(imagePath, buffer);

  const pythonScriptPath = path.resolve(process.cwd(), '..', 'model', 'pipeline.py');

  return new Promise((resolve) => {
    exec(`python "${pythonScriptPath}" "${imagePath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        resolve(NextResponse.json({ error: 'Failed to process image' }, { status: 500 }));
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        resolve(NextResponse.json({ error: 'Failed to process image' }, { status: 500 }));
        return;
      }
      
      try {
        const result = JSON.parse(stdout);
        resolve(NextResponse.json(result));
      } catch (e) {
        console.error(`Error parsing python script output: ${e}`);
        resolve(NextResponse.json({ error: 'Failed to parse prediction' }, { status: 500 }));
      }
    });
  });
}
