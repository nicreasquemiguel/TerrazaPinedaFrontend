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
      <div className="flex justify-between">
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


      {/* { (
        <button
          className='btn'
          onClick={() => {
            currentStep > 1

              && setCurrentStep((prev) => prev - 1);
          }}
        >
          Regresar
        </button>
      )}   ---

      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Enviar solicitu" : "Next"}
        </button>
      )} */}
            
    </>
  );
};

export default Stepper;