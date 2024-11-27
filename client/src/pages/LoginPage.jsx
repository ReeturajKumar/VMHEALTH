import { useState, useContext } from "react";
import { Link, useNavigate} from 'react-router-dom';
import loginImage from '../assets/Login.jpg';
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "", 
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      // Error handling for API response
      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          role: result.role,
          token: result.token
        }
      })

      console.log(result);

      setLoading(false);
      toast.success(result.message);
      navigate('/');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl mx-auto rounded-lg flex flex-col md:flex-row overflow-hidden">
        
        <div className="hidden md:block md:w-1/2">
          <img 
            src={loginImage} 
            alt="Login" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
          <h3 className="text-headingColor text-[20px] sm:text-[22px] lg:text-[24px] leading-9 font-bold mb-8 text-center md:text-left">
            Step Back In <span className="text-primaryColor">Your Health Awaits</span>
          </h3>
          <form className="py-4 md:py-0 space-y-4" onSubmit={submitHandler}>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}
                aria-label="Email"
                className="w-full py-3 px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
                text-[16px] sm:text-[14px] md:text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                required
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={formData.password} 
                onChange={handleInputChange}
                aria-label="Password"
                className="w-full py-3 px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
                text-[16px] sm:text-[14px] md:text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                required
              />
            </div>

            <div className="mt-6">
              <button 
                disabled={loading}
                type="submit" 
                aria-label={loading ? "Logging in, please wait..." : "Login Account"}
                className="w-full bg-primaryColor text-white text-[16px] sm:text-[18px] lg:text-[20px] leading-[30px] rounded-xl px-4 py-3"
              >
                {loading ? <HashLoader color="#ffffff" size={35} /> : 'Login Account'}
              </button>
            </div>
            <p className="mt-5 text-textColor text-center text-sm sm:text-base">
              Don&apos;t have an account?
              <Link to='/register' className="text-primaryColor font-medium ml-1">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
