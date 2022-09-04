import { useState } from "react";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import notify from "./notify";

const HomePage = ()=>{
    const [TaskBoardLists, setTaskBoardLists] = useState([]);
    function addNewTaskList() {
        const rand = Math.floor(100000 + Math.random() * 900000);
        const newTaskList = {
        TaskListID: rand,
        TaskListName: `New TaskList ${rand}`,
        TaskListItems: [],
        };
        const NewTaskListItems = [...TaskBoardLists, newTaskList];
        setTaskBoardLists(NewTaskListItems);
        notify({title: "", message: "Added New TaskList", type: "info", time:1500});
    }

    function deleteTaskList(TaskListID) {
        var filtered = TaskBoardLists.filter(function (value, index) {
        return value.TaskListID !== TaskListID;
        });
        setTaskBoardLists(filtered);
        notify({title: "", message: "Deleted TaskList", type: "danger", time:1500});
        
    }


    const updateTaskListName = (myupdatedTaskListName, TaskListID)=>{
      TaskBoardLists.forEach((item) => {
        if (item.TaskListID == TaskListID) {
          item.TaskListName = myupdatedTaskListName;
          notify({title: "", message: "Updated TaskList Name", type: "success", time:1200});
        }
      });
    }

    return (<div className={styles.homePage}>
        <h5 style={{padding:"5px", fontWeight:700, color:"black"}}>Main Board</h5>
        <div className={styles.grid}>
          {TaskBoardLists.map((item) => {
            return (
              <Card
                key={item.TaskListID}
                TaskListData={item}
                deleteTaskList={deleteTaskList}
                updateTaskListName={updateTaskListName}
              />
            );
          })}
          <div className={styles.CardController}>
            <button className={`fw-semibold overflow-hidden px-1 ${styles.customizedButton}`} onClick={addNewTaskList}> + New List </button>
          </div>
        </div>
    </div>);
}


export default HomePage;