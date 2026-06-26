export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  coverImage: string
  body: string
}

export const staticArticles: Article[] = [
  {
    slug: 'porsche-911-gt3-rs',
    title: 'Porsche 911 GT3 RS: The Last Analogue?',
    category: 'REVIEWS',
    date: '15 JUN 2025',
    readTime: '6 min',
    coverImage: '/blog/porsche-911-gt3-rs.jpg',
    excerpt: 'Has Porsche built the last truly analogue 911 before the hybrids take over?',
    body: `The Porsche 911 GT3 RS does not ask for your approval. It assumes you already know what it is, what it does, and why you are here. Sit in it and the driving position tells you immediately — low, close to the wheel, the pedals perfectly placed for heel-and-toe. This is not a sports car that happens to have a race mode. This is a race car that happens to have number plates.

The engine is a naturally aspirated 4.0-litre flat-six that revs to 9,000rpm. In an era where every manufacturer is chasing peak torque from 1,500rpm via a turbocharger, Porsche has gone the other direction entirely. Power builds linearly. The soundtrack builds with it — a mechanical wail that peaks at the redline and sounds unlike anything else made today.

On road, the GT3 RS is genuinely difficult. The suspension is firm beyond what most people would call reasonable. The steering communicates everything the front tyres are experiencing, which is wonderful on a smooth road and exhausting on anything else. This is not a car that hides its character in the name of comfort.

But on a circuit — or a deserted mountain road — it makes complete sense. Every piece of information you need is there, and the car responds to inputs with an immediacy that modern electronics cannot replicate. It feels alive in a way that is increasingly rare.

Is it the last truly analogue 911? Possibly. Porsche has confirmed hybrid powertrains are coming across the range. The GT3 RS as it exists today — high-revving, naturally aspirated, uncompromising — may be the final version of this particular breed. If it is, it is the right way to end.`,
  },
  {
    slug: 'ev-india-2025',
    title: 'Electric India: Are We Ready for EVs in 2025?',
    category: 'ELECTRIC',
    date: '12 JUN 2025',
    readTime: '5 min',
    coverImage: '/blog/ev-india-2025.jpg',
    excerpt: 'The infrastructure is growing. The cars are arriving. But is India genuinely ready?',
    body: `The question of whether India is ready for electric vehicles has been asked every year for the past decade. In 2025, for the first time, the answer feels less like a debate and more like a direction of travel.

The numbers tell part of the story. EV sales in India crossed 100,000 units in a single month for the first time in late 2024. Tata Motors now sells more Nexon EVs than petrol variants in certain urban markets. The government's FAME III scheme has pushed charging infrastructure from 1,800 public stations in 2022 to over 12,000 by early 2025.

But the honest answer is: it depends entirely on where you live. In Delhi, Mumbai, and Bangalore, the case for an EV is now genuinely compelling — enough chargers, enough range, enough service infrastructure. Drive outside those cities and the picture changes quickly. Highway charging is improving but remains patchy. Range anxiety on a Delhi-to-Jaipur run in summer, with AC running hard, is not irrational.

The luxury end of the market is a different story. Buyers of a Mercedes EQS or BMW iX have home charging as standard. For them the infrastructure question is largely irrelevant. The product question — is the car as good as its petrol equivalent — is the real one, and increasingly the answer is yes.

India is not uniformly ready. But the urban luxury buyer asking whether to consider an EV in 2025? The answer is yes.`,
  },
  {
    slug: 'delhi-to-manali',
    title: 'Delhi to Manali: 570km of Perspective',
    category: 'DRIVES',
    date: '8 JUN 2025',
    readTime: '8 min',
    coverImage: '/blog/delhi-to-manali.jpg',
    excerpt: 'The Manali highway teaches you something no specification sheet ever could.',
    body: `Leave Delhi before dawn. That is the only rule. Beat the Chandigarh bypass traffic, get onto NH3 while the road is still dark and empty, and the next several hours will be among the best driving you do all year.

The first 250 kilometres are motorway. Fast, predictable, a chance to settle into the car and understand it at highway speeds. By the time the road starts to climb past Bilaspur, you are warm, comfortable, and the mountains ahead are beginning to catch the morning light. That is when the drive actually begins.

The Kullu Valley section is what most people imagine when they picture driving in the Himalayas — a river on one side, a cliff on the other, the road carving through in long sweeping bends that open up into short straights before tightening again. In a good car, with good tyres, on a quiet morning, it is as close to a private test circuit as a public road in India gets.

What a drive like this teaches you is the difference between a car that performs and a car that communicates. Performance is easy to measure on a spec sheet. Communication — the way a car tells you the road surface has changed, or that the rear is beginning to move, or that you are at the limit of grip — is not. The Delhi-Manali run rewards cars with genuine feedback and exposes those without it.

The last 50 kilometres into Manali, above Rohtang, are slow. The altitude climbs above 3,900 metres. The air thins. The engine notes change. Traffic increases. None of that matters. You have already had your drive. Everything after Rohtang is scenery.`,
  },
  {
    slug: 'ferrari-roma-india',
    title: 'Ferrari Roma Arrives in India',
    category: 'NEWS',
    date: '5 JUN 2025',
    readTime: '3 min',
    coverImage: '/blog/ferrari-roma-india.jpg',
    excerpt: 'The most beautiful Ferrari in a decade is now available to Indian buyers.',
    body: `Ferrari has quietly confirmed the Roma for the Indian market, with deliveries beginning through their Delhi and Mumbai dealerships from Q3 2025. Pricing starts at ₹3.96 crore ex-showroom, positioning it below the SF90 Stradale but above the recently discontinued Portofino M it effectively replaces.

The Roma has always been the Ferrari that requires the least justification. Where the SF90 makes its intentions clear through every intake and vent, the Roma is almost restrained — long bonnet, clean flanks, a roofline that drops elegantly to a fastback tail. It is the kind of car that earns a second look from people who do not know cars, and a long stare from those who do.

Under the bonnet is a 3.9-litre twin-turbocharged V8 producing 612bhp, mated to an 8-speed dual-clutch gearbox. 0–100kmh arrives in 3.4 seconds. Top speed is 320kmh. Those are numbers that belong on a race car. In the Roma they arrive wrapped in a car that can genuinely be driven to dinner.

For the Indian market Ferrari has confirmed three launch colours — Rosso Portofino, Grigio Silverstone, and Blu Pozzi — with the full extended colour palette available to order. The Roma Carbon Pack and the Tailor Made programme are both available.

The waitlist is already open. If you are considering one, the time to register interest is now.`,
  },
  {
    slug: 'buying-luxury-car-india',
    title: 'The Complete Guide to Buying a Luxury Car in India',
    category: 'FEATURES',
    date: '1 JUN 2025',
    readTime: '10 min',
    coverImage: '/blog/buying-luxury-car-india.jpg',
    excerpt: 'Import duties, dealer markups, grey market — everything you need to know.',
    body: `Buying a luxury car in India is not like buying one anywhere else. The taxes are among the highest in the world. The dealer network is thin. The waiting lists are long. And the grey market — parallel imports brought in outside official channels — is large enough to be its own ecosystem. Here is what you actually need to know.

**The tax reality**

India levies a customs duty of 100% on fully imported vehicles (CBU — completely built units) priced above $40,000. Add GST at 28%, a compensation cess of up to 22%, and state registration charges, and the landed cost of a luxury car in India is typically 2 to 2.5 times what it costs in Europe. A Porsche 911 that costs ₹1.2 crore in Germany costs ₹2.8–3.2 crore here. This is not a dealer markup. It is tax.

Cars assembled in India (CKD — completely knocked down kits, assembled locally) attract lower duties and are significantly cheaper. Mercedes, BMW, Audi, and Volvo all operate CKD assembly in India for their higher-volume models.

**Official dealers vs grey market**

Official dealerships offer warranty, service infrastructure, and manufacturer support. Their cars are taxed correctly and can be registered without complication. The premium is real but so is the peace of mind.

Grey market imports are CBU cars brought in through alternative channels — sometimes as personal imports, sometimes through intermediaries. They are typically 15–25% cheaper than official pricing. They are also unwarranted by the manufacturer, may have been designed for a different market (steering position, safety spec, infotainment language), and can be difficult to service outside major cities.

For daily drivers and long-term ownership, the official route is almost always the right choice. For collectors buying a specific limited-edition car unavailable through official channels, the grey market can make sense with proper due diligence.

**Waiting lists**

For popular models — Porsche Cayenne, Range Rover, Mercedes G-Class — waiting periods of 12 to 24 months are common. Register your interest early. A confirmed allocation is worth more than a theoretical order.

**What carweb.in concierge does**

We navigate all of the above on your behalf. We know which dealers have stock, which models have realistic wait times, and when the grey market is worth considering for your specific requirement. If you are buying a luxury car in India and want someone in your corner, that is exactly what we are here for.`,
  },
  {
    slug: 'lamborghini-urus-s',
    title: 'Lamborghini Urus S: The Super SUV Grows Up',
    category: 'REVIEWS',
    date: '28 MAY 2025',
    readTime: '7 min',
    coverImage: '/blog/lamborghini-urus-s.jpg',
    excerpt: 'More power, more refinement. But does it still feel like a Lamborghini?',
    body: `The Lamborghini Urus S arrived with a straightforward brief: take the Urus, which was already the best-selling Lamborghini in history, and make it better. More power, more refinement, more technology. The question was whether that process would sand away the edges that made the original genuinely exciting.

The numbers first. Power is up to 666bhp from the 4.0-litre twin-turbo V8 — 16bhp more than the standard Urus. Torque is 850Nm. 0–100kmh takes 3.5 seconds. Top speed is 305kmh. For an SUV that weighs over 2,100kg, these are figures that require a moment of consideration.

On the road the Urus S is immediately, aggressively fast. The power delivery is not subtle — it arrives in a rush that pushes you back into your seat with a conviction that feels slightly inappropriate for a school run but completely right on an empty highway. The exhaust note, too, is theatrical in a way that most modern turbocharged cars are not.

The refinement story is genuine. The air suspension is better calibrated. Road noise at motorway speeds is noticeably lower. The interior materials have been upgraded with a new generation of Lamborghini's Sian-derived interface. These are real improvements.

But the most important thing about the Urus S is that it still feels like a Lamborghini. It still makes you feel slightly conspicuous. It still attracts attention. It still sounds like something that has no business being as fast as it is. In a segment — the luxury performance SUV — that is increasingly populated by cars that are brilliant but anonymous, the Urus S refuses to be ignored.

Whether that is a good thing depends entirely on who you are. But then, that has always been the point of a Lamborghini.`,
  },
]

export const articles = staticArticles
