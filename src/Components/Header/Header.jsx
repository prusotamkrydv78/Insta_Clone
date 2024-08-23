import React from "react";
import instaLogo from "../../assets/Logo/instaLogo.svg";
const Header = () => {
  return (
    <>
      <div>
        <div>
          <img src={instaLogo} alt="" />
        </div>
        <div>
          <div>
            <span></span>
            <h4>Home</h4>
          </div>
          <div>
            <span></span>
            <h4>Search</h4>
          </div>
          <div>
            <span></span>
            <h4>Explore</h4>
          </div>
          <div>
            <span></span>
            <h4>Reels</h4>
          </div>
          <div>
            <span></span>
            <h4>Messages</h4>
          </div>
          <div>
            <span></span>
            <h4>Notifications</h4>
          </div>
          <div>
            <span></span>
            <h4>Create</h4>
          </div>
          <div>
            <span></span>
            <h4>Profile</h4>
          </div>
        </div>
      </div>
      <div>
        
      <div>
            <span></span>
            <h4>Threds</h4>
          </div>
          <div>
            <span></span>
            <h4>More</h4>
          </div>
      </div>
    </>
  );
};

export default Header;
