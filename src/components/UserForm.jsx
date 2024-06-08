import { useContext } from "react";
import FormField from "./FormField ";
import { FormContext } from "../context/FormContext";

const UserForm = () => {
  const {
    form,
    userFormRegister: register,
    userFormErrors: errors,
  } = useContext(FormContext);

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <FormField
            label="First Name*"
            type="text"
            placeholder="Enter first name"
            name="firstName"
            register={register}
            error={errors.firstName}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Last Name*"
            type="text"
            placeholder="Enter last name"
            name="lastName"
            register={register}
            error={errors.lastName}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Email*"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            register={register}
            error={errors.email}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Mobile*"
            type="tel"
            placeholder="01xxxxxxxxx"
            name="mobile"
            register={register}
            error={errors.mobile}
          />
        </div>
        <div className="md:col-span-6">
          <FormField
            label="Address (Optional)"
            type="text"
            placeholder="Enter address"
            name="address"
            register={register}
          />
        </div>
      </div>
    </form>
  );
};

export default UserForm;
