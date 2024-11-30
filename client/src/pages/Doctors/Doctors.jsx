import { useState, useEffect } from 'react';
import Hero from '../../Components/Doctors/Hero';
import Testimonial from '../../Components/Section/Testimonial';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../../Components/Loader/Loading';
import Error from '../../Components/Error/Error';
import { BASE_URL } from '../../config';
import DoctorCard from '../../Components/Doctors/DoctorCard';

const Doctors = () => {
  const [query, setQuery] = useState(''); // Stores the user input
  const [debouncedQuery, setDebouncedQuery] = useState(query); // Debounced query for API call

  // Debounce logic: updates `debouncedQuery` after 500ms when `query` changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timeout); // Cleanup on every query change
  }, [query]);

  // Fetch data using the debounced query
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debouncedQuery}`);

  // Update the query when user searches from the Hero component
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero onSearch={handleSearch} />

      {/* Doctors Listing */}
      <div className="max-w-7xl container mx-auto px-4 py-10">
        {loading && <Loader />}
        {error && <Error message="Unable to fetch doctors. Please try again later." />}
        {!loading && !error && doctors.length === 0 && (
          <p className="text-center text-gray-600 mt-10">No doctors found for your search.</p>
        )}
        {!loading && !error && doctors.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>

      {/* Testimonial Section */}
      <Testimonial />
    </>
  );
};

export default Doctors;
