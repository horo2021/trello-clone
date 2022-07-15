import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <Draggable draggableId={props.cardId} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className={styles["ListCard_TaskListWrapper__2NKjK"]}
        >
          <div className={styles["ListCard_TaskCardWrapper__3Y0JF"]}>
            <div className={styles["TaskCard_MainContainer__249ZY"]}>
              <h3 className={styles["TaskCard_Message__35zIp"]}>
                {props.cardName}
              </h3>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
