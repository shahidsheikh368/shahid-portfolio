import { useEffect, useMemo, useState } from "react";
import { projects, skills, socials } from "./data.js";

const typingText = "MERN Stack Developer | Passionate about building scalable applications";

const heroImages = [
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1800&auto=format&fit=crop"
];

const iconMap = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.75 2.63 4.75 6.05v6.26h-4v-5.55c0-1.32-.02-3.02-1.85-3.02-1.85 0-2.13 1.45-2.13 2.92v5.65h-4v-12Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.5 12 4.5 12 4.5s-5.8 0-7.5.6a3 3 0 0 0-2.1 2.1C1.8 8.9 1.8 12 1.8 12s0 3.1.6 4.8a3 3 0 0 0 2.1 2.1c1.7.6 7.5.6 7.5.6s5.8 0 7.5-.6a3 3 0 0 0 2.1-2.1c.6-1.7.6-4.8.6-4.8s0-3.1-.6-4.8ZM10.4 15.3V8.7L15.8 12l-5.4 3.3Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm4.8-3.7a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.8c.56.1.77-.24.77-.55v-2.1c-3.12.68-3.78-1.35-3.78-1.35-.5-1.3-1.24-1.64-1.24-1.64-1.02-.7.07-.7.07-.7 1.12.08 1.7 1.16 1.7 1.16 1 .1.76-.76 1.9-.98.1-.74.4-1.24.73-1.54-2.5-.27-5.12-1.25-5.12-5.56 0-1.23.45-2.24 1.18-3.03-.12-.3-.5-1.5.1-3.14 0 0 .98-.3 3.2 1.16a10.9 10.9 0 0 1 5.84 0c2.22-1.46 3.2-1.16 3.2-1.16.6 1.64.22 2.84.1 3.14.73.8 1.18 1.8 1.18 3.03 0 4.32-2.62 5.28-5.12 5.55.4.35.78 1.02.78 2.07v3.06c0 .3.2.66.78.55A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  )
};

const themeOptions = {
  light: "light",
  dark: "dark"
};

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === themeOptions.dark;
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
      type="button"
    >
      <span className="theme-toggle__icon">{isDark ? "☀️" : "🌙"}</span>
      <span className="theme-toggle__label">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
};

const Navbar = ({ theme, onToggle }) => (
  <header className="navbar" id="top">
    <div className="navbar__logo">portfolio</div>
    <nav className="navbar__links">
      {[
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact"
      ].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`}
          className="navbar__link">
          {item}
        </a>
      ))}
    </nav>
    <ThemeToggle theme={theme} onToggle={onToggle} />
  </header>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel">
        <button className="modal__close" onClick={onClose} type="button">
          Close
        </button>
        <img src={project.image} alt={project.title} loading="lazy" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="badges">
          {project.tech.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="button-row">
          <a className="btn btn--primary" href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a className="btn btn--ghost" href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState(themeOptions.dark);
  const [typedText, setTypedText] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === themeOptions.light || stored === themeOptions.dark) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(typingText.slice(0, index + 1));
      index += 1;
      if (index === typingText.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar?.classList.add("navbar--scrolled");
      } else {
        navbar?.classList.remove("navbar--scrolled");
      }
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () =>
    setTheme((prev) =>
      prev === themeOptions.dark ? themeOptions.light : themeOptions.dark
    );

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const aboutStats = useMemo(
    () => [
      { label: "Projects ", value: "28+" },
      { label: "Years Learning", value: "1+" },
      { label: "Tech Stack", value: "MERN" }
    ],
    []
  );

  return (
    <div className="app">
      <Navbar theme={theme} onToggle={toggleTheme} />

      <section className="hero" id="home">
        <div className="hero__bg">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`hero__bg-slide ${index === currentSlide ? "is-active" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
        <div className="hero__overlay" />
        <div className="hero__content" data-reveal>
          <p className="hero__eyebrow">Web Developer Portfolio</p>
          <h1>I am Shahid Sheikh</h1>
          <p className="hero__subtitle">
            <span className="typing">{typedText}</span>
            <span className="typing__cursor">|</span>
          </p>
          <div className="button-row">
            <a className="btn btn--primary" href="#projects">View Projects</a>
            <a className="btn btn--muted" href="#contact">Contact Me</a>
          </div>
          <div className="socials">
            {socials.map((social) => (
              <a
                key={social.label}
                className="socials__link"
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__glow" />
      </section>

      <section className="section" id="about">
        <div className="section__header" data-reveal>
          <p className="section__eyebrow">About</p>
          <h2>Creating reliable, scalable web experiences</h2>
          <p>I am Shahid Sheikh, a junior web developer learning the MERN stack.</p>
          <p>Practicing daily and building small projects to grow fast.</p>
          <p>Improving React and backend skills with consistent hands-on work.</p>
          <p>Passionate about growth and looking for an internship or junior role.</p>
        </div>
        <div className="about" data-reveal>
          <div className="about__card glass-card" data-reveal>
            <div className="about__image-wrap">
              <img
                src="/profile.jpg"
                alt="Shahid Sheikh"
                className="about__image"
              />
            </div>
            <div className="about__content">
              <h3>What I Do</h3>
              <p>
                I am learning the MERN stack and practicing daily through
                focused, real-world exercises.
              </p>
              <ul className="checklist">
                <li>Building small projects to gain confidence</li>
                <li>Improving React and backend skills step by step</li>
                <li>Passionate about growth and consistency</li>
              </ul>
            </div>
          </div>
          <div className="stats">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="stat">
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section__header" data-reveal>
          <p className="section__eyebrow">Skills</p>
          <h2>Modern toolkit with full-stack awareness</h2>
          <p>Progress bars reflect comfort level across technologies.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="glass-card" data-reveal>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <div key={item.name} className="skill">
                    <div className="skill__row">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="skill__bar">
                      <span style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section__header" data-reveal>
          <p className="section__eyebrow">Projects</p>
          <h2>Selected work with premium craft</h2>
          <p>Click any project for the full story.</p>
        </div>
        <div className="projects-grid">
          {projects.map((item) => (
            <article
              key={item.id}
              className="project-card"
              data-reveal
              onClick={() => setProject(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="project-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="badges">
                  {item.tech.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  <span>View Details</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section__header" data-reveal>
          <p className="section__eyebrow">Contact</p>
          <h2>Let us connect</h2>
          <p>Reach out through my social profiles.</p>
        </div>
        <div className="contact-grid" data-reveal>
          <div className="glass-card contact-card">
            <h3>Social Media</h3>
            <p>Follow me and connect on these platforms.</p>
            <div className="contact-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  className="socials__link"
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
            <a className="btn btn--ghost" href="/home">Back to top</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Shahid Sheikh. All rights reserved.</p>
      </footer>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        onClick={handleBackToTop}
        aria-label="Back to top"
      >
        ↑
      </button>

      <ProjectModal project={project} onClose={() => setProject(null)} />
    </div>
  );
}
