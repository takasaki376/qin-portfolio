import { Text, Title } from "@mantine/core";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/lib/clientMicroCms";
import { BlogType } from "src/types/blog";

type PathProps = { id: string };

type Props = BlogType;

export const getStaticProps: GetStaticProps<Props, PathProps> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail({
    endpoint: "blogs",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const data = await client.getList({
    endpoint: "blogs",
  });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <div>
      <Title order={1} className="mt-8 mb-4">
        {props.title}
      </Title>
      <Text size="xl">{props.content}</Text>
    </div>
  );
};

export default BlogId;
