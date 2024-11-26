import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loader/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "./../../Components/Doctors/DoctorCard";

const MyBookings = () => {
  const {
    data: myBookings,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/user/appointments/my-appointments`);
  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {myBookings.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}

      {!loading && !error && myBookings.length === 0 && (
        <h2 className=" mt-5 text-center leading-[30px] text-[20px] font-semibold text-primaryColor">No Bookings Found</h2>
      )}
    </div>
  );
};

export default MyBookings;
