function Contact() {
  return (
    <section className="contact-form">
      <h3> contact</h3>
      <form>
        <input type="text" id="name" placeholder="John Doe" />

        <input type="email" id="email" placeholder="abc@example.com" />

        <textarea
          type="textarea"
          id="message"
          placeholder=" Write your Message"
        />
        <button className="submit-btn" type="submit">
          submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
