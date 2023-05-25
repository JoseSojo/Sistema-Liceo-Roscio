import './globals.css';

export const metadata = {
  title: 'Sistema Roscio',
  description: 'Primera red de un liceo',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
