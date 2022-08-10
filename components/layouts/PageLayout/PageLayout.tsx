import { Navbar } from "@components/modules";
import { PageLayoutProps } from "@core/types";

export const PageLayout = ({ navbar = true, children }: PageLayoutProps) => {
  return (
    <>
      {navbar && <Navbar />}

      {children}
    </>
  );
};
