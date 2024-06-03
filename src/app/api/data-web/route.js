import request, { gql } from "graphql-request";

export async function GET() {
  const query = gql`
    query Assets {
      dataLandingPages {
        descriptionAboutUs
        descriptionHook
        descriptionMadeBy
        featureList {
          description
          title
          image {
            url
          }
          id
        }
        headingAboutUs
        headingFeature
        headingHeader
        headingHook
        headingMadeBy
        headingTypeUnit
        listFeature {
          title
          description
          image {
            url
          }
        }
        startMenu {
          listMenu
        }
        typeHouse {
          bathroom
          bedroom
          carport
          electric
          description
          title
          lb
          lt
        }
        listLocation {
          titleDuration
          location
        }
        headingLocation
        headingLocation
        linkFacebook
        linkInstagram
        noWhatsapp
      }
    }
  `;

  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwr3x7dr00qq07wechiddjy2/master",
    query
  );
  return Response.json({ data: result, status: 200 });
}
