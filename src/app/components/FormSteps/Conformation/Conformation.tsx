import Check from "../../../../../public/png/check_icon.png";
import Image from "next/image";

export const Conformation = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Image src={Check} alt="check" width={150} height={150} />
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-sans text-xl font-bold">
          Completed the form successfully!
        </h1>
        <p>We have received your form and will get back to you soon!</p>
      </div>
    </div>
  );
};
