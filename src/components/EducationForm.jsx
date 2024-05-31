const EducationForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <label
            htmlFor="degree"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Degree*
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Enter degree"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
        <div className="md:col-span-6">
          <label
            htmlFor="degreeName"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Degree Name*
          </label>
          <input
            type="text"
            name="degreeName"
            id="degreeName"
            placeholder="Enter degree name"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
        <div className="md:col-span-6">
          <label
            htmlFor="nameOfInstitute"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Name Of Institute*
          </label>
          <input
            type="text"
            name="nameOfInstitute"
            id="nameOfInstitute"
            placeholder="Enter institute name"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
        <div className="md:col-span-6">
          <label
            htmlFor="universityOrBoard"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            University/Board*
          </label>
          <input
            type="text"
            name="universityOrBoard"
            id="universityOrBoard"
            placeholder="Enter university or board"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
        <div className="md:col-span-6">
          <label
            htmlFor="passingYear"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Passign Year*
          </label>
          <input
            type="text"
            name="passingYear"
            id="passingYear"
            placeholder="2017"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
        <div className="md:col-span-6">
          <label
            htmlFor="cgpa"
            className="text-gray-500 font-sans font-medium text-sm md:text-lg">
            Marks/CGPA*
          </label>
          <input
            type="text"
            name="cgpa"
            id="cgpa"
            placeholder="Enter marks/cgpa"
            className="block w-full p-2 rounded outline-none focus:border focus:border-green-400"
          />
        </div>
      </div>
      <button className=" py-2 px-4 mt-2 bg-green-500 text-white uppercase rounded hover:bg-green-400">
        Save Education
      </button>
    </>
  );
};

export default EducationForm;
