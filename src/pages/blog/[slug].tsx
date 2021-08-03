import { BlogHeader } from "@components/BlogHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { getAllItems, getBlogOrSnippetBySlug } from "@lib/blog";
import { Post } from "types/Post";
import { Seo } from "@components/Seo";
import { Markdown } from "@components/Markdown";

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!post) {
      router.push("/404");
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  const keywords = post.keywords?.split(", ") ?? [];
  return (
    <>
      <Seo
        title={`${post.title} - Zaid Mukaddam`}
        description={post.intro ?? undefined}
        keywords={["blog", "blog Zaid Mukaddam", ...keywords]}
        url={`https://realzaidmukaddam.tech/blog/${post.slug}`}
      />
      <Head>
        <link
          rel="preload"
          href="/fonts/CascadiaMono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* why not "author": https://github.com/postlight/mercury-parser/blob/HEAD/src/extractors/generic/author/constants.js#L5 */}
        <meta name="authors" content="Zaid Mukaddam" />
        <meta name="created" content={post.createdAt} />
      </Head>

      <BlogHeader post={post} />

      <Markdown content={post.content} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllItems<Post>("posts", ["slug"]);

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug.toString();

  const post = await getBlogOrSnippetBySlug<Post>(slug, "posts", [
    "content",
    "createdAt",
    "updatedAt",
    "slug",
    "title",
    "intro",
    "keywords",
    "readingTime",
  ]);

  return {
    props: {
      post: post ?? null,
    },
  };
};

export default PostPage;
