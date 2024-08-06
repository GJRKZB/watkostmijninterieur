import { useFormContext } from "@/app/context/FormContext";
import { Input } from "@nextui-org/react";

export const Contact: React.FC = () => {
  const { formData, updateFormData, error } = useFormContext();

  return (
    <div>
      <Input
        isRequired
        name="firstName"
        type="text"
        variant="bordered"
        label="First Name"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={(e) => updateFormData({ firstName: e.target.value })}
        isInvalid={!!error.firstName}
        errorMessage={error.firstName}
      />

      <br />
      <Input
        isRequired
        name="email"
        type="email"
        variant="bordered"
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
        isInvalid={!!error.email}
        errorMessage={error.email}
      />
      <br />
      <Input
        name="phoneNumber"
        type="tel"
        variant="bordered"
        label="Phone Number"
        placeholder="Enter your phone number"
        value={formData.phoneNumber}
        onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
      />
    </div>
  );
};
