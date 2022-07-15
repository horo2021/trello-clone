import React, { useState } from "react";
import styles from "./inputContainer.module.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/data";

const InputContainer = (props) => {
  const [cardTitle, setCardTitle] = useState("");
  const [showCardAdder, setShowCardAdder] = useState(true);
  const dispatch = useDispatch();

  const showFormHandler = () => {
    setShowCardAdder(false);
  };
  const hideFormHandler = () => {
    setShowCardAdder(true);
  };

  const inputValHandler = (e) => {
    setCardTitle(e.target.value);
  };
  const clientValSubmitHandler = () => {
    dispatch(addCard({ listId: props.listId, cardName: cardTitle }));
    setCardTitle("");
    setShowCardAdder(true);
  };
  return (
    <>
      {showCardAdder ? (
        <div>
          <div>
            <div
              onClick={showFormHandler}
              className={styles["NewTaskCard_AddMoreWrapper__1H5Zw"]}
            >
              <span className={styles["material-icons"]}>
                <AddIcon />
              </span>
              Add A card
            </div>
          </div>
        </div>
      ) : (
        <div>
          <form>
            <input
              className={styles["add-task-input"]}
              type="text"
              placeholder="Enter a title for this card..."
              onChange={inputValHandler}
            />
            <div className={styles["NewTaskCard_ButtonWrapper__hQfoT"]}>
              <button
                onClick={clientValSubmitHandler}
                className={styles["Button_ButtonWrapper__ufPdL"]}
              >
                <span className={styles["Button_Label__2Oqtp"]}>Add Card</span>
              </button>
              <span
                onClick={hideFormHandler}
                className={styles["material-icons"]}
              >
                <CloseIcon />
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default InputContainer;
