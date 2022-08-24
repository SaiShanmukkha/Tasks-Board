import Head from "next/head";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";
import CardController from "../components/cardController";
import { useState } from "react";
import cstyle from "../styles/CardController.module.css";


export default function Home() {
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks Board - Sai Shanmukkha</title>
        <meta name="description" content="Tasks Managing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavigationBar className={styles.nav} />
        {/* <CardController addNewTaskList={addNewTaskList} /> */}
        <h5 style={{padding:"5px"}}>Main Board</h5>
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
          <div className={cstyle.CardController}>
            <button className={`btn btn-outline-primary fw-semibold overflow-hidden px-1 ${cstyle.customizedButton}`} onClick={addNewTaskList}> + New List </button>
          </div>
        </div>
      </div>
    </div>
  );
}
