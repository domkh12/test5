import React from "react";

function CardTemplateDashboard({ imageSrc, title, onSelect, onPreview }) {
  return (
    <div className="relative p-2 group bg-gray-200 dark:bg-gray-900 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col w-full max-w-[350px] h-auto">
      <div className="">
        <button
          onClick={onPreview}
          className="text-gray-100 opacity-0 group-hover:opacity-100 bg-primary z-10 absolute left-[120px] top-[80px] px-7 py-2 rounded-md"
        >
          Preview
        </button>
      </div>

      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 rounded-t-md object-cover"
      />

      <div className="dark:bg-gray-800 dark:border-t-gray-900 rounded-b-md bg-white flex justify-between items-center px-3 py-2 border-t-[8px] border-gray-200">
        <h3 className="text-gray-900 text-lg dark:text-gray-100">{title}</h3>
        <button
          onClick={onSelect}
          className="bg-primary text-white px-7 py-2 rounded-md hover:bg-primary-hover transition-colors duration-300"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default CardTemplateDashboard;
