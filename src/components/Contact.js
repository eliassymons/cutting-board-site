export default function Contact() {
  return (
    <div className="contact-container">
      <h3>contact</h3>
      <form className="contact-form">
        <label>Name</label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="your name"
        />
        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
