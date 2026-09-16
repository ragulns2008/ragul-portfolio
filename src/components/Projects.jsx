```jsx
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Human Disease Detector",
      description:
        "An AI-based application that analyzes disease or wound images and provides the detected condition with a basic solution.",
      tech: "AI / ML • Python • Flask • React",
      visual: "AI",
    },
    {
      number: "02",
      title: "AI Ambulance Route Optimizer",
      description:
        "A smart route optimization system designed to help ambulances find efficient routes to hospitals.",
      tech: "Python • Flask • AI",
      visual: "ROUTE",
    },
    {
      number: "03",
      title: "Machi Music",
      description:
        "A modern music player application.",
      tech: "React • Vite • Android",
      visual: "MUSIC",
    },
    {
      number: "04",
      title: "Gym Fee Management System",
      description:
        "A system designed to manage gym memberships, fees and member records.",
      tech: "Python • Database",
      visual: "GYM",
    },
  ];

  const handleMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 6;
    const rotateX = (y / rect.height - 0.5) * -6;

    card.style.transform = `
      translateY(-8px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleLeave = (event) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <section className="projects" id="projects">
      <p className="section-number">03 — PROJECTS</p>

      <h2>
        Things I've
        <br />
        <span>built.</span>
      </h2>

      <div className="projects-list">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.number}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="project-top">
              <span>{project.number}</span>
              <span>↗</span>
            </div>

            <div className="project-visual">
              <span>{project.visual}</span>
              <div className="visual-line"></div>
              <div className="visual-dot"></div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>

              <div className="project-button">
                Coming Soon ↗
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
```
