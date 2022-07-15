import React from "react";
import styles from "./kanbanBoard.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { style } from "@mui/system";

const KanbanBoard = () => {
  return (
    <div className={styles["BoardPage_TitleWrapper__3sDFs"]}>
      <h1 className={styles["BoardPage_BoardTitle__2KUPN"]}>Kanban Board</h1>
      <div className={styles["BoardPage_StarWrapper__2C9Gh"]}>
        <span className={styles["material-icons"]}>
          <StarBorderIcon />
        </span>
      </div>
      <div className={styles["BoardPage_Separator__E5myp"]}></div>
      <div className={styles["world-icon-con"]}>
        <button className={styles["Button_ButtonWrapper__ufPdL"]}>
          <img
            className={styles["Button_Icon__10bPz"]}
            src="https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg"
          />
        </button>
        <span className={styles["Button_Label__2Oqtp"]}>Public</span>
      </div>

      <div className={styles["BoardPage_Separator__E5myp"]}></div>
      <span className={styles["UserAvatar_DefaultAvatar__mzpr8"]}>AH</span>
    </div>
  );
};

export default KanbanBoard;
