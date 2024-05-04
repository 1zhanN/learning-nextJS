const Section2 = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row md:items-stretch p-[92px] gap-10 bg-green-100 py-20">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Upholding Our Commitment to{" "}
          <span className="text-green-700">Excellence</span>
        </h1>
        <p className="py-2">
        Empowering growth and success for all stakeholders through our unique approach to delivering exceptional experiences. Join us as we ascend to new heights through the transformative power of digital innovation.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 sm:gap-10 text-center">
          <div className="col-span-1">
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p>Served Clients Across the Globe</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p>Team Members and Advisors</p>
          </div>
          <div  className="col-span-1">
            <h3 className="text-4xl font-bold mb-2">10+</h3>
            <p>Projects Built and Deployed</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-4xl font-bold mb-2">4+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>

  );
};

export default Section2;
