import React, { useCallback, useEffect, useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = ({callbackState, step}) => {
  const steps = ["Fecha", "Paquete", "Extras", "Descripción", "Resumen"];
  const [currentStep, setCurrentStep] = useState(step);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setCurrentStep(step)
  }, [step])

  return (
    <>
      <div className="flex justify-between w-1/2 ">
        {steps?.map((step, i) => (
          <div
            key={i} 
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={20} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
            
    </>
  );
};

export default Stepper;