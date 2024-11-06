import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Eye, Copy,PencilLine, Calendar } from 'lucide-react';
import "./Box.css";
import toast from "react-hot-toast";
const Box = ({ title, content, id, createdAt, handleDelete}) => {


  const formattedDate = new Date(createdAt).toLocaleDateString('en-US',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })


  const truncatedContent =
    content.length > 50 ? content.substring(0, 50) + "..." : content;
  const truncatedTitle =
    title.length > 30 ? title.substring(0, 30) + "..." : title;
  return (
    <div className="main flex items-center justify-between  p-4 border-[1px] border-gray-300 rounded-md flex-wrap">
      <div className="  content w-[65%] h-24 flex flex-col justify-evenly ">
        <h1 className="text-3xl font-semibold">{truncatedTitle}</h1>
        <p className="text-sm text-gray-500">{truncatedContent}</p>
      </div>
      <div className="side w-[200px] h-24 flex flex-col justify-around">
        <div className="btns w-full flex gap-2 items-center justify-end pr-1">
          <button className="p-2 rounded-md border-[1px] border-gray-400 group hover:border-blue-500"><Link to={`/?pasteId=${id}`}><PencilLine size={20} className="group-hover:text-blue-500" /></Link></button>
          <button className="p-2 rounded-md border-[1px]  border-gray-400 group hover:border-pink-500" onClick={()=>{handleDelete(id)}}><Trash2 size={20} className="group-hover:text-pink-500"/></button>
          <button className="p-2 rounded-md border-[1px]  border-gray-400 group hover:border-orange-500"><Link to={`/pastes/${id}`}><Eye size={20} className="group-hover:text-orange-500"/></Link></button>
          <button className="p-2 rounded-md border-[1px] border-gray-400 group hover:border-green-500" onClick={()=>{
            navigator.clipboard.writeText(content);
            toast.success("Copied to Clipboard");
          }}><Copy size={20} className="group-hover:text-green-500"/></button>
        </div>
        <div className="date flex items-center gap-2 justify-end pr-1">
          <button><Calendar size={19}/></button>
          <h2>{formattedDate}</h2>
        </div>
      </div>
    </div>
  );
};

export default Box;
