import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="flex bg-white h-12 justify-between items-center px-18">
      <div className="flex items-center font-bold">
        <Image src="logo.svg" width={12} height={12} alt="logo" />
        <h1 className="text-secondary">Food<span className="text-primary">Wagen</span></h1>
      </div>
      <div>
      <button className="bg-primary px-4 py-1 font-semibold rounded-xl">Add Meal</button>
      </div>
    </nav>
  );
};

export default Header;
