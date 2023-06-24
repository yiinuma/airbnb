"use client";

import { Heebo } from "next/font/google";
import Image from "next/image";

import Heading from "@/app/components/heading";
import HeartButton from "@/app/components/heartButton";
import useCountries from "@/app/hooks/useCountries";
import { safeUser } from "@/app/types";

type ListingHeadProps = {
  title: string;
  imgSrc: string;
  locationValue: string;
  id: string;
  currentUser?: safeUser | null;
};

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imgSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region},${location?.label}`}
      />
      <div className="relative h-[60vh] w-full overflow-hidden rounded-xl">
        <Image
          alt="Image"
          src={imgSrc}
          fill
          priority
          className="w-full object-cover"
        />
        <div className="absolute right-5 top-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
