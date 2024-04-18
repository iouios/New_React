import React from "react";
export default function Navbar() {
  return (
    <div class="border-2 ">
      <div className="border-2 text-black flex flex-row">
        <div className="basis-5/6 pl-8 p-2 ml-64">Untitle</div>
        <div className="flex content-center mt-2 ">
            <div className=" ">
              <button className="mr-2">Exit</button>
            </div>
            <div className="">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10">Save</button>
            </div>
          </div>
        </div>
    </div>
  );
}
