import * as React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

// these should be displayed on all pages.
const DEFAULT_KEYWORDS = ["zaidmukaddam", "Zaid Mukaddam", "zaid mukaddam", "realzaidmukaddam"];

const defaults: Props = {
  title: "Zaid Mukaddam - Developer",
  url: "https://realzaidmukaddam.tech",
  description: "Hi I'm Zaid Mukaddam! A Student & a Developer.",
  keywords: ["zaid mukaddam", "Zaid Mukaddam", "zaid mukaddam", "realzaidmukaddam"],
};

export const Seo = (props: Props) => {
  const tags = {
    ...defaults,
    ...props,
  };

  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="twitter:title" content={tags.title} />
      <meta property="og:site_name" content={tags.title} />
      <meta property="og:title" content={tags.title} />

      <meta name="description" content={tags.description} />
      <meta property="og:description" content={tags.description} />
      <meta name="twitter:description" content={tags.description} />

      <link rel="canonical" href={tags.url} />
      <meta property="og:url" content={tags.url} />

      <meta name="keywords" content={[...DEFAULT_KEYWORDS, ...tags.keywords].join(", ")} />
    </Head>
  );
};
