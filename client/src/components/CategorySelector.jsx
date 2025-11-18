import {useState,useEffect, act} from "react";

export default function CategorySelector(){
    const categories=["fans","switches","bulbs","lights","appliances"];
    const [activeCategory,setActiveCategory]=useState("fans");
    const [images,setImages]=useState([]);

    useEffect(()=>{
        async function loadImages(){
            const res=await fetch(`http://localhost:5000/api/images/${activeCategory}`);
            const data=await res.json();

            const urls=data.images.map(img =>
                `http://localhost:5000/images/${activeCategory}/${img}`
            );

            setImages(urls);
        }
        loadImages();
    },[activeCategory]);

    return (
        <div className="p-6 font-sans">

      {/* Category Selector Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
              ${activeCategory === cat 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}
            `}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {images.map((url, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
          >
            <img
              src={url}
              alt=""
              className="w-full h-32 object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
    );
}
