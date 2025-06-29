import { api_endpoint } from "@/constants";
import { gql, GraphQLClient } from "graphql-request";

const qraphQLClient = new GraphQLClient(api_endpoint);

export const bannerSection = async () => {
  const query = gql`
    query MyQuery {
      product {
        compareAtPrice
        description
        id
        isFeatured
        name
        price
        publishedAt
        shortdescription
        statu
      }
    }
  `;
  const result = await qraphQLClient.request(query);
  return result;
};

// export const Producttest = async () => {
//   const query = gql`
//     query MyQuery {
//       productTests {
//         compareAtPrice
//         description
//         id
//         isFeatured
//         name
//         price
//         publishedAt
//         shortdescription
//         statu
//       }
//     }
//   `;
//   const result = await qraphQLClient.request(query);
//   return result;
// };

type Product = {
  compareAtPrice: number;
  description: string;
  id: string;
  isFeatured: boolean;
  name: string;
  price: number;
  publishedAt: string;
  shortdescription: string;
  status: string;
  image: { url: string }[];
}[];

export const getSingleProduct = async (id: string): Promise<Product> => {
  const query = gql`
    query MyQuery($id: ID!) {
      product(where: { id: $id }) {
        compareAtPrice
        description
        id
        isFeatured
        name
        price
        publishedAt
        shortdescription
        statu
        image {
          url
        }
      }
    }
  `;
  const variables = { id };
  const result = await qraphQLClient.request<{ product: Product }>(
    query,
    variables
  );
  return result.product;
};

export const Posts = async () => {
  const query = gql`
    query MyQuery {
      blogs {
        id
        title
        description
        createdAt
        category
        image {
          url
        }
      }
    }
  `;
  const result = await qraphQLClient.request(query);
  return result;
};

type Blog = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  date: string;
  category: string;
  image: { url: string }; // ✅ Correct field name
};

export const getSinglePosts = async (id: string): Promise<Blog> => {
  const query = gql`
    query MyQuery($id: ID!) {
      blogs(where: { id: $id }) {
        id
        title
        description
        createdAt
        category
        image {
          url
        }
      }
    }
  `;
  const variables = { id };
  const result = await qraphQLClient.request<{ blogs: Blog[] }>(query, variables);
  return result.blogs[0]; // single blog
};
