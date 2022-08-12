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

// * Widget components props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "see-more" | "next-project";
}
export interface VisuallyHiddenProps {
  asChild?: boolean;
  children: ReactNode;
}
