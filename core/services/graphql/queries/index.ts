import { gql } from "graphql-request";

export const HOMEPAGE_PT = gql`
  query {
    homepages(stage: DRAFT) {
      seo(locales: pt_BR) {
        title
        description
      }
      headingSection(locales: pt_BR) {
        logo {
          id
        }
        title
        subtitle
      }
      highlightedCases(locales: pt_BR) {
        title
        banners(locales: en) {
          id
          url
        }
      }
      aboutSection(locales: pt_BR) {
        title
        subtitle
        people {
          id
          personName
          profilePicture(locales: en) {
            url
          }
        }
      }
    }
  }
`;

export const HOMEPAGE_EN = gql`
  query {
    homepages(stage: DRAFT) {
      seo(locales: en) {
        title
        description
      }
      headingSection(locales: en) {
        logo {
          id
        }
        title
        subtitle
      }
      highlightedCases(locales: en) {
        title
        banners(locales: en) {
          id
          url
        }
      }
      aboutSection(locales: en) {
        title
        subtitle
        people {
          id
          personName
          profilePicture(locales: en) {
            url
          }
        }
      }
    }
  }
`;

export const CASE_PT = gql`
  query case($slug: String) {
    case(locales: [pt_BR], where: { slug: $slug }, stage: DRAFT) {
      banner(locales: [en]) {
        url
      }
      projectName
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
      snaps(locales: [en]) {
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

export const CASE_EN = gql`
  query case($slug: String) {
    case(locales: [en], where: { slug: $slug }, stage: DRAFT) {
      banner {
        url
      }
      projectName
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
      snaps {
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
