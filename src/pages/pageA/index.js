import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup } from "../../components";
import "./assets/styles.css";

const PageA = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Set initial selected option

  const navigate = useNavigate();

  const goToNextPageHandler = () => {
    navigate("/page-b", { state: { option: selectedOption } });
  };
  return (
    <div className="container">
      <h1>PageA</h1>
      <RadioGroup setSelectedOption={setSelectedOption} />
      <button onClick={goToNextPageHandler}>
        Dosya Sorgulama sayfasına git
      </button>
    </div>
  );
};

export default PageA;
