"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden h-auto cursor-pointer md:block"
      width={102}
      height={32}
      src="/images/logo.png"
      alt="logo"
    />
  );
};

export default Logo;
