import { ButtonHTMLAttributes, ReactNode } from "react";

// * Response from queries
export interface HomepageResponse {
  homepages: {
    seo: {
      title: string;
      description: string;
    };
    headingSection: {
      logo: {
        url: string;
      } | null;
      title: string;
      subtitle: string;
    };
    highlightedCases: {
      title: string;
      banners: {
        id: string;
        url: string;
      }[];
    };
    aboutSection: {
      title: string;
      subtitle: string;
      people: {
        id: string;
        personName: string;
        profilePicture: {
          url: string;
        };
      }[];
    };
  }[];
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
  homepages: {
    highlightedCases: {
      title: string;
    };
  }[];
}

// * Context providers props
export interface ThemeProviderProps {
  children: ReactNode;
}

// * Pages components props
export interface HomeProps {
  cmsData: {
    seo: {
      title: string;
      description: string;
    };
    headingSection: {
      logo: {
        url: string;
      } | null;
      title: string;
      subtitle: string;
    };

    highlightedCases: {
      title: string;
      banners: {
        id: string;
        url: string;
      }[];
    };

    aboutSection: {
      title: string;
      subtitle: string;
      people: {
        id: string;
        personName: string;
        profilePicture: {
          url: string;
        };
      }[];
    };
  };
}
export interface ProjectPageProps {
  caseData: CaseDataResponse["case"];
}
export interface AllCasesPageProps {
  title: string;
  cases: {
    id: string;
    projectName: string;
    banner: {
      url: string;
    };
    slug: string;
  }[];
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
