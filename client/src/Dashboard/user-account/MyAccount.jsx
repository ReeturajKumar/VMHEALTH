import { useContext, useState } from "react";
import userImg from "../../assets/doctor-img01.png";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from './Profile';

import userGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";





const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTabs] = useState("bookings");

  const { data: userData, loading, error } = userGetProfile(`${BASE_URL}/user/profile/me`);


  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <section>
          <div className="max-w-[1270px] px-5 mx-auto">
            {loading && !error && <Loading/>}


            {error && !loading && <Error errMessage={error}/>}
            {
              !loading && !error && (
                <div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md">
                  <div className="flex items-center justify-center">
                    <figure className="w-[100px] h-[100px] rounded-full border-2 border-primaryColor">
                      <img
                        src={userData.photo}
                        alt=""
                        className="w-full h-full rounded-full"
                      />
                    </figure>
                  </div>
        
                  <div className="text-center mt-4">
                    <h3 className="text-[18px] leading-[30px] font-bold text-headingColor">
                     {userData.name}
                    </h3>
                    <p className="text-[16px] leading-6 text-textColor font-medium">
                      {userData.email}
                    </p>
                    <p className="text-[16px] leading-6 text-textColor font-medium">
                      Blood
                      <span className="ml-2 text-headingColor text-[22px] leading-8">
                        {userData.bloodType}
                      </span>
                    </p>
                  </div>
        
                  <div className="mt-[50px] md:mt-[100px]">
                    <button
                      onClick={handleLogout}
                      className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                    >
                      Logout
                    </button>
                    <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                      Delete Account
                    </button>
                  </div>
                </div>
        
                <div className="md:col-span-2 md:px-[30px]">
                  <div>
                    <button
                      onClick={() => setTabs("bookings")}
                      className={` ${tab === "bookings" && "bg-primaryColor text-white font-normal"} py-2 p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                    >
                      My Bookings
                    </button>
        
                    <button
                      onClick={() => setTabs("settings")}
                      className={` ${tab === "settings" && "bg-primaryColor text-white font-normal"} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                    >
                      Profile Settings
                    </button>
                  </div>
        
                  {
                    tab === "bookings" ? <MyBookings /> : <Profile user={userData} />
                  }
                </div>
              </div>
              )
            }
    </div>
    </section>
  );
};

export default MyAccount;
