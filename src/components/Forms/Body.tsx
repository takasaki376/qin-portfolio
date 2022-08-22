import { Button, Grid } from "@mantine/core";
import type { FC } from "react";
import { BlogList } from "src/components/Forms/BlogList";
import { GithubList } from "src/components/Forms/GithubList";
import { PortfolioList } from "src/components/Forms/PortfolioList";
import { TwitterList } from "src/components/Forms/TwitterList";
import { BlogType } from "src/types/blog";

type Props = {
  blog: BlogType[];
};

export const Body: FC<Props> = ({ blog }) => {
  return (
    <div className="flex flex-col items-center px-8 lg:mx-12">
      <BlogList top={true} blog={blog} />
      <div className="">
        <Button color="dark" radius="xl" size="xl" className="my-12">
          View All
        </Button>
      </div>
      <PortfolioList top={true} />
      <Button color="dark" radius="xl" size="xl" className="my-12">
        View All
      </Button>
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
