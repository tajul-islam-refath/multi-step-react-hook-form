const FormField = (
  { label, type, placeholder, name, register, error, valueAsNumber },
  props
) => {
  return (
    <>
      <label
        htmlFor={name}
        className="text-gray-500 font-sans font-medium text-sm md:text-lg">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        {...props}
        className={`block w-full p-2 rounded outline-none focus:border focus:border-green-400 ${
          error ? "border border-red-400" : ""
        }`}
      />{" "}
      {error && <span className="text-red-500">{error.message}</span>}
    </>
  );
};

export default FormField;
