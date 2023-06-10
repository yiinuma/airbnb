"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { safeUser } from "@/app/types";

type HeartButtonProps = {
  listingId: string;
  currentUser?: safeUser | null;
};

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const hasFavorite = false;
  const toggleFavorite = () => {};

  return (
    <button
      onClick={toggleFavorite}
      className="cursor-pointer transition hover:opacity-60"
    >
      <AiOutlineHeart
        size={28}
        className="absolute -right-[2px] -top-[2px] fill-white"
      />
      <AiFillHeart
        size={24}
        className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </button>
  );
};

export default HeartButton;
