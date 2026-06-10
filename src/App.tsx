import caraIcon from './assets/cara-icon.png'
import heroRoutineCard from './assets/hero-routine-card.png'
import heroTaskCard from './assets/hero-task-card.png'
import homeScreen from './assets/home-screen.png'
import howRoutines from './assets/how-1-routines.png'
import howProcedures from './assets/how-2-procedures.png'
import howVitals from './assets/how-3-vitals.png'
import howNotes from './assets/how-4-notes.png'

const features = [
  {
    icon: '▦',
    title: 'Streamlined Routines',
    text: 'Organize care days by morning, afternoon, and night. Track progress at a glance.',
  },
  {
    icon: '✦',
    title: 'Comprehensive Task Management',
    text: 'Manage critical procedures like tracheostomy care and vital checks without missing steps.',
  },
  {
    icon: '☷',
    title: 'Integrated Medical Notes',
    text: 'Record every observation and care event so important context stays in one place.',
  },
]

const steps = [
  { title: 'Define Routines', image: howRoutines },
  { title: 'Execute Procedures', image: howProcedures },
  { title: 'Record Vitals', image: howVitals },
  { title: 'Review Notes', image: howNotes },
]

const learnGroups = [
  {
    title: 'Physical Rehab',
    lessons: [
      ['figure.dance', 'Assisted Shoulder Forward Flexion (Passive ROM)'],
      ['figure.dance', 'Shoulder Outer Rotation (Passive ROM)'],
      ['figure.dance', 'Elbow Extension & Forearm Turning (Passive ROM)'],
      ['hand.raised.fill', 'Wrist & Finger Extension Stretch (Passive ROM)'],
      ['hand.raised.fill', 'Hand & Finger Towel Grasp (Active-Assisted)'],
      ['figure.walk', 'Assisted Hip & Knee Flexion / “Classic Heel Slides” (Passive ROM)'],
      ['figure.walk', 'Hip Abduction / Outward Leg Slide (Passive ROM)'],
      ['figure.walk', 'Ankle Dorsiflexion / Calf Stretch (Passive ROM)'],
      ['figure.walk', 'Seated Ankle Taps (Active-Assisted)'],
    ],
  },
  {
    title: 'Swallowing & Oral Exercises',
    lessons: [
      ['mouth', 'Tongue In-and-Outs (Active / Active-Assisted)'],
      ['mouth', 'Tongue Side-to-Side Movements'],
      ['mouth', 'Tongue Up-and-Down Elevation'],
      ['face.smiling', 'Lip Purse-to-Smile Flexing'],
      ['hand.point.up', 'Lip Resistance Training (Caregiver Assisted)'],
      ['face.smiling', 'Cheek Puffs (Intraoral Pressure Drill)'],
      ['waveform.path.ecg', 'Effortless Swallow / Masako Maneuver'],
      ['waveform.path.ecg', 'The Mendelsohn Maneuver (The Adam’s Apple Hold)'],
      ['arrow.down.to.line', 'The Chin-Tuck Setup (Postural Drill)'],
    ],
  },
  {
    title: 'Daily Care Essentials',
    lessons: [
      ['heart.text.square.fill', 'Pre-Medication Vitals Check'],
      ['pills.fill', 'Scheduled Medication Administration'],
      ['shower.fill', 'Safe Assisted Showering'],
      ['comb.fill', 'Assisted Sink Grooming (Oral & Shaving)'],
      ['calendar', 'Structured Orientation & Reality Check'],
      ['moon.stars.fill', 'Evening Wind-Down & Sundowning Prevention'],
    ],
  },
  {
    title: 'Mobility Support & Safe Transfers',
    lessons: [
      ['arrow.left.and.right.righttriangle.left.righttriangle.right.fill', 'Bed-to-Chair Stand Pivot Transfer'],
      ['arrow.2.squarepath', 'Log Roll Bed Turn'],
      ['arrow.up.square.fill', 'Boosting a Patient Up in Bed (Two-Person Draw-Sheet Method)'],
      ['alignment.vertical.center.fill', 'Assisted Sitting Edge-of-Bed Balance'],
    ],
  },
  {
    title: 'Skin Integrity & Pressure Management',
    lessons: [
      ['eye.fill', 'Sacrum & Heel Visual Pressure Check'],
      ['clock.fill', 'The 2-Hour Side-to-Side Position Rotation'],
      ['waveform', 'Heel Floating & Offloading Setup'],
      ['hand.raised.slash.fill', 'Skin Shear Prevention During Adjustments'],
    ],
  },
  {
    title: 'Nasogastric Tube (NGT) Management & Feeding',
    lessons: [
      ['checkmark.shield.fill', 'Pre-Feeding Tube Verification & Residual Check'],
      ['fork.knife.circle.fill', 'Gravity-Fed Bolus NGT Feeding'],
      ['lock.fill', 'Post-Feed Flush & Lock'],
    ],
  },
  {
    title: 'Advanced Tracheostomy Support & Airway Clearing',
    lessons: [
      ['wind', 'Tracheostomy Suctioning Protocol'],
      ['sparkles', 'Inner Cannula Cleaning & Inspections'],
      ['exclamationmark.shield.fill', 'Emergency Trach Tube Dislodgement Response'],
    ],
  },
]

const symbolLabels: Record<string, string> = {
  'figure.dance': '♿',
  'hand.raised.fill': '✋',
  'figure.walk': '🚶',
  mouth: '◡',
  'face.smiling': '☺',
  'hand.point.up': '☝',
  'waveform.path.ecg': '⌁',
  'arrow.down.to.line': '↓',
  'heart.text.square.fill': '▣',
  'pills.fill': '●',
  'shower.fill': '♨',
  'comb.fill': '▰',
  calendar: '◷',
  'moon.stars.fill': '☾',
  'arrow.left.and.right.righttriangle.left.righttriangle.right.fill': '⇄',
  'arrow.2.squarepath': '↻',
  'arrow.up.square.fill': '↑',
  'alignment.vertical.center.fill': '↕',
  'eye.fill': '◉',
  'clock.fill': '◴',
  waveform: '⌁',
  'hand.raised.slash.fill': '✋',
  'checkmark.shield.fill': '✓',
  'fork.knife.circle.fill': '◌',
  'lock.fill': '●',
  wind: '≋',
  sparkles: '✦',
  'exclamationmark.shield.fill': '!',
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Cara home">
      <img className="logoMark" src={caraIcon} alt="" />
      <span>Cara</span>
    </a>
  )
}

function PhoneMockup() {
  return (
    <div className="deviceScene" aria-label="Cara app preview">
      <img className="floatingImage leftCard" src={heroTaskCard} alt="Care tasks preview" />
      <img className="floatingImage rightCard" src={heroRoutineCard} alt="Morning routine preview" />
      <div className="phone">
        <img src={homeScreen} alt="Cara mobile app home screen" />
      </div>
    </div>
  )
}

function ComingSoonBadge() {
  return (
    <div className="comingSoonBadge" aria-label="Cara app coming soon">
      Coming Soon
    </div>
  )
}

function App() {
  return (
    <main id="top" className="pageShell">
      <div className="orb orbOne" />
      <div className="orb orbTwo" />
      <header className="navWrap">
        <Logo />
        <nav aria-label="Primary navigation">
          <a href="#how-it-works">How it Works</a>
          <a href="#features">Features</a>
          <a href="#learn">Learn</a>
          <a href="#download">Download</a>
        </nav>

      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <h1 id="hero-title">Caregiving,<br />Simplified.</h1>
          <p>Empower your home care with Cara.</p>
          <a className="primaryButton" href="#download">Coming Soon</a>
        </div>
        <PhoneMockup />
      </section>

      <section id="features" className="features" aria-label="Cara features">
        {features.map((feature) => (
          <article className="featureCard" key={feature.title}>
            <span className="featureIcon">{feature.icon}</span>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section id="how-it-works" className="process" aria-labelledby="process-title">
        <h2 id="process-title">How It Works</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="stepNumber">{index + 1}</span>
              <div className="stepScreen">
                <img src={step.image} alt={`${step.title} app screen`} />
              </div>
              <h3>{step.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="learn" className="learn" aria-labelledby="learn-title">
        <h2 id="learn-title">The Cara Learn Center</h2>
        <label className="searchBox">
          <span>⌕</span>
          <input type="search" placeholder="Search tasks..." />
        </label>
        <div className="learnGrid">
          {learnGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div className="lessonList">
                {group.lessons.map(([symbol, title]) => (
                  <button className="lesson" key={title} type="button">
                    <span className="lessonIcon" title={symbol} aria-label={symbol}>{symbolLabels[symbol]}</span>
                    <span>{title}</span>
                    <span aria-hidden="true">⌄</span>
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="download" className="download" aria-labelledby="download-title">
        <h2 id="download-title">Download our App</h2>
        <div className="storeRow">
          <ComingSoonBadge />
        </div>
      </section>

      <footer>
        <span>© 2026 — Cara, Inc.</span>
      </footer>
    </main>
  )
}

export default App
