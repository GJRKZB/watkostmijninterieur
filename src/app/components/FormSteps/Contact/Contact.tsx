import { useFormContext } from "@/app/context/FormContext";
import { Input } from "@nextui-org/react";

export const Contact: React.FC = () => {
  const { formData, updateFormData } = useFormContext();

  return (
    <div>
      <Input
        type="text"
        variant="bordered"
        label="First Name"
        placeholder="Enter your first name"
        value={formData.firstName}
        onValueChange={(value) => updateFormData({ firstName: value })}
      />
      <br />
      <Input
        type="email"
        variant="bordered"
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onValueChange={(value) => updateFormData({ email: value })}
      />
      <br />
      <Input
        type="tel"
        variant="bordered"
        label="Phone Number"
        placeholder="Enter your phone number"
        value={formData.phoneNumber}
        onValueChange={(value) => updateFormData({ phoneNumber: value })}
      />
    </div>
  );
};
