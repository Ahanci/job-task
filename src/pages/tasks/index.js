import React, { useState, Suspense, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SharedSelect } from "../../components";
import { pageData } from "../../data";
import FormItems from "../formItems";
import "./assets/styles.css";

const Tasks = () => {
  const navigate = useNavigate();
  const [taskType, setTaskType] = useState(undefined);
  const [value, setValue] = useState(undefined);
  const location = useLocation();
  const data = location?.state;

  useEffect(() => {
    if (!data?.applicationNo) {
      navigate("/");
    }
  }, []);

  const completeTaskHandler = () => {
    console.log('"hopp"', "hopp");
  };

  return (
    <div>
      <h1 className="header">Task Oluşturma Sayfası</h1>
      <div className="tasksContainer">
        <SharedSelect setValue={setTaskType} value={taskType} data={pageData} />
        <h2>Marka: {data?.applicationNo}</h2>
      </div>
      <div className="formItemContainer">
        {taskType && <FormItems type={taskType} setValue={setValue} />}
      </div>
    </div>
  );
};

export default Tasks;
