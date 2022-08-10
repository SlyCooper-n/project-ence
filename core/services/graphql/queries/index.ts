import { gql } from "graphql-request";

export const HOMEPAGE_PT = gql`
  query {
    homepages {
      headingSection(locales: pt_BR) {
        logo {
          id
        }
        subtitle
      }
      highlightedCases(locales: pt_BR) {
        title
        banners(locales: en) {
          url
        }
      }
      aboutSection(locales: pt_BR) {
        people {
          personName
          profilePicture(locales: en) {
            url
          }
        }
      }
    }
  }
`;
