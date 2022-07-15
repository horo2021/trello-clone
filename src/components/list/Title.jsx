import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./title.module.css";

const Title = (props) => {
  return (
    <div className={styles["ListCard_TitleWrapper__1RHAj"]}>
      <h3 className={styles["ListCard_Title__2o-Nm"]}> {props.listName}</h3>
      <span className={styles["material-icons"]}>
        <MoreHorizIcon />
      </span>
    </div>
  );
};

export default Title;
