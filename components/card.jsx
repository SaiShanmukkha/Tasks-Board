import React, { useState } from "react";
import styles from "../styles/Card.module.css";
import CardItem from "./CardItem";
import CompletedCardItem from "./completedCardItem";

export default function Card() {
  const [isInputActive, setIsInputActive] = useState(false);
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [Items, setItems] = useState([]);
  const [CompletedItems, SetCompletedItems] = useState([]);

  const handleKeyPress = (ecode)=>{
    if(isInputActive){
        if(ecode === "Enter"){
            addItem();
        }
        if(ecode === "Escape"){
            HideTaskInputEntry();
          }
    }
  }

  const ShowTaskInputEntry = () => {
    setNewItem("");
    setIsInputActive(true);
  };
  const HideTaskInputEntry = () => {
    setNewItem("");
    setIsInputActive(false);
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

  function addItem() {
    if(newItem.trim() !== ""){
        const nItem = {
            Id: Math.floor(100000 + Math.random() * 900000),
            ItemName: newItem.trim()
        };
        const nItems = [nItem, ...Items];
        setItems(nItems);
        setNewItem("");
        HideTaskInputEntry();
    }else{
        alert("Value Shouldn't be Empty");
        setNewItem("");
    }
  }

  function saveTaskItem(oitem, updatedItemName){
        if(oitem.ItemName !== updatedItemName){
            Items.forEach((item)=>{
                if(item.Id == oitem.Id){
                    item.ItemName = updatedItemName;
                }
            });
            setItems(Items);
        }
    }

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
      {!isInputActive && (
        <div className={styles.addTask} onClick={ShowTaskInputEntry}>
          <span>+</span>
          <p>Add a task</p>
        </div>
      )}
      {isInputActive && (
        <div className={styles.addTaskInput}>
          <input
            type={"text"}
            className={styles.taskInput}
            value={newItem}
            placeholder="Enter New Task Item"
            onChange={(e)=>setNewItem(e.target.value)}
            onKeyDown={(e)=>handleKeyPress(e.code)}
            maxLength={100}
            minLength={1}
            autoFocus
            required
          />
          <span style={{ color: "green" }} onClick={addItem}>+</span>
          <span onClick={HideTaskInputEntry} style={{ color: "red" }}>
            x
          </span>
        </div>
      )}

      {Items.map((item) => {
        return (
          <CardItem key={item.Id} item={item} markItemComplete={markItemComplete} deleteItem={deleteItem} saveTaskItem={saveTaskItem}/>
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
            <CompletedCardItem key={item.Id} item={item} markInComplete={MarkInComplete} deleteCompletedItem={deleteCompletedItem} />
          );
        })}
      </div>
    </div>
  );
}
