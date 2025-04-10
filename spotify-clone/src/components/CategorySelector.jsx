import React, { useState } from "react";

const CategorySelector = () => {
  const [selected, setSelected] = useState("All");

  const categories = ["All", "Music", "Podcasts"];

  return (
    <div className="flex items-center gap-4 mt-4 flex-wrap">
      {categories.map((category) => {
        const isSelected = selected === category;
        return (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`w-[100px] h-[50px] my-3 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md
              ${!isSelected && "hover:scale-105 hover:shadow-lg"}
              before:absolute before:top-0 ${
                isSelected ? "before:left-0" : "before:-left-full"
              }
              before:w-full before:h-full
              before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)]
              before:transition-all before:duration-500 before:ease-in-out before:z-[-1]
              before:rounded-full text-white rounded-full z-[1]`}
          >
            <span className="z-[1]">{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategorySelector;
