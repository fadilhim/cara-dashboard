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
  { title: 'Define Routines', lines: ['Caregiving', 'Morning', 'Afternoon', 'Night'] },
  { title: 'Execute Procedures', lines: ['Emergency trach', 'Inner cannula', 'Suctioning'] },
  { title: 'Record Vitals', lines: ['HR', 'Temp', 'SpO₂', 'RR'] },
  { title: 'Review Notes', lines: ['Describe what happened'] },
]

const learnGroups = [
  {
    title: 'Advanced Tracheostomy Support & Airway Clearing',
    lessons: [
      ['🛡', 'Emergency Trach Tube Dislodgement Response'],
      ['✦', 'Inner Cannula Cleaning & Inspections'],
      ['♨', 'Tracheostomy Suctioning Protocol'],
    ],
  },
  {
    title: 'Daily Care Essentials',
    lessons: [
      ['🧼', 'Assisted Sink Grooming (Oral & Shaving)'],
      ['☾', 'Evening Wind-Down & Sundowning Prevention'],
      ['▣', 'Pre-Medication Vitals Check'],
    ],
  },
]

const testimonials = [
  ['Cara makes every shift feel organized instead of overwhelming.', 'Joh Funa'],
  ['There is finally one calm place for care steps, notes, and learning.', 'Eerea Buneras'],
  ['Medical notes stay visible, eligible, and easy to understand.', 'Sanny Daman'],
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Cara home">
      <span className="logoMark">⌂</span>
      <span>Cara</span>
    </a>
  )
}

function PhoneMockup() {
  return (
    <div className="deviceScene" aria-label="Cara app preview">
      <div className="floatingCard leftCard">
        <span className="miniIcon">!</span>
        <strong>Emergency Trach Tube</strong>
        <small>Response</small>
      </div>
      <div className="floatingCard rightCard">
        <span>Vitals</span>
        <div className="vitalGrid">
          <b>98</b><b>72</b><b>16</b>
        </div>
      </div>
      <div className="phone">
        <div className="phoneBar" />
        <div className="phoneHeader">
          <small>7:30</small>
          <strong>Caregiving</strong>
        </div>
        <section className="routineCard">
          <div>
            <small>Routines</small>
            <h3>Morning</h3>
          </div>
          <span>Now</span>
        </section>
        <div className="taskList">
          <div><span /> Medication reminder</div>
          <div><span /> Assisted sink grooming</div>
          <div><span /> Vitals check</div>
        </div>
        <div className="tabBar"><span /> <span /> <span /></div>
      </div>
    </div>
  )
}

function StoreBadge({ kind }: { kind: 'apple' | 'google' }) {
  return (
    <a href="#download" className="storeBadge" aria-label={`Download Cara on ${kind === 'apple' ? 'the App Store' : 'Google Play'}`}>
      <span>{kind === 'apple' ? '' : '▶'}</span>
      <small>{kind === 'apple' ? 'Download on the' : 'GET IT ON'}</small>
      <strong>{kind === 'apple' ? 'App Store' : 'Google Play'}</strong>
    </a>
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
        <a className="signUp" href="#download">Sign Up</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <h1 id="hero-title">Caregiving,<br />Simplified.</h1>
          <p>Empower your home care with Cara.</p>
          <a className="primaryButton" href="#download">Get Cara for iOS</a>
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
                {step.lines.map((line) => <p key={line}>{line}</p>)}
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
                {group.lessons.map(([icon, title]) => (
                  <button className="lesson" key={title} type="button">
                    <span className="lessonIcon">{icon}</span>
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
          <StoreBadge kind="apple" />
          <StoreBadge kind="google" />
        </div>
      </section>

      <section className="testimonials" aria-label="Caregiver testimonials">
        {testimonials.map(([quote, name]) => (
          <figure key={name}>
            <blockquote>“{quote}”</blockquote>
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </section>

      <footer>
        <span>© 2025 — Cara, Inc.</span>
        <nav aria-label="Footer navigation">
          <a href="#top">Home</a>
          <a href="#learn">Links</a>
          <a href="mailto:hello@cara.care">Contact</a>
        </nav>
      </footer>
    </main>
  )
}

export default App
