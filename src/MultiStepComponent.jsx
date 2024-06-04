import { useState, useRef, useEffect, useContext } from "react";
import { FormContext } from "./context/FormContext";

function MultiStepComponent({ steppers = [] }) {
  const { formStep, setFormStep, setCompleted, completed } =
    useContext(FormContext);

  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  const calculateWith = () => {
    return parseInt(((formStep - 1) / (steppers.length - 1)) * 100);
  };

  const calculateProgressBarWith = () => {
    return `calc(100% - ${margin.marginLeft + margin.marginRight}px)`;
  };

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[steppers.length - 1].offsetWidth / 2,
    });

    return () => {};
  }, [stepRef]);

  const nextStep = () => {
    setFormStep((prev) => {
      if (prev == steppers.length) {
        setCompleted(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const prevStep = () => {
    setFormStep((prev) => {
      if (prev == 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const ActiveCmponent = steppers[formStep - 1].Component;

  return (
    <div className="w-full h-screen py-4 mt-6 relative">
      <div className="w-full flex justify-between items-center">
        {steppers.map((step, i) => (
          <div
            className="flex flex-col items-center gap-4"
            key={i}
            ref={(el) => (stepRef.current[i] = el)}>
            <div
              className={`w-[30px] h-[30px]  text-white flex justify-center items-center rounded-full z-10 ${
                i + 1 < formStep || completed
                  ? "bg-green-600"
                  : i + 1 == formStep
                  ? "bg-blue-600"
                  : "bg-slate-400"
              }`}>
              {formStep > i + 1 || completed ? <span>&#10003;</span> : i + 1}
            </div>
            <div
              className={`uppercase font-bold ${
                i + 1 < formStep || completed ? "text-green-500" : ""
              }`}>
              {step.name}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          width: `${calculateProgressBarWith()}`,
          marginLeft: margin.marginLeft,
          marginRight: margin.marginRight,
        }}
        className="absolute  top-[5%] left-0 h-1 bg-black ">
        <div
          className="h-full w-0 bg-green-400 transition "
          style={{ width: `${calculateWith()}%` }}></div>
      </div>

      <div className=" w-full p-4 mt-4  bg-slate-300 rounded-lg ">
        <ActiveCmponent />
      </div>
      <div className=" flex justify-center items-center gap-4">
        <button
          className="bg-green-400 py-1 px-4 mt-8 rounded text-white "
          onClick={prevStep}>
          Prev
        </button>
        <button
          className="bg-green-400 py-1 px-4 mt-8 rounded text-white "
          onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MultiStepComponent;
