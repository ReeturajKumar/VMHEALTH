import { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { BASE_URL, token } from "../../config";
import HashLoader from "react-spinners/HashLoader";


const Feedback2 = () => {
  const [rating,setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const {id} = useParams();


  const handleSubmitReview = async e=> {
    e.preventDefault();
    setLoading(true);

    try {
      if(!rating || !reviewText){
        setLoading(false);
        return toast.error("Please fill in all fields");
    }

    const res = await fetch (`${BASE_URL}/doctors/${id}/reviews`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        rating,
        reviewText,
      }),
    })

    const result = await res.json();

    if(!res.ok){
      throw new Error(result.message);
  }
  setLoading(false)
  toast.success(result.message)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  return <form action="">
     <div>
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
        How would you rate the overall experience?
      </h3>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <button
            key={starValue}
            type="button"
            className={`text-[22px] cursor-pointer border-none bg-transparent outline-none ${
              starValue <= (hover || rating) ? 'text-secondaryColor' : 'text-gray-400'
            }`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
          >
            <AiFillStar />
          </button>
        );
      })}
    </div>

    <div className="mt-[30px]">
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">Share your feedback</h3>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        className="w-full outline-none border border-gray-300 p-3 rounded-lg"
        placeholder="Write your message"
        onChange={e => setReviewText(e.target.value)}
      ></textarea>
    </div>
    <button type="submit" onClick={handleSubmitReview} className="btn">
     {loading ? <HashLoader size={20} color="#36d7b7" /> : "Submit Feedbak"}
    </button>
  </form>
}

export default Feedback2