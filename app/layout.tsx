import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'MANASIK | Hajj & Umrah', description: 'A unified pilgrimage marketplace for Ethiopia' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}