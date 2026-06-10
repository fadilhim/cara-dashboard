import { useState } from 'react'
import caraIcon from './assets/cara-icon.png'
import heroRoutineCard from './assets/hero-routine-card.png'
import heroTaskCard from './assets/hero-task-card.png'
import homeScreen from './assets/home-screen.png'
import howRoutines from './assets/how-1-routines.png'
import howProcedures from './assets/how-2-procedures.png'
import howVitals from './assets/how-3-vitals.png'
import howNotes from './assets/how-4-notes.png'

type RoutineTask = {
  symbol: string
  title: string
  imageKey: string
}

const taskIllustrations = import.meta.glob('./assets/task-images/*.png', { eager: true, import: 'default' }) as Record<string, string>
const symbolImages = import.meta.glob('./assets/sf-symbols/*.png', { eager: true, import: 'default' }) as Record<string, string>

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

const learnGroups: Array<{ title: string; lessons: RoutineTask[] }> = [
  {
    "title": "Physical Rehab",
    "lessons": [
      {
        "symbol": "figure.dance",
        "title": "Assisted Shoulder Forward Flexion (Passive ROM)",
        "imageKey": "physical1"
      },
      {
        "symbol": "figure.dance",
        "title": "Shoulder Outer Rotation (Passive ROM)",
        "imageKey": "physical2"
      },
      {
        "symbol": "figure.dance",
        "title": "Elbow Extension & Forearm Turning (Passive ROM)",
        "imageKey": "physical3"
      },
      {
        "symbol": "hand.raised.fill",
        "title": "Wrist & Finger Extension Stretch (Passive ROM)",
        "imageKey": "physical4"
      },
      {
        "symbol": "hand.raised.fill",
        "title": "Hand & Finger Towel Grasp (Active-Assisted)",
        "imageKey": "physical5"
      },
      {
        "symbol": "figure.walk",
        "title": "Assisted Hip & Knee Flexion / \"Classic Heel Slides\" (Passive ROM)",
        "imageKey": "physical6"
      },
      {
        "symbol": "figure.walk",
        "title": "Hip Abduction / Outward Leg Slide (Passive ROM)",
        "imageKey": "physical7"
      },
      {
        "symbol": "figure.walk",
        "title": "Ankle Dorsiflexion / Calf Stretch (Passive ROM)",
        "imageKey": "physical8"
      },
      {
        "symbol": "figure.walk",
        "title": "Seated Ankle Taps (Active-Assisted)",
        "imageKey": "physical9"
      }
    ]
  },
  {
    "title": "Swallowing & Oral Exercises",
    "lessons": [
      {
        "symbol": "mouth",
        "title": "Tongue In-and-Outs (Active / Active-Assisted)",
        "imageKey": "oral1"
      },
      {
        "symbol": "mouth",
        "title": "Tongue Side-to-Side Movements",
        "imageKey": "oral2"
      },
      {
        "symbol": "mouth",
        "title": "Tongue Up-and-Down Elevation",
        "imageKey": "oral3"
      },
      {
        "symbol": "face.smiling",
        "title": "Lip Purse-to-Smile Flexing",
        "imageKey": "oral4"
      },
      {
        "symbol": "hand.point.up",
        "title": "Lip Resistance Training (Caregiver Assisted)",
        "imageKey": "oral5"
      },
      {
        "symbol": "face.smiling",
        "title": "Cheek Puffs (Intraoral Pressure Drill)",
        "imageKey": "oral6"
      },
      {
        "symbol": "waveform.path.ecg",
        "title": "Effortless Swallow / Masako Maneuver",
        "imageKey": "oral7"
      },
      {
        "symbol": "waveform.path.ecg",
        "title": "The Mendelsohn Maneuver (The Adam's Apple Hold)",
        "imageKey": "oral8"
      },
      {
        "symbol": "arrow.down.to.line",
        "title": "The Chin-Tuck Setup (Postural Drill)",
        "imageKey": "oral9"
      }
    ]
  },
  {
    "title": "Daily Care Essentials",
    "lessons": [
      {
        "symbol": "heart.text.square.fill",
        "title": "Pre-Medication Vitals Check",
        "imageKey": "daily1"
      },
      {
        "symbol": "pills.fill",
        "title": "Scheduled Medication Administration",
        "imageKey": "daily2"
      },
      {
        "symbol": "shower.fill",
        "title": "Safe Assisted Showering",
        "imageKey": "daily3"
      },
      {
        "symbol": "comb.fill",
        "title": "Assisted Sink Grooming (Oral & Shaving)",
        "imageKey": "daily4"
      },
      {
        "symbol": "calendar",
        "title": "Structured Orientation & Reality Check",
        "imageKey": "daily5"
      },
      {
        "symbol": "moon.stars.fill",
        "title": "Evening Wind-Down & Sundowning Prevention",
        "imageKey": "daily6"
      }
    ]
  },
  {
    "title": "Mobility Support & Safe Transfers",
    "lessons": [
      {
        "symbol": "arrow.left.and.right.righttriangle.left.righttriangle.right.fill",
        "title": "Bed-to-Chair Stand Pivot Transfer",
        "imageKey": "mobility1"
      },
      {
        "symbol": "arrow.2.squarepath",
        "title": "Log Roll Bed Turn",
        "imageKey": "mobility2"
      },
      {
        "symbol": "arrow.up.square.fill",
        "title": "Boosting a Patient Up in Bed (Two-Person Draw-Sheet Method)",
        "imageKey": "mobility3"
      },
      {
        "symbol": "alignment.vertical.center.fill",
        "title": "Assisted Sitting Edge-of-Bed Balance",
        "imageKey": "mobility4"
      }
    ]
  },
  {
    "title": "Skin Integrity & Pressure Management",
    "lessons": [
      {
        "symbol": "eye.fill",
        "title": "Sacrum & Heel Visual Pressure Check",
        "imageKey": "skin1"
      },
      {
        "symbol": "clock.fill",
        "title": "The 2-Hour Side-to-Side Position Rotation",
        "imageKey": "skin2"
      },
      {
        "symbol": "waveform",
        "title": "Heel Floating & Offloading Setup",
        "imageKey": "skin3"
      },
      {
        "symbol": "hand.raised.slash.fill",
        "title": "Skin Shear Prevention During Adjustments",
        "imageKey": "skin4"
      }
    ]
  },
  {
    "title": "Nasogastric Tube (NGT) Management & Feeding",
    "lessons": [
      {
        "symbol": "checkmark.shield.fill",
        "title": "Pre-Feeding Tube Verification & Residual Check",
        "imageKey": "ngt1"
      },
      {
        "symbol": "fork.knife.circle.fill",
        "title": "Gravity-Fed Bolus NGT Feeding",
        "imageKey": "ngt2"
      },
      {
        "symbol": "lock.fill",
        "title": "Post-Feed Flush & Lock",
        "imageKey": "ngt3"
      }
    ]
  },
  {
    "title": "Advanced Tracheostomy Support & Airway Clearing",
    "lessons": [
      {
        "symbol": "wind",
        "title": "Tracheostomy Suctioning Protocol",
        "imageKey": "trach1"
      },
      {
        "symbol": "sparkles",
        "title": "Inner Cannula Cleaning & Inspections",
        "imageKey": "trach2"
      },
      {
        "symbol": "exclamationmark.shield.fill",
        "title": "Emergency Trach Tube Dislodgement Response",
        "imageKey": "trach3"
      }
    ]
  }
]

function taskImageSource(task: RoutineTask) {
  return taskIllustrations[`./assets/task-images/${task.imageKey}.png`]
}

function symbolImageSource(symbol: string) {
  const fileName = symbol.replaceAll('.', '-')
  return symbolImages[`./assets/sf-symbols/${fileName}.png`]
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

function TaskIcon({ symbol }: { symbol: string }) {
  return (
    <span className="lessonIcon" title={symbol} aria-label={symbol}>
      <img src={symbolImageSource(symbol)} alt="" />
    </span>
  )
}

function TaskModal({ task, onClose }: { task: RoutineTask; onClose: () => void }) {
  return (
    <div className="taskModalBackdrop" role="presentation" onClick={onClose}>
      <section className="taskModal" role="dialog" aria-modal="true" aria-labelledby="task-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modalClose" type="button" onClick={onClose} aria-label="Close task illustration">×</button>
        <div className="modalHeader">
          <TaskIcon symbol={task.symbol} />
          <div>
            <small>{task.symbol}</small>
            <h3 id="task-modal-title">{task.title}</h3>
          </div>
        </div>
        <img className="taskIllustration" src={taskImageSource(task)} alt={`${task.title} illustration`} />
      </section>
    </div>
  )
}

function App() {
  const [selectedTask, setSelectedTask] = useState<RoutineTask | null>(null)

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
                {group.lessons.map((task) => (
                  <button className="lesson" key={task.title} type="button" onClick={() => setSelectedTask(task)}>
                    <TaskIcon symbol={task.symbol} />
                    <span>{task.title}</span>
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

      {selectedTask && <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </main>
  )
}

export default App
