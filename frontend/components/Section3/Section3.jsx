import Image from "next/image";
const Section3 = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center mx-20 lg:mx-80">
        <p className=" md:text-2xl font-bold text-gray-800 my-10">
           We earn <span className="text-green-700">Trust</span> by committing to provide value and consistently delivering on that promise
        </p>
      </div>
      <div className="flex justify-center gap-20">
        <div>
          <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]">  
            <Image src="/images/ikea.png" alt="Logo" fill />
          </div>
          <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] ">
            <Image src="/images/uber.png" alt="Logo" fill />
          </div>
        </div>
        <div>
          <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
            <Image
              src="/images/unrealEngine.png"
              alt="Logo"
              fill
              className="object-fit"
            />
          </div>
          <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
            <Image
              src="/images/steam.png"
              alt="Logo"
              fill
            />
          </div>
        </div>
        <div>
          <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
            <Image src="/images/ms.png" alt="Logo" fill />
          </div>
          <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
            <Image
              src="/images/mazda.png"
              alt="Logo"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
