import React from "react";
import "./Home.css";
import { IoIosMore } from "react-icons/io";
import followedImg from "./image.png";
import video from "./video.mp4";
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import saved from "./saved.png";
const Home = () => {
  return (
    <div className="flex">
      <div className="h-lvh w-[48rem] py-[1.5rem] px-[10px]">
        <div className="flex gap-2">
          <FollowedUserStatus />
          <FollowedUserStatus />
          <FollowedUserStatus />
        </div>
        <div className="flex flex-col gap-6  mt-[3rem] pl-[3rem]">
          <FollowerPosts />
          <FollowerPosts />
          <FollowerPosts />
          <FollowerPosts />
          <FollowerPosts />
          <FollowerPosts />
          <FollowerPosts />
        </div>
      </div>
      <div className="SuggestionAndAccount ">
        <SuggestionAndAccount />
      </div>
    </div>
  );
};

export default Home;

const FollowedUserStatus = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[4rem] w-[4rem] ">
      <div className="border-[3px] rounded-full p-[2px] border-solid border-black  ">
        <img
          src={followedImg}
          alt=""
          className="rounded-full h-full w-[100%]"
        />
      </div>
      <span className="text-[13px]">senior8432</span>
    </div>
  );
};

const FollowerPosts = () => {
  return (
    <div className="w-[75%] flex flex-col gap-2">
      <div>
        <div className="flex justify-between pr-4">
          <div className="flex gap-4">
            <div>
              <img
                src={followedImg}
                alt=""
                className="rounded-full h-[3rem] w-[3rem]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[13px] font-bold">senior8432</span>
              <span className="text-[#b3b3b3] text-[14px]">
                Sarah Schachner•Voices of Fornburg
              </span>
            </div>
          </div>
          <div className="text-[1.5rem] flex justify-center items-center">
            <IoIosMore />
          </div>
        </div>
      </div>
      <div className="h-[585px] w-full flex justify-center bg-black rounded-md ">
        <video src={video} autoPlay loop muted className="w-[468px]"></video>
      </div>
      <div className="flex justify-between ">
        <div className="flex text-[25px] gap-4">
          <FaRegHeart />

          <FiMessageCircle />

          <FiSend />
        </div>
        <div>
          <img src={saved} alt="" className="w-[24px] h-[24px]" />
        </div>
      </div>

      <span className="font-bold">999 likes</span>
      <div className="flex flex-col gap-[8px]">
        <div>
          <span className="font-bold">senior8432</span> Once in a lifetime
          opportunity to witness volcanic eruption. Let me tell you, it’s
          mesmerising and scary at the same time
        </div>
        <div className="text-[#b3b3b3]">View all 5 comments</div>
        <div className="border-b-2 border-b-[#b3b3b3]">
          <input
            type="text"
            name="addComment"
            id="addComment"
            placeholder="Add a comment..."
            className="w-full outline-none pb-4 "
          />
        </div >
      </div>
    </div>
  );
};

const SuggestionAndAccount = () => {
  return (
    <>
      <div className="flex gap-[16px] items-center">
        <div className="flex items-center justify-center h-[3rem] w-[3rem]">
          <div>
            <img
              src={followedImg}
              alt=""
              className="rounded-full h-full w-[100%]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">senior8432</span>
          <span className="text-[#b3b3b3]">Ramudgar Mandal</span>
        </div>
        <div className="ml-[5vw] font-bold">
          <h5 className="text-[#0095f6]">Switch</h5>
        </div>
      </div>
      <div className="mt-[2rem]">
        <div className="flex justify-between pr-8">
          <h4 className="font-bold text-[#b3b3b3] ">Suggested for you</h4>
          <h5>See All</h5>
        </div>
        <div className="mt-[2rem] flex flex-col gap-6">
          <SuggestionsAccount />
          <SuggestionsAccount />
          <SuggestionsAccount />
        </div>
      </div>
    </>
  );
};
const SuggestionsAccount = () => {
  return (
    <div className="flex gap-[16px] items-center">
      <div className="flex items-center justify-center h-[3rem] w-[3rem]">
        <div>
          <img
            src={followedImg}
            alt=""
            className="rounded-full h-full w-[100%]"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">senior8432</span>
        <span className="text-[#b3b3b3] text-[14px]">Suggested for you</span>
      </div>
      <div className="ml-[6vw] font-bold">
        <h5 className="text-[#0095f6]">Follow</h5>
      </div>
    </div>
  );
};
