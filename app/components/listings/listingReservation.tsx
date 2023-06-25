"use client";

import { Range } from "react-date-range";

import Button from "@/app/components/button";
import Calendar from "@/app/components/inputs/calendar";

type ListingReservationProps = {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
};

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border-[1px] border-neutral-200 bg-white">
      <div className="flex flex-row items-center gap-1 p-4">
        <p className="text-2xl font-semibold">￥{price}</p>
        <p className="font-light text-neutral-600">/泊</p>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        onChange={(value) => onChangeDate(value.selection)}
        disabledDates={disabledDates}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="予約する" onClick={onSubmit} />
      </div>
      <div className="flex flex-row items-center justify-between p-4 text-lg font-semibold">
        <p>合計</p>
        <p>￥{totalPrice}</p>
      </div>
    </div>
  );
};

export default ListingReservation;
