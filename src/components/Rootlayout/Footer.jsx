import hflogo from "../../assets/hflogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#181612] text-gray-300 pt-4">
      <div className="container mx-auto py-14 px-6">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
          <div className="lg:col-span-4 col-span-12">
            <Link to="/">
              <img src={hflogo} className="h-12" alt="holy family logo" />
            </Link>
            <p className="mt-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui
              odio, fringilla vel nunc at, bibendum ornare eros. Duis est magna,
              mattis ac augue aliquam, porttitor gravida nibh.
            </p>
          </div>
          <div className="lg:col-span-2 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold">
              Company
            </h5>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Student
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold">
              Important Links
            </h5>
            <ul className="list-none mt-6 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold">
              NewsLetter
            </h5>
            <p className="mt-6">
              Sign up and receive the latest tips via email.
            </p>
            <form>
              <div className="my-3">
                <label htmlFor="email-input">
                  Write your email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email-input"
                  id="email-input"
                  placeholder="name@example.com"
                  className="mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-500 focus:border-[#FFCDA3] focus:ring-0"
                />
              </div>
              <button className="py-2 px-5 flex items-center justify-center tracking-wide border duration-500 text-base text-center bg-[#ffcda3] hover:bg-[#ffcd88] border-[#ffcda3] hover:border-[#ffcd88] text-black rounded-md w-full">
                Send Email
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="md:text-left text-center container mx-auto py-7 px-6">
          <p className="mb-0">&copy; 2023 BravtaCodes. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
