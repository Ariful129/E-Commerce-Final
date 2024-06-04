import React, { useState, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import uploadProfile from "../helpers/uploadProfile";
import SummaryApi from "../common";
import { toast } from 'react-toastify';

const MyProfile = () => {
  const user = useSelector((state) => state?.user?.user);
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    if (user && user.profilePic) {
      setProfilePic(user.profilePic);
    }
  }, [user]);

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const uploadImageCloudinary = await uploadProfile(file);
        setProfilePic(uploadImageCloudinary.url);
      } catch (error) {
        toast.error("Error uploading image");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      _id: user._id,
      profilePic,
    };

    try {
      const response = await fetch(SummaryApi.uploadProfile.url, {
        method: SummaryApi.uploadProfile.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
        // Optionally update local state or redux store here
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8">
      <div className="h-full">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div className="flex justify-between">
              <span className="text-xl font-semibold block">MyProfile</span>
              <a className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                Edit
              </a>
            </div>
            <span className="text-gray-600">
              This information is secret so be careful
            </span>
            <div className="w-full p-8 mx-2 flex justify-center">
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  className="w-60 h-60 rounded-full"
                  alt={user?.name}
                />
              ) : (
                <span className="text-8xl">
                  <FaRegCircleUser />
                </span>
              )}
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label>
                  <div className="text-center border-2 rounded-xl cursor-pointer">
                    Upload Photo
                  </div>
                  <input
                    type="file"
                    id="uploadImageInput"
                    className="hidden"
                    onChange={handleUploadProduct}
                  />
                </label>
                <button className="px-3 py-2 bg-green-500 mt-2 flex mx-auto rounded-xl text-white mb-10 hover:bg-red-700">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded shadow p-6">
              <div className="pb-6">
                <label htmlFor="name" className="font-bold text-gray-700 block pb-1">
                  Name:
                </label>
                <div className="flex">
                  <input
                    disabled
                    id="username"
                    className="border-1 rounded-r px-4 py-2 w-full"
                    type="text"
                    value={user?.name || ""}
                  />
                </div>
              </div>
              <div className="pb-4">
                <label htmlFor="about" className="font-bold text-gray-700 block pb-1">
                  Email:
                </label>
                <input
                  disabled
                  id="email"
                  className="border-1 rounded-r px-4 py-2 w-full"
                  type="email"
                  value={user?.email || ""}
                />
              </div>
              <div className="pb-4">
                <label htmlFor="about" className="font-bold text-gray-700 block pb-1">
                  Role:
                </label>
                <input
                  disabled
                  id="role"
                  className="border-1 rounded-r px-4 py-2 w-full"
                  type="text"
                  value={user?.role || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
