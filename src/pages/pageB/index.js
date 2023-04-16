import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./assets/styles.css";
const PageB = () => {
  const [data, setData] = useState(undefined);
  const location = useLocation();
  const navigate = useNavigate();
  const locationData = location?.state;

  useEffect(() => {
    if (locationData) {
      setData(locationData);
    }
  }, []);

  const goToNextPageHandler = () => {
    navigate("/search-page", { state: { option: data?.option } });
  };
  return (
    <div className="container">
      <h1>PageB</h1>
      <button onClick={goToNextPageHandler}>
        Dosya Sorgulama sayfasına git
      </button>
    </div>
  );
};

export default PageB;
