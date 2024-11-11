import request, { gql } from "graphql-request";

export async function POST(req) {
  const { first = 6, skip = 0, orderBy } = await req.json();

  const query = gql`
    query MyQuery {
      articels(first: ${first}, skip: ${skip}, orderBy: ${orderBy}) {
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

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const first = searchParams.get("first") || 6;
  const skip = searchParams.get("skip") || 0;
  const orderBy = searchParams.get("orderBy") || "createdAt_ASC";
  const category = searchParams.get("category") || null;
  let query = "";

  if (category) {
    query = gql`
      query MyQuery {
        articels(where: { category:${category} }) {
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
  return Response.json({ data: result, status: 200 });
}
