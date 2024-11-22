import { doctors } from "../../data/Doctor";
import { useParams } from "react-router-dom";
import { testimonials } from "../../data/Testimonial";
import { formateDate } from './../../utils/formateDate';
import { AiFillStar } from 'react-icons/ai';
import { useState } from "react";
import Feedback2 from "./Feedback2";

const Feedback = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);


  const [showFeedbackbackForm, setshowFeedbackbackForm] = useState(false)

  return (
    <div className="mt-10">
      <div className="mb-12">
        <h4 className="text-[22px] leading-[32px] font-bold text-headingColor mb-6">
          Experience Shared by Our Clients ({doctor?.totalRating || "N/A"})
        </h4>
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex items-start gap-5 p-4 ">
              <figure className="w-12 h-12">
                <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
              </figure>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h5 className="text-[18px] leading-6 text-primaryColor font-bold">
                      {testimonial.name}
                    </h5>
                    <p className="text-[14px] leading-6 text-gray-500">
                      {formateDate("10-28-2024")}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.round(testimonial.rating) }).map((_, index) => (
                      <AiFillStar key={index} color="#FEB60D" />
                    ))}
                  </div>
                </div>
                <p className="text-[15px] leading-6 text-textColor font-medium">
                  {testimonial.feedback} 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!showFeedbackbackForm && (<div className="text-center">
        <button className="btn" onClick={() => setshowFeedbackbackForm(true)}>
          Give Feedback
        </button>
      </div>)}
      {showFeedbackbackForm && <Feedback2/>}
    </div>
  );
};

export default Feedback;
