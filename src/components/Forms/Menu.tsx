import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Title } from "@mantine/core";
import { useAtom } from "jotai";
import Link from "next/link";
import { FC } from "react";
import { openMenu, menus } from "src/lib/atom";

export const Menu: FC = () => {
  const [opened, setOpened] = useAtom(openMenu);
  return (
    <div className="h-screen bg-pink-500 " onClick={() => setOpened(false)}>
      <div className="pl-8 pt-6">
        <button onClick={() => setOpened(false)}>
          <XIcon className="w-10 text-white" />
        </button>
        {menus.map((menu, key) => {
          return (
            <ul key={key} className="my-8">
              <div>
                <Link href={menu.link} passHref>
                  <a>
                    <Title order={1} className="mt-8 mb-4 text-white">
                      {menu.title}
                    </Title>
                  </a>
                </Link>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
