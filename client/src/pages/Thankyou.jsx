import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-pink-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 md:max-w-xl w-full">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-20 h-20 mx-auto animate-bounce mb-6"
        >
          <path
            fill="currentColor"
            d="M12, 0A12,12,0,1,0,24, 12, 12.014, 12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.56214.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.22">
          </path>
        </svg>
        
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Payment Done!
        </h3>
        
        <p className="text-gray-700 text-center mb-4">
          Your payment has been completed successfully. We truly appreciate your trust in us.
        </p>
        
        <p className="text-gray-600 text-center mb-6">
          Thank you for using our service. We look forward to serving you again soon!
        </p>
        
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
