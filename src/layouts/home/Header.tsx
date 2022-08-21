import { FC, Fragment } from "react";
import { MoonIcon, RssIcon } from "@heroicons/react/solid";

import { Text } from "@mantine/core";
import { Burger } from "@mantine/core";
import { menus, openMenu } from "src/lib/atom";
import { useAtom } from "jotai";
import Link from "next/link";
// import { Dialog, Transition } from "@headlessui/react";
// import { Menu } from "src/components/Forms/Menu";

export const Header: FC = () => {
  const [opened, setOpened] = useAtom(openMenu);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="fixed inset-0 z-30 w-full">
      <div className="flex justify-between bg-white px-8 ">
        <div className="mr-4 mb-4 mt-4 pt-2 lg:hidden lg:pt-0 ">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </div>
        <Link href="/" passHref>
          <a>
            <Text size="lg" weight={700} className="my-4 py-4">
              Shimabu IT University
            </Text>
          </a>
        </Link>
        <div className="my-4 ml-4">
          <div className="hidden lg:flex lg:flex-row">
            {menus.map((menu, key) => {
              return (
                <ul key={key}>
                  <div>
                    <Link href={menu.link} passHref>
                      <a>
                        <Text weight={700} size="xl" className="my-2 px-4">
                          {menu.title}
                        </Text>
                      </a>
                    </Link>
                  </div>
                </ul>
              );
            })}
            <MoonIcon className="m-4 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
