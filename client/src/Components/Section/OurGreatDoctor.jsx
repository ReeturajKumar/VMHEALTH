import DoctorList from "../Doctors/DoctorList"


const OurGreatDoctor = () => {
  return <section>
    <div className="max-w-7xl container">
    <div className="xl:w-[1000px] mx-auto">
          <h2 className="heading text-center">
          The Healing Hands Behind Your Care
          </h2>
          <p className="text_para text-center">
          Discover the expertise and compassion of our dedicated doctors who are committed to your health and well-being.
          </p>
          </div>
          <DoctorList/>
      </div>
  </section>
}

export default OurGreatDoctor