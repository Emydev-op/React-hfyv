import hfyv3 from "../assets/hfyv3.jpg";
import TeamCard from "../components/TeamCard";

//Image of team
import frdom from "../assets/frDom.jpg";

const About = () => {
  return (
    <div>
      <div className="bg-gradient-to-tl from-slate-700 to-slate-900 h-96 w-full relative flex  items-center justify-center ">
        <img
          src={hfyv3}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-24">
          <h1 className="text-white md:text-6xl text-4xl font-bold">
            About Us
          </h1>
        </div>
      </div>
      <section>
        {/* Mission, Vision, About */}
        <main className="flex items-center bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800 ">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center ">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="lg:max-w-md">
                  <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                    Overall best hostel in cleanliness and discipline 2009 till
                    date; overall best in academics and sports.
                  </h2>
                  <p className="mb-10 text-gray-600 dark:text-gray-400 sr-only">
                    Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text
                    .Lorem ipsum dor amet isopinus ipaino amet Lorem ipsum dor
                    amet is a dummy text
                  </p>
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="flex mb-4">
                  <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-file-earmark-code"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                      <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                      Mission
                    </h2>
                    <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                      Provision of a very conducive and serene atmosphere for
                      studies and to get the best out of the youths in order to
                      arm them to face future challenges, realize their dreams
                      and help in transforming our society.
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-file-text"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                      Vision
                    </h2>
                    <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                      Formation of future leaders through selfless and exemplary
                      services.
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-bank2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"></path>
                    </svg>
                  </span>
                  <div>
                    <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                      Inauguration
                    </h2>
                    <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                      The hostel was established on 14th September 2009.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Capacity, Features */}
        <main className="flex items-center bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800 ">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center ">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="lg:max-w-md">
                  <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                    Structure and Features
                  </h2>
                  <p className="mb-10 text-gray-600 dark:text-gray-400">
                    Four gigantic twin hostels with private kitchens, laundry,
                    water heaters and study rooms; chapel; a cyber cafe; a
                    clinic; a supermarket; hair saloon; General kitchen; canteen
                    and refectory; a generator house with solar panels; two
                    740ft scientific boreholes for water; police post for
                    security; football pitch; lawn tennis courts; basket and
                    volleyball courts.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="lg:max-w-md">
                  <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                    Capacity and Logistics.
                  </h2>
                  <p className="mb-10 text-gray-600 dark:text-gray-400">
                    The hostel has 504 rooms in all. 492 are fully occupied by
                    students both males and females though separately. The
                    hostel has a total of 984 students from every part of
                    Nigeria and different religious denominations. It is managed
                    by three priests (The Rector, Spiritual Director and Bursar)
                    and six religious sisters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* The management */}
        <section className="pb-10 dark:bg-gray-800 lg:pb-20">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                  <span className="mb-2 block text-lg font-semibold text-blue-600">
                    Our Team
                  </span>
                  <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    The Management
                  </h2>
                </div>
              </div>
            </div>

            <div className="mx-auto flex flex-wrap justify-center max-w-[90%]">
              <TeamCard
                name="Fr. Obielosi Dominic"
                profession="The Rector"
                imageSrc={frdom}
              />
              <TeamCard
                name="Fr. Ogbuowelu Emmanuel"
                profession="The Bursar"
                imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
              />
                <TeamCard
                  name="Coriss Ambady"
                  profession="The Bursar"
                  imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                />
              <TeamCard
                name="Sis. M. Sarah Edeoga"
                profession="The Chief Receptionist"
                imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
