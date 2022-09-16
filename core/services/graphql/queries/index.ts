import { gql } from "graphql-request";

export const HOMEPAGE = gql`
  query homepage($lang: [Locale!]!) {
    page(where: { pageName: "home" }, stage: DRAFT) {
      seo(locales: $lang) {
        title
        description
      }
      heading(locales: $lang) {
        title
        subtitle
        socialMedia {
          socialMedia
          url
        }
      }
      highlightedCases(locales: $lang) {
        title
        cases {
          id
          banner(locales: en) {
            url
          }
          slug
          projectName
          caseOrder
        }
      }
      about(locales: $lang) {
        title
        subtitle
        people {
          id
          personName
          profilePicture(locales: en) {
            url
          }
          bio {
            text
          }
          socialMedia {
            socialMedia
            url
          }
        }
      }
    }
  }
`;

export const CASE = gql`
  query case($slug: String, $lang: [Locale!]!) {
    case(locales: $lang, where: { slug: $slug }, stage: DRAFT) {
      banner(locales: [en]) {
        url
      }
      projectName
      caseOrder
      title
      description
      dataSheet {
        services
        artDirector {
          personName
        }
        design {
          personName
        }
        dev {
          personName
        }
        date
      }
      designStrategy
      snaps(locales: [en], first: 50) {
        id
        url
      }
      nextCase {
        slug
      }
      previousCase {
        slug
      }
    }
  }
`;

export const ALL_CASES = gql`
  query allCases($lang: [Locale!]!) {
    cases(stage: DRAFT, orderBy: caseOrder_ASC, locales: $lang) {
      id
      projectName
      banner(locales: [en]) {
        url
      }
      slug
      caseOrder
    }
  }
`;

export const PROJECTS_PAGE_TITLE = gql`
  query projectsPageTitle($lang: [Locale!]!) {
    page(where: { pageName: "home" }, stage: DRAFT) {
      highlightedCases(locales: $lang) {
        title
      }
    }
  }
`;

export const PEOPLE = gql`
  query People($lang: [Locale!]!) {
    people(locales: $lang) {
      id
      personName
      bio {
        text
      }
      profilePicture(locales: [en]) {
        url
      }
      socialMedia(locales: [en]) {
        socialMedia
        url
      }
    }
  }
`;
