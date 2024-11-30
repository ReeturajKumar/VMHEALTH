/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import avatar from "../../assets/avatar.png";
import { formateDate } from "./../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import Feedback2 from "./Feedback2";

const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackbackForm, setshowFeedbackbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[22px] leading-[32px] font-bold text-headingColor mb-[30px]">
          Experience Shared by Our Clients ({totalRating})
        </h4>

        {reviews?.map((review,index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img src={review?.user?.photo} alt="" />
              </figure>

              <div>
                <h5 className="text-[18px] leading-[28px] font-bold text-headingColor">
                  {review?.user?.name}
                </h5>
                <p className="text-[15px] leading-[25px] text-textColor">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text-para mt-3 font-medium text-[15px]">{
                  review?.reviewText}</p>
              </div>
            </div>

            <div className="flex gap-3">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#FFC107" />
              ))}
            </div>
          </div>
        ))}
      </div>
      {!showFeedbackbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setshowFeedbackbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackbackForm && <Feedback2 />}
    </div>
  );
};

export default Feedback;
