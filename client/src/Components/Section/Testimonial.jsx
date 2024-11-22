import Testimoniallist from "../Testimonial/Testimoniallist"


const Testimonial = () => {
  return <section>
    <div className="max-w-7xl container">
    <div className="xl:w-[1000px] mx-auto">
          <h2 className="heading text-center">
          Trusted by Patients, Proven by Results
          </h2>
          <p className="text_para text-center">
          Hear from our patients about their experiences with our care. Their stories inspire us to keep delivering exceptional healthcare every day.
          </p>
          </div>
          <Testimoniallist/>
    </div>
  </section>
}

export default Testimonial