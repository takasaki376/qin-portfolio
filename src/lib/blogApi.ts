import axios from "axios";
import { BlogType } from "../types/blog";
import { client } from "src/lib/clientMicroCms";

export const apiUrl = `${process.env.NEXT_PUBLIC_BLOG_URL}blog/`;

// // 検索
// export const blogGet = (url: string) =>
//   axios.get<BlogType[]>(url).then((res) => res.data);
// // PKで検索
// export const blogGetPk = (url: string) =>
//   axios.get<BlogType>(url).then((res) => res.data);

// ------------------------------------
// ブログデータの全件取得（idのみ）
// ------------------------------------
export const getAllPostIds = async () => {
  //   const blogs = await blogGet(apiUrl);
  const blogs = await client
    .getList({
      endpoint: "blogs",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  //   return blogs.contents.map((blog) => {
  //     return {
  //       params: {
  //         id: String(blog.id),
  //       },
  //     };
  //   });
};

// ------------------------------------
// ブログデータの取得（パラメータのキーで取得する）
// ------------------------------------
export const getPostData = async (id?: string) => {
  if (!id) return null;
  const blog = await client
    .get({
      endpoint: "blog",
      queries: { ids: id },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return blog;
};
