import type {Metadata} from 'next';
import './globals.css';
import Navigation from './navigation';
import SiteFooter from './site-footer';
export const metadata:Metadata={title:'ALMAIR | Hajj & Umrah',description:'A thoughtfully designed Hajj and Umrah marketplace connecting pilgrims with travel agencies and clearer journey information.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navigation/>{children}<SiteFooter/></body></html>}