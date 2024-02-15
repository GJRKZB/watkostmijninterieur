import Card from "./components/questionnaire/Card";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#D6DFDD] w-full">
      <Card />
      <footer className="absolute bottom-0 w-full bg-white h-20 z-0" />
    </div>
  );
}
