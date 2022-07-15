import React from "react";
import styles from "./list.module.css";
import Title from "./Title";
import Card from "../card/Card";
import InputContainer from "../input/InputContainer";
import { Droppable } from "react-beautiful-dnd";

const List = (props) => {
  return (
    <Droppable droppableId={props.listId}>
      {(provided) => (
        <div className={styles["ListCard_MainContainer__B0-tM"]}>
          <Title listName={props.listName} />
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.cards.map((card, index) => {
              return (
                <Card
                  key={card.cardId}
                  cardName={card.cardName}
                  cardId={card.cardId}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </div>
          <InputContainer listId={props.listId} />
        </div>
      )}
    </Droppable>
  );
};

export default List;
