import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
      <div className="px-4 py-6 text-lg font-bold">My Sidebar</div>
      <nav className="flex-1 px-4 space-y-2">
        <ul>
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/dashboard/profile">Dashboard Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
