import {writeFile} from 'fs/promises';
import path from 'path';
// import { pool } from '../../../config/db';

export async function POST(request) {

  const data = await request.formData(); // Extrack file of requets
  const file = data.get('file'); // Get image of Data

  // const time = await pool.query('SELECT NOW()');
  // console.log(time);
  if (!file) {
    return NextResponse.json({
      message: 'No existe el Archivo'
    })
  }

  const fileBuffer = await file.arrayBuffer(); //
  const save = await Buffer.from(fileBuffer); // Change of BUFFER
  const namePath = path.join(process.cwd(), 'public/', file.name); // Path specify of new file
  writeFile(namePath, save) // Crear Archivo
  console.log('Archivo guardado.', namePath); // Text of develop

  // Send Response to Client
  return new Response(JSON.stringify({
    message: 'uploading file'
  }));
}
