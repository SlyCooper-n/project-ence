import { ButtonHTMLAttributes, ReactNode } from "react";

// * Response from queries
export interface HomepageResponse {
  page: {
    seo: {
      title: string;
      description: string;
    };
    heading: {
      title: string;
      subtitle: string;
      socialMedia: {
        socialMedia: string;
        url: string;
      }[];
    };
    highlightedCases: {
      title: string;
      cases: {
        id: string;
        banner: {
          url: string;
        };
        slug: string;
        projectName: string;
        caseOrder: number;
      }[];
    };
    about: {
      title: string;
      subtitle: string;
      people: {
        id: string;
        personName: string;
        profilePicture: {
          url: string;
        };
        bio: {
          text: string;
        };
        socialMedia: {
          socialMedia: string;
          url: string;
        }[];
      }[];
    };
  };
}
export interface CaseDataResponse {
  case: {
    banner: {
      url: string;
    };
    projectName: string;
    caseOrder: number;
    title: string;
    description: string;
    dataSheet: {
      services: string;
      artDirector: {
        personName: string;
      }[];
      design: {
        personName: string;
      }[];
      dev:
        | {
            personName: string;
          }[]
        | [];
      date: number;
    };
    designStrategy: string;
    snaps: {
      id: string;
      url: string;
    }[];
    nextCase: {
      slug: string;
    } | null;
    previousCase: {
      slug: string;
    } | null;
  };
}
export interface AllCasesPageResponse {
  cases: {
    id: string;
    projectName: string;
    banner: {
      url: string;
    };
    slug: string;
  }[];
}

export interface ProjectsPageTitleResponse {
  page: {
    highlightedCases: {
      title: string;
    };
  };
}

// * Context providers props
export interface ThemeProviderProps {
  children: ReactNode;
}

// * Pages components props
export interface HomeProps {
  cmsData: HomepageResponse["page"];
}
export interface ProjectPageProps {
  caseData: CaseDataResponse["case"];
}
export interface AllCasesPageProps {
  title: string;
  cases: AllCasesPageResponse["cases"];
}

// * Layout components props
export interface PageLayoutProps {
  navbar?: boolean;
  children: ReactNode;
}
export interface PageContainerProps {
  headTitle: string;
  description?: string;
  center?: boolean;
  children: ReactNode;
}

// * Modules components props
export interface NavbarProps {
  translucent?: boolean;
  absolute?: boolean;
}

// * Widget components props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export interface VisuallyHiddenProps {
  asChild?: boolean;
  children: ReactNode;
}
