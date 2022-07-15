import React from "react";
import styles from "./secondNavbar.module.css";
import CloseIcon from "@mui/icons-material/Close";

const SecondNavbar = () => {
  return (
    <div className={styles["BoardPage_TopStrip__1YGJh"]}>
      <div>
        <img
          className={styles["BoardPage_EarthIcon__20QPg"]}
          src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg"
        />
        <span className={styles["BoardPage_Message__1W-I1"]}>
          This board is set to public. Board admins can change its visibility
          setting at any time.
        </span>
        <a className={styles["BoardPage_KnowMore__xyQE4"]}>Learn more here</a>
      </div>
      <span className={styles["material-icons"]}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default SecondNavbar;
