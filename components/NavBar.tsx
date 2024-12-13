import Link from "next/link";
import Container from "./Container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Mode from "./Mode";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 py-2  dark:bg-background-dark  w-full z-50 transition">
      <Container>
        <div className="flex justify-between items-center gap-3 md:gap-0">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/shopIT-light.png"
              alt="logo"
              width={120}
              height={40}
              className="cursor-pointer block dark:hidden"
            />
            <Image
              src="/shopIT-dark.png"
              alt="logo"
              width={120}
              height={40}
              className="cursor-pointer hidden dark:block"
            />
          </Link>
          {/* Search */}
          <div
            className=" w-full md:w-1/2 gap-1 
          hidden md:flex
          "
          >
            <Input
              type="text"
              placeholder="Search for products"
              className="bg-slate-100 text-background-dark  px-3 py-1 "
            />
            <Button className="bg-primary text-white px-3 py-1">Search</Button>
          </div>
          {/* userMenu and cart */}
          <div className="flex gap-8 md:gap-12  ">
            <Link href="/cart">Cart</Link>
            <Link href="/login">Login</Link>
          </div>
          <Mode />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
