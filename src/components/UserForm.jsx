const UserForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-6">
        <label
          htmlFor="firstName"
          className="text-gray-500 font-sans font-medium text-sm md:text-lg">
          First Name*
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter first name"
          className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
        />
      </div>
      <div className="md:col-span-6">
        <label
          htmlFor="lastName"
          className="text-gray-500 font-sans font-medium text-sm md:text-lg">
          Last Name*
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter last name"
          className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
        />
      </div>
      <div className="md:col-span-6">
        <label
          htmlFor="email"
          className="text-gray-500 font-sans font-medium text-sm md:text-lg">
          Email*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
        />
      </div>
      <div className="md:col-span-6">
        <label
          htmlFor="mobile"
          className="text-gray-500 font-sans font-medium text-sm md:text-lg">
          Mobile*
        </label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="+880xxxxxxxxx"
          className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
        />
      </div>
      <div className="md:col-span-6">
        <label
          htmlFor="address"
          className="text-gray-500 font-sans font-medium text-sm md:text-lg">
          Address <span className="text-gray-400">(Optional)</span>
        </label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter address"
          className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
        />
      </div>
    </div>
  );
};

export default UserForm;
