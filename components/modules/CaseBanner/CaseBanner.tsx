import Link from "next/link";
import { useRouter } from "next/router";

interface CaseBannerProps {
  case: {
    slug: string;
    banner: {
      url: string;
    };
  };
}

export const CaseBanner = (props: CaseBannerProps) => {
  const isInEnglish = useRouter().pathname.includes("/en");

  return (
    <Link
      href={
        isInEnglish
          ? `/en/projects/${props.case.slug}`
          : `/projects/${props.case.slug}`
      }
    >
      <a className="group relative w-full h-[380px] overflow-clip">
        <img
          src={props.case.banner.url}
          alt="Ence case"
          className="w-full h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/70 group-hover:bg-black/30 text-xl sm:text-4xl text-white transition-all duration-500" />
      </a>
    </Link>
  );
};
