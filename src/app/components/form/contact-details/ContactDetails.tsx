import { IFormData } from "@/app/types/types";

interface IContactDetailProps {
  formData: IFormData;
  handleContactDetails: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ContactDetails: React.FC<IContactDetailProps> = ({
  formData,
  handleContactDetails,
}) => {
  return (
    <div>
      <label htmlFor="firstName">First Name:</label>
      <br />
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={handleContactDetails}
        value={formData.firstName}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        onChange={handleContactDetails}
        value={formData.email}
      />
      <br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <br />
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        onChange={handleContactDetails}
        value={formData.phoneNumber}
      />
    </div>
  );
};
