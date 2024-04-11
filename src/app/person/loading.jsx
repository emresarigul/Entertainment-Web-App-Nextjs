import React from "react";

export default function loading() {
  return (
    <div className="animate-pulse min-h-screen">
      <div className="flex flex-col lg:flex-row items-center px-5 pt-12 gap-5 md:gap-7 lg:gap-10">
        <div className="basis-2/6 mx-5 sm:mx-0">
          <div className="w-72 sm:w-[350px] h-[500px] bg-gray-200 border-2 rounded-lg"></div>
        </div>
        <div className="basis-5/6 space-y-5">
          <div className="w-40 h-4 bg-gray-200 mb-2"></div>
          <div className="w-16 h-4 bg-gray-200 mb-10"></div>
          <div className="w-20 h-4 bg-gray-200 mb-4"></div>
          <div className="space-y-2">
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
            <div className="w-72 sm:w-96 md:w-[700px] lg:w-full h-5 bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-5 pt-20 mb-5">
          <div className="h-4 w-16 bg-gray-200"></div>
          <div className="h-4 w-16 bg-gray-200"></div>
        </div>
        <div className="flex gap-10 overflow-x-scroll pb-10 pt-10 px-5">
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
          <div className="shrink-0 basis-40 md:basis-48 w-80 h-80 bg-gray-200 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}
