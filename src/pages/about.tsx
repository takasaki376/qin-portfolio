import { Title } from "@mantine/core";
import { NextPage } from "next";
import { Layout } from "src/layouts/home/layout";

const about: NextPage = () => {
  return (
    <Layout>
      <div className="w-full pt-8">
        <Title order={1} className="my-4 font-bold ">
          About
        </Title>
      </div>
    </Layout>
  );
};

export default about;
