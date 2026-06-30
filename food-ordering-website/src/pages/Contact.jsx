function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <div className="info-card">

        <p>📍 Chennai, Tamil Nadu</p>

        <p>📧 support@foodiehub.com</p>

        <p>📞 +91 98765 43210</p>

        <hr />

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </div>
    </div>
  );
}

export default Contact;