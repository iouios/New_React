import React from "react";
import Navbar from "../../Components/Layouts/Navbar.jsx";
import Sidebar from "../../Components/Layouts/Sidebar.jsx";
import TopNav from "../../Components/Layouts/TopNav.jsx";
import Editor from "../../Components/Layouts/Editor.jsx";

export default function Template() {
  return (
    <div >
      <Sidebar />
      <TopNav />
      <div className="ml-64">Let’s create your template</div>
      <div>
      <div className="border-2 text-black flex flex-row">
        <div className="basis-5/6 pl-8 p-2 ml-64">Your template</div>
        <div className="flex content-center mt-2 ">
            <div className="">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 mr-10">Create new template</button>
            </div>
          </div>
          </div>

          </div>
      </div>

  );
};