import React, { useState } from "react";
import styles from "./assets/css/styles.css";
import TaskList from "./TaskList";

const Card = ({ no, title, description, status }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [tasks, setTasks] = useState([]);


  const styleSideColor = {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    width: 4,
    height: "100%",
    backgroundColor: status === "ToDo" ? "blue" : status === "Doing" ? "green" : "yellowgreen",
  };

  const changeTaskDone = async (no, done) => {
    try {
      const response = await fetch(`/api/task/${no}`, {
        method: "put",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: `done=${done}`,
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      const newTasks = update(tasks, {
        [tasks.findIndex((task) => task.no === json.data.no)]: {
          done: {
            $set: json.data.done,
          },
        },
      });

      setTasks(newTasks);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (taskName) => {
    try {
      const newTask = {
        no: null,
        name: taskName,
        done: "N",
        cardNo: no,
      };

      const response = await fetch(`/api/task`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks([json.data, ...tasks]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.Card}>
      <div style={styleSideColor} />
      <div
        className={showDetails ? [styles.Card__Title, styles.Card__Title__Open].join(" ") : styles.Card__Title}
        onClick={async () => {
          if (!showDetails) {
            try {
              const response = await fetch(`/api/task?cardNo=${no}`, {
                method: "get",
                headers: {
                  Accept: "application/json",
                },
              });

              if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
              }

              const json = await response.json();
              if (json.result !== "success") {
                throw new Error(`${json.result} ${json.message}`);
              }

              setTasks(json.data);
            } catch (err) {
              console.log(err.message);
            }
          }

          setShowDetails(!showDetails);
        }}
      >
        {title}
      </div>
      {showDetails ? (
        <div className={styles.Card__Details}>
          {description}
          <TaskList cardNo={no} tasks={tasks} callbackAddTask={addTask} callbackChangeTaskDone={changeTaskDone} />
        </div>
      ) : null}
    </div>
  );
};

export default Card;
