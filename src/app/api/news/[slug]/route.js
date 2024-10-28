import request, { gql } from "graphql-request";
export async function GET(req, { params }) {
  const slug = await params.slug;
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
  return Response.json({ data: result, status: 200 });
}
