import { FC, useState } from "react";
import { MenuIcon, MoonIcon, RssIcon } from "@heroicons/react/solid";
import { TwitterIcon } from "src/components/icons/TwitterIcon";
import { FacebookIcon } from "src/components/icons/FacebookIcon";
import { Text } from "@mantine/core";
import { Burger } from "@mantine/core";

export const Header: FC = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <div className="flex justify-between ">
        <div className="m-4">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </div>
        <Text size="lg" weight={700} className="my-4">
          Shimabu IT University
        </Text>
        <div className="m-4">
          <MoonIcon className="w-6" />
        </div>
      </div>
      <div className="bg-pink-500 p-4 py-12">
        <Text weight={700} color="white" size="xl">
          Shimabu IT University
        </Text>
        <Text color="white">しまぶーのポートフォリオのためのページです</Text>
        <div className="mt-8 flex">
          <TwitterIcon className="mx-1" />
          <FacebookIcon className="mx-1" />
          <RssIcon className="mx-1 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};
