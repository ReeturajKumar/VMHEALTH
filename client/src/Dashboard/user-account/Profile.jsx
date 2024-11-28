/* eslint-disable react/prop-types */
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config";
import uploadImageCloudinary from "../../utils/uploadCloudinary";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  });
  const [error, setError] = useState(""); // State for blood type error
  const navigate = useNavigate();

  const validBloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "bloodType" && !validBloodTypes.includes(value)) {
      setError("Invalid Blood Type.");
    } else {
      setError("");
    }

    setFormData({
      ...formData,
      [name]: value,
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

    // Validate blood type
    if (error) {
      toast.error(error);
      return;
    }

    // Set loading state
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Error handling for API response
      if (!res.ok) {
        throw new Error(data.msg || "Something went wrong");
      }

      setLoading(false);
      toast.success(data.msg || "Profile updated successfully");
      navigate("/users/profile/me");
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div className="mt-6">
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
            aria-readonly
            readOnly
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
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            required
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
        <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <label className="text-headingColor font-bold text-[16px]">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
            >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </figure>
          )}

          <div className="relative w-full max-w-[160px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg, .png"
              onChange={handleFileInputChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-3 py-2 text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-2xl px-4 py-3"
          >
            {loading ? <HashLoader color="#ffffff" size={25} /> : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
