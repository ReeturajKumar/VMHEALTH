/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import uploadImageCloudinary from "./../../utils/uploadCloudinary";
import { BASE_URL,token } from './../../config';

const Profile = ({doctorData}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });


  useEffect(() => {
    console.log(doctorData);
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      password: doctorData?.password,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    })
  }, [doctorData])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    setFormData({
      ...formData,
      photo: data?.url,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Profile updated successfully!");
      }

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const handleReusableInputChangeFunc = (event, key, index) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedItems = [...prevFormData[key]];
      updatedItems[index] = {
        ...updatedItems[index],
        [name]: value,
      };
      return {
        ...prevFormData,
        [key]: updatedItems,
      };
    });
  };

  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "PHD",
      university: "Medical University of South Carolina",
    });
  };

  const handleQualification = (event, index) => {
    handleReusableInputChangeFunc(event, "qualifications", index);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  // Add experience
  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      postion: "Senior Surgeon",
      hospital: "Medical University of South Carolina",
    });
  };

  const handleExperience = (event, index) => {
    handleReusableInputChangeFunc(event, "experiences", index);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  // Add time slot
 // Add time slot
const addTimeSlot = (e) => {
  e.preventDefault();

  addItem("timeSlots", {
    day: "Sunday", // Corrected spelling
    startingTime: "10:00",
    endingTime: "16:30", // Ensure consistent time format (24-hour)
  });
};

const handleTimeSlot = (event, index) => {
  handleReusableInputChangeFunc(event, "timeSlots", index);
};

const deleteTimeSlot = (e, index) => {
  e.preventDefault();
  deleteItem("timeSlots", index);
};

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form_input"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone Number*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form_input"
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form_label">Ticket Prices*</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                className="form_input"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label mb-2">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <p className="form_label">Starting Dates*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Dates*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form_input"
                      onChange={(e) => handleQualification(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualification}
            className="bg-[#000] p-2 text-white text-[18px] h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label mb-2">Experience*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <p className="form_label">Starting Dates*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleExperience(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Dates*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleExperience(e, index)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Position*</p>
                    <input
                      type="text"
                      name="postion"
                      value={item.postion}
                      className="form_input"
                      onChange={(e) => handleExperience(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form_input"
                      onChange={(e) => handleExperience(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addExperience}
            className="bg-[#000] p-2 text-white text-[18px] h-fit cursor-pointer"
          >
            Add Experince
          </button>
        </div>

        <div className="mb-5">
  <p className="form__label mb-2">Time Slots*</p>
  {formData.timeSlots?.map((item, index) => (
    <div key={index}>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5 ">
          <div>
            <p className="form_label">Day*</p>
            <select
              name="day"
              value={item.day}
              className="form_input py-3.5"
              onChange={(e) => handleTimeSlot(e, index)}
            >
              <option value="">Select</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
          <div>
            <p className="form_label">Starting Time*</p>
            <input
              type="time"
              name="startingTime"
              value={item.startingTime}
              className="form_input"
              onChange={(e) => handleTimeSlot(e, index)}
            />
          </div>
          <div>
            <p className="form_label">Ending Time*</p>
            <input
              type="time"
              name="endingTime"
              value={item.endingTime}
              className="form_input"
              onChange={(e) => handleTimeSlot(e, index)}
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={(e) => deleteTimeSlot(e, index)}
              className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 mb-[30px] cursor-pointer"
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
  <button
    onClick={addTimeSlot}
    className="bg-[#000] p-2 text-white text-[18px] h-fit cursor-pointer"
  >
    Add Time Slot
  </button>
</div>


        <div className="mb-5">
          <p className="form__label">About</p>
          <textarea
            name="about"
            id=""
            rows={5}
            value={formData.about}
            onChange={handleInputChange}
            placeholder="Enter about"
            className="form_input"
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-primaryColor flex items-center justify-center overflow-hidden">
              <img
                src={formData.photo}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
          )}

          <div className="relative w-full max-w-[160px] h-[50px] flex-shrink-0">
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
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-primaryColor text-white text-[18px] leading-[30px]  w-full py-3 px-4 rounded-lg "
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
