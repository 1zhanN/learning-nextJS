import Image from "next/image";
const Section3 = () => {
  return (
    <div >
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae.
          ipsum dolor sit, amet consectetur adi, aliquid.
        </p>
      </div>
      <div className="flex justify-center gap-20 p-10">
        <div>
          <div>
            <Image src="/images/ikea.png" alt="Logo" width={100} height={100} />
          </div>
          <div>
            <Image src="/images/uber.png" alt="Logo" width={100} height={100} />
          </div>
        </div>
        <div>
          <div>
            <Image
              src="/images/unrealEngine.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              src="/images/steam.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div>
          <div>
            <Image src="/images/ms.png" alt="Logo" width={100} height={100} />
          </div>
          <div>
            <Image
              src="/images/mazda.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
