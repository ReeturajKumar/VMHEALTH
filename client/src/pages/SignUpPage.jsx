import { useState } from 'react';
import SignUp from '../assets/Signup.jpg';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";

const SignUpPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: "",
    password: "",
    photo: selectedFile,
    gender: '',
    role: 'patient',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size exceeds 5MB!");
      return;
    }

    // Upload image to Cloudinary
    const data = await uploadImageCloudinary(file);
    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // Validate email format
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Validate photo upload
    if (!formData.photo) {
      toast.error("Please upload a photo!");
      return;
    }

    // Validate gender selection
    if (formData.gender === "select") {
      toast.error("Please select a valid gender!");
      return;
    }

    // Set loading state
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Error handling for API response
      if (!res.ok) {
        throw new Error(data.msg || "Something went wrong");
      }

      setLoading(false);
      toast.success(data.msg);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <section className="px-4 lg:px-0 py-8">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="rounded-lg p-4 lg:pt-7 py-8">
            <h3 className='text-headingColor text-xl md:text-2xl font-bold mb-8'>
              Join the Wellness <span className='text-primaryColor'>Revolution</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <label className='text-headingColor font-bold text-[16px]'>
                  Are You a:
                  <select name="role" value={formData.role} onChange={handleInputChange}
                    className='text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className='text-headingColor font-bold text-[16px]'>
                  Gender:
                  <select name="gender" value={formData.gender} onChange={handleInputChange}
                    className='text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-primaryColor flex items-center justify-center'>
                  <img src={previewUrl} alt="" className='w-full h-full rounded-full' />
                </figure>}

                <div className='relative w-full max-w-[160px] h-[50px]'>
                  <input type="file" name='photo' id='customFile' accept='.jpg, .png' onChange={handleFileInputChange}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center justify-center px-3 py-2 text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button
                  disabled={loading}
                  type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-2xl px-4 py-3">
                  {loading ? <HashLoader color="#ffffff" size={35} /> : ' Create an Account'}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to='/login' className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>

          <div className="hidden lg:block">
            <figure className="rounded-lg">
              <img src={SignUp} alt="" className='w-full h-full rounded-lg object-cover' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
