import React from "react";

export default function loading() {
  return (
    <div className="bg-blackss animate-pulse">
      <div className="w-full h-40 sm:h-96 bg-gray-200 mb-10"></div>
      <div className="max-w-sm h-6 rounded-3xl bg-gray-200 grow-0 shrink-0 mb-5"></div>
      <div className="max-w-sm h-6 rounded-3xl bg-gray-200 grow-0 shrink-0 mb-5"></div>
      <div className="max-w-[10rem] h-6 rounded-3xl bg-gray-200 grow-0 shrink-0 mb-5"></div>
      <div className="flex gap-5 overflow-auto">
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
        <div className="w-40 h-60 rounded-3xl bg-gray-200 grow-0 shrink-0"></div>
      </div>
    </div>
  );
}
