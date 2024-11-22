import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../../data/Testimonial'; 
import { HiStar } from 'react-icons/hi';

const TestimonialList = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-16"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="py-[10px] px-5 rounded-lg">
              <div className="flex items-center gap-[13px] mb-4">
                <img src={testimonial.photo} alt={`${testimonial.name}'s avatar`} className='w-12 h-12 rounded-full' />
              </div>
              <h4 className="text-[18px] leading-[30px] text-headingColor font-semibold mb-2">
                {testimonial.name}
              </h4>
              <div className="flex items-center gap-[2px] mb-4">
                {Array.from({ length: Math.round(testimonial.rating) }, (_, index) => (
                  <HiStar key={index} className="text-secondaryColor w-[18px] h-5" />
                ))}
              </div>
              <p className="text-[16px] leading-7 text-textColor font-[400]">
                {testimonial.feedback}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialList;
