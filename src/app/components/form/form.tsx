import { Input } from "@nextui-org/react";
import { IContactDetails } from "@/app/page";

interface IFormInputProps {
  contactDetails: IContactDetails;
  handleContactDetails: (newContactDetails: IContactDetails) => void;
}

const FormContactDetails: React.FC<IFormInputProps> = ({
  contactDetails,
  handleContactDetails,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleContactDetails({ ...contactDetails, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Input
        type="text"
        name="name"
        variant="bordered"
        label="Name"
        value={contactDetails.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        variant="bordered"
        label="Email"
        value={contactDetails.email}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="phone"
        variant="bordered"
        label="Phone"
        value={contactDetails?.phone}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormContactDetails;
