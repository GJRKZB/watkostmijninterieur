import { Input } from "@nextui-org/react";
import { IContactFormData, IErrors } from "@/models/user";

interface IFormInputProps {
  handleContactDetails: (event: React.ChangeEvent<HTMLInputElement>) => void;
  contactFormData: IContactFormData;
  errors: IErrors;
}

const FormContactDetails: React.FC<IFormInputProps> = ({
  contactFormData,
  handleContactDetails,
  errors,
}) => {
  return (
    <div className="flex flex-col justify-center gap-3">
      <h2 className="text-xl font-bold text-[#101828]">Contact Details</h2>
      <Input
        type="text"
        isRequired
        name="name"
        variant="bordered"
        label="Name"
        value={contactFormData.name}
        onChange={handleContactDetails}
        errorMessage={errors?.name}
        isInvalid={!!errors?.name}
      />
      <Input
        type="email"
        isRequired
        name="email"
        variant="bordered"
        label="Email"
        value={contactFormData.email}
        onChange={handleContactDetails}
        errorMessage={errors?.email}
        isInvalid={!!errors?.email}
      />
      <Input
        type="tel"
        name="phone"
        variant="bordered"
        label="Phone"
        value={contactFormData?.phone}
        onChange={handleContactDetails}
      />
    </div>
  );
};

export default FormContactDetails;
