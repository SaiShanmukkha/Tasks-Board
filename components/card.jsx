import React, { useState } from "react";
import styles from "../styles/Card.module.css";

export default function Card() {
  const [isInputActive, setIsInputActive] = useState(true);
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const [Items, setItems] = useState([
    {
      Id: 1,
      ItemName: "Item 1",
      Status: 0,
    },
    {
      Id: 2,
      ItemName: "Item 2",
      Status: 0,
    },
    {
      Id: 3,
      ItemName: "Item 3",
      Status: 0,
    },
    {
      Id: 4,
      ItemName: "Item 4",
      Status: 0,
    },
    {
      Id: 5,
      ItemName: "Item 5",
      Status: 0,
    },
  ]);
  const [CompletedItems, SetCompletedItems] = useState([]);

  const ShowTaskInputEntry = () => {
    setIsInputActive(false);
  };
  const HideTaskInputEntry = () => {
    setIsInputActive(true);
  };
  const toggleCompletedVisiblity = () => {
    console.log("clicked toggle");
    setToggleCompleted(!toggleCompleted);
  };

  function markItemComplete(item) {
    console.log("Mark Item Complete Called.");
    var filtered = Items.filter(function (value, index) {
      return value.Id !== item.Id;
    });
    setItems(filtered);
    const nCompletedItems = [item, ...CompletedItems];
    SetCompletedItems(nCompletedItems);
  }

  function MarkInComplete(item) {
    console.log("Mark Item as incomplete Called.");
    var filtered = CompletedItems.filter(function (value, index) {
      return value.Id !== item.Id;
    });
    SetCompletedItems(filtered);
    const nItems = [item, ...Items];
    setItems(nItems);
  }

  function addItem(TaskName) {}

  function deleteCompletedItem(item) {
    var filtered = CompletedItems.filter(function (value, index) {
      return value.Id !== item.Id;
    });
    SetCompletedItems(filtered);
  }

  function deleteItem(item) {
    var filtered = Items.filter(function (value, index) {
      return value.Id !== item.Id;
    });
    setItems(filtered);
  }



  return (
    <div className={styles.card}>
      <h6 className="">My Tasks</h6>
      {isInputActive && (
        <div className={styles.addTask} onClick={ShowTaskInputEntry}>
          <span>+</span>
          <p>Add a task</p>
        </div>
      )}
      {!isInputActive && (
        <div className={styles.addTaskInput}>
          <input
            type={"text"}
            className={styles.taskInput}
            placeholder="Enter Task Item"
            required
          />
          <span style={{ color: "green" }}>+</span>
          <span onClick={HideTaskInputEntry} style={{ color: "red" }}>
            x
          </span>
        </div>
      )}

      {Items.map((item) => {
        const [editItem, setEditItem] = useState(false);
        return (
          <div className={styles.taskItem} key={item.Id}>
            <div className={styles.taskItemData}>
              <i
                className={`bi bi-check-circle ${styles.check}`}
                onClick={() => markItemComplete(item)}
              ></i>
              <p>{item.ItemName}</p>
            </div>
            <div>
              <i className={`bi bi-pen-fill px-2 ${styles.edit}`} onClick={()=>setEditItem(true)}></i>
              <i
                className={`bi bi-trash ${styles.delete}`}
                onClick={() => deleteItem(item)}
              ></i>
            </div>
            {editItem && (
              <div className={styles.addTaskInput}>
                <input
                  type={"text"}
                  className={styles.taskInput}
                  placeholder="Enter Task Item"
                  required
                />
                <span><i class="bi bi-check" style={{ color: "green" }} onClick={()=>saveTaskItem(item.Id)}></i></span>
                <span onClick={()=>setEditItem(false)} style={{ color: "red" }}>
                  x
                </span>
              </div>
            )}
          </div>
        );
      })}

      <div className={styles.completedTasks}>
        <p>Completed({CompletedItems.length})</p>
        <i
          className={`bi bi-chevron-${toggleCompleted ? "up" : "down"}`}
          onClick={toggleCompletedVisiblity}
        ></i>
      </div>

      <div
        className={`${
          toggleCompleted ? styles.showCompleted : styles.hideCompleted
        }`}
      >
        {CompletedItems.map((item) => {
          return (
            <div className={styles.completedTaskItem}>
              <div className={styles.completedTaskItemData}>
                <i
                  className={`bi bi-check-circle-fill  ${styles.checked}`}
                  onClick={() => MarkInComplete(item)}
                ></i>
                <p>{item.ItemName}</p>
              </div>
              <div>
                <i
                  className={`bi bi-trash ${styles.delete}`}
                  onClick={() => deleteCompletedItem(item)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
