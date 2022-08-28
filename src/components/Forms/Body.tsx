import { Button } from "@mantine/core";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import Link from "next/link";
import type { FC } from "react";
import { BlogList } from "src/components/Forms/BlogList";
import { GithubList } from "src/components/Forms/GithubList";
import { PortfolioList } from "src/components/Forms/PortfolioList";
import { TwitterList } from "src/components/Forms/TwitterList";
import { BlogType, PortfolioType } from "src/types/blog";

type Props = {
  blog: (BlogType & MicroCMSContentId & MicroCMSDate)[];
  portfolio: (PortfolioType & MicroCMSContentId & MicroCMSDate)[];
};

export const Body: FC<Props> = ({ blog, portfolio }) => {
  return (
    <div className="flex flex-col items-center px-8 lg:mx-12">
      <BlogList top={true} blog={blog} />
      <div className="">
        <Link href="/blog" passHref>
          <a>
            <Button color="dark" radius="xl" size="xl" className="my-12">
              View All
            </Button>
          </a>
        </Link>
      </div>
      <PortfolioList top={true} portfolio={portfolio} />
      <Link href="/portfolio" passHref>
        <a>
          <Button color="dark" radius="xl" size="xl" className="my-12">
            View All
          </Button>
        </a>
      </Link>
      <div className=" grid grid-cols-1 pb-8 lg:grid-cols-2">
        <div className="flex flex-col items-center ">
          <GithubList />
          <Button color="dark" radius="xl" size="xl" className="my-12">
            View on Github
          </Button>
        </div>
        <div className="flex flex-col items-center pb-8">
          <TwitterList />
          <Button color="dark" radius="xl" size="xl" className="my-12">
            View on Twitter
          </Button>
        </div>
      </div>
    </div>
  );
};
