import React, { useState } from "react";

const CategorySelector = () => {
  const [selected, setSelected] = useState("All");

  const categories = ["All", "Music", "Podcasts"];

  return (
    <div className="flex items-center gap-2 mt-4">
      {categories.map((category) => (
        <p
          key={category}
          onClick={() => setSelected(category)}
          className={`px-4 py-1 rounded-2xl cursor-pointer transition-colors duration-300 ${
            selected === category
              ? "bg-white text-black"
              : " bg-black text-white"
          } `}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default CategorySelector;
