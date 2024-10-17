"use client";
import React, { useState } from "react";
import SideNav from "./_component/SideNav";
import Header from "./_component/Header";
import {UpdateCreditUsageContext} from "../(context)/UpdateCreditUsageContext"
import {TotalUsageContext} from "../(context)/TotalUsageContext"
function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [updateCreditUsage,setUpdateCreditUsage]=useState<any>();

  return (    
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
      <div className="bg-slate-100 min-h-screen">
        <div className="md:hidden p-4">
          <button
            onClick={toggleSidebar}
            className="p-2 focus:outline-none bg-blue-500 text-white rounded"
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
        <div
          className={`fixed bg-slate-100 h-full z-50 transition-transform transform md:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:block md:w-64`}
        >
          <SideNav />
        </div>
        <div className={`md:ml-64 p-4 transition-all duration-300`}>
          <Header />
          <div>{children}</div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden"
            onClick={toggleSidebar} 
          ></div>
        )}
      </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default Layout;
