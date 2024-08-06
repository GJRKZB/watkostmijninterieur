import { MultiStepForm } from "./components/MultiStepForm/MultiStepForm";
import { FormProvider } from "./context/FormContext";

export default function Home() {
  return (
    <FormProvider>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-slate-300 px-5 py-24 md:p-40">
        <MultiStepForm />
      </div>
    </FormProvider>
  );
}
