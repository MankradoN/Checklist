import styles from "../styles/Home.module.css";
import Task, { TaskType } from "../src/task";
import Icon from "@material-ui/core/Icon";
import Head from "next/head";
import DateComponent from "../src/date";
import Taskwrapper from "../src/taskwrapper";
import { useState } from "react";
export default function Home() {
  const checkList: TaskType[] = [
    {
      title: "Book Club",
      duration: 10,
      priority: "high",
      description: "Read Where The Cradwdads Sings",
      image: "/book.jpeg",
    },
    {
      title: "Go for a bike ride ",
      duration: 6,
      priority: "medium",
      description:
        "travel to Richmond park to have a picnic and cycle by the deers ",
      image: "/biking.jpeg",
    },
  ];
  const [toDoState, setToDoState] = useState(checkList);
  const [doneState, setDoneState] = useState<TaskType[]>([]);
  const handleDoneTask = (task:TaskType) => {
    setToDoState(toDoState.filter((toDoTask)=>(toDoTask["title"] !==task["title"])))
    setDoneState([...doneState, task])

  };
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div>
        <Icon style={{ fontSize: 50, color: "orange" }}>add_circle</Icon>
        <DateComponent />
      </div>
      <Taskwrapper title="To do">
        {toDoState.map((task) => (
          <Task {...task} doneStateHandler={handleDoneTask} />
        ))}
      </Taskwrapper>
      <Taskwrapper title="Done">{doneState.map((donetask)=>(<Task {...donetask}  />))}</Taskwrapper>
    </div>
  );
}
