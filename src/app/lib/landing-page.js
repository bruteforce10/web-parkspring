import request, { gql } from "graphql-request";
import { unstable_noStore as noStore } from "next/cache";

const HYGRAPH_ENDPOINT =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwr3x7dr00qq07wechiddjy2/master";

const landingPageQuery = gql`
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

export async function getLandingPageData() {
  noStore();

  return request(HYGRAPH_ENDPOINT, landingPageQuery);
}
