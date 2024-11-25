import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import wareViewLogo from "../../images/WareViewFrame.jpg";
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
  const [activeItem, setActiveItem] = useState("Products");

  return (
    <div className="grid  grid-rows-layout grid-cols-layout  min-h-screen bg-[#FFFFFF]">
      <Header />
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <HeadingSection activeItem={activeItem} />
      <UserDetails />
      <Main/>
      <Footer />
    </div>
  );
};

const Main = () => (
  <div className="col-span-1 row-span-3 p-4 bg-green-400">
    <h1>Main Content Area</h1>
      <Outlet/>
    {/* Add your Outlet or other components here */}
  </div>
);

// Header Component
const Header = () => (
  <nav className="col-span-3 flex justify-between items-center border-b border-[#CED4DA] px-4 lg:px-[71px] py-4 lg:py-[19px] w-full lg:w-[1440px] h-[74px] lg:h-[105px]">
    <div className="flex items-center">
      <img src={wareViewLogo} alt="Logo" className="h-[36px] w-auto" />
    </div>
  </nav>
);

// Sidebar Component
const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { label: "Products", route: "products" },
    { label: "Categories", route: "categories" },
    { label: "Raw Materials", route: "raw-materials" },
    { label: "Product Variant", route: "product-variant" },
  ];

  return (
    <div className="hidden lg:flex flex-col bg-[#F4F5FC] border-r border-[#CED4DA] p-[32px] pt-[32px] w-[292px] min-h-screen row-span-2">
      {/* General Section */}
      <div className="relative text-sm font-semibold text-gray-700 mb-4">
        General
      </div>
      {/* Menu Items */}
      <nav className="space-y-4 pl-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            isActive={item.label === activeItem}
            onClick={() => setActiveItem(item.label)}
            route={item.route}
          />
        ))}
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ label, isActive, onClick, route }) => (
  <Link
    to={`/inventory/${route}`}
    onClick={onClick}
    className={`block text-lg pl-4 ${
      isActive ? "text-[#4B64FF] font-semibold" : "text-[#6B7280]"
    }`}
  >
    {label}
  </Link>
);


// Heading Section Component
const HeadingSection = ({ activeItem }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="col-span-1 flex items-center justify-between p-4 lg:p-[35px] bg-[#F4F6FC] border-b border-[#CED4DA] w-full lg:w-[791px] h-[74px] lg:h-[105px]">
      <h2 className="text-lg font-semibold">{activeItem}</h2>
      <div className="relative w-full max-w-xs">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray rounded-lg bg-white outline-none"
        />
      </div>
    </div>
  );
};

// User Details Component
const UserDetails = () => (
  <div className="col-span-1 lg:col-start-3 bg-purple-700 p-4 lg:p-[24px] flex items-center justify-center text-white w-full lg:w-[358px] h-[74px] lg:h-[105px] border-b border-gray">
    Admin
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="col-span-3 flex items-center justify-center bg-[#FFFFFF] border-t border-[#CED4DA] p-4 lg:p-[17px] w-full lg:w-[1440px] h-auto ">
    <p className="text-gray-500">&copy; 2024 Newton School</p>
  </footer>
);

export default Layout;

