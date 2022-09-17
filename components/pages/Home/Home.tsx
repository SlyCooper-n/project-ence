import { PageContainer } from "@components/layouts";
import { Footer, Navbar } from "@components/modules";
import { Button, VisuallyHidden } from "@components/widgets";
import { HomeProps } from "@core/types";
import { scrollDown } from "@core/utils";
import { motion, useAnimationControls } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Home = ({ cmsData }: HomeProps) => {
  const { seo, heading, highlightedCases, about } = cmsData;

  const isInEnglish = useRouter().pathname.includes("/en");
  const headingControls = useAnimationControls();

  async function handleShowHeading(isMenuOpen: boolean) {
    await headingControls.start({
      opacity: isMenuOpen ? 0 : 1,
      transition: { delay: isMenuOpen ? 0 : 1 },
    });
  }

  return (
    <PageContainer headTitle={seo.title} description={seo.description}>
      <Navbar onMenuOpen={handleShowHeading} />

      <div className="hidden sm:block absolute right-0 w-3/5 h-full bg-secondary" />

      {/* Heading */}
      <motion.main
        animate={headingControls}
        className="relative h-[calc(100vh-3rem)] flex flex-col justify-center"
      >
        <VisuallyHidden asChild>
          <h1>{heading.title}</h1>
        </VisuallyHidden>

        <motion.img
          src="/images/logo.svg"
          alt="Ence logo"
          className="sm:max-w-[60vw] mb-12"
        />

        <motion.p className="sm:w-4/5 sm:max-w-[929px] mb-12 text-sm sm:text-xl">
          {heading.subtitle}
        </motion.p>

        <motion.ul className="flex sm:justify-end gap-4 text-sm sm:text-base">
          {heading.socialMedia.map((media) => (
            <li key={media.socialMedia}>
              <a
                href={media.url}
                target="_blank"
                rel="noreferrer"
                className="relative capitalize"
              >
                {media.socialMedia}
              </a>
            </li>
          ))}

          <style jsx>{`
            a.relative::before {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 0;
              height: 3px;
              margin-bottom: -3px;
              background-color: #22223b;
              transition: all 0.3s ease;
            }
            a.relative:hover::before {
              width: 100%;
            }
          `}</style>
        </motion.ul>

        <Lottie
          animationData={scrollDown}
          className="absolute bottom-20 w-12"
        />
      </motion.main>

      {/* Highlighted cases */}
      <section className="mb-16 sm:mb-60">
        <h2 className="mb-4 sm:mb-12 font-semibold text-xl sm:text-5xl">
          {highlightedCases.title}
        </h2>

        <div className="mb-5 flex flex-col items-center">
          {highlightedCases.cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={
                isInEnglish
                  ? `/en/projects/${caseItem.slug}`
                  : `/projects/${caseItem.slug}`
              }
            >
              <a className="group relative w-full max-h-[350px] overflow-clip">
                <img
                  src={caseItem.banner.url}
                  alt="Zoeira Cooking case"
                  className="w-full max-h-[350px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />

                <div className="absolute top-0 left-0 w-full h-full p-4 flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 text-xl sm:text-4xl text-white transition-all duration-500" />
              </a>
            </Link>
          ))}
        </div>

        <Link href={isInEnglish ? "/en/projects" : "/projects"}>
          <a>
            <Button className="w-[180px] sm:w-[280px] mx-auto">
              {isInEnglish ? "See more projects" : "Ver mais projetos"}
            </Button>
          </a>
        </Link>
      </section>

      {/* People */}
      <section
        id="about"
        className="w-full mb-16 sm:mb-32 flex flex-col lg:flex-row lg:justify-between items-center"
      >
        <div className="lg:max-w-[33.33%] text-center lg:text-start">
          <h2 className="mb-4 text-xl sm:text-5xl">{about.title}</h2>

          <p className="mb-4 text-[8px] sm:text-base">{about.subtitle}</p>

          <Link href={isInEnglish ? "en/about" : "/about"}>
            <a className="w-fit hidden lg:block">
              <Button type="button" className="w-[280px]">
                {isInEnglish ? "See more" : "Ver mais"}
              </Button>
            </a>
          </Link>
        </div>

        <svg
          viewBox="0 0 230 231"
          fill="none"
          className="flex-[3] w-3/4 max-w-[280px] lg:max-w-[505px] mx-auto lg:mx-0"
        >
          <rect
            x="43.752"
            y="34"
            width="163.248"
            height="163.248"
            fill="#E5F2C9"
          />
          <g filter="url(#filter0_d_1096_33)">
            <rect
              x="27"
              y="54.3169"
              width="122.614"
              height="122.614"
              fill="black"
            />
          </g>
          <path
            d="M108.622 138.524V133.445C108.622 130.751 107.552 128.167 105.647 126.262C103.742 124.357 101.158 123.287 98.4635 123.287H78.1467C75.4525 123.287 72.8687 124.357 70.9636 126.262C69.0585 128.167 67.9883 130.751 67.9883 133.445V138.524M98.4636 102.97C98.4636 108.58 93.9155 113.128 88.3052 113.128C82.6948 113.128 78.1467 108.58 78.1467 102.97C78.1467 97.3596 82.6948 92.8115 88.3052 92.8115C93.9155 92.8115 98.4636 97.3596 98.4636 102.97Z"
            stroke="#F2F2F8"
            strokeWidth="5.07921"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <defs>
            <filter
              id="filter0_d_1096_33"
              x="0.228415"
              y="0.773724"
              width="229.7"
              height="229.7"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="26.7716" />
              <feGaussianBlur stdDeviation="26.7716" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1096_33"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1096_33"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <Link href={isInEnglish ? "en/about" : "/about"}>
          <a className="w-fit mx-auto block lg:hidden">
            <Button type="button" className="w-[148px]">
              {isInEnglish ? "See more" : "Ver mais"}
            </Button>
          </a>
        </Link>
      </section>

      <Footer />
    </PageContainer>
  );
};
