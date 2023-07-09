"use client";

import { useCallback, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import ListingCard from "@/app/components/listings/listingCard";
import { SafeReservation, SafeUser } from "@/app/types";

type TripsClientProps = {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
};

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deleteId, setDeleteId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeleteId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("予約をキャンセルしました。");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeleteId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="旅行" subtitle="これまでと、これから。" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deleteId === reservation.id}
            actionLabel="予約をキャンセル"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
