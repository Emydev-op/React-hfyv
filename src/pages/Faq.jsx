import { useState } from "react";
import hfyv3 from "../assets/hfyv4.jpg";

const Faq = () => {
  const data = [
    {
      id: 1,
      title: "How To Apply For Accommodation",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.",
      display: true,
    },
    {
      id: 2,
      title: "How To Pay For Accommodation",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.",
      display: false,
    },
    {
      id: 3,
      title: "How many in a Room",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.",
      display: false,
    },
    {
      id: 4,
      title: "Is visitors allowed?",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.",
      display: false,
    },
  ];

  const [faqs, setFaqs] = useState(data);
  const toggleDisplay = (id) => {
    setFaqs((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, display: !item.display } : item
      )
    );
    console.log(faqs, "now");
  };

  return (
    <div>
      <div className="bg-gradient-to-tl from-[#4a4336] to-slate-900 h-96 w-full relative flex  items-center justify-center ">
        <img
          src={hfyv3}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-24">
          <h1 className="text-white md:text-6xl text-4xl font-bold">FAQ</h1>
        </div>
      </div>

      <section className="py-8 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight dark:text-[#BF4E03] text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 dark:text-white">
            {faqs.map((data) => (
              <div
                key={data.id}
                className="transition-all duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => toggleDisplay(data.id)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold dark:text-white text-black">
                    {" "}
                    {data.title}{" "}
                  </span>
                  <span
                    className={`${
                      data.display !== false && "rotate-180"
                    } ease-linear transition-all`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-400 rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`${
                    data.display == false && "hidden"
                  } px-4 pb-5 sm:px-6 sm:pb-6`}
                >
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
