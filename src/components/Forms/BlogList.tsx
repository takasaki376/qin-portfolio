import { Divider, Text, Title } from "@mantine/core";
import { FC, useState } from "react";

type BlogType = {
  title: string;
  body: string;
  date: string;
};

const data: BlogType[] = [
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
  {
    title: "This is a header",
    body: "Ament minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    date: "2022.7.11",
  },
];

type Props = {
  top: boolean;
};

export const BlogList: FC<Props> = (props) => {
  const datawk: BlogType[] = props.top ? data.slice(0, 4) : data;
  const [blogList] = useState<BlogType[]>(datawk);

  return (
    <div className="w-full pt-8">
      <Title order={1} className="my-4 font-bold ">
        Blog
      </Title>
      <Divider />
      {blogList.map((blog, key) => {
        return (
          <ul key={key}>
            <div>
              <Title order={1} className="mt-8 mb-4">
                {blog.title}
              </Title>
              <Text size="xl">{blog.body}</Text>
              <Text weight={500} color="gray" className="mb-4 mt-1">
                {blog.date}
              </Text>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
