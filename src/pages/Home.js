import React from 'react';
import './Home.css';


const profile = {
  name: 'P.Rishith Reddy',
  phone: '+91 9059660124',
  personalEmail: 'rishith.p.reddy2005@gmail.com',
  collegeEmail: 'se23ucse200@mahindrauniversity.edu.in',
  github: 'https://github.com/P-Rishith-Reddy',
  linkedin: 'https://www.linkedin.com/in/rishith-reddy',
  avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHiEFXWPa6E0A/profile-displayphoto-scale_400_400/B4DZ2z.9W8JsAg-/0/1776841123719?e=1778716800&v=beta&t=rmTLQODvVGrg8RflnDcL_JIFm-qPxLHCi7_3AhRH28o',
  bio: `I'm a 3rd year Computer Science student at Mahindra University with interest
        in building web applications and exploring machine learning concepts. I enjoy working
        on projects that solve real problems.From simple utilities to small
        full-stack apps. Outside of coding I like watching Formula 1, gaming and
        am a big fan exploring open source technologies.`,
  skills: [
    'C', 'C#', 'Python', 'Java', 'JavaScript', 'React', 'Node.js', 'Express',
    'Unity', 'Blender', 'Git/GitHub', 'VS Code', 'Tizen Studio',
    'MySQL', 'Linux (Ubuntu, Linux Mint)'
  ],
  interests: [
    {
      icon: '🤖',
      title: 'Artificial Intelligence & ML',
      desc: 'Exploring machine learning models and how they can solve everyday problems.',
    },
    {
      icon: '🔐',
      title: 'Cryptography',
      desc: 'Studying cryptographic algorithms and secure communication protocols.',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      desc: 'Understanding vulnerabilities and secure coding practices.',
    },
    {
      icon: '📡',
      title: 'Internet of Things',
      desc: 'Connecting hardware devices with software to automate everyday tasks.',
    },
  ],
};


const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

function Home() {
  return (
    <div className="home">

      <section className="hero container">
        <div className="hero__text fade-in-up delay-1">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name gradient-text">{profile.name}</h1>
          <p className="hero__subtitle">
            Computer Science Student &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Learner
          </p>
          <div className="hero__cta">
            <button onClick={() => scrollTo('contact')} className="btn btn--primary">
              Get in Touch
            </button>
            <button onClick={() => scrollTo('about')} className="btn btn--ghost">
              About Me
            </button>
          </div>
        </div>

        <div className="hero__avatar fade-in-up delay-2">
          <div className="avatar-ring">
            <img
              src={profile.avatar}
              alt={`${profile.name} profile`}
              className="avatar-img"
            />
          </div>
          <div className="avatar-glow" />
        </div>
      </section>

      <section id="about" className="section container">
        <div className="section__header fade-in-up">
          <h2 className="section__title">About Me</h2>
          <div className="section__line" />
        </div>
        <div className="about__card fade-in-up delay-1">
          <p className="about__bio">{profile.bio}</p>
        </div>
      </section>

      <section id="interests" className="section container">
        <div className="section__header fade-in-up">
          <h2 className="section__title">Research Interests</h2>
          <div className="section__line" />
        </div>
        <div className="interests__grid">
          {profile.interests.map((item, i) => (
            <div
              key={item.title}
              className={`interest-card fade-in-up delay-${i + 1}`}
            >
              <span className="interest-card__icon">{item.icon}</span>
              <h3 className="interest-card__title">{item.title}</h3>
              <p className="interest-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section container">
        <div className="section__header fade-in-up">
          <h2 className="section__title">Tech Stack &amp; Skills</h2>
          <div className="section__line" />
        </div>
        <div className="skills__tags fade-in-up delay-1">
          {profile.skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="section container">
        <div className="section__header fade-in-up">
          <h2 className="section__title">Get in Touch</h2>
          <div className="section__line" />
        </div>
        <p className="contact__intro fade-in-up delay-1">
          Feel free to reach out — whether it's about a project, collaboration,
          or just to say hi!
        </p>
        <div className="contact__links fade-in-up delay-2">

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </span>
            <span className="contact-card__label">GitHub</span>
            <span className="contact-card__value">P-Rishith-Reddy</span>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-card__icon contact-card__icon--linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            <span className="contact-card__label">LinkedIn</span>
            <span className="contact-card__value">rishith-reddy</span>
          </a>

          {/* Personal Email */}
          <a
            href={`mailto:${profile.personalEmail}`}
            className="contact-card"
          >
            <span className="contact-card__icon contact-card__icon--mail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span className="contact-card__label">Personal Email</span>
            <span className="contact-card__value">{profile.personalEmail}</span>
          </a>

          {/* College Email */}
          <a
            href={`mailto:${profile.collegeEmail}`}
            className="contact-card"
          >
            <span className="contact-card__icon contact-card__icon--mail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span className="contact-card__label">College Email</span>
            <span className="contact-card__value">{profile.collegeEmail}</span>
          </a>

        </div>
      </section>
    </div>
  );
}

export default Home;
