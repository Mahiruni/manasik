import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, CalendarDays, CheckCircle2, Compass, Globe2, HeartHandshake, Languages, LockKeyhole, MapPinned, PlaneTakeoff, ShieldCheck, Smartphone, Users, WalletCards } from 'lucide-react';

const steps = [
  { number: '01', title: 'Discover your journey', description: 'Compare pilgrimage options, departure windows, accommodation details and what each package includes.' },
  { number: '02', title: 'Understand every detail', description: 'Review itineraries, agency information, service inclusions, exclusions and clear booking terms before requesting a place.' },
  { number: '03', title: 'Request with confidence', description: 'Submit a booking enquiry and follow its status. A request is not a confirmed reservation.' },
  { number: '04', title: 'Prepare with clarity', description: 'Our roadmap includes checklists, document guidance, reminders and a single place for journey updates.' },
];
const pillars = [
  { icon: ShieldCheck, title: 'Trust is a product feature', description: 'Agency verification workflows, accountable review and transparent listing status are central to the platform.' },
  { icon: Compass, title: 'Clarity before commitment', description: 'Help pilgrims understand itineraries, departure dates, accommodations and package terms before they enquire.' },
  { icon: HeartHandshake, title: 'Human support, digital convenience', description: 'Give agencies tools to respond to enquiries and help pilgrims through an important, deeply personal journey.' },
];
const roadmap = [
  { icon: BadgeCheck, tag: 'Agency ecosystem', title: 'Verified travel partners', description: 'Agency applications, document review, approval controls and dedicated partner workspaces.' },
  { icon: CalendarDays, tag: 'Journey planning', title: 'Departures and availability', description: 'Structured departure schedules, package details and booking-request tracking.' },
  { icon: BookOpen, tag: 'Pilgrim readiness', title: 'Preparation companion', description: 'Planned guidance for packing, required documents, key milestones and practical travel preparation.' },
  { icon: MapPinned, tag: 'Travel experience', title: 'Connected itineraries', description: 'A future place for schedules, meeting points, accommodation details and important journey updates.' },
  { icon: Languages, tag: 'Inclusive access', title: 'Multilingual experience', description: 'English, Amharic, Afaan Oromo and Arabic are part of the language roadmap.' },
  { icon: Smartphone, tag: 'Mobile-first', title: 'Built for life on the move', description: 'A responsive experience today, with richer mobile travel assistance planned.' },
];
const faqs = [
  { q: 'Can I book Hajj or Umrah today?', a: 'MANASIK is being introduced in stages. Booking requests are enquiries, not confirmed travel reservations. Only approved, published offers should be considered available.' },
  { q: 'Does MANASIK issue visas or authorize agencies?', a: 'No. Government authorizations, visas and travel permissions remain the responsibility of the relevant authorities and authorized providers. Platform verification is not a government endorsement.' },
  { q: 'How can a travel agency join?', a: 'Travel agencies can submit an application through the partner onboarding page. Applications are subject to review before any agency is presented as approved.' },
  { q: 'Are payments available?', a: 'Integrated payments are part of a future roadmap and depend on the required operational, financial and regulatory checks. Do not send money based solely on a website enquiry.' },
];
export default function Home() {
  return <main className="marketing">
    <section className="marketing-hero">
      <div className="marketing-hero-inner">
        <div className="marketing-kicker"><span className="marketing-dot" /> A new way to plan a sacred journey</div>
        <h1>For a journey that matters, <em>every detail matters.</em></h1>
        <p className="marketing-lead">Meet MANASIK — a thoughtfully designed Hajj and Umrah marketplace connecting pilgrims with travel agencies, clearer information and a more organized journey from first enquiry to departure.</p>
        <div className="marketing-actions"><Link className="marketing-primary" href="/packages">Explore journeys <ArrowUpRight size={18}/></Link><Link className="marketing-secondary" href="/agency/apply">For travel agencies <ArrowRight size={18}/></Link></div>
        <div className="marketing-hero-note"><LockKeyhole size={16}/> Built around transparency, responsible onboarding and informed decisions.</div>
      </div>
      <div className="marketing-hero-art" aria-hidden="true"><div className="marketing-orbit orbit-one"/><div className="marketing-orbit orbit-two"/><div className="marketing-art-core"><span>✦</span><strong>MANASIK</strong><small>Journey with intention</small></div><span className="marketing-art-star star-one">✧</span><span className="marketing-art-star star-two">✧</span></div>
    </section>

    <section className="marketing-strip" aria-label="Platform principles"><span><ShieldCheck size={18}/> Verification-led onboarding</span><span><Globe2 size={18}/> Designed for diverse pilgrims</span><span><PlaneTakeoff size={18}/> Journey-focused planning</span></section>

    <section className="marketing-section marketing-intro"><div><p className="marketing-label">THE MANASIK VISION</p><h2>A more considered way to begin.</h2></div><div><p>Planning Hajj or Umrah can involve multiple conversations, changing schedules, unfamiliar requirements and difficult comparisons. MANASIK is being built to bring the important pieces together in one clearer experience.</p><p>Our ambition is simple: help pilgrims make informed decisions while giving responsible travel partners the digital tools to serve them better.</p></div></section>

    <section className="marketing-section"><div className="marketing-section-heading"><p className="marketing-label">OUR FOUNDATIONS</p><h2>Designed around what matters most.</h2></div><div className="marketing-pillars">{pillars.map(({icon:Icon,title,description})=><article className="marketing-pillar" key={title}><span className="marketing-icon"><Icon size={25}/></span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="marketing-section marketing-steps-section"><div className="marketing-section-heading"><p className="marketing-label">THE PILGRIM EXPERIENCE</p><h2>From the first question to the next step.</h2><p>A simpler process, with clear expectations at every stage.</p></div><div className="marketing-steps">{steps.map(s=><article className="marketing-step" key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.description}</p></article>)}</div><Link className="marketing-text-link" href="/departures">Browse upcoming departures <ArrowRight size={17}/></Link></section>

    <section className="marketing-section"><div className="marketing-section-heading"><p className="marketing-label">OUR PRODUCT ROADMAP</p><h2>More than a booking directory.</h2><p>MANASIK is a growing platform. These capabilities include both current foundations and future development priorities.</p></div><div className="marketing-roadmap">{roadmap.map(({icon:Icon,tag,title,description})=><article className="marketing-roadmap-card" key={title}><Icon size={25}/><small>{tag}</small><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="marketing-partner"><div><p className="marketing-label">FOR TRAVEL AGENCIES</p><h2>Better tools for the people behind every journey.</h2><p>MANASIK is developing a dedicated partner experience for agency applications, package visibility, departure management and booking enquiries. Agency approval is reviewed; applying does not guarantee acceptance.</p><Link className="marketing-primary" href="/agency/apply">Apply as an agency <ArrowUpRight size={18}/></Link></div><div className="marketing-partner-points"><div><Users size={22}/><span>Structured agency onboarding</span><CheckCircle2 size={18}/></div><div><CalendarDays size={22}/><span>Organized departure information</span><CheckCircle2 size={18}/></div><div><WalletCards size={22}/><span>Transparent package presentation</span><CheckCircle2 size={18}/></div></div></section>

    <section className="marketing-section marketing-faq"><div><p className="marketing-label">GOOD TO KNOW</p><h2>Questions worth asking.</h2><p>Clarity is part of the journey. Here are a few important things to know about the platform.</p></div><div>{faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>

    <section className="marketing-end"><p className="marketing-label">BEGIN WITH INTENTION</p><h2>Your journey deserves thoughtful planning.</h2><p>Discover the MANASIK experience as our marketplace and partner network continue to develop.</p><div className="marketing-actions"><Link className="marketing-primary" href="/packages">Explore packages <ArrowRight size={18}/></Link><Link className="marketing-secondary" href="/agency/apply">Become a partner <ArrowUpRight size={18}/></Link></div></section>
    <footer className="marketing-footer"><div><strong>✦ MANASIK</strong><p>Purposeful journeys. Thoughtful technology.</p><small>Developed by Hisab Technologies PLC.</small></div><div><Link href="/packages">Packages</Link><Link href="/departures">Departures</Link><Link href="/agencies">Agencies</Link><Link href="/login">Sign in</Link></div><p className="marketing-disclaimer">MANASIK is a technology platform in development, not a government authority or visa issuer. Listings, agency approvals and booking confirmations are subject to verification and availability.</p></footer>
  </main>;
}
