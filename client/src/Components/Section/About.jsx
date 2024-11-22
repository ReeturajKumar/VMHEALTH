import about from "../../assets/about.png";
import aboutCard from "../../assets/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="max-w-7xl container">
        <div className="flex justify-between gap-[30px] lg:gap-[130px]  xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={about} alt="" />
            <div className="absolute z-20 bottom-24 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[10%]">
              <img src={aboutCard} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Revolutionizing Healthcare for a Better Tomorrow
            </h2>
            <p className="text_para">
              Our mission is to transform healthcare through innovation and
              excellence. We aim to make care more accessible, efficient, and
              patient-centered by leveraging advanced technology and medical
              expertise to improve health outcomes.
            </p>
            <p className="text_para mt-4">
              We are committed to staying at the forefront of medical
              advancements, providing exceptional care that evolves with patient
              needs. Our focus is always on ensuring the well-being of our
              patients and communities.
            </p>
            <Link>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
