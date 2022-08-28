import { gql } from "graphql-request";

export const HOMEPAGE_PT = gql`
  query {
    page(where: { pageName: "home" }, stage: DRAFT) {
      seo(locales: pt_BR) {
        title
        description
      }
      heading(locales: pt_BR) {
        title
        subtitle
      }
      highlightedCases(locales: pt_BR) {
        title
        cases {
          id
          banner(locales: en) {
            url
          }
          slug
        }
      }
      about(locales: pt_BR) {
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
    page(where: { pageName: "home" }, stage: DRAFT) {
      seo {
        title
        description
      }
      heading {
        title
        subtitle
      }
      highlightedCases {
        title
        cases {
          id
          banner(locales: en) {
            url
          }
          slug
        }
      }
      about {
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

export const CASE_EN = gql`
  query case($slug: String) {
    case(locales: [en], where: { slug: $slug }, stage: DRAFT) {
      banner {
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
      snaps(first: 50) {
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

export const ALL_CASES_PT = gql`
  query {
    cases(stage: DRAFT, orderBy: caseOrder_ASC, locales: [pt_BR]) {
      id
      projectName
      banner(locales: [en]) {
        url
      }
      slug
    }
  }
`;

export const ALL_CASES_EN = gql`
  query {
    cases(stage: DRAFT, orderBy: caseOrder_ASC, locales: [en]) {
      id
      projectName
      banner {
        url
      }
      slug
    }
  }
`;

export const PROJECTS_PAGE_TITLE = gql`
  query {
    page(where: { pageName: "home" }, stage: DRAFT) {
      highlightedCases(locales: [pt_BR]) {
        title
      }
    }
  }
`;

export const PROJECTS_PAGE_TITLE_EN = gql`
  query {
    page(where: { pageName: "home" }, stage: DRAFT) {
      highlightedCases {
        title
      }
    }
  }
`;
