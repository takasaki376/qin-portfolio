import { GetStaticProps, NextPage } from "next";
import { PortfolioList } from "src/components/Forms/PortfolioList";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Layout } from "src/layouts/home/layout";
import { client } from "src/lib/clientMicroCms";
import { PortfolioType } from "src/types/blog";

export const getStaticProps: GetStaticProps = async () => {
  const portfolio = await client.get({ endpoint: "portfolio" });
  return {
    props: portfolio,
  };
};

type Props = MicroCMSListResponse<PortfolioType>;

const portfolio: NextPage<Props> = (props) => {
  return (
    <Layout>
      <PortfolioList top={false} portfolio={props.contents} />
    </Layout>
  );
};

export default portfolio;
