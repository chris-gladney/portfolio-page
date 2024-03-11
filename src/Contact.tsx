import Nav from "./Nav";

function Contact() {
  return (
    <div className="main-content">
      <Nav />
      <h1>Chris Gladney</h1>
      <p className="contact-me">
        Email: christophergladney@hotmail.co.uk
        {<br />}
        LinkedIn: www.linkedin.com/in/christopher-gladney-3590942a5
      </p>
    </div>
  );
}

export default Contact;
