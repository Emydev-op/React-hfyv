import hfimg from "../assets/hfyv3.jpg";

const Login = () => {
  return (
    // <div className="bg-gradient-to-tl from-slate-700 to-slate-900 h-[70vh] sm:h-screen w-full relative flex items-center justify-center ">
    //   <img
    //     src={hfimg}
    //     alt=""
    //     className="w-full h-full object-cover absolute mix-blend-overlay"
    //   />
    //   <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //       <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //         Create and account
    //       </h1>
    //       <form className="space-y-4 md:space-y-6" action="#">
    //         <div>
    //           <label
    //             htmlFor="email"
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //           >
    //             Your email
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             id="email"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    //             placeholder="name@company.com"
    //             required=""/
    //           />
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="password"
    //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //           >
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             name="password"
    //             id="password"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    //             required=""/
    //           />
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         >
    //           Create an account
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[70vh] xl:h-screen lg:py-0 bg-red-100 object-cover"
        style={{ backgroundImage: `url(${hfimg})` }}
      >
        <div className="w-full mt-[4rem] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
