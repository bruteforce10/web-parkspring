import request, { gql } from "graphql-request";
export async function GET(req, { params }) {
  const slug = params.slug;
  const query =
    gql`
  query MyQuery {
    articels(where: {title_contains:"` +
    slug +
    `" }) {
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

  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwr3x7dr00qq07wechiddjy2/master",
    query
  );
  return Response.json({ data: result, status: 200 });
}
