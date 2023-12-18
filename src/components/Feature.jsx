import transport from "../assets/Bus driver-bro.png";
import electricity from "../assets/Light bulb-amico.png";
import sport from "../assets/paralympic football 5-a-side-bro.png";
import security from "../assets/Vault-bro.png";

const featureData = [
  {
    title: "Security",
    img: security,
    color: "bg-[#fecdd3]",
    desc: "Go to this step by step guideline process on how to certify for your weekly benefits",
  },
  {
    title: "Sports",
    img: sport,
    color: "bg-[#d1edbf9c]",
    desc: "Go to this step by step guideline process on how to certify for your weekly benefits",
  },
  {
    title: "Electricity",
    img: electricity,
    color: "bg-[#faf4f2]",
    desc: "Go to this step by step guideline process on how to certify for your weekly benefits",
  },
  {
    title: "Transportation",
    img: transport,
    color: "bg-[#86b9f8b7]",
    desc: "Go to this step by step guideline process on how to certify for your weekly benefits",
  },
  {
    title: "Environment",
    img: electricity,
    color: "bg-[#e9d5ff]",
    desc: "Go to this step by step guideline process on how to certify for your weekly benefits",
  },
  {
    title: "Transportation",
    img: transport,
    color: "bg-[#a5b4fc]",
    desc: "Go to this step by step guideline process on how to certify for your weekly benefits",
  },
];

const feactureContent = featureData.map((data) => (
  <div key={data.title}>
    <div
      className={`${data.color} max-w-xs p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700`}
    >
      <img src={data.img} className="w-28 h-auto mb-3" alt="" />
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
        {data.title}
      </h5>
      <p className="mb-3 font-normal text-gray-900">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
    </div>
  </div>
));

const Feature = () => {
  return (
    <section className="container mx-auto mb-4 ">
      <div className=" md:mt-8 mt-6 p-3">
        <h1 className="text-[#BF4E03] md:text-5xl text-3xl font-bold text-center">
          Features
        </h1>
      </div>
      <div className="flex justify-center my-10">
        <div className=" grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
          {feactureContent}
        </div>
      </div>
    </section>
  );
};

export default Feature;
