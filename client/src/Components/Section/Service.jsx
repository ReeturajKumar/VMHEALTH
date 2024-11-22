import ServiceList from "./Service/ServiceList"

const Service = () => {
  return (
    <section>
      <div className="max-w-7xl container">
        <div className="xl:w-[1000px] mx-auto">
          <h2 className="heading text-center">
          Transforming Health with Innovative Solutions
          </h2>
          <p className="text_para text-center">
          Delivering specialized healthcare services that put your well-being first, every step of the way.
          </p>
          </div>
          <ServiceList/>
      </div>
    </section>
  )
}

export default Service