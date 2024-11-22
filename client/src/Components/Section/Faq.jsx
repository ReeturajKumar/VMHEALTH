import FaqImg from "../../assets/faq-img.png";
import FaqList from "../Faq/FaqList";

const Faq = () => {
  return (
    <section>
      <div className="max-w-7xl container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={FaqImg} alt="" />
          </div>
          <div className="w-full md:w-1/2">
          <h2 className="heading">Most asked questions by our beloved patients</h2>
          <FaqList/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
