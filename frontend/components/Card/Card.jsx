import Image from "next/image";

const Card = ({ img, heading, para }) => {
  return (
    <div>
      <div>
        <Image src={img} alt="Logo" width={100} height={100} />
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">{heading}</h1>
        <p className="text-justify mb-20">{para}</p>
      </div>
      <div>
        <button className="font-bold text-green-700">Learn More</button>
      </div>
    </div>
  );
};

export default Card;
