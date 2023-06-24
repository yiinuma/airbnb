"use client";

import { useMemo } from "react";

import { Reservation } from "@prisma/client";

import Container from "@/app/components/container";
import ListingHead from "@/app/components/listings/listingHead";
import ListingInfo from "@/app/components/listings/listingInfo";
import { categories } from "@/app/components/navbar/categories";
import { safeListing, safeUser } from "@/app/types";

type ListingClientProps = {
  reservations?: Reservation[];
  listing: safeListing & { user: safeUser };
  currentUser: safeUser | null;
};

const ListingClient: React.FC<ListingClientProps> = ({
  reservations = [],
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imgSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-7 md:gap-10">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
