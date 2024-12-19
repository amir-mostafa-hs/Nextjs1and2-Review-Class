import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
