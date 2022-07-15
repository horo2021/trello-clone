import { refType } from "@mui/utils";
import { createSlice, current } from "@reduxjs/toolkit";
import { connectAdvanced } from "react-redux";
import { v4 as uuid } from "uuid";

const initialState = [
  {
    listId: uuid(),
    listName: "To Do",
    cards: [
      { cardName: "Helpdesk Call AA999", cardId: uuid() },
      { cardName: "Helpdesk Call BB999", cardId: uuid() },
    ],
  },
  {
    listId: uuid(),
    listName: "Development",

    cards: [
      { cardName: "Helpdesk Call CC999", cardId: uuid() },
      { cardName: "Helpdesk Call EE999", cardId: uuid() },
    ],
  },
  {
    listId: uuid(),
    listName: "Testing",

    cards: [{ cardName: "Helpdesk Call DD999", cardId: uuid() }],
  },
  {
    listId: uuid(),
    listName: "Done",
    cards: [
      { cardName: "Helpdesk Call GG999", cardId: uuid() },
      { cardName: "Helpdesk Call FF999", cardId: uuid() },
    ],
  },
];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const too = state.find((list) => {
        if (list.listId === action.payload.listId) {
          console.log("hey");
          return list;
        }
      });

      too.cards.push({ cardName: action.payload.cardName, cardId: uuid() });
    },
    addList: (state, action) => {
      state.push({
        listId: uuid(),
        listName: action.payload.listTitle,
        cards: [],
      });
    },
    dnd: (state, action) => {
      if (
        action.payload.destination.droppableId ===
        action.payload.source.droppableId
      ) {
        const refinedList = state.find((list) => {
          if (list.listId === action.payload.destination.droppableId) {
            return list;
          }
        });

        const listIndex = state.indexOf(refinedList);

        let temp = state[listIndex].cards[action.payload.source.index];

        state[listIndex].cards[action.payload.source.index] =
          state[listIndex].cards[action.payload.destination.index];
        state[listIndex].cards[action.payload.destination.index] = temp;
      } else {
        const destList = state.find((list) => {
          if (list.listId === action.payload.destination.droppableId) {
            return list;
          }
        });
        const sourceList = state.find((list) => {
          if (list.listId === action.payload.source.droppableId) {
            return list;
          }
        });
        const distIndex = state.indexOf(destList);
        const sourceIndex = state.indexOf(sourceList);
        let defuser = [];
        let removed;
        for (let i = 0; i < state[sourceIndex].cards.length; i++) {
          // console.log(action.payload.draggableId);
          if (
            state[sourceIndex].cards[i].cardId !== action.payload.draggableId
          ) {
            defuser.push(state[sourceIndex].cards[i]);
          } else if (
            state[sourceIndex].cards[i].cardId === action.payload.draggableId
          ) {
            removed = state[sourceIndex].cards[i];
          }
        }
        console.log(current(removed));
        state[sourceIndex].cards = defuser;
        state[distIndex].cards.splice(
          action.payload.destination.index,
          0,
          removed
        );
      }
    },
  },
});

export const { addCard, addList, dnd } = dataSlice.actions;

export default dataSlice.reducer;
