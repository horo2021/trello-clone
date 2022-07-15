import React from "react";
import styles from "./mainLayout.module.css";
import download from "../../../assets/download.png";
import SearchIcon from "@mui/icons-material/Search";

const MainLayout = () => {
  return (
    <header className={styles["Topbar_MainContainer__2mNHS"]}>
      <div className={styles["Topbar_LeftMenu__3lgvo"]}>
        <button className={styles["Button_ButtonWrapper__ufPdL"]}>
          <img
            className={styles["Button_Icon__10bPz"]}
            src="https://trello-replica.web.app/static/media/apps_white.2aa687f0.svg"
          />
        </button>
        <div className={styles["Topbar_MenuItem__1YSMm"]}>
          <p className={styles["Topbar_Logo__1YVIE"]}></p>
        </div>
        <div className={styles["Topbar_MenuItem__1YSMm"]}>
          <span>Workspaces</span>
          <img className={styles["Topbar_ArrowDown__2DVhC"]} src={download} />
        </div>
        <div className={styles["Topbar_MenuItem__1YSMm"]}>
          <span>Recent</span>
          <img className={styles["Topbar_ArrowDown__2DVhC"]} src={download} />
        </div>
        <div className={styles["Topbar_MenuItem__1YSMm"]}>
          <span>Starred</span>
          <img className={styles["Topbar_ArrowDown__2DVhC"]} src={download} />
        </div>
        <div className={styles["Topbar_MenuItem__1YSMm"]}>
          <span>Templates</span>
          <img className={styles["Topbar_ArrowDown__2DVhC"]} src={download} />
        </div>
        <button className={styles["Button_DarkButton__2frN1"]}>
          <span className="Button_Label__2Oqtp">Create</span>
        </button>
      </div>
      <div className={styles["Topbar_RightMenu__2LLBS"]}>
        <div className={styles["Topbar_SearchWrapper__USPIU"]}>
          <input
            className={styles["Topbar_SearchInput__3q1gI"]}
            type="search"
            placeholder="Search"
          />
          <span className={styles["material-icons"]}>
            <SearchIcon />
          </span>
        </div>
        <button className={styles["Button_ButtonWrapper__ufPdL"]}>
          <img
            className={styles["Button_Icon__10bPz"]}
            src="https://trello-replica.web.app/static/media/info.23e92631.png"
          ></img>
        </button>
        <button className={styles["Button_ButtonWrapper__ufPdL"]}>
          <img
            className={styles["Button_Icon__10bPz"]}
            src="https://trello-replica.web.app/static/media/notification.c7957132.png"
          ></img>
        </button>
        <span className={styles["UserAvatar_DefaultAvatar__mzpr8"]}>QK</span>
      </div>
    </header>
  );
};

export default MainLayout;
