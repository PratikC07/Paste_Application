import React, { useState } from "react";
import Box from "./Box";
import { useDispatch, useSelector } from "react-redux";
import { removePaste } from "../redux/pasteSlice";

const AllPastes = () => {
  const [search, setSearch] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  // console.log(pastes);

  const filteredPastes = pastes.filter((paste) => {
    return paste.title.toLowerCase().includes(search.toLowerCase());
  });

  // console.log(filteredPastes);
  function handleDelete(pasteId){
    dispatch(removePaste(pasteId));
  }

  return (
    <div className="p-8 mt-8 flex items-start flex-col">
      <input
        type="text"
        className="p-4 w-full h-10 rounded-md border-[1px] border-gray-300"
        placeholder="Search paste here...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="allPastes mt-4 w-full h-full flex flex-col rounded-md border-[1px] border-gray-300">
        <h1 className=" w-full h-18 p-4 text-4xl font-bold border-b-[1px] border-gray-300">
          All Pastes
        </h1>
        <div className="boxes flex flex-col gap-4 p-4">
          {filteredPastes.length > 0 ? (
            filteredPastes.map((item) => {
              return (
                <Box key={item._id} title={item.title} content={item.content} id={item._id} createdAt={item.createdAt} handleDelete={handleDelete} />
              );
            })
          ) : (
            <div className="text-2xl text-center w-full text-chileanFire-500">
              No Data Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPastes;
