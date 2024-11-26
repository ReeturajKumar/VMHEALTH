import Loader from './../../Components/Loader/Loading';
import Error from './../../Components/Error/Error';
import useGetProfile from './../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Tabs from './Tabs';

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctor/profile/me`);
  return <section>
    <div>
      {loading && !error && <Loader />}
      {error && !loading && <Error/>}
     
      {!loading && !error && (
        <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[30px]'>
          <Tabs/>
        </div>
      )}

    </div>
  </section>
}

export default Dashboard