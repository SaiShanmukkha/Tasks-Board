"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Card.module.css";
import CardItem from "./CardItem";
import CompletedCardItem from "./completedCardItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import notify from "./notify";

export default function Card(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isTitleInputActive, setIsTitleInputActive] = useState(false);
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [updatedTitleName, setUpdatedTitleName] = useState(props.TaskListData.TaskListName);
  const TaskListID = props.TaskListData.TaskListID;
  const TaskListName = props.TaskListData.TaskListName;

  const [Items, setItems] = useState(props.TaskListData.TaskListItems);
  const [InCompleteItems, setInCompleteItems] = useState([]);
  const [CompletedItems, setCompletedItems] = useState([]);

  function updateItems(completedTasksItems, InCompletedTasksItems) {
    setCompletedItems(completedTasksItems);
    setInCompleteItems(InCompletedTasksItems);
  }

  useEffect(() => {
    const completedTasksItems = Items.filter(function (value, index) {
      return value.IsCompleted === true;
    });
    const InCompletedTasksItems = Items.filter(function (value, index) {
      return value.IsCompleted !== true;
    });
    updateItems(completedTasksItems, InCompletedTasksItems);
  }, [Items]);

  const handleKeyPress = (ecode) => {
    if (isInputActive) {
      if (ecode === "Enter") {
        addItem();
      }
      if (ecode === "Escape") {
        HideTaskInputEntry();
      }
    }
  };

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
    if (newItem.trim() !== "") {
      const nItem = {
        Id: Math.floor(100000 + Math.random() * 900000),
        ItemName: newItem.trim(),
        IsCompleted: false,
      };
      const nItems = [nItem, ...Items];
      setItems(nItems);
      setNewItem("");
      HideTaskInputEntry();
      notify({title: "", message: "Added New Item to List", type: "default", time:1000});
    } else {
      notify({title: "", message: "Item Shouldn't be Empty", type: "warning", time:1000});
      setNewItem("");
    }
  }

  function saveTaskItem(oitem, updatedItemName) {
    if (oitem.ItemName !== updatedItemName) {
      Items.forEach((item) => {
        if (item.Id == oitem.Id) {
          item.ItemName = updatedItemName;
        }
      });
      setItems(Items);
      notify({title: "", message: "Task Item updated", type: "success", time:1500});
    }else{
      notify({title: "", message: "No changes to Task Item", type: "default", time:1500});
    }
  }


  const UpdateTaskListName = (e)=>{
    setIsTitleInputActive(false);
    if(updatedTitleName.trim() != ""){
      if(updatedTitleName.trim() != props.TaskListData.TaskListName){
        props.updateTaskListName(updatedTitleName, TaskListID);
      }
      else{
        notify({title: "", message: "No Changes to make", type: "default", time:1000});
      }
    }else{
      setUpdatedTitleName(props.TaskListData.TaskListName);
      notify({title: "", message: "TaskList title Shouldn't be empty", type: "warning", time:1000});
    }
  }

  function deleteItem(itemId) {
    var filtered = Items.filter(function (value, index) {
      return value.Id !== itemId;
    });
    setItems(filtered);
    notify({title: "", message: "Deleted Task List Item", type: "danger", time:1000});
  }

  const deleteFunc = (e, TaskListName, TaskListID)=> {
    e.preventDefault();
    const flag = confirm(`Deleting Task List - ${TaskListName}`);
    if (flag) {
      props.deleteTaskList(TaskListID);
    }
  }

  const renameFunc = (e) =>{
    setIsTitleInputActive(true);
  }

  const HideTitleInputEntry = (e)=>{
    setUpdatedTitleName(props.TaskListData.TaskListName);
    setIsTitleInputActive(false);
  }

  const FocusOut = (e)=>{
    if(updatedTitleName === props.TaskListData.TaskListName){
      HideTitleInputEntry(e);
    }
  }

  const handleTitleKeyPress = (ecode)=>{
    if(isTitleInputActive){
      if(ecode.code === "Enter"){
          UpdateTaskListName();
        }
        if(ecode.code === "Escape"){
          HideTitleInputEntry();
        }
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {!isTitleInputActive ? (
          <>
            <h6 className={styles.cardTitle}>{TaskListName}</h6>
            <div className={styles.cardMenu}>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                style={{ width: "20px", height: "18px", cursor: "pointer" }}
              />
              <div className={styles.dropdownContent}>
                <p onClick={renameFunc}>Rename</p>
                <p onClick={(e) => deleteFunc(e, TaskListName, TaskListID)}>
                  Delete
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.addTitleInput}>
            <input
              type={"text"}
              className={styles.titleInput}
              value={updatedTitleName}
              placeholder="Enter Card Title"
              onChange={(e) => setUpdatedTitleName(e.target.value)}
              onKeyDown={handleTitleKeyPress}
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
              onClick={UpdateTaskListName}
            ></i>
            </span>
            <span onClick={HideTitleInputEntry} style={{ color: "red" }}>
              x
            </span>
          </div>
        )}
      </div>
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
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e.code)}
            maxLength={100}
            minLength={1}
            autoFocus
            required
          />
          <span style={{ color: "green" }} onClick={addItem}>
            +
          </span>
          <span onClick={HideTaskInputEntry} style={{ color: "red" }}>
            x
          </span>
        </div>
      )}

      {InCompleteItems.map((item) => {
        if (!item.IsCompleted) {
          return (
            <CardItem
              key={item.Id}
              item={item}
              markItemComplete={markItemComplete}
              deleteItem={deleteItem}
              saveTaskItem={saveTaskItem}
            />
          );
        }
      })}

      {CompletedItems.length > 0 && (
        <>
          <div className={styles.completedTasks}>
            <p>Completed Tasks ({CompletedItems.length})</p>
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
              if (item.IsCompleted) {
                return (
                  <CompletedCardItem
                    key={item.Id}
                    item={item}
                    markInComplete={MarkInComplete}
                    deleteCompletedItem={deleteItem}
                  />
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
}
