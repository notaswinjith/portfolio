import { useState } from 'react'
import heroPortrait from './assets/hero-portrait.jpg'
import cvPdf from './assets/Aswinjith_cv.pdf'
import cssLogo from './assets/image.png'
import viyanisaImg from './assets/project-viyanisa.jpg'
import memorixImg from './assets/project-memorix.jpg'
import brandbuzzImg from './assets/project-brandbuzz.jpg'
import './style.css'

const CURRENT_YEAR = new Date().getFullYear()

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [copiedField, setCopiedField] = useState(null)
  const [toast, setToast] = useState({ show: false, message: '' })

  const copyToClipboard = (text, field) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(field)
        setToast({ show: true, message: `Copied to clipboard: ${text}` })
        setTimeout(() => {
          setCopiedField(null)
        }, 2000)
        setTimeout(() => {
          setToast({ show: false, message: '' })
        }, 3000)
      }).catch(() => {
        // Fallback
        fallbackCopyTextToClipboard(text, field)
      })
    } else {
      fallbackCopyTextToClipboard(text, field)
    }
  }

  const fallbackCopyTextToClipboard = (text, field) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      setCopiedField(field)
      setToast({ show: true, message: `Copied to clipboard: ${text}` })
      setTimeout(() => {
        setCopiedField(null)
      }, 2000)
      setTimeout(() => {
        setToast({ show: false, message: '' })
      }, 3000)
    } catch {
      setToast({ show: true, message: `Failed to copy: ${text}` })
    }
    document.body.removeChild(textArea)
  }

  return (
    <>
      {/* Header */}
      <header className="site-header" id="site-header">
        <div className="container nav-container">
          <a href="#hero" className="brand-logo" id="brand-logo" aria-label="Aswinjith VP Home">
            <span>ASWINJITH VP</span>
            <span className="brand-role-tag">React Developer</span>
          </a>

          <div className="nav-right-actions">
            <a
              href={cvPdf}
              download="Aswinjith_VP_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header-cv-btn"
              id="header-cv-btn"
            >
              Download CV
            </a>
            <button
              className="menu-toggle-btn"
              id="menu-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((prev) => !prev)}
            >
              <span>MENU</span>
              <div className="menu-icon-bars" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      <div
        className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`}
        id="drawer-backdrop"
        aria-hidden="true"
        onClick={() => setDrawerOpen(false)}
      ></div>
      <aside
        className={`nav-drawer ${drawerOpen ? 'open' : ''}`}
        id="nav-drawer"
        aria-label="Main Navigation Menu"
      >
        <div>
          <div className="drawer-header">
            <span className="drawer-title">Navigation</span>
            <button
              className="drawer-close-btn"
              id="drawer-close-btn"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              &times;
            </button>
          </div>

          <ul className="drawer-links">
            <li>
              <a href="#hero" className="drawer-nav-link" onClick={() => setDrawerOpen(false)}>
                <span className="nav-idx">01</span> Intro
              </a>
            </li>
            <li>
              <a href="#tech-stack" className="drawer-nav-link" onClick={() => setDrawerOpen(false)}>
                <span className="nav-idx">03</span> Tech Stack
              </a>
            </li>
            <li>
              <a href="#about" className="drawer-nav-link" onClick={() => setDrawerOpen(false)}>
                <span className="nav-idx">04</span> About Aswinjith
              </a>
            </li>
            <li>
              <a href="#portfolio" className="drawer-nav-link" onClick={() => setDrawerOpen(false)}>
                <span className="nav-idx">05</span> Selected Works
              </a>
            </li>
            <li>
              <a href="#experience" className="drawer-nav-link" onClick={() => setDrawerOpen(false)}>
                <span className="nav-idx">06</span> Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="drawer-nav-link" onClick={() => setDrawerOpen(false)}>
                <span className="nav-idx">07</span> Contact
              </a>
            </li>
          </ul>

          <div className="drawer-cv-container">
            <a
              href={cvPdf}
              download="Aswinjith_VP_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-cv-btn"
              id="drawer-cv-btn"
            >
              <span>Download CV</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="drawer-footer">
          <div className="drawer-footer-label">Direct Communication</div>
          <div className="drawer-contact-info">
            <div>aswinjith136@gmail.com</div>
            <div>+91 8590508684</div>
            <div>Calicut, Kerala, India</div>
          </div>
        </div>
      </aside>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="hero">
          <div className="container hero-grid">
            <div className="hero-left">
              <p className="hero-greeting">Hey. I'm Aswinjith,</p>
              <h1 className="hero-title">
                <span className="title-line-1">A FRONTEND</span>
                <span className="title-line-serif">
                  <span className="title-ampersand">&amp;</span> React
                </span>
                <span className="title-line-2">DEVELOPER</span>
              </h1>
              <p className="hero-description">
                Transforming ideas into modern, responsive, and engaging digital applications using React.js, clean
                component architecture, and intuitive user experiences.
              </p>
              <div className="hero-cta-group">
                <a href="#contact" className="pill-btn pill-btn-primary" id="hero-contact-btn">
                  <span>CONTACT ME</span>
                  <span className="btn-arrow-circle" aria-hidden="true">→</span>
                </a>
                <a
                  href={cvPdf}
                  download="Aswinjith_VP_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn-secondary"
                  id="hero-cv-btn"
                >
                  <span>RESUME</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-center">
              <div className="portrait-arch-wrapper">
                <div className="portrait-arch-glow" aria-hidden="true"></div>
                <div className="portrait-arch-frame">
                  <img
                    src={heroPortrait}
                    alt="Aswinjith VP portrait"
                    className="portrait-img"
                    id="hero-portrait-img"
                  />
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Featured Projects &amp; Live Apps</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">Calicut, IN</div>
                <div className="stat-label">Available for Remote &amp; Onsite</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Strip */}
        <div className="container">
          <div className="feature-strip-grid">
            <div className="feature-col">
              <h2 className="feature-title">RESPONSIVE WEB APPS</h2>
              <p className="feature-desc">
                Pixel-perfect, mobile-first web designs tailored for all screen sizes using semantic HTML5 and modern CSS3.
              </p>
            </div>

            <div className="feature-col">
              <h2 className="feature-title">REACT ARCHITECTURE</h2>
              <p className="feature-desc">
                Component-driven development, custom React Hooks, clean state management, and modern frontend practices.
              </p>
            </div>

            <div className="feature-col">
              <h2 className="feature-title">INTERACTIVE EXPERIENCES</h2>
              <p className="feature-desc">
                Engaging audio-visual feedback, timers, state transitions, and responsive game dynamics like Memorix.
              </p>
            </div>

            <div className="feature-col">
              <h2 className="feature-title">API &amp; VERSION CONTROL</h2>
              <p className="feature-desc">
                REST API integration, Git &amp; GitHub collaborative workflows, performance tuning, and fast deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="tech-stack-section" id="tech-stack">
          <div className="container">
            <div className="tech-stack-header">
              <h2 className="section-label">TECH STACK</h2>
            </div>

            <div className="tech-badges-grid">
              {/* React.js */}
              <div className="tech-badge-card" id="badge-react">
                <div className="tech-badge-icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="-11.5 -10.23174 23 20.46348"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </svg>
                </div>
                <div className="tech-badge-name">React.js</div>
              </div>

              {/* JavaScript */}
              <div className="tech-badge-card" id="badge-js">
                <div className="tech-badge-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
                    <path
                      d="M11.5 16.5c-.4.7-1.1 1.1-1.9 1.1-1.3 0-2-.8-2-2.2v-.2h1.4v.2c0 .7.3 1.1.8 1.1.5 0 .8-.3.8-.9V10h1.4v5.2c0 .6-.2 1-.5 1.3zm3.8 0c-.5.7-1.2 1.1-2.1 1.1-1.1 0-1.9-.7-1.9-1.9v-.2h1.4v.1c0 .6.4.9.9.9.5 0 .8-.3.8-.7 0-.5-.3-.7-1.1-1-1.1-.4-2-.9-2-2 0-1.1.9-1.9 2-1.9 1 0 1.7.5 1.9 1.4h-1.3c-.1-.4-.4-.6-.8-.6-.5 0-.7.3-.7.6 0 .4.3.6 1.1.9 1.2.5 2 .9 2 2.1 0 .6-.2 1.2-.5 1.6z"
                      fill="#DDD9CF"
                    />
                  </svg>
                </div>
                <div className="tech-badge-name">JavaScript (ES6+)</div>
              </div>

              {/* HTML5 */}
              <div className="tech-badge-card" id="badge-html">
                <div className="tech-badge-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 2l1.6 18 6.4 1.8 6.4-1.8L20 2H4zm13.4 4.5H7.3l.6 6.5h6.6l-.2 2.2-1.4.4-1.4-.4-.1-1.3H9.2l.2 2.7 3.5 1 3.5-1 .6-6.3H8.5l-.2-2.3h8.9l.2-2.5z"
                    />
                  </svg>
                </div>
                <div className="tech-badge-name">HTML5 Semantic</div>
              </div>

              {/* CSS3 */}
              <div className="tech-badge-card" id="badge-css">
                <div className="tech-badge-icon" aria-hidden="true">
                  <img
                    src={cssLogo}
                    alt="CSS3"
                    className="tech-badge-logo-img"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'block'
                      }
                    }}
                  />
                  <svg
                    style={{ display: 'none' }}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 2l1.6 18 6.4 1.8 6.4-1.8L20 2H4zm2.7 4.5h10.6l-.2 2.3H9.4l.2 2.2h7.3l-.6 6.5-4.3 1.2-4.3-1.2-.3-3.2h2.2l.1 1.7 2.3.6 2.3-.6.3-3.1H7.1L6.7 6.5z"
                    />
                  </svg>
                </div>
                <div className="tech-badge-name">CSS3 &amp; Layouts</div>
              </div>

              {/* Git & GitHub */}
              <div className="tech-badge-card" id="badge-git">
                <div className="tech-badge-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </div>
                <div className="tech-badge-name">Git &amp; GitHub</div>
              </div>

              {/* Python */}
              <div className="tech-badge-card" id="badge-python">
                <div className="tech-badge-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.93 2C6.91 2 7.22 4.13 7.22 4.13l.01 2.2h4.84v.69H5.35S2 6.65 2 11.12c0 4.47 2.93 4.31 2.93 4.31h1.75v-2.39s-.09-2.86 2.81-2.86h4.83v-.72s.27-2.6-2.58-2.6H7.31V6.15s-.35-2.48 3.83-2.48c4.17 0 3.62 2.18 3.62 2.18v1.22H8.45v1.39h6.1s2.86-.12 2.86-4.39C17.41 2 12.83 2 11.93 2zm-2.34 1.36a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm2.48 18.64c5.02 0 4.71-2.13 4.71-2.13l-.01-2.2H11.93v-.69h6.72s3.35.37 3.35-4.1c0-4.47-2.93-4.31-2.93-4.31h-1.75v2.39s.09 2.86-2.81 2.86h-4.83v.72s-.27 2.6 2.58 2.6h4.43v.76s.35 2.48-3.83 2.48c-4.17 0-3.62-2.18-3.62-2.18v-1.22h6.31v-1.39H12.2s-2.86.12-2.86 4.39C9.34 22 13.92 22 14.82 22zm2.34-1.36a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
                  </svg>
                </div>
                <div className="tech-badge-name">Python Basics</div>
              </div>

              {/* REST API */}
              <div className="tech-badge-card" id="badge-api">
                <div className="tech-badge-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <div className="tech-badge-name">REST API Integration</div>
              </div>

              {/* Responsive Design */}
              <div className="tech-badge-card" id="badge-responsive">
                <div className="tech-badge-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="tech-badge-name">Responsive Design</div>
              </div>
            </div>
          </div>
        </section>

        {/* Statement / About Section */}
        <section className="statement-section" id="about">
          <div className="container statement-grid">
            <div className="statement-title-col">
              <h2 className="statement-heading">
                CRAFTING DYNAMIC
                <br />
                INTERFACES &amp; INTUITIVE
                <br />
                WEB EXPERIENCES
              </h2>
            </div>

            <div className="statement-text-col">
              <p className="statement-lead">
                Hey, I'm Aswinjith, a React developer and frontend engineer passionate about building visually compelling,
                responsive, and user-friendly digital experiences.
              </p>

              <p className="statement-paragraph">
                With hands-on experience building web applications using React.js, JavaScript, HTML5, and CSS3, I focus on
                bridging aesthetic elegance with technical precision. Skilled in reusable component architecture, React
                Hooks, client state management, and API integration, I craft websites that captivate users and perform
                smoothly across all viewports.
              </p>

              <p className="statement-paragraph">
                Whether it's developing an interactive memory challenge game with dark-room mechanics (
                <a href="#project-memorix" style={{ textDecoration: 'underline' }}>
                  Memorix
                </a>
                ), architecting a modern saree startup platform for real clients (
                <a href="#project-viyanisa" style={{ textDecoration: 'underline' }}>
                  Viyanisa
                </a>
                ), or delivering high-converting agency experiences (
                <a href="#project-brandbuzz" style={{ textDecoration: 'underline' }}>
                  BrandBuzz
                </a>
                ), I blend strategy, clean code, and creativity into every project.
              </p>

              <div className="statement-highlight-box">
                <p>
                  <strong>Current Role:</strong> React.js Intern at Acadeno Research &amp; Innovation Centre, Calicut.
                  Actively learning, optimizing frontend workflows, and open to software engineering opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Section */}
        <section className="portfolio-section" id="portfolio">
          <div className="container">
            <div className="portfolio-header">
              <h2 className="portfolio-heading">PORTFOLIO</h2>
              <p className="portfolio-subheading">
                Explore my recent web development projects, client works, and interactive applications built with modern
                frontend tools.
              </p>
            </div>

            <div className="portfolio-projects-list">
              {/* Project 1: VIYANISA */}
              <article className="project-item" id="project-viyanisa" data-project="viyanisa">
                <div className="project-media-frame">
                  <span className="project-badge-overlay">Client Startup Project</span>
                  <img
                    src={viyanisaImg}
                    alt="Viyanisa Saree website preview"
                    className="project-img"
                  />
                  <div className="project-hover-overlay">
                    <div className="project-hover-actions">
                      <a
                        href="https://viyanisa.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-hover-btn primary"
                        title="View live website on Vercel"
                      >
                        <span>Live Demo</span>
                        <span className="hover-btn-arrow">↗</span>
                      </a>
                      <a
                        href="https://github.com/notaswinjith/viyanisa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-hover-btn secondary"
                        title="View GitHub repository"
                      >
                        <span>GitHub</span>
                        <span className="hover-btn-arrow">↗</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-meta-row">
                  <h3 className="project-title">VIYANISA</h3>
                </div>
              </article>

              {/* Project 2: MEMORIX */}
              <article className="project-item" id="project-memorix" data-project="memorix">
                <div className="project-media-frame">
                  <span className="project-badge-overlay">Interactive React Game</span>
                  <img
                    src={memorixImg}
                    alt="Memorix Game preview"
                    className="project-img"
                  />
                  <div className="project-hover-overlay">
                    <div className="project-hover-actions">
                      <a
                        href="https://game-miiv.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-hover-btn primary"
                        title="View live game on Vercel"
                      >
                        <span>Live Demo</span>
                        <span className="hover-btn-arrow">↗</span>
                      </a>
                      <a
                        href="https://github.com/notaswinjith/game.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-hover-btn secondary"
                        title="View GitHub repository"
                      >
                        <span>GitHub</span>
                        <span className="hover-btn-arrow">↗</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-meta-row">
                  <h3 className="project-title">MEMORIX</h3>
                </div>
              </article>

              {/* Project 3: BRANDBUZZ */}
              <article className="project-item" id="project-brandbuzz" data-project="brandbuzz">
                <div className="project-media-frame">
                  <span className="project-badge-overlay">Digital Agency</span>
                  <img
                    src={brandbuzzImg}
                    alt="BrandBuzz website preview"
                    className="project-img"
                  />
                  <div className="project-hover-overlay">
                    <div className="project-hover-actions">
                      <a
                        href="https://brand-buzz-one.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-hover-btn primary"
                        title="View live agency demo on Vercel"
                      >
                        <span>Live Demo</span>
                        <span className="hover-btn-arrow">↗</span>
                      </a>
                      <a
                        href="https://github.com/notaswinjith/BrandBuzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-hover-btn secondary"
                        title="View GitHub repository"
                      >
                        <span>GitHub</span>
                        <span className="hover-btn-arrow">↗</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-meta-row">
                  <h3 className="project-title">BRANDBUZZ</h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="experience-section" id="experience">
          <div className="container">
            <div className="experience-grid">
              <div className="exp-column">
                <h2 className="exp-column-title">WORK EXPERIENCE</h2>

                <div className="exp-card">
                  <div className="exp-header">
                    <div className="exp-role">React.js Intern</div>
                    <span className="exp-badge">Jul 2026 - Present</span>
                  </div>
                  <div className="exp-company">Acadeno Research &amp; Innovation Centre</div>
                  <div className="exp-period">Calicut, Kerala, India</div>

                  <ul className="exp-bullets">
                    <li>
                      Learning and developing responsive web applications using React.js, JavaScript, HTML5, and CSS3.
                    </li>
                    <li>Building reusable React components and implementing modern frontend development practices.</li>
                    <li>Working with React Hooks, component-based architecture, state management, and API integration.</li>
                    <li>Debugging and optimizing frontend code for high performance and seamless user experience.</li>
                    <li>Leveraging Git and GitHub for version control and collaborative team development.</li>
                  </ul>
                </div>
              </div>

              <div className="exp-column">
                <h2 className="exp-column-title">EDUCATION &amp; BACKGROUND</h2>

                <div className="exp-card">
                  <div className="exp-header">
                    <div className="exp-role">Diploma in Computer Hardware Engineering</div>
                    <span className="exp-badge">Aug 2023 - Mar 2026</span>
                  </div>
                  <div className="exp-company">JDT Islam Polytechnic College</div>
                  <div className="exp-period">Calicut, Kerala</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    Acquired solid foundations in computer systems, hardware architectures, network protocols,
                    troubleshooting, and programming logic.
                  </p>
                </div>

                <div className="exp-card">
                  <div className="exp-header">
                    <div className="exp-role">Higher Secondary Education</div>
                    <span className="exp-badge">Jun 2021 - Mar 2023</span>
                  </div>
                  <div className="exp-company">Kuttamboor Higher Secondary School</div>
                  <div className="exp-period">Kerala, India</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    Completed secondary education with focus on science and analytical thinking.
                  </p>
                </div>

                <div className="exp-card" style={{ padding: '1.5rem 2rem' }}>
                  <div className="exp-header">
                    <div className="exp-role" style={{ fontSize: '1.05rem' }}>Languages &amp; Location</div>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <strong>Languages:</strong> English, Malayalam
                    <br />
                    <strong>Location:</strong> Calicut, Kerala, India (Open to Relocation &amp; Remote)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-card-box">
              <div className="contact-info-col">
                <div>
                  <div className="contact-tag">Get In Touch</div>
                  <h2 className="contact-headline">
                    LET'S BUILD SOMETHING
                    <br />
                    <span className="contact-serif">Extraordinary</span>
                    <br />
                    TOGETHER.
                  </h2>
                  <p className="contact-desc">
                    Whether you have an upcoming project, are looking for a dedicated frontend developer intern/junior
                    engineer, or just want to connect, feel free to reach out.
                  </p>
                </div>
              </div>

              <div className="contact-direct-items">
                {/* Email Direct */}
                <div className="contact-direct-link" id="contact-email-link">
                  <div className="direct-left">
                    <div className="direct-icon" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <span className="direct-label">Email Address</span>
                      <a href="mailto:aswinjith136@gmail.com" className="direct-val">
                        aswinjith136@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="direct-copy-btn"
                    onClick={() => copyToClipboard('aswinjith136@gmail.com', 'email')}
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Phone Direct */}
                <div className="contact-direct-link" id="contact-phone-link">
                  <div className="direct-left">
                    <div className="direct-icon" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <span className="direct-label">Phone &amp; WhatsApp</span>
                      <a href="tel:+918590508684" className="direct-val">
                        +91 8590508684
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="direct-copy-btn"
                    onClick={() => copyToClipboard('+918590508684', 'phone')}
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aswin-jith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link"
                  id="contact-linkedin-link"
                >
                  <div className="direct-left">
                    <div className="direct-icon" aria-hidden="true">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div>
                      <span className="direct-label">LinkedIn Profile</span>
                      <span className="direct-val">linkedin.com/in/aswin-jith</span>
                    </div>
                  </div>
                  <span className="direct-val" style={{ fontSize: '1.2rem' }}>↗</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/notaswinjith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-direct-link"
                  id="contact-github-link"
                >
                  <div className="direct-left">
                    <div className="direct-icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="direct-label">GitHub Profile</span>
                      <span className="direct-val">github.com/notaswinjith</span>
                    </div>
                  </div>
                  <span className="direct-val" style={{ fontSize: '1.2rem' }}>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-copy">
            &copy; {CURRENT_YEAR} Aswinjith VP. Crafted with React.js &amp; Modern Aesthetics.
          </div>
          <div className="footer-social-links">
            <a
              href="https://github.com/notaswinjith"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aswin-jith/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              LinkedIn
            </a>
            <a href="#hero" className="back-to-top-btn" aria-label="Back to top">
              <span>Back to Top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Toast Notice */}
      <div
        className={`toast-notice ${toast.show ? 'show' : ''}`}
        id="toast-notice"
        role="alert"
        aria-live="polite"
      >
        <span className="toast-dot" aria-hidden="true"></span>
        <span id="toast-message">{toast.message}</span>
      </div>
    </>
  )
}

export default App
