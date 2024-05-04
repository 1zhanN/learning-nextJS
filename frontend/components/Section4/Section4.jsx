import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Card2 from "../Card2/Card2";

const Section4 = () => {
  return (
    <div className="bg-green-900 py-20">
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
        <Swiper className="mySwiper">
          <SwiperSlide>
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots"}
              para={
                " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card2
              img={"/images/chatgpt.png"}
              heading={"Chat Bots"}
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
