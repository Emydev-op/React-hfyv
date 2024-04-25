import { useState, useEffect } from "react";
import hfyv3 from "../assets/hfyv3.jpg";
import GalleryList from "../components/GalleryList";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    setGallery(GalleryList);
  }, []);
  useEffect(() => {
    setGallery([]);
    const filtered = GalleryList.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setGallery(filtered);
  }, [filter]);

  return (
    <div>
      <div className="bg-gradient-to-tl from-[#4a4336] to-slate-900 h-96 w-full relative flex  items-center justify-center ">
        <img
          src={hfyv3}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-24">
          <h1 className="text-white md:text-6xl text-4xl font-bold">Gallery</h1>
        </div>
      </div>

      <section className="my-4 container">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className={`text-blue-700 ${
              filter === "all" && "bg-blue-700 text-white"
            } hover:text-white border border-blue-600 hover:bg-blue-700 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`text-gray-900 ${
              filter === "exterior" && "bg-blue-700 text-white"
            } border border-white hover:bg-blue-700 hover:text-white dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700  focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white`}
            onClick={() => setFilter("exterior")}
          >
            Exterior
          </button>
          <button
            type="button"
            className={`text-gray-900 ${
              filter === "interior" && "bg-blue-700 text-white"
            } border border-white hover:bg-blue-700 hover:text-white dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700  focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white`}
            onClick={() => setFilter("interior")}
          >
            Interior
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-12 md:px-20 mb-10">
          {gallery.map((item) =>
            item.filtered === true ? (
              <div key={item.id}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item.image}
                  alt=""
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
