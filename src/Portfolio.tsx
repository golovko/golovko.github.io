import { useEffect } from 'react';
import './portfolio.css';

const projects = [
  { title: 'InTheOfficeBot', description: 'A Telegram bot for coordinating office attendance, with scheduled polls and a lightweight .NET service architecture.', tags: ['C#', '.NET', 'Telegram', 'SQLite'], href: 'https://github.com/golovko/InTheOffice' },
  { title: 'NC News', description: 'A full-stack learning project exploring a news-style application and the foundations of web development.', tags: ['JavaScript', 'Web'], href: 'https://github.com/golovko/NC-News' },
  { title: 'BE-NC-News', description: 'A back-end project focused on API design and server-side application fundamentals.', tags: ['JavaScript', 'API'], href: 'https://github.com/golovko/BE-NC-News' },
  { title: 'Flash-card app', description: 'A front-end and back-end learning project built around a flash-card experience. Browse my repositories for the related code.', tags: ['Full stack', 'Learning'], href: 'https://github.com/golovko' },
  { title: 'Blazor & .NET experiments', description: 'Applications and experiments exploring modern .NET UI, reporting and useful internal tools.', tags: ['Blazor', 'C#'], href: 'https://github.com/golovko' },
  { title: 'AI-assisted development', description: 'Exploring local models, retrieval-augmented generation and ways AI can support code review and developer workflows.', tags: ['AI', 'RAG'], href: 'https://github.com/golovko' },
];

const skills = ['C# / .NET', 'ASP.NET', 'Blazor', 'EF Core', 'xUnit', 'Playwright', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Local LLMs', 'Agentic tools', 'RAG', 'System design'];

function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.portfolio .reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <header className="p-nav"><div className="p-wrap p-navin"><a className="p-brand" href="#home"><span>&lt;/&gt;</span> Sergii</a><nav className="p-links" aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#journey">Journey</a><a href="#learning">Learning</a><a href="#interests">Interests</a></nav></div></header>
      <main id="home">
        <section className="p-hero p-wrap"><div className="reveal"><div className="p-eyebrow">Software developer · Problem solver · Curious by default</div><h1>From managing projects<br />to <span className="p-grad">building software.</span></h1><p>I’m Sergii — a developer with a background in IT project management. I enjoy turning ideas into useful tools, improving processes, and learning how things work under the hood.</p><div className="p-tags">{['C# / .NET', 'Blazor', 'Testing', 'Docker', 'CI/CD', 'Automation', 'Local AI'].map((tag) => <span className="p-tag" key={tag}>{tag}</span>)}</div><div className="p-actions"><a className="p-btn" href="#projects">Explore projects ↘</a><a className="p-btn p-alt" href="https://github.com/golovko" target="_blank" rel="noreferrer">GitHub profile ↗</a></div></div></section>
        <section className="p-section" id="about"><div className="p-wrap p-two"><div className="reveal"><div className="p-eyebrow">A little about me</div><h2>The developer.<br />The builder. The explorer.</h2><p className="p-lead">My path into software combines a practical project-management mindset with hands-on engineering. I like solving real problems, making small tools that save time, and iterating until something feels right.</p></div><div className="p-stack"><article className="p-card reveal"><h3>Engineering mindset</h3><p>Readable code, automated tests, reliable delivery and a willingness to understand the problem before reaching for a solution.</p></article><article className="p-card reveal"><h3>Product thinking</h3><p>Experience working across people and technical teams helps me connect implementation details with the outcome that matters.</p></article></div></div></section>
        <section className="p-section" id="projects"><div className="p-wrap"><div className="p-eyebrow">Selected work</div><h2>Ideas turned into code.</h2><p className="p-lead">A mix of practical automation, learning projects and experiments. Explore the source to see implementation details.</p><div className="p-grid">{projects.map((project) => <a className="p-card p-project reveal" href={project.href} key={project.title} target="_blank" rel="noreferrer"><h3>{project.title} ↗</h3><p>{project.description}</p><div>{project.tags.map((tag) => <span className="p-tag" key={tag}>{tag}</span>)}</div></a>)}</div></div></section>
        <section className="p-section" id="journey"><div className="p-wrap p-two"><div className="reveal"><div className="p-eyebrow">Career & growth</div><h2>A path built on learning.</h2><p className="p-lead">Moving from coordinating software projects to building software hands-on has shaped how I approach engineering: understand the goal, communicate clearly, then deliver and improve.</p></div><div className="p-timeline reveal"><div className="p-event"><small>Earlier career</small><h3>IT project management</h3><p>Working with technical teams, coordinating delivery and translating goals into actionable work.</p></div><div className="p-event"><small>Learning chapter</small><h3>Full-stack development</h3><p>Building JavaScript applications and strengthening practical software-development foundations.</p></div><div className="p-event"><small>Current focus</small><h3>.NET software development</h3><p>Working with C#, ASP.NET, Blazor, testing and delivery tooling in a professional engineering environment.</p></div></div></div></section>
        <section className="p-section" id="learning"><div className="p-wrap p-two"><div className="reveal"><div className="p-eyebrow">Currently curious about</div><h2>Always levelling up.</h2><p className="p-lead">I learn by building, testing ideas and investigating how tools work in practice.</p></div><div className="p-skills reveal">{skills.map((skill) => <span className="p-tag" key={skill}>{skill}</span>)}</div></div></section>
        <section className="p-section" id="interests"><div className="p-wrap"><div className="p-eyebrow">Away from the keyboard</div><h2>More than just code.</h2><p className="p-lead">Curiosity doesn’t stop at software. I like steady progress, practical hobbies and time outdoors.</p><div className="p-interests reveal">{['Running', 'Swimming', 'Piano', 'Sourdough baking', 'Coffee', 'Chess puzzles', 'Family adventures'].map((interest) => <span key={interest}>{interest}</span>)}</div></div></section>
      </main>
      <footer className="p-footer"><div className="p-wrap p-footerin"><span>© {new Date().getFullYear()} Sergii Golovko</span><span>Build · Learn · Explore · Repeat</span><a href="https://github.com/golovko" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </div>
  );
}
export default Portfolio;
