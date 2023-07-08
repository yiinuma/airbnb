import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservation from "@/app/actions/getReservations";
import ClientOnly from "@/app/components/clientOnly";
import EmptyState from "@/app/components/emptyState";
import ListingClient from "@/app/listings/[listingId]/listingClient";

type IParams = {
  listingId?: string;
};

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservation = await getReservation(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservation}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
