import { Divider } from "@mantine/core";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="fixed bottom-0 mt-4 mb-2 w-full bg-white text-center">
      <Divider />
      <div className="my-4">@2022 Shimabu IT University</div>
    </div>
  );
};
