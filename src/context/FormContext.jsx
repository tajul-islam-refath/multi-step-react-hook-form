import { createContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [form, setForm] = useState({
    user: null,
  });

  return (
    <FormContext.Provider
      value={{
        formStep,
        setFormStep,
        setCompleted,
        form,
        setForm,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
