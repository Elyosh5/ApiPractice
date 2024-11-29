import React from "react";
import scss from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div>
      <div className={scss.profilePage}>
        <div className={scss.content}>
          <div className={scss.logIn}>
            <div className={scss.logInInputs}>
              <h1>LOG IN AS A SELLER</h1>

              <div className={scss.userName}>
                <h2>USERNAME</h2>
                <input type="text" />
              </div>
              <div className={scss.password}>
                <h2>PASSWORD</h2>
                <input type="text" />
              </div>
              <button>LOG IN AS A SELLER</button>
            </div>
            <div className={scss.notSeller}>
              <p>Not a seller?</p>
              <button>Log In as a User and start shopping!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
