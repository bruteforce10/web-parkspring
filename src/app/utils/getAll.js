import request, { gql } from "graphql-request";

export const getAll = async (orderBy, category) => {
  let query = "";

  if (category) {
    query = gql`
    query MyQuery {
      articels(orderBy: ${orderBy},where: { category:${category} }) {
        metaDescription
        title
        category
        createdAt
        cover {
          url
          fileName
        }
        slug
      }
      articelsConnection {
        aggregate {
          count
        }
      }
    }
  `;
  } else {
    query = gql`
    query MyQuery {
      articels(orderBy: ${orderBy}) {
        metaDescription
        title
        category
        createdAt
        cover {
          url
          fileName
        }
        slug
      }
      articelsConnection {
        aggregate {
          count
        }
      }
    }
  `;
  }

  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwr3x7dr00qq07wechiddjy2/master",
    query
  );
  return result;
};
