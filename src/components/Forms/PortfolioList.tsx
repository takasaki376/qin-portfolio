import { Divider, Text, Title } from "@mantine/core";
import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";
import { useMediaQuery } from "src/lib/mantine";
import cc from "classcat";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { PortfolioType } from "src/types/blog";

type Props = {
  top: boolean;
  portfolio: (PortfolioType & MicroCMSContentId & MicroCMSDate)[];
};

export const PortfolioList: FC<Props> = (props) => {
  const isMediaQuery = useMediaQuery("lg");
  const datawk: PortfolioType[] = !props.top
    ? props.portfolio
    : isMediaQuery
    ? props.portfolio.slice(0, 6)
    : props.portfolio.slice(0, 4);

  const [portfolioList] = useState<PortfolioType[]>(datawk);
  return (
    <div
      className={cc({ "w-full pt-8 pb-16": true, "px-4 lg:px-24": !props.top })}
    >
      <Title order={1} className="my-4 font-bold ">
        Portfolio
      </Title>
      <Divider />
      <div className=" grid grid-cols-1 lg:grid-cols-3">
        {portfolioList.map((portfolio, key) => {
          return (
            <ul key={key}>
              <div className="my-8 mx-4">
                <Image
                  src={portfolio.image.url}
                  alt=""
                  width={3300}
                  height={1400}
                ></Image>
                <Title order={1} className="mt-8 mb-4">
                  {portfolio.title}
                </Title>
                <Text size="xl">{portfolio.body}</Text>
                <Text weight={500} color="gray" className="mb-4 mt-1">
                  {portfolio.updatedAt}
                </Text>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
