import { useAtomValue } from "jotai";
import type { NextPage } from "next";
import { Body } from "src/components/Forms/Body";
import { openMenu } from "src/lib/atom";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";
import { Layout } from "src/layouts/home/layout";
import { TwitterIcon } from "src/components/icons/TwitterIcon";
import { FacebookIcon } from "src/components/icons/FacebookIcon";
import { Text } from "@mantine/core";
import { RssIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  const opened = useAtomValue(openMenu);
  // const { width } = useViewportSize();
  // const largerThanXs = useMediaQuery("xs");
  // const largerThanSm = useMediaQuery("sm");
  // const largerThanMd = useMediaQuery("md");
  // const largerThanLg = useMediaQuery("lg");
  // const largerThanXl = useMediaQuery("xl");

  return (
    <Layout>
      <div className="bg-pink-500 px-4 py-12">
        <Text weight={700} color="white" size="xl">
          Shimabu IT University
        </Text>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:pr-12">
          <Text color="white">しまぶーのポートフォリオのためのページです</Text>
          <div className="mt-8 flex lg:mt-0 ">
            <TwitterIcon className="mx-1" />
            <FacebookIcon className="mx-1" />
            <RssIcon className="mx-1 w-6 text-white" />
          </div>
        </div>
      </div>
      <Body />
    </Layout>
  );
};

export default Home;
