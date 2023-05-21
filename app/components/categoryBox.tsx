"use client";

import { useCallback } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { IconType } from "react-icons";

type CategoryBoxProps = {
  label: string;
  jpLabel?: string | null;
  icon: IconType;
  selected?: boolean;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  jpLabel,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800 ${
        selected
          ? "border-b-neutral-100 text-neutral-800"
          : "border-b-transparent text-neutral-500"
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{jpLabel ? jpLabel : label}</div>
    </div>
  );
};

export default CategoryBox;
