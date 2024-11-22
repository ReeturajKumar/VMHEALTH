import img1 from '../../assets/doctor-img02.png'
const OurStory = () => {
  return (
    <section className="our_story_section ">
      <div className="max-w-7xl container mx-auto">
        <h2 className="text-[36px] font-[800] text-headingColor text-center mb-2">
          Our Path to Transforming Healthcare
        </h2>
        <p className="text-center text-xl font-semibold text-gray-600 mb-8">
          A Journey Fueled by Compassion, Innovation, and Dedication to Patient
          Well-Being
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side: Image Content */}

          <div className="lg:w-1/2 flex justify-center">
            <img
              className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]"
              src={img1}
              alt="Our Story"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-1/2">
            <p className="text_para text-lg leading-8 text-gray-700">
              At VMHEALTH, our journey began with a simple but powerful vision:
              to revolutionize healthcare by making it more accessible,
              compassionate, and innovative. Founded in [Year] by a group of
              dedicated professionals, we set out to create a facility where
              patients could receive holistic care tailored to their individual
              needs.
              <br />
              <br />
              Over the years, we have expanded our services and integrated
              cutting-edge technology into our practice, ensuring that our
              patients receive the highest quality of care. Our commitment to
              excellence is reflected in the numerous awards we have garnered
              and the positive feedback we consistently receive from our
              community.
              <br />
              <br />
              Join us as we continue to lead the way in transforming healthcare
              and improving lives, one patient at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
