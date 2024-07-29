import { useFormContext } from "@/app/context/FormContext";

export const Contact: React.FC = () => {
  const { formData, updateFormData, error } = useFormContext();

  const handleContactDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <label htmlFor="firstName">First Name:</label>
      <br />
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleContactDetails}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleContactDetails}
      />
      <br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <br />
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleContactDetails}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
