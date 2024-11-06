import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { addPaste, updatePaste } from '../redux/pasteSlice';
    

  
const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const pastes = useSelector((state)=> state.paste.pastes);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  console.log(pasteId);
  
  const navigate = useNavigate();

  const createPaste = ()=>{
    const paste = {
      title: title,
      content: content,
      _id: pasteId ||
      Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };
    if(pasteId){
      dispatch(updatePaste(paste))
    }else{
      dispatch(addPaste(paste))
    }
    setTitle('')
    setContent('')
    
    setSearchParams({})
    navigate('/pastes');

  }

  useEffect(()=>{
    console.log("pasteId inside useEffect:", pasteId); 
    console.log("Pastes array inside useEffect:", pastes); 
    
    if(pasteId){
      const paste = pastes.find((p)=> p._id == pasteId);
      if(paste){
        setTitle(paste.title)
        setContent(paste.content)
      }
    }
  },[pasteId,pastes])


  return (
    <div className='flex flex-col w-full h-[94%] items-center'>
      <div className="upper flex items-center justify-between w-[90%] h-24 mt-8">
        <input type="text" className='w-[80%] mr-2 h-10 rounded-lg pl-2 border-[1px] border-gray-200' placeholder='Title' onChange={(e)=> setTitle(e.target.value)} value={title}/>
        <button className='bg-blue-600 text-white text-sm font-semibold  p-2 rounded-xl 'onClick= { createPaste}>
          {pasteId ? "Update Paste":"Create My Paste"}
        </button>
      </div>
      <div className="bottom w-[90%] h-[80%] ">
        <div className="b-copy flex items-center justify-between px-4 py-2 border-[1px] border-gray-200 rounded-t-md">
          <div className="dots flex gap-1.5 ">
            <div className='w-3 h-3 bg-red-600 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-600 rounded-full'></div>
            <div className='w-3 h-3 bg-green-600 rounded-full'></div>
          </div>
          <button className='text-white'>Copy</button>
        </div>
        <div className="b-content w-full h-[90%]">
          <textarea className='w-full p-4 h-[80%] focus-visible:ring-1 border-x-[1px]  border-b-[1px] border-gray-200 rounded-b-md' placeholder='Write Your Content Here....' style={{caretColor: "#000",}} onChange={(e)=> setContent(e.target.value)} value={content}></textarea>
        </div>
      </div>
    </div>
  )
}

export default Home
