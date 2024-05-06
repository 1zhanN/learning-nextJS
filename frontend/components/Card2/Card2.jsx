import Image from "next/image";

const Card2 = ({ img, heading, para }) => {
  return (
    <div className="border border-white rounded-xl p-6 flex flex-col justify-between h-full m-4">
      <div className="flex justify-center">
        <Image src={img} alt="Logo" width={100} height={100} />
      </div>
      <div className="flex flex-col text-white items-center mt-6">
        <h1 className="text-2xl font-bold mb-3">{heading}</h1>
        <p className="text-center mb-6">{para}</p>
        <button className="bg-black text-white px-4 py-2 rounded-md font-bold hover:bg-gray-800 transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card2;
