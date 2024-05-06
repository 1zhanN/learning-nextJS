import { useSwiper } from "swiper/react";
import Image from "next/image";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns m-8">
      <button className="m-2" onClick={() => swiper.slidePrev()}>
        <img
          src="/images/arrowL.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      </button>

      <button onClick={() => swiper.slideNext()}>
        <img
          src="/images/arrowR.png"
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </div>
  );
};
