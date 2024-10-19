import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%]"></div>
    </div>
  );
}
