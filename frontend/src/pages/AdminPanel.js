import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";
import { IoMdHome } from "react-icons/io";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full  w-full  max-w-60 customShadow">
        <div className="h-32 mt-12 flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex justify-center">
           <Link to="/">
           {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
            
           </Link>
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <hr className="border-t-2 border-black mt-2 w-full" />
          <p className="text-xl  font-semibold text-green-500">{user?.role}</p>
          <hr className="border-t-2 border-black mt-2 w-full" />
        </div>

        {/***navigation */}
        <div>
          <nav className="grid p-4  text-xl mt-4 space-y-2">
            <Link to={"all-users"} className="px-2 py-1 flex items-center font-semibold hover:bg-slate-200">
            <IoMdHome /> All Users
            </Link>
            <Link to={"all-products"} className="px-2 py-1 flex items-center font-semibold hover:bg-slate-200">
            <IoMdHome /> All product
            </Link>
          </nav>
        </div>
      </aside>

      <main className="w-full h-full mt-2 p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
