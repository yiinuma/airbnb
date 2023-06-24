"use client";

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import Avatar from "@/app/components/avatar";
import ListingCategory from "@/app/components/listings/listingCategory";
import useCountries from "@/app/hooks/useCountries";
import { safeUser } from "@/app/types";

const Map = dynamic(() => import("../map"), {
  ssr: false,
});

type ListingInfoProps = {
  user: safeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
};

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <p>ホストの{user.name}さんです</p>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <p>ゲスト{guestCount}人</p>
          <p>{roomCount}部屋</p>
          <p>{bathroomCount}バスルーム</p>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <p className="text-lg font-light text-neutral-500">{description}</p>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
