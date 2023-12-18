import Feature from "../components/Feature";
import Hero from "../components/Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <Feature />
      {/* ----------Testimonial Section----------------- */}
      <section className="bg-gray-200 dark:bg-gray-700 container mx-auto py-4">
        <div className=" md:mt-8 mt-6 p-3">
          <h1 className="text-[#BF4E03] md:text-5xl text-3xl font-bold text-center">
            Testimonials
          </h1>
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
        >
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  &ldquo;Flowbite is just awesome. It contains tons of
                  predesigned components and pages starting from login screen to
                  complex dashboard. Perfect choice for your next SaaS
                  application.&ldquo;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Micheal Gough
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  &ldquo;Flowbite is just awesome. It contains tons of
                  predesigned components and pages starting from login screen to
                  complex dashboard. Perfect choice for your next SaaS
                  application.&ldquo;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Micheal Gough
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </Carousel>
      </section>
      {/* --------------Testimonial End----------------- */}
      {/* ---------------Contact section------------- */}
      <section className="bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="md:text-5xl text-3xl font-bold text-[#BF4E03] ">
              Contact Us
            </h2>
            <p className="mt-4 text-lg dark:text-gray-200 text-gray-500">
              Want to contact us?
            </p>
          </div>
          <div className="mt-12 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.6519905901248!2d7.1246792782729305!3d6.263781600752653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104378daa23b0fab%3A0x3a339569e367e8e4!2sHoly%20Family%20Youth%20Village%20Hostel%2C%20Amansea!5e0!3m2!1sen!2sng!4v1702792646339!5m2!1sen!2sng"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium dark:text-gray-100 text-gray-900">
                      Our Address
                    </h3>
                    <p className="mt-1 dark:text-gray-200 text-gray-600">
                      Egbagu-Amansi 420116, Anambra
                    </p>
                  </div>
                  <div className="border-t dark:border-gray-700 border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium dark:text-gray-100 text-gray-900">
                      Hours
                    </h3>
                    <p className="mt-1 dark:text-gray-200 text-gray-600">
                      Monday - Friday: 8am - 7pm
                    </p>
                    <p className="mt-1 dark:text-gray-200 text-gray-600">
                      Saturday: 9am - 4pm
                    </p>
                    <p className="mt-1 dark:text-gray-200 text-gray-600">
                      Sunday: Closed
                    </p>
                  </div>
                  <div className="border-t dark:border-gray-700 border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium dark:text-gray-100 text-gray-900">
                      Contact
                    </h3>
                    <p className="mt-1 dark:text-gray-200 text-gray-600">
                      <a href="mailto:info@holyfamily.com">
                        Email: info@holyfamily.com
                      </a>
                    </p>
                    <p className="mt-1 dark:text-gray-200 text-gray-600">
                      Phone: +2348 9949 4993
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
