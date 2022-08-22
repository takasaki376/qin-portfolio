import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import { BlogList } from "src/components/Forms/BlogList";
import { Layout } from "src/layouts/home/layout";
import { client } from "src/lib/clientBlog";
import { BlogType } from "src/types/blog";

export const getStaticProps: GetStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs" });
  return {
    props: blog,
  };
};

type Props = MicroCMSListResponse<BlogType>;

const blog: NextPage<Props> = (props) => {
  return (
    <Layout>
      <BlogList top={false} blog={props.contents} />
    </Layout>
  );
};

export default blog;
