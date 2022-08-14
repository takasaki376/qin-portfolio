import { NextPage } from "next";
import { BlogList } from "src/components/Forms/BlogList";
import { Layout } from "src/layouts/home/layout";

const blog: NextPage = () => {
  return (
    <Layout>
      <BlogList top={false} />
    </Layout>
  );
};

export default blog;
