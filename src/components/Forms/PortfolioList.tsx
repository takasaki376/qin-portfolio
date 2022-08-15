import { Divider, Text, Title } from "@mantine/core";
import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";
import { useMediaQuery } from "src/lib/mantine";
import cc from "classcat";

type PortfolioType = {
  image: ImageProps["src"];
  title: string;
  body: string;
  date: string;
};

const data: PortfolioType[] = [
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
  {
    image: "/image.png",
    title: "IT KINGDOM",
    body: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.7.11",
  },
];

type Props = {
  top: boolean;
};

export const PortfolioList: FC<Props> = (props) => {
  const isMediaQuery = useMediaQuery("lg");
  const datawk: PortfolioType[] = !props.top
    ? data
    : isMediaQuery
    ? data.slice(0, 6)
    : data.slice(0, 4);

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
                  src={portfolio.image}
                  alt=""
                  width={3300}
                  height={1400}
                ></Image>
                <Title order={1} className="mt-8 mb-4">
                  {portfolio.title}
                </Title>
                <Text size="xl">{portfolio.body}</Text>
                <Text weight={500} color="gray" className="mb-4 mt-1">
                  {portfolio.date}
                </Text>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
