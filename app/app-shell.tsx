'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {House,Compass,Luggage,UserRound,LogOut,Building2,CalendarDays,ArrowRight,ShieldCheck} from 'lucide-react';
import {getSupabaseClient} from '../../lib/supabase';
const links=[{href:'/app/home',label:'Home',icon:House},{href:'/packages',label:'Explore',icon:Compass},{href:'/bookings',label:'Journeys',icon:Luggage},{href:'/app/profile',label:'Profile',icon:UserRound}];
export default function AppShell({children}:{children:React.ReactNode}){
 const [user,setUser]=useState<{id:string;email?:string}|null>(null);const [loading,setLoading]=useState(true);const [error,setError]=useState('');const pathname=usePathname();const router=useRouter();
 useEffect(()=>{let active=true;let unsubscribe:(()=>void)|undefined;try{const client=getSupabaseClient();client.auth.getUser().then(({data,error})=>{if(!active)return;if(error||!data.user){router.replace('/login?next='+encodeURIComponent(pathname));return}setUser({id:data.user.id,email:data.user.email});setLoading(false)}).catch(()=>{if(active){setError('Unable to verify your session.');setLoading(false)}});const {data}=client.auth.onAuthStateChange((event)=>{if(event==='SIGNED_OUT')router.replace('/login')});unsubscribe=()=>data.subscription.unsubscribe()}catch{setError('Authentication is temporarily unavailable.');setLoading(false)}return()=>{active=false;unsubscribe?.()}},[router,pathname]);
 async function logout(){try{await getSupabaseClient().auth.signOut();router.replace('/login')}catch{setError('Could not sign out. Please retry.')}}
 if(loading)return <div className="app-auth-state" role="status">Preparing your ALMAIR experience…</div>;
 if(error)return <div className="app-auth-state" role="alert">{error} <Link href="/login">Sign in</Link></div>;
 if(!user)return null;
 return <div className="almair-app"><aside className="app-sidebar"><Link href="/app/home" className="app-wordmark">ALMAIR<small>PILGRIM</small></Link><p className="app-sidebar-label">YOUR SPACE</p><nav aria-label="Application navigation">{links.map(({href,label,icon:Icon})=><Link href={href} key={href} className={pathname===href?'selected':''}><Icon size={19}/>{label}</Link>)}</nav><div className="app-sidebar-bottom"><Link href="/agency/dashboard"><Building2 size={18}/> Agency workspace</Link><button onClick={logout}><LogOut size={18}/> Sign out</button></div></aside><div className="app-main"><header className="app-topbar"><Link href="/app/home" className="app-mobile-brand">ALMAIR</Link><span className="app-topbar-caption">Your pilgrimage companion</span><Link className="app-account-link" href="/app/profile" aria-label="My profile"><UserRound size={19}/></Link></header><div className="app-page">{children}</div></div><div className="app-bottom-wrapper"><nav className="app-bottom-nav" aria-label="Mobile application navigation">{links.map(({href,label,icon:Icon})=><Link key={href} href={href} aria-current={pathname===href?'page':undefined}><Icon size={21}/><span>{label}</span></Link>)}</nav></div></div>
}
