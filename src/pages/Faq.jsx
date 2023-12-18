import hfyv3 from "../assets/hfyv4.jpg";

const Faq = () => {
  return (
    <div>
      <div className="bg-gradient-to-tl from-slate-700 to-slate-900 h-96 w-full relative flex  items-center justify-center ">
        <img
          src={hfyv3}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-24">
          <h1 className="text-white md:text-6xl text-4xl font-bold">FAQ</h1>
        </div>
      </div>
    </div>
  );
};

export default Faq;
