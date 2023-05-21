"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";

import CategoryBox from "@/app/components/categoryBox";
import Container from "@/app/components/container";

export const categories = [
  {
    label: "ビーチフロント",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "風車小屋",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "モダン",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "田園",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "素敵なプール",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "島",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "湖畔",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "スキー",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "城",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "洞窟",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "キャンプ",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "北極圏",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "砂漠",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "納屋",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Luxe",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) return null;

  return (
    <Container>
      <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
