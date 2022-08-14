import { NextPage } from "next";
import { PortfolioList } from "src/components/Forms/PortfolioList";
import { Layout } from "src/layouts/home/layout";

const portfolio: NextPage = () => {
  return (
    <Layout>
      <PortfolioList top={false} />
    </Layout>
  );
};

export default portfolio;
