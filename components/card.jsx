import React, { useState } from "react";
import styles from "../styles/Card.module.css";
import CardItem from "./CardItem";
import CompletedCardItem from "./completedCardItem";

export default function Card(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [TaskListName, setTaskListName] = useState(props.TaskListData.TaskListName);
  const [Items, setItems] = useState(props.TaskListData.TaskListItems);


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
    setToggleCompleted(!toggleCompleted);
  };

  function markItemComplete(item) {
    var filtered = Items.filter(function (value, index) {
      return value.Id !== item.Id;
    });
    item.IsCompleted = true;
    const nItems = [item, ...filtered];
    setItems(nItems);
  }
  
  function MarkInComplete(item) {
    var filtered = Items.filter(function (value, index) {
      return value.Id !== item.Id;
    });
    item.IsCompleted = false;
    const nItems = [item, ...filtered];
    setItems(nItems);
  }

  function addItem() {
    if(newItem.trim() !== ""){
        const nItem = {
            Id: Math.floor(100000 + Math.random() * 900000),
            ItemName: newItem.trim(),
            IsCompleted: false
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

  function deleteItem(itemId) {
    var filtered = Items.filter(function (value, index) {
      return value.Id !== itemId;
    });
    setItems(filtered);
  }

  return (
    <div className={styles.card}>
      <h6 className="">{TaskListName}</h6>
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
        if(!item.IsCompleted){
          return (
            <CardItem key={item.Id} item={item} markItemComplete={markItemComplete} deleteItem={deleteItem} saveTaskItem={saveTaskItem}/>
          );
        }
      })}

      <div className={styles.completedTasks}>
        <p>Completed({Items.length})</p>
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
        {Items.map((item) => {
          if(item.IsCompleted){
            return (
              <CompletedCardItem key={item.Id} item={item} markInComplete={MarkInComplete} deleteCompletedItem={deleteItem} />
            );
          }
        })}
      </div>
    </div>
  );
}
