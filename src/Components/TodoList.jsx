import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState();
  const [tasklist, setTasklist] = useState([]);

  const onChangeInput = (e) => {
    setTask(e.target.value);
  };
  const onClickButton = () => {
    setTasklist([...tasklist, task]);
  };
  // function onPressEnter(event) {
  //   if (event.key === "Enter") {
  //     setTasklist([...tasklist, task]);
  //   }
  // }

  return (
    <div className="Container">
      <div>
        <input
          type="text"
          placeholder="   Create a new todo..."
          // onKeyDown={() => {
          //   onPressEnter;
          // }}
          onChange={onChangeInput}
        ></input>
        <button name="Agregar" onClick={onClickButton}>
          +
        </button>
        <div>
          {tasklist.map((task) => {
            return <div>{task}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
export default TodoList;
