import MultiStepComponent from "./MultiStepComponent";
import EducationForm from "./components/EducationForm";
import PersonalForm from "./components/PersonalForm";
import UserForm from "./components/UserForm";
import { FormContextProvider } from "./context/FormContext";

const steppers = [
  {
    name: "User Info",
    Component: () => <UserForm />,
  },
  {
    name: "Personal ",
    Component: () => <PersonalForm />,
  },
  {
    name: "Education",
    Component: () => <EducationForm />,
  },
  {
    name: "Photograph",
    Component: () => <h1>Delivered Component</h1>,
  },
];

function App() {
  return (
    <FormContextProvider>
      <div className="container m-auto py-14">
        <h1 className="text-3xl font-bold ">
          Multi Step <span className="text-green-400">Form</span>
        </h1>

        <MultiStepComponent steppers={steppers} />
      </div>
    </FormContextProvider>
  );
}

export default App;
