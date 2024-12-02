import request, { gql } from "graphql-request";

export const getAll = async (orderBy, category) => {
  let query = "";

  if (category) {
    query = gql`
    query MyQuery {
      articels(orderBy: ${orderBy},where: { category:${category} }, first: 1000) {
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
      articels(orderBy: ${orderBy}, first: 1000) {
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

export const getOne = async (slug) => {
  const query =
    gql`
    query MyQuery {
      articel(where: { slug: "` +
    slug +
    `" }) {
        category
        createdAt
        hastag
        id
        metaDescription
        metaTitle
        title
        description {
          raw
        }
          cover {
      url
      fileName
    }
        reference
      }
    }
  `;

  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwr3x7dr00qq07wechiddjy2/master",
    query
  );
  return result;
};
