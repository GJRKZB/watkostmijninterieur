import { Button } from "@nextui-org/react";

interface ISubmitProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Submit: React.FC<ISubmitProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Button
        className="ml-auto mr-0 w-28 rounded-lg bg-[#020246] text-white shadow-lg"
        size="lg"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Submit;
