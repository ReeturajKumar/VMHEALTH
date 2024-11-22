import ContactImage from '../assets/contact.avif'; // Import your image

const ContactUs = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 hidden lg:flex justify-center mr-7">
          <img src={ContactImage} alt="Contact Us" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-0 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center md:text-left mb-4">
            Contact Us
          </h2>
          <p className="mb-8 text-center md:text-left">
            We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to contact us.
          </p>
          <form action="#" className="space-y-6 w-full">
            <div>
              <label htmlFor="email" className="form_label">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form_input mt-1 w-full"
              />
            </div>
            <div>
              <label htmlFor="subject" className="form_label">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Let us know how we can help"
                className="form_input mt-1 w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="form_label">Your Message</label>
              <textarea
                rows="6"
                id="message"
                placeholder="Leave a comment..."
                className="form_input mt-1 w-full"
              />
            </div>
            <button type="submit" className="btn bg-primaryColor text-white px-6 py-2 rounded-lg w-full md:w-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
