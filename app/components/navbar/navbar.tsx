"use client";

import Container from "@/app/components/container";
import Categories from "@/app/components/navbar/categories";
import Logo from "@/app/components/navbar/logo";
import Search from "@/app/components/navbar/search";
import UserMenu from "@/app/components/navbar/userMenu";
import { safeUser } from "@/app/types";

type NavbarProps = {
  currentUser?: safeUser | null;
};

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
