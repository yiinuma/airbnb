"use client";

import { useRouter } from "next/navigation";

import Button from "@/app/components/button";
import Heading from "@/app/components/heading";

type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "検索結果はありません",
  subtitle = "一部のフィルターの変更や削除、または検索エリアの調整をお試しください。",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading center title={title} subtitle={subtitle} />
      <div className="mt-4 w-64">
        {showReset && (
          <Button
            outline
            label="フィルタを変更してください"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
