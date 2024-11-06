import React, { useEffect, useState } from "react";

import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ViewPaste = () => {

  const { id } = useParams();

  const pastes = useSelector((state)=>state.paste.pastes)

  const paste = pastes.filter((paste)=>paste._id === id)[0];

  // console.log(paste);

  return (
    <div className="flex px-4 flex-col w-full h-[94%] items-center">
      <div className="upper mt-2 p-4 flex items-center justify-between w-full h-24 ">
        <input
          type="text"
          className="w-full h-10 rounded-lg pl-2 border-[1px] border-gray-200"
          placeholder="Title"
          value={paste.title}
          disabled
        />
      </div>
      <div className="bottom px-4 w-full h-[80%] ">
        <div className="b-copy flex items-center justify-between px-4 py-2 border-[1px] border-gray-200 rounded-t-md">
          <div className="dots flex gap-1.5 ">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>
          <button
            className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
            onClick={() => {
              navigator.clipboard.writeText(paste.content);
              toast.success("Copied to Clipboard");
            }}
          >
            <Copy className="group-hover:text-sucess-500" size={20} />
          </button>
        </div>
        <div className="b-content w-full h-full">
          <textarea
            className="w-full p-4 h-[80%] focus-visible:ring-1 border-x-[1px]  border-b-[1px] border-gray-200 rounded-b-md"
            placeholder="Write Your Content Here...."
            style={{ caretColor: "#000" }}
            value={paste.content}
            disabled
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
