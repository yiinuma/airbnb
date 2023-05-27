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
    label: "Beach",
    jpLabel: "ビーチ",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    jpLabel: "風車",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    jpLabel: "モダン",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    jpLabel: "田舎",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    jpLabel: "プール",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    jpLabel: "島",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    jpLabel: "湖畔",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    jpLabel: "スキー",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    jpLabel: "城",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    jpLabel: "洞窟",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    jpLabel: "キャンプ",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    jpLabel: "北極圏",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    jpLabel: "砂漠",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    jpLabel: "納屋",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    jpLabel: "高級",
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
            jpLabel={item.jpLabel}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
