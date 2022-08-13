import { useTheme } from "@core/hooks";
import { PageContainerProps } from "@core/types";
import Head from "next/head";

export const PageContainer = (props: PageContainerProps) => {
  const { headTitle, description, children } = props;

  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>{headTitle ?? "Next page"}</title>
        <meta name="description" content={description} />
      </Head>

      <div data-theme={theme} className="w-screen min-h-screen flex flex-col">
        <div className="container w-[95vw]">{children}</div>
      </div>
    </>
  );
};
