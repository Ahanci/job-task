import React from "react";
import "./assets/mainPage.css";
import { Navigate, useNavigate } from "react-router-dom";


const MainPage = () => {
  const navigate = useNavigate();

  const goToTasksHandler = () => {
    navigate("/page-a", {state:{data:"hopp"}});
  };
  return (
    <article className="mainContainer">
      <h1>Task Hakkında</h1>
      <p>
        Öncelikle "Task Oluştur" butonuna tıkladığınızda istenilen select box'ın
        bulunduğu sayfaya yönlendirileceksiniz, oradan sonra işlemleri sırayla
        kontrol edebilirsiniz.
      </p>
      <div className="buttonContainer">
        <button className="taskButton" onClick={goToTasksHandler}>
          Task Oluştur
        </button>
      </div>
    </article>
  );
};

export default MainPage;
