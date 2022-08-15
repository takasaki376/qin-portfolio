import { Title } from "@mantine/core";
import { NextPage } from "next";
import { Layout } from "src/layouts/home/layout";

const about: NextPage = () => {
  return (
    <Layout>
      <div className="mx-8 w-full pb-16 pt-8 lg:mx-24">
        <Title order={1} className="my-4 font-bold ">
          About
        </Title>
      </div>
    </Layout>
  );
};

export default about;
