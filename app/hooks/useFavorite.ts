import { useCallback, useMemo } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import useLoginModal from "@/app/hooks/useLoginModal";
import { safeUser } from "@/app/types";

type IUseFavorite = {
  listingId: string;
  currentUser?: safeUser | null;
};

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser?.favoriteIds, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (!currentUser) return loginModal.onOpen();

      try {
        let request;

        if (hasFavorite) {
          request = await axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = await axios.post(`/api/favorites/${listingId}`);
        }

        await request;
        router.refresh();
        toast.success("Success");
      } catch (err) {
        toast.error("Error");
      }
    },
    [currentUser, hasFavorite, listingId, loginModal, router]
  );

  return { hasFavorite, toggleFavorite };
};

export default useFavorite;
