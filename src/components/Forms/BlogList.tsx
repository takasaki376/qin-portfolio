import { Divider, Text, Title } from "@mantine/core";
import { FC, useState } from "react";
import cc from "classcat";
import { BlogType } from "src/types/blog";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import DateFormatter from "src/lib/date-formatter";
import Link from "next/link";

type Props = {
  top: boolean;
  blog: (BlogType & MicroCMSContentId & MicroCMSDate)[];
};

export const BlogList: FC<Props> = (props) => {
  const datawk: BlogType[] = props.top ? props.blog.slice(0, 4) : props.blog;
  const [blogList] = useState<BlogType[]>(datawk);

  return (
    <div
      className={cc({
        "w-full pt-8 pb-16": true,
        "px-8 lg:px-24": !props.top,
      })}
    >
      <Title order={1} className="my-4 font-bold ">
        Blog
      </Title>
      <Divider />
      <ul>
        {blogList.map((blog, key) => {
          return (
            <li key={key}>
              <Link href={`/blog/${blog.id}`} passHref>
                <a>
                  <Title order={1} className="mt-8 mb-4">
                    {blog.title}
                  </Title>
                  <Text size="xl">{blog.content}</Text>
                  <Text weight={500} color="gray" className="mb-4 mt-1">
                    <DateFormatter dateString={blog.createdAt} />
                  </Text>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
