import React, { useState } from "react";
import styles from "../styles/Card.module.css";

export default function CardItem(props) {
  const [editItem, setEditItem] = useState(false);
  const [updatedItemName, setUpdatedItemName] = useState(props.item.ItemName);

  const handleKeyPress = (ecode)=>{
    if(editItem){
        if(ecode === "Enter"){
          updateTaskItem();
        }
        if(ecode === "Escape"){
          cancelUpdate();
        }
    }
  }

  function cancelUpdate(){
    setEditItem(false);
    setUpdatedItemName(props.item.ItemName);
  }

  function updateTaskItem(){
    if(updatedItemName.trim() !== ""){
      setEditItem(false);
      props.saveTaskItem(props.item, updatedItemName);
    }else{
      alert("Task Item shouldn't be empty");
      setEditItem(false);
      setUpdatedItemName(props.item.ItemName);
    }
  }

  function FocusOut(){
    if(updatedItemName == props.item.ItemName){
      cancelUpdate();
    }
  }

  return (
    <div className={styles.cardTaskItem}>
      {!editItem && (
        <div className={styles.taskItem} key={props.item.Id}>
          <div className={styles.taskItemData}>
            <i
              className={`bi bi-check-circle ${styles.check}`}
              onClick={() => props.markItemComplete(props.item)}
            ></i>
            <p>{props.item.ItemName}</p>
          </div>
          <div>
            <i
              className={`bi bi-pen-fill px-2 ${styles.edit}`}
              onClick={() => setEditItem(true)}
            ></i>
            <i
              className={`bi bi-trash ${styles.delete}`}
              onClick={() => props.deleteItem(props.item)}
            ></i>
          </div>
        </div>
      )}
      {editItem && (
        <div className={styles.addTaskInput}>
          <input
            type={"text"}
            className={styles.taskInput}
            placeholder="Enter Task Item"
            value={updatedItemName}
            onChange={(val)=>{setUpdatedItemName(val.target.value)}}
            onKeyDown={e=>handleKeyPress(e.code)}
            maxLength={100}
            minLength={1}
            onBlur={FocusOut}
            autoFocus
            required
          />
          <span>
            <i
              className="bi bi-check"
              style={{ color: "green" }}
              onClick={() => updateTaskItem()}
            ></i>
          </span>
          <span onClick={() => {
            setEditItem(false);setUpdatedItemName(props.item.ItemName);}} style={{ color: "red" }}>
            x
          </span>
        </div>
      )}
    </div>
  );
}
