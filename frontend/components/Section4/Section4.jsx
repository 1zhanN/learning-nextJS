import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Card2 from "../Card2/Card2";

const Section4 = () => {
  return (
    <div className="bg-custom-gray py-20">
      <div className="text-center m-8">
        <h2 className=" text-white text-4xl font-bold mb-4">
          Raving Reviews: Client{" "}
          <span className="text-green-700">Testimonials</span>
        </h2>
        <p className="text-white">
          We place a strong emphasis on ensuring client satisfaction, and we are
          proud to share testimonials from our valued clients
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots 1"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots 2"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots 3"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots 4"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots 5"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Section4;
