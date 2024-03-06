import { Input } from "@nextui-org/react";
import { IContactDetails } from "@/app/page";

interface IFormInputProps {
  contactDetails: IContactDetails;
  handleContactDetails: (newContactDetails: IContactDetails) => void;
  errors?: Partial<IContactDetails>;
}

const FormContactDetails: React.FC<IFormInputProps> = ({
  contactDetails,
  handleContactDetails,
  errors,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleContactDetails({ ...contactDetails, [name]: value });
  };

  return (
    <div className="flex flex-col  justify-center gap-3">
      <h2 className="text-xl font-bold text-[#101828]">Contact Details</h2>
      <Input
        type="text"
        isRequired
        name="name"
        variant="bordered"
        label="Name"
        value={contactDetails.name}
        onChange={handleChange}
      />
      {errors?.name && <p className="text-red-500">{errors.name}</p>}
      <Input
        type="email"
        isRequired
        name="email"
        variant="bordered"
        label="Email"
        value={contactDetails.email}
        onChange={handleChange}
      />
      {errors?.email && <p className="text-red-500">{errors.email}</p>}
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
