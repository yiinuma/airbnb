"use client";

import { useCallback, useMemo } from "react";

import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/app/components/button";
import HeartButton from "@/app/components/heartButton";
import useCountries from "@/app/hooks/useCountries";
import { SafeReservation, SafeListing, SafeUser } from "@/app/types";

type ListingCardProps = {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId);
    },
    [actionId, disabled, onAction]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [data.price, reservation]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "yyyy/MM/dd")} - ${format(end, "yyyy/MM/dd")}`;
  }, [reservation]);

  return (
    <div
      className="group col-span-1 cursor-pointer"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            fill
            sizes="100%"
            priority
            alt="listing"
            src={data.imageSrc}
            className="h-full w-full object-cover transition group-hover:scale-110"
          />
          <div className="absolute right-3 top-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <p className="text-lg font-semibold">
          {location?.region},{location?.label}
        </p>
        <p className="font-light text-neutral-500">
          {reservationDate || data.category}
        </p>
        <div className="flex flex-row items-center gap-1">
          <p className="font-semibold">¥{price}</p>
          {!reservation && <p className="font-light">night</p>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
