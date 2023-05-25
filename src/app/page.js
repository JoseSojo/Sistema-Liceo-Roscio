"use client";
import { useState } from 'react';
import './globals.css';

export default async function Home() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <form onSubmit={ async (e) => {
        e.preventDefault();
        if (!file) return; // Valid if exits file

        const form = new FormData();
        form.set('file', file);

        // SEND FILE
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: form
        });
        const data = await res.json();
        console.log(data);
      }}>

        <label>Cargar Archivo</label>

        <input type='file'
          onChange={async (e) => {
            setFile(e.target.files[0]);
          }}
        />

        <button type='submit'>Enviar Archivo</button>
      </form>
    </div>
  )
}
