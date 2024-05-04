import Card from "../Card/Card";

const Section1 = () => {
  return (
    <div>
      <div className="text-center m-8">
        <h1 className="text-4xl font-bold mb-4">
         
        Excellence in Every <span className="text-green-700"> Service</span> Offering
        </h1>
        <p className="">

        At Seedinov, we offer a wide range of services, from creating and
          marketing pages to developing sophisticated websites, catering to all
          your digital needs.
        
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 m-10 ">
      <Card
          img={"/images/chatgpt.png"}
          heading={"Chat Bots"}
          para={
            " Engage customers effortlessly with Seedinov's Chat Bot solutions. We've designed them to simplify customer interactions, streamline support, and enhance overall satisfaction. "
          }
        />
        <Card
          img={"/images/chatgpt.png"}
          heading={"Custom AI Solutions"}
          para={
            "Unlock the potential of your business with Seedinov's Custom AI Solutions. Our tailored applications optimize your processes, analyze data effectively, and empower intelligent decision-making for enhanced business performance."
          }
        />
        <Card
          img={"/images/chatgpt.png"}
          heading={"SaaS"}
          para={
            " Take your business to new heights with Seedinov's SaaS applications. Our cloud-based solutions offer user-friendly experiences, scalability to meet your needs, and a competitive edge in the digital landscape."}
        />
        <Card
          img={"/images/chatgpt.png"}
          heading={"Automation Services"}
          para={
            " Simplify and boost efficiency with Seedinov's Automation Services. Our solutions make tasks faster and better, allowing you to focus on core aspects of your business."}
        />
        <Card
          img={"/images/chatgpt.png"}
          heading={"Product Design"}
          para={
            " Elevate your brand with Seedinov's Product Design expertise. Our talented team transforms your vision into visually captivating products, ensuring a positive impact on your audience."}
        />
        <Card
          img={"/images/chatgpt.png"}
          heading={"Development Hub"}
          para={
            "Seedinov's Integrated Development Solutions: Innovate effortlessly with our user-centric approach, combining web and app development for a comprehensive digital experience. Enhance brand recognition through our efficient development process."}
        />
      </div>
    </div>
  );
};

export default Section1;
