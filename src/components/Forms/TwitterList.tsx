import { Divider, Text, Title } from "@mantine/core";
import Image from "next/image";
import { FC, useState } from "react";

type TwitterType = {
  icon: string;
  userName: string;
  userId: string;
  body: string;
  date: string;
};

const data: TwitterType[] = [
  {
    icon: "/icon.png",
    userName: "しまぶーのIT大学",
    userId: "@shimabu_it",
    body: `📣 新サービス「Noway Form」をリリースしました！

Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨

試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
    date: "5月25日",
  },
  {
    icon: "/icon.png",
    userName: "しまぶーのIT大学",
    userId: "@shimabu_it",
    body: `📣 新サービス「Noway Form」をリリースしました！

Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨

試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
    date: "5月25日",
  },
  {
    icon: "/icon.png",
    userName: "しまぶーのIT大学",
    userId: "@shimabu_it",
    body: `📣 新サービス「Noway Form」をリリースしました！

Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨

試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
    date: "5月25日",
  },
  {
    icon: "/icon.png",
    userName: "しまぶーのIT大学",
    userId: "@shimabu_it",
    body: `📣 新サービス「Noway Form」をリリースしました！

Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨

試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
    date: "5月25日",
  },
];

const regexp_url = /(https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)/g;

export const TwitterList: FC = () => {
  const [twitterList] = useState<TwitterType[]>(data);
  return (
    <div className="mt-8 w-full  lg:mr-12 lg:pl-8">
      <Title order={1} className="my-4 font-bold ">
        Twitter
      </Title>
      <Divider className="w-11/12" />
      {twitterList.map((twitter, key) => {
        return (
          <ul key={key}>
            <div className="mt-12 flex flex-row">
              <div className="mt-4 w-52">
                <Image
                  src={twitter.icon}
                  alt=""
                  width={52}
                  height={52}
                  className="rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <div className="flex flex-row">
                  <Title order={2} className="mb-4 mr-4">
                    {twitter.userName}
                  </Title>
                  <Text size="xl" className="wx-4" color="gray.3" weight={500}>
                    {twitter.userId}・{twitter.date}
                  </Text>
                </div>
                <Text size="xl" className="w-5/6 whitespace-pre-wrap">
                  {twitter.body}
                  {/* TODO：URLをリンクに変換する
                   {twitter.body.replace(
                    regexp_url,
                    '<Text variant="link" component="a" href="="$1">$1</Text>'
                  )} */}
                </Text>
              </div>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
