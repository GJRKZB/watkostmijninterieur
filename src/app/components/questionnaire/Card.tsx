import Selection from "./Selection";

export default function Card() {
  return (
    <div className="flex justify-center w-full mt-[15%]">
      <div className="flex flex-col bg-white p-8 rounded-[32px] w-9/12 shadow-lg h-fit gap-2">
        <h1 className="text-xl font-bold w-full text-[#101828]">
          Fülle diese Informationen
        </h1>
        <p className="text-[#667085]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <Selection />
      </div>
    </div>
  );
}
