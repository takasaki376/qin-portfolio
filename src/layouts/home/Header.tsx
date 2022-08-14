import { FC, Fragment } from "react";
import { MoonIcon, RssIcon } from "@heroicons/react/solid";

import { Text } from "@mantine/core";
import { Burger } from "@mantine/core";
import { openMenu } from "src/lib/atom";
import { useAtom } from "jotai";
// import { Dialog, Transition } from "@headlessui/react";
// import { Menu } from "src/components/Forms/Menu";

export const Header: FC = () => {
  const [opened, setOpened] = useAtom(openMenu);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="fixed inset-0 z-30 w-full">
      <div className="flex justify-between bg-white px-8 ">
        <div className="mr-4 mb-4 pt-4">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </div>
        <Text size="lg" weight={700} className="my-4">
          Shimabu IT University
        </Text>
        <div className="my-4 ml-4">
          <MoonIcon className="w-6" />
        </div>
      </div>
    </div>
  );
};
