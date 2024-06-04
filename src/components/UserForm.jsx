import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField ";
import { UserSchema } from "../validations/userFormSchema";
import { FormContext } from "../context/FormContext";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(UserSchema),
  });

  const { form, setForm } = useContext(FormContext);

  const onSubmit = async (data) => {
    console.log("SUCCESS", data);
    setForm((prevState) => ({ ...prevState, user: data }));
  };

  useEffect(() => {
    reset({
      ...form.user,
    });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button
        type="submit"
        className="py-2 px-4 mt-2 bg-green-500 text-white uppercase rounded hover:bg-green-400">
        Save
      </button>
    </form>
  );
};

export default UserForm;
