import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">HomePage</h1>
      <ClientComponent />
      <ServerComponent />
    </div>
  );
}
