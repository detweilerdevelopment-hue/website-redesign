import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, TrainFront, Footprints, Users, Ship, Smartphone } from 'lucide-react';

const usd = n => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

export default function Approach({ setTrip, navigate }) {
  const [stay, setStay] = useState('nice');
  const [boat, setBoat] = useState(true);
  const total = 6360 + (stay === 'monaco' ? 7900 : 0) + (boat ? 210 : 0);
  const launch = route => {
    setTrip({ travelers: 2, stay, race: 'grandstand', boat, boatGuests: 1, transfer: false });
    navigate(route);
  };
  return <main className="approach-page">
    <section className="approach-hero wrap">
      <div className="approach-copy">
        <span className="eyebrow"><span className="little-line" />A DESIGN EXPLORATION FOR GUIDELESS</span>
        <h1>More freedom.<br /><em>Fewer decisions<br />to untangle.</em></h1>
        <p>A curated trip should feel easy to make your own. This concept connects the choices you make before you go with the trip you live when you arrive.</p>
        <a href="#approach-demo" className="button button-primary" onClick={e => { e.preventDefault(); document.getElementById('approach-demo')?.scrollIntoView({behavior:'smooth'}); }}>Try the 60-second demo <ArrowRight size={17} /></a>
        <a href="#/" className="approach-secondary">Explore the full website <ArrowUpRight size={15} /></a>
        <span className="approach-disclosure">Independent redesign concept · Sample pricing</span>
      </div>
      <div className="approach-visual"><img src="/images/monaco-panorama.jpg" alt="Panoramic view of Monaco and Port Hercule" /><div className="approach-photo-label"><span>THE WEEKEND, REIMAGINED</span><strong>Monaco. Made yours.</strong><span>JUNE 3–7, 2027</span></div><div className="approach-floating"><Check size={16} /><span>The essentials, handled.<br /><strong>The possibilities, yours.</strong></span></div></div>
    </section>
    <section className="approach-demo wrap" id="approach-demo">
      <div className="section-heading"><div><span className="eyebrow"><span className="little-line" />ONE TRIP. TWO DIFFERENT MORNINGS.</span><h2>Try a little <em>freedom.</em></h2></div><p>Two travelers. Own rooms. Grandstand K.<br />Change a choice. See what follows.</p></div>
      <div className="approach-playground">
        <div className="approach-controls"><div className="approach-step-label"><span>01</span><h3>Choose your home base.</h3></div><div className="approach-stays">{[['nice','Stay in Nice','Harbor cafés. A train to the race.','Included'],['monaco','Stay in Monaco','Close to the circuit. Walk to the action.','+$7,900 for two']].map(([id,title,description,price])=><button key={id} aria-pressed={stay===id} onClick={()=>setStay(id)} className={stay===id?'selected':''}><span className="selection-circle">{stay===id&&<Check size={13}/>}</span><strong>{title}</strong><span>{description}</span><b>{price}</b></button>)}</div><div className="approach-step-label"><span>02</span><h3>Same trip. Different plans.</h3></div><button className={`approach-boat ${boat?'selected':''}`} aria-pressed={boat} onClick={()=>setBoat(!boat)}><Ship size={22}/><span><strong>A coast boat for Traveler 1</strong><small>Traveler 2 keeps a free morning. +$210</small></span><span className="selection-circle">{boat&&<Check size={13}/>}</span></button><p className="sample-note">Try switching the stay or removing the boat. These selections carry into the builder and app.</p></div>
        <div className="approach-result" aria-live="polite"><span className="micro-label">YOUR CHOICES, CONNECTED</span><div className="approach-transport">{stay==='nice'?<TrainFront size={22}/>:<Footprints size={22}/>}<div><strong>{stay==='nice'?'Train to Monaco':'Walk to the circuit'}</strong><p>{stay==='nice'?'Your train pass is included.':'Your train pass stays included for exploring Nice.'}</p></div></div><div className="approach-travelers">{[1,2].map(n=><div key={n}><span className="avatar">0{n}</span><div><strong>Traveler {n}</strong><p>{n===1&&boat?'Friday · Coast boat to Monaco':'Friday · Coffee, breakfast, no agenda'}</p></div></div>)}</div><div className="approach-total"><span>Total for two<small>Own rooms · Four nights · Grandstand K</small></span><strong>{usd(total)}</strong></div><div className="approach-payment"><span>Due today <strong>{usd(3580+(boat?210:0))}</strong></span><span>Remaining <strong>{usd(total-3580-(boat?210:0))}</strong></span></div><button className="button button-primary" onClick={()=>launch('/app')}>See these plans in the app <Smartphone size={17}/></button><button className="approach-builder-link" onClick={()=>launch('/build')}>Explore every choice in the builder <ArrowRight size={15}/></button></div>
      </div>
    </section>
    <section className="approach-rationale wrap"><span className="eyebrow"><span className="little-line" />THE THINKING BEHIND THE SCREENS</span><h2>Designed around <em>the journey.</em></h2><div className="rationale-grid"><article><span>01 / CONFIGURE</span><h3>Start with a complete trip.</h3><p>The existing builder presents eight stages. This concept groups decisions into five: trip, stay, race view, extras, and review. Travelers adjust a curated starting point and can revisit any choice.</p></article><article><span>02 / UNDERSTAND</span><h3>Make the consequences clear.</h3><p>A stay changes the price and the journey to the circuit. An activity changes only its participants’ plans. Total cost, payment today, and remaining balance stay visible as decisions change.</p></article><article><span>03 / EXPERIENCE</span><h3>Carry the plan into the day.</h3><p>The companion picks up the same selections. Each traveler sees their own morning, with tickets, accommodation, group moments, and support close at hand.</p></article></div><div className="approach-brand-note"><div className="approach-swatches"><i/><i/><i/></div><p><strong>One visual language, from inspiration to arrival.</strong> Coastal blue, warm paper, expressive headlines, and a directional logo connect the website and app.</p></div><p className="sample-note">Design hypotheses for discussion, not measured conversion improvements. Booking policies, supplier availability, and final content would be validated with the Guideless team.</p></section>
    <footer className="approach-footer wrap"><span>Guideless · Independent design exploration</span><a href="#/">Explore the website <ArrowUpRight size={15}/></a></footer>
  </main>;
}
