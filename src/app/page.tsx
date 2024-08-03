import { MultiStepForm } from "./components/MultiStepForm/MultiStepForm";
import { FormProvider } from "./context/FormContext";

export default function Home() {
  return (
    <FormProvider>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <MultiStepForm />
      </div>
    </FormProvider>
  );
}
