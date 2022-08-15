import { StarIcon } from "@heroicons/react/outline";
import { Divider, Progress, Text, Title } from "@mantine/core";
import { FC, useState } from "react";
import { ForkIcon } from "src/components/icons/ForkIcon";
import { useMediaQuery } from "src/lib/mantine";

type languagesType = {
  language: string;
  percentage: number;
};

type GithubType = {
  repository: string;
  body: string;
  star: string;
  fork: string;
  languages: languagesType[];
};

const data: GithubType[] = [
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
  {
    repository: "lightsound/nexst-tailwind",
    body: "Next.js starter template.",
    star: "117",
    fork: "18",
    languages: [
      {
        language: "TypeScript",
        percentage: 65.5,
      },
      {
        language: "JavaScript",
        percentage: 30.7,
      },
      {
        language: "Other",
        percentage: 3.8,
      },
    ],
  },
];

export const GithubList: FC = () => {
  const isMediaQuery = useMediaQuery("lg");

  const datawk: GithubType[] = isMediaQuery ? data.slice(0, 6) : data;
  const [githubList] = useState<GithubType[]>(datawk);
  return (
    <div className="mt-8 w-full lg:mr-8 lg:pl-12">
      <Title order={1} className="my-4 font-bold ">
        Github
      </Title>
      <Divider className="w-11/12" />
      {githubList.map((github, key) => {
        return (
          <ul key={key}>
            <div>
              <Title order={2} className="mt-8 mb-4">
                {github.repository}
              </Title>
              <Text size="xl">{github.body}</Text>
              <div className="mb-4 mt-2 flex">
                <StarIcon className="mx-2 w-6" />
                <Text size="xl">{github.star}</Text>
                <ForkIcon className="mx-2 ml-8 w-6" />
                <Text size="xl">{github.fork}</Text>
              </div>
              <Progress
                sections={[
                  { value: 65.5, color: "blue" },
                  { value: 30.7, color: "yellow" },
                  { value: 3.8, color: "gray" },
                ]}
                className="w-10/12"
              />
              <div className="flex flex-row">
                {github.languages.map((language, key) => {
                  return (
                    <div key={key} className="mr-4 flex">
                      <div
                        className={
                          key === 0
                            ? "mt-4 mr-2 h-3 w-3 rounded-full bg-blue-600"
                            : key === 1
                            ? "mt-4 mr-2 h-3 w-3 rounded-full bg-orange-600"
                            : "mt-4 mr-2 h-3 w-3 rounded-full bg-gray-600"
                        }
                      />
                      <Text weight={500} size="lg" className="mr-2 mt-2">
                        {language.language}
                      </Text>
                      <Text
                        weight={500}
                        size="lg"
                        color="gray"
                        className="mr-2 mt-2"
                      >
                        {language.percentage}%
                      </Text>
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
