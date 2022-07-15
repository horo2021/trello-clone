import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./app.css";
import MainLayout from "./components/ui/main-layout/MainLayout";
import SideNavbar from "./components/ui/side-navbar/SideNavbar";
import SecondNavbar from "./components/ui/second-navbar/SecondNavbar";
import KanbanBoard from "./components/ui/kanban-board/KanbanBoard";
import List from "./components/list/List";
import NewList from "./components/newList/NewList";
import { DragDropContext } from "react-beautiful-dnd";
import { dnd } from "./redux/data";

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  //console.log(data);
  const onDragEndHandler = (result) => {
    const { destination, draggableId, source } = result;
    console.log(destination);
    console.log(draggableId);
    console.log(source);
    dispatch(dnd({ destination, draggableId, source }));
  };

  return (
    <>
      <MainLayout />
      <SideNavbar />
      <SecondNavbar />
      <KanbanBoard />
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className="card-list-cont">
          {data.map((list) => {
            return (
              <List
                key={list.listId}
                listId={list.listId}
                cards={list.cards}
                listName={list.listName}
              />
            );
          })}
        </div>
        <NewList />
      </DragDropContext>
    </>
  );
}

export default App;
