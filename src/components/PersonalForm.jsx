import React from "react";

const PersonalForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <label
            htmlFor="fatherName"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Father Name*
          </label>
          <input
            type="text"
            name="fatherName"
            id="fatherName"
            placeholder="Enter father name"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
        <div className="md:col-span-6">
          <label
            htmlFor="fatherEmail"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Email*
          </label>
          <input
            type="email"
            name="fatherEmail"
            id="fatherEmail"
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
            htmlFor="Fatheroccupation"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Occupation <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            name="Fatheroccupation"
            id="Fatheroccupation"
            placeholder="Enter occupation"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        <div className="md:col-span-6">
          <label
            htmlFor="motherName"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Mother Name*
          </label>
          <input
            type="text"
            name="motherName"
            id="motherName"
            placeholder="Enter father name"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
        <div className="md:col-span-6">
          <label
            htmlFor="motherEmail"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Email*
          </label>
          <input
            type="email"
            name="motherEmail"
            id="motherEmail"
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
            htmlFor="motherOccupation"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Occupation <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            name="motherOccupation"
            id="motherOccupation"
            placeholder="Enter occupation"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
      </div>
    </>
  );
};

export default PersonalForm;
