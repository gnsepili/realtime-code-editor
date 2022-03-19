import React from "react";

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/logo2.png" alt="code-sync-logo" class="logo" />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USER NAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invitation then create a &nbsp;
            <a href="" className="createNewRoomBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Build with ❤️ by &nbsp;
          <a href="https://www.linkedin.com/in/gnsepili/" target="_blank">Ganesh</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
