import Image from "next/image";
import Link from "next/link";

import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-8">
        <Link href="/">
          <Image src="/logo.svg" alt="cars logo" width={118} height={18} />
        </Link>

        <CustomButton
          title="Sign in"
          btnTypes="button"
          containerStyles="bg-primary-blue text-white rounded-full hover:text-primary-blue hover:bg-white"
        />
      </nav>
    </header>
  );
};

export default Navbar;
