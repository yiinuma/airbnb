"use client";

import { useCallback, useState } from "react";

import { signOut } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";

import Avatar from "@/app/components/avatar";
import MenuItem from "@/app/components/navbar/menuItem";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { safeUser } from "@/app/types";

type UserMenuProps = {
  currentUser?: safeUser | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Airbnbにお部屋を掲載
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="旅行" />
                <MenuItem onClick={() => {}} label="お気に入り" />
                <MenuItem onClick={() => {}} label="予約" />
                <MenuItem onClick={() => {}} label="プロパティ" />
                <MenuItem onClick={() => {}} label="Airbnbにお部屋を掲載" />
                <hr />
                <MenuItem onClick={() => signOut()} label="ログアウト" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="ログイン" />
                <MenuItem onClick={registerModal.onOpen} label="登録する" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
