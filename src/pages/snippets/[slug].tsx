import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import * as React from "react";
import { getAllItems, getBlogOrSnippetBySlug } from "@lib/blog";
import { Seo } from "@components/Seo";
import { Snippet } from "types/Snippet";
import { BlogHeader } from "@components/BlogHeader";
import { Markdown } from "@components/Markdown";

interface Props {
  snippet: Snippet;
}

const PostPage = ({ snippet }: Props) => {
  const keywords = snippet.keywords?.split(", ") ?? [];

  return (
    <>
      <Seo
        title={`${snippet.title} - Zaid Mukaddam`}
        description={snippet.intro ?? undefined}
        keywords={["code snippets", "snippets Zaid Mukaddam", ...keywords]}
        url={`https://realzaidmukaddam.tech/snippets/${snippet.slug}`}
      />
      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />

        <meta name="authors" content="Zaid Mukaddam" />
        <meta name="created" content={snippet.createdAt} />
      </Head>

      <BlogHeader post={snippet} />

      <Markdown content={snippet.content} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const snippets = await getAllItems<Snippet>("snippets", ["slug"]);

  return {
    fallback: false,
    paths: snippets.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug.toString();

  const snippet = await getBlogOrSnippetBySlug<Snippet>(slug, "snippets", [
    "content",
    "createdAt",
    "slug",
    "title",
    "keywords",
    "intro",
    "updatedAt",
  ]);

  return {
    props: {
      snippet: snippet ?? null,
    },
  };
};

export default PostPage;
