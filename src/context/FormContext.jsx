import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../validations/userFormSchema";
import { PersonalSchema } from "../validations/personalFormSchema";
import { FilesSchema } from "../validations/filesFormSchema";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [form, setForm] = useState({
    user: null,
  });

  // user form
  const {
    register: userFormRegister,
    formState: { errors: userFormErrors },
    getValues: userFormGetValues,
    trigger: userFormTrigger,
  } = useForm({
    resolver: zodResolver(UserSchema),
  });

  // personal form
  const {
    register: personalFormRegister,
    formState: { errors: personalFormErrors },
    getValues: personalFormGetValues,
    trigger: personalFormTrigger,
  } = useForm({
    resolver: zodResolver(PersonalSchema),
  });

  // files form
  const filesForm = useForm({
    resolver: zodResolver(FilesSchema),
  });

  const onSubmit = async () => {
    let isUserFormValid = await userFormTrigger();
    if (!isUserFormValid) {
      setFormStep(1);
      return;
    }

    let isPersonalFormValid = await personalFormTrigger();
    if (!isPersonalFormValid) {
      setFormStep(2);
      return;
    }

    let isFilesFormValid = await filesForm.trigger();
    if (!isFilesFormValid) {
      setFormStep(4);
      return;
    }

    console.log(userFormGetValues());
    console.log(personalFormGetValues());
    console.log(filesForm.getValues());
  };

  return (
    <FormContext.Provider
      value={{
        formStep,
        setFormStep,
        setCompleted,
        form,
        userFormRegister,
        userFormErrors,
        personalFormRegister,
        personalFormErrors,
        filesForm,
        onSubmit,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
