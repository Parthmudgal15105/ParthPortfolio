import { useRef, useState } from 'react';
import { projects, projectCategories } from '../constants/projects';
import './Works.css';

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Works = () => {
  const [category, setCategory] = useState('All projects');
  const [preview, setPreview] = useState(null);
  const dialogRef = useRef(null);
  const filtered = projects.filter((project) => category === 'All projects' || project.category === category);

  const openPreview = (project) => {
    setPreview(project);
    dialogRef.current.showModal();
  };

  return (
    <section className="work-gallery" id="projects" aria-labelledby="projects-heading">
      <div className="work-inner">
        <div className="work-heading">
          <div>
            <p className="work-eyebrow"><span /> THE PROJECT COLLECTION</p>
            <h2 id="projects-heading">Ideas, made <em>real.</em></h2>
          </div>
          <p className="work-intro">AI systems, Mac apps, and little tools for everyday life.<br />Built out of curiosity. Made to be used.</p>
        </div>

        <div className="work-toolbar">
          <div className="work-filters" role="group" aria-label="Filter projects">
            {projectCategories.map((item) => (
              <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
          <p className="work-count" aria-live="polite" aria-atomic="true">{filtered.length} projects</p>
        </div>

        <div className="work-grid">
          {filtered.map((project) => (
            <article key={project.name} className={`work-project ${(project.featured || project.wide) && category === 'All projects' ? 'work-featured' : ''}`}>
              <div className={`work-visual work-tone-${project.tone}`}>
                {project.image ? (
                  <button type="button" className="work-preview-button" onClick={() => openPreview(project)} aria-label={`Enlarge ${project.name} screenshot`}>
                    <img src={project.image} alt={project.imageAlt} width="1440" height="1000" loading="lazy" decoding="async" />
                    <span className="work-enlarge">View screenshot <Arrow /></span>
                  </button>
                ) : project.visual === 'voice' ? (
                  <div className="work-voice-art" role="img" aria-label="Local Voice app icon with a speech waveform and English, Hindi, and Hinglish language labels">
                    <img src="/projects/local-voice-icon.png" alt="" width="96" height="96" loading="lazy" />
                    <div className="work-wave" aria-hidden="true">{Array.from({ length: 29 }, (_, i) => <i key={i} style={{ height: `${14 + Math.abs(Math.sin(i * 1.8) * Math.cos(i * 0.24)) * 58}px` }} />)}</div>
                    <strong>Your voice. Your Mac.</strong>
                    <span>English <b>·</b> Hindi <b>·</b> Hinglish</span>
                    <small>ON-DEVICE SPEECH RECOGNITION</small>
                  </div>
                ) : (
                  <div className="work-agent-art" role="img" aria-label="HomeServerAI architecture: an incident passes through runbook retrieval and diagnostic tools, with approval gates before actions and an audit trail">
                    <div className="work-agent-top"><span className="work-agent-dot" /> HomeServerAI <span>ARCHITECTURE</span></div>
                    <div className="work-agent-node">Server incident</div>
                    <div className="work-agent-line" />
                    <div className="work-agent-pair"><span>Runbook retrieval</span><span>Diagnostic tools</span></div>
                    <div className="work-agent-line" />
                    <div className="work-agent-node work-agent-accent">Reason → validate → act</div>
                    <div className="work-agent-bottom"><span>Approval gates</span><span>Execution budgets</span><span>Audit trail</span></div>
                  </div>
                )}
              </div>
              <div className="work-project-body">
                <div className="work-project-meta"><span>{project.type}</span>{project.featured && <span className="work-picked">Featured</span>}</div>
                <h3>{project.name}</h3>
                <p className="work-description">{project.description}</p>
                <ul className="work-stack" aria-label={`${project.name} technologies`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <div className="work-links">
                  {project.live && <a className="work-live-link" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.liveLabel || 'Open live app'}: ${project.name}`}>{project.liveLabel || 'Open live app'} <Arrow /></a>}
                  {project.source ? <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source on GitHub`}>Source code <Arrow /></a> : <span className="work-personal">Personal project</span>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-footer"><span>Always making something.</span><a href="https://github.com/Parthmudgal15105" target="_blank" rel="noopener noreferrer">More on GitHub <Arrow /></a></div>
      </div>
      <dialog className="work-dialog" ref={dialogRef} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close(); }} aria-labelledby="project-preview-title">
        <div className="work-dialog-bar"><h3 id="project-preview-title">{preview?.name}</h3><button type="button" onClick={() => dialogRef.current.close()} autoFocus>Close <span aria-hidden="true">×</span></button></div>
        {preview && <img src={preview.image} alt={preview.imageAlt} />}
      </dialog>
    </section>
  );
};

export default Works;
