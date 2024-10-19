import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] px-12 py-6">
        <Dashboard />
      </div>
    </div>
  );
}
