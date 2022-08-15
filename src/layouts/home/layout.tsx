import { useAtomValue } from "jotai";
import type { ReactNode, FC } from "react";
import { Menu } from "src/components/Forms/Menu";
import { openMenu } from "src/lib/atom";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const Layout: FC<Props> = (props) => {
  const opened = useAtomValue(openMenu);
  return (
    <>
      {opened ? (
        <Menu />
      ) : (
        <div className="relative w-full">
          <Header />
          <div className="w-full  pt-16">{props.children}</div>
          <Footer />
        </div>
      )}
    </>
  );
};
