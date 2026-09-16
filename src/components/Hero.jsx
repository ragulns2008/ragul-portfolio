import { useEffect, useRef } from "react";

function Hero() {
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!orbRef.current) return;

      const rect = orbRef.current.getBoundingClientRect();

      const mouseX = event.clientX - (rect.left + rect.width / 2);
      const mouseY = event.clientY - (rect.top + rect.height / 2);

      const moveX = Math.max(-25, Math.min(25, mouseX / 10));
      const moveY = Math.max(-25, Math.min(25, mouseY / 10));

      const rotateX = Math.max(-12, Math.min(12, -mouseY / 20));
      const rotateY = Math.max(-12, Math.min(12, mouseX / 20));

      orbRef.current.style.setProperty("--mouse-x", `${moveX}px`);
      orbRef.current.style.setProperty("--mouse-y", `${moveY}px`);
      orbRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
      orbRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      if (!orbRef.current) return;

      orbRef.current.style.setProperty("--mouse-x", "0px");
      orbRef.current.style.setProperty("--mouse-y", "0px");
      orbRef.current.style.setProperty("--rotate-x", "0deg");
      orbRef.current.style.setProperty("--rotate-y", "0deg");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="small-title">
          ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
        </p>

        <h1>
          HI, I'M
          <br />
          <span>RAGUL.</span>
        </h1>

        <p className="description">
          AI & ML Student • Web Developer • Image Creator
        </p>

        <p className="hero-intro">
          I create modern digital experiences by combining
          technology, creativity, and artificial intelligence.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button">
            View My Projects →
          </a>

          <a href="#contact" className="hero-secondary-button">
            Contact Me ↗
          </a>
        </div>
      </div>

      <div className="hero-orb-wrapper">
        <div className="hero-orb" ref={orbRef}>
          <img
            src="/profile.jpg"
            alt="Ragul"
            className="profile-image"
          />

          <div className="orb-inner"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;