import CompletionIcon from "../../../../public/check-icon.png";

export default function Completion() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={CompletionIcon.src} alt="Completion Icon" />
      <h1 className="text-center text-3xl font-bold text-[#101828]">
        Completed successfully
      </h1>
      <p className="mb-4 text-center text-[#667085]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
    </div>
  );
}
