import AboutUser from "../components/AboutUser";

const Contact = () => {
  return (<div>
    <>
      <section className="about-hero-section">
        <img src="/assets/image-phone.jpg" />
        <h1 className="large light text-center about-text">Contact</h1>
        <div className="about-hero-text">
          <div>
          <h2>Tell us about your project</h2>
          <p>
              We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
          </p>
          </div>
          
        </div>
      </section>
        <section className="container contact-details">
          <h2>Contact Details</h2>
          <div>
            <h3>Main Office</h3>
            <p>Mail: contact@dot.com</p>
            <p>Address: 5555 Local Start CA</p>
            <p>Phone: 619-123-1234</p>
          </div>

          <div>
            <h3>Main Office</h3>
            <p>Mail: contact@dot.com</p>
            <p>Address: 5555 Local Start CA</p>
            <p>Phone: 619-123-1234</p>
          </div>


          
        </section>

      </>
  </div> );
}
 
export default Contact;