/* eslint-disable react/prop-types */
import Popup from "reactjs-popup";

export default function Booking({ trigger }) {
  return (
    <Popup
      trigger={trigger}
      overlayStyle={{ background: "#00000030", borderRadius: "0.9375rem" }}
      contentStyle={{ width: "fit-content", borderRadius: "0.5rem" }}
      modal
    >
      {(close) => (
        <div className="relative md:w-full w-[90%] mx-auto max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                How to Book
              </h3>
              <button
                onClick={close}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>Purchase the form at the hostel reception</li>
                <li>
                  Perform the various test listed on the form at a catholic
                  hospital (Tuberculosis, HIV and Hepatitis B)
                </li>
                <li>
                  Get a letter of recommendation from your Parish Priest or
                  Pastor
                </li>
                <li>Make Payment at the listed banks on the form</li>
                <li>Sign the Student Rules and Regulations</li>
                <li>
                  Submit the filled form with payment receipt at the reception
                </li>
              </ul>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 sr-only">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
