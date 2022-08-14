import { Button } from "@mantine/core";
import type { FC } from "react";
import { BlogList } from "src/components/Forms/BlogList";
import { GithubList } from "src/components/Forms/GithubList";
import { PortfolioList } from "src/components/Forms/PortfolioList";
import { TwitterList } from "src/components/Forms/TwitterList";

export const Body: FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <BlogList top={true} />
      <div className="">
        <Button color="dark" radius="xl" size="xl" className="my-12">
          View All
        </Button>
      </div>
      <PortfolioList top={true} />
      <Button color="dark" radius="xl" size="xl" className="my-12">
        View All
      </Button>
      <GithubList />
      <Button color="dark" radius="xl" size="xl" className="my-12">
        View on Github
      </Button>
      <TwitterList />
      <Button color="dark" radius="xl" size="xl" className="my-12">
        View on Twitter
      </Button>
    </div>
  );
};
