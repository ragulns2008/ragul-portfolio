function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-number">04 — CONTACT</p>

      <div className="contact-content">
        <h2>
          Let's build
          <br />
          something <span>great.</span>
        </h2>

        <p>
          Have a project idea or want to work together?
          Feel free to get in touch.
        </p>

        <div className="contact-links">
          <a
            href="mailto:nnsragul@gmail.com"
            className="contact-button"
          >
            Email Me ↗
          </a>

          <a
            href="tel:9486511342"
            className="social-link"
          >
            Call Me ↗
          </a>

          <a
            href="https://wa.me/919486511342"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            WhatsApp Me ↗
          </a>
        </div>

        <div className="contact-info">
          <p>nnsragul@gmail.com</p>
          <p>+91 94865 11342</p>
        </div>
      </div>

      <div className="contact-footer">
        <span>RAGUL.</span>
        <span>© 2026</span>
      </div>
    </section>
  );
}

export default Contact;