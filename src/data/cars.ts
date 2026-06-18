export interface QuickSpec {
  label: string
  value: string
}

export interface SpecItem {
  label: string
  value: string
}

export interface SpecCategory {
  category: string
  specs: SpecItem[]
}

export interface Car {
  id: string
  name: string
  tagline: string
  quickSpecs: QuickSpec[]
  fullSpecs: SpecCategory[]
}

export const cars: Car[] = [
  {
    id: 'grand-tourer',
    name: 'GRAND TOURER',
    tagline: 'EFFORTLESS DISTANCE FOR THE DISCERNING FEW',
    quickSpecs: [
      { label: 'ENGINE', value: 'V12 6.0L' },
      { label: 'POWER', value: '630 BHP' },
      { label: '0–100 KMH', value: '3.8S' },
      { label: 'TOP SPEED', value: '330 KM/H' },
      { label: 'SEATS', value: '2+2' },
      { label: 'WEIGHT', value: '1840 KG' },
    ],
    fullSpecs: [
      {
        category: 'POWERTRAIN',
        specs: [
          { label: 'ENGINE TYPE', value: 'V12 NATURALLY ASPIRATED 6.0L' },
          { label: 'MAX POWER', value: '630 BHP @ 6,500 RPM' },
          { label: 'MAX TORQUE', value: '720 NM @ 4,500 RPM' },
          { label: 'TRANSMISSION', value: '8-SPEED AUTOMATIC' },
          { label: 'DRIVE', value: 'REAR-WHEEL DRIVE' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: '0–100 KM/H', value: '3.8 SECONDS' },
          { label: '0–200 KM/H', value: '8.9 SECONDS' },
          { label: 'TOP SPEED', value: '330 KM/H' },
          { label: 'BRAKING 100–0', value: '31 METRES' },
        ],
      },
      {
        category: 'CHASSIS & SUSPENSION',
        specs: [
          { label: 'FRONT SUSPENSION', value: 'DOUBLE WISHBONE, ADAPTIVE DAMPERS' },
          { label: 'REAR SUSPENSION', value: 'MULTI-LINK, ADAPTIVE DAMPERS' },
          { label: 'BRAKES FRONT', value: '420MM CARBON-CERAMIC' },
          { label: 'BRAKES REAR', value: '380MM CARBON-CERAMIC' },
          { label: 'TYRES', value: '255/35 ZR21 FRONT / 295/30 ZR21 REAR' },
        ],
      },
      {
        category: 'INTERIOR & TECHNOLOGY',
        specs: [
          { label: 'SEATING', value: '2+2 BESPOKE LEATHER' },
          { label: 'INFOTAINMENT', value: '14" FLOATING TOUCHSCREEN' },
          { label: 'AUDIO', value: '18-SPEAKER BESPOKE AUDIO' },
          { label: 'DRIVER DISPLAY', value: '12.3" DIGITAL CLUSTER' },
          { label: 'CONNECTIVITY', value: 'WIRELESS APPLE CARPLAY / ANDROID AUTO' },
        ],
      },
      {
        category: 'SAFETY & DRIVER AIDS',
        specs: [
          { label: 'AUTONOMOUS EMERGENCY BRAKING', value: 'STANDARD' },
          { label: 'LANE KEEP ASSIST', value: 'STANDARD' },
          { label: 'ADAPTIVE CRUISE CONTROL', value: 'STANDARD' },
          { label: 'NIGHT VISION', value: 'OPTIONAL' },
          { label: 'HEAD-UP DISPLAY', value: 'STANDARD' },
        ],
      },
    ],
  },
  {
    id: 'sport-coupe',
    name: 'SPORT COUPE',
    tagline: 'POWER AND PRECISION REDEFINED',
    quickSpecs: [
      { label: 'ENGINE', value: 'FLAT-SIX 4.0L' },
      { label: 'POWER', value: '650 BHP' },
      { label: '0–100 KMH', value: '2.9S' },
      { label: 'TOP SPEED', value: '340 KM/H' },
      { label: 'SEATS', value: '2' },
      { label: 'WEIGHT', value: '1490 KG' },
    ],
    fullSpecs: [
      {
        category: 'POWERTRAIN',
        specs: [
          { label: 'ENGINE TYPE', value: 'FLAT-SIX TWIN-TURBO 4.0L' },
          { label: 'MAX POWER', value: '650 BHP @ 8,000 RPM' },
          { label: 'MAX TORQUE', value: '800 NM @ 5,500 RPM' },
          { label: 'TRANSMISSION', value: '7-SPEED PDK DUAL-CLUTCH' },
          { label: 'DRIVE', value: 'REAR-WHEEL DRIVE' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: '0–100 KM/H', value: '2.9 SECONDS' },
          { label: '0–200 KM/H', value: '7.2 SECONDS' },
          { label: 'TOP SPEED', value: '340 KM/H' },
          { label: 'BRAKING 100–0', value: '27 METRES' },
        ],
      },
      {
        category: 'CHASSIS & SUSPENSION',
        specs: [
          { label: 'FRONT SUSPENSION', value: 'MacPHERSON STRUT, ACTIVE DAMPERS' },
          { label: 'REAR SUSPENSION', value: 'MULTI-LINK, ACTIVE DAMPERS' },
          { label: 'BRAKES FRONT', value: '410MM CARBON-CERAMIC PCCB' },
          { label: 'BRAKES REAR', value: '390MM CARBON-CERAMIC PCCB' },
          { label: 'TYRES', value: '245/35 ZR20 FRONT / 305/30 ZR21 REAR' },
        ],
      },
      {
        category: 'INTERIOR & TECHNOLOGY',
        specs: [
          { label: 'SEATING', value: '2 RACE-DERIVED BUCKET SEATS' },
          { label: 'INFOTAINMENT', value: '10.9" TOUCHSCREEN' },
          { label: 'AUDIO', value: 'BURMESTER HIGH-END SURROUND' },
          { label: 'DRIVER DISPLAY', value: '10.9" DIGITAL CLUSTER' },
          { label: 'CONNECTIVITY', value: 'WIRELESS APPLE CARPLAY / ANDROID AUTO' },
        ],
      },
      {
        category: 'SAFETY & DRIVER AIDS',
        specs: [
          { label: 'PORSCHE STABILITY MANAGEMENT', value: 'STANDARD' },
          { label: 'TRACTION CONTROL', value: 'SPORT-TUNED STANDARD' },
          { label: 'ACTIVE AERODYNAMICS', value: 'REAR WING AUTO-DEPLOY' },
          { label: 'TRACK ASSIST', value: 'OPTIONAL' },
          { label: 'REVERSING CAMERA', value: 'STANDARD' },
        ],
      },
    ],
  },
  {
    id: 'luxury-suv',
    name: 'LUXURY SUV',
    tagline: 'WHERE TERRAIN MEETS REFINEMENT',
    quickSpecs: [
      { label: 'ENGINE', value: 'V8 4.4L' },
      { label: 'POWER', value: '530 BHP' },
      { label: '0–100 KMH', value: '4.3S' },
      { label: 'RANGE', value: '700 KM' },
      { label: 'DRIVE', value: 'ALL-WHEEL' },
      { label: 'BUILD', value: '2024' },
    ],
    fullSpecs: [
      {
        category: 'POWERTRAIN',
        specs: [
          { label: 'ENGINE TYPE', value: 'V8 TWIN-TURBO 4.4L' },
          { label: 'MAX POWER', value: '530 BHP @ 6,000 RPM' },
          { label: 'MAX TORQUE', value: '750 NM @ 2,000 RPM' },
          { label: 'TRANSMISSION', value: '8-SPEED AUTOMATIC' },
          { label: 'DRIVE', value: 'ALL-WHEEL DRIVE WITH LOCKING DIFF' },
        ],
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: '0–100 KM/H', value: '4.3 SECONDS' },
          { label: '0–200 KM/H', value: '13.1 SECONDS' },
          { label: 'TOP SPEED', value: '280 KM/H' },
          { label: 'FUEL RANGE', value: '700 KM COMBINED' },
        ],
      },
      {
        category: 'CHASSIS & SUSPENSION',
        specs: [
          { label: 'FRONT SUSPENSION', value: 'DOUBLE WISHBONE, AIR SUSPENSION' },
          { label: 'REAR SUSPENSION', value: 'INTEGRAL-LINK, AIR SUSPENSION' },
          { label: 'BRAKES FRONT', value: '395MM VENTILATED DISC' },
          { label: 'BRAKES REAR', value: '370MM VENTILATED DISC' },
          { label: 'TYRES', value: '285/40 ZR22 ALL-TERRAIN RATED' },
        ],
      },
      {
        category: 'INTERIOR & TECHNOLOGY',
        specs: [
          { label: 'SEATING', value: '5 NAPPA LEATHER (7 OPTIONAL)' },
          { label: 'INFOTAINMENT', value: '12.3" TOUCHSCREEN + REAR SCREENS' },
          { label: 'AUDIO', value: 'BOWERS & WILKINS DIAMOND SURROUND' },
          { label: 'AMBIENT LIGHTING', value: '30-COLOUR INTERIOR AMBIENCE' },
          { label: 'MASSAGING SEATS', value: 'FRONT & REAR 18-POINT' },
        ],
      },
      {
        category: 'SAFETY & DRIVER AIDS',
        specs: [
          { label: 'TERRAIN RESPONSE SYSTEM', value: 'STANDARD 6 MODES' },
          { label: 'SURROUND VIEW CAMERAS', value: '360° HD' },
          { label: 'ACTIVE LANE KEEPING', value: 'STANDARD' },
          { label: 'WADE SENSING', value: 'UP TO 900MM' },
          { label: 'BLIND SPOT MONITORING', value: 'STANDARD' },
        ],
      },
    ],
  },
]
