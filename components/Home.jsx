import { useState } from "react";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

const HomePage = (props)=>{
    const [TaskBoardLists, setTaskBoardLists] = useState([]);
    function addNewTaskList() {
        const rand = Math.floor(100000 + Math.random() * 900000);
        const newTaskList = {
        TaskListID: rand,
        TaskListName: `My TaskList ${rand}`,
        TaskListItems: [],
        };
        const NewTaskListItems = [...TaskBoardLists, newTaskList];
        setTaskBoardLists(NewTaskListItems);
    }

    function deleteTaskList(TaskListID) {
        var filtered = TaskBoardLists.filter(function (value, index) {
        return value.TaskListID !== TaskListID;
        });
        setTaskBoardLists(filtered);
    }
    return (<div className={styles.homePage}>
        <h5 style={{padding:"5px", fontWeight:700, color:"#fff"}}>Main Board</h5>
        <div className={styles.grid}>
          {TaskBoardLists.map((item) => {
            return (
              <Card
                key={item.TaskListID}
                TaskListData={item}
                deleteTaskList={deleteTaskList}
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