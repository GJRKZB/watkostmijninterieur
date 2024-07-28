import { MultiStepForm } from "./components/MultiStepForm/MultiStepForm";
import { FormProvider } from "./context/FormContext";

export default function Home() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}
