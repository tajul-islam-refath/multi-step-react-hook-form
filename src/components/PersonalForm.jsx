import { useContext } from "react";
import FormField from "./FormField ";
import { FormContext } from "../context/FormContext";

const PersonalForm = () => {
  const {
    form,
    personalFormRegister: register,
    personalFormErrors: errors,
  } = useContext(FormContext);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <FormField
            label="Father Name*"
            type="text"
            placeholder="Enter father name"
            name="fatherName"
            register={register}
            error={errors.fatherName}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="fatherEmail"
            register={register}
            error={errors.fatherEmail}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Mobile"
            type="tel"
            placeholder="+880xxxxxxxxx"
            name="fatherMobile"
            register={register}
            error={errors.fatherMobile}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Occupation"
            type="text"
            placeholder="Enter occupation"
            name="fatherOccupation"
            register={register}
            error={errors.fatherOccupation}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <div className="md:col-span-6">
          <FormField
            label="Mother Name*"
            type="text"
            placeholder="Enter mother name"
            name="motherName"
            register={register}
            error={errors.motherName}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="motherEmail"
            register={register}
            error={errors.motherEmail}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Mobile"
            type="tel"
            placeholder="+880xxxxxxxxx"
            name="motherMobile"
            register={register}
            error={errors.motherMobile}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Occupation"
            type="tel"
            placeholder="Enter occupation"
            name="motherOccupation"
            register={register}
            error={errors.motherOccupation}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalForm;
