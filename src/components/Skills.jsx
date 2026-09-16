function Skills() {
  const skills = [
    {
      number: "01",
      title: "Python",
      icon: "⌘",
      text: "Programming & automation",
    },
    {
      number: "02",
      title: "Machine Learning",
      icon: "◉",
      text: "AI & predictive models",
    },
    {
      number: "03",
      title: "HTML & CSS",
      icon: "</>",
      text: "Modern web design",
    },
    {
      number: "04",
      title: "Canva",
      icon: "✦",
      text: "Creative visual design",
    },
    {
      number: "05",
      title: "Picsart",
      icon: "✧",
      text: "Creative image editing",
    },
    {
      number: "06",
      title: "Image Editing",
      icon: "◈",
      text: "Digital image creation",
    },
  ];

  return (
    <section className="skills" id="skills">
      <p className="section-number">02 — SKILLS</p>

      <h2>
        Tools I use to
        <br />
        build <span>experiences.</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.number}>
            <div className="skill-card-top">
              <span>{skill.number}</span>
              <span>↗</span>
            </div>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <div className="skill-info">
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </div>

            <div className="skill-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;