import Head from "next/head";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";
import CardController from "../components/cardController";
import { useState, useRef } from "react";


export default function Home() {
  const [TaskBoardLists, setTaskBoardLists] = useState([]);

  
  function addNewTaskList(){
    const rand = Math.floor(100000 + Math.random() * 900000);

    const newTaskList = {
      TaskListID: rand,
      TaskListName: `My Task List ${rand}`,
      TaskListItems: []
    };

    const NewTaskListItems = [...TaskBoardLists, newTaskList];
    setTaskBoardLists(NewTaskListItems);


  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks Board - Sai Shanmukkha</title>
        <meta name="description" content="Tasks Managing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavigationBar className={styles.nav}/>
        <CardController addNewTaskList={addNewTaskList}/>
        <div className={styles.grid}>
          {TaskBoardLists.map((e)=>{
            return <Card key={e.TaskListID} TaskListData={e} />            
          })}
        </div>
      </div>
    </div>
  );
}
