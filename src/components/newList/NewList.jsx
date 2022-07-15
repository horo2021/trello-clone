import React, { useState } from "react";
import styles from "./newList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { addList } from "../../redux/data";

const NewList = () => {
  const [showList, setShowList] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const closeFormHandler = () => {
    setShowList(true);
  };
  const showFormHandler = () => {
    setShowList(false);
  };

  const inputValList = (ev) => {
    setInputValue(ev.target.value);
  };

  const clientListNameHandler = () => {
    dispatch(addList({ listTitle: inputValue }));
    setInputValue("");
    setShowList(true);
  };
  return (
    <>
      {showList ? (
        <div
          onClick={showFormHandler}
          className={styles["NewListCard_NewListWrapper__3rH_D"]}
        >
          <div className={styles["NewListCard_AddMoreWrapper__32E0Q"]}>
            <span className={styles["material-icons"]}>
              <AddIcon />
            </span>
            <span>add another list</span>
          </div>
        </div>
      ) : (
        <div className={styles["form-list"]}>
          <input
            className={styles["NewListCard_InputBox__PuPqb"]}
            placeholder="enter list title"
            onChange={inputValList}
          />
          <div className={styles["NewTaskCard_ButtonWrapper__hQfoT"]}>
            <button
              onClick={clientListNameHandler}
              className={styles["add-list-btn"]}
            >
              add list
            </button>
            <span
              onClick={closeFormHandler}
              className={styles["material-icons"]}
            >
              <CloseIcon />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default NewList;
