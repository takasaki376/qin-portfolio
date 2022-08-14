import { Divider, Menu } from "@mantine/core";
import type { FC } from "react";
import { MenuIcon } from "@heroicons/react/solid";

export const Footer: FC = () => {
  return (
    <div className="mt-4 mb-12 text-center">
      <Divider />
      <div className="my-4">@2022 Shimabu IT University</div>
    </div>
  );
};
