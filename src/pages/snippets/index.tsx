import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import { getAllItems } from "@lib/blog";
import styles from "css/blog.module.scss";
import { Seo } from "@components/Seo";
import { Snippet } from "types/Snippet";

interface Props {
  snippets: Snippet[];
}

const BlogPage = ({ snippets }: Props) => {
  return (
    <>
      <Seo
        title="Code snippets - Zaid Mukaddam"
        description="Small code snippets that I have found useful"
        keywords={["code snippets", "code examples", "react hooks"]}
        url="https://realzaidmukaddam.tech/snippets"
      />
      <br />
      <h1>Code snippets</h1>

      <div className={styles.blogItems}>
        {snippets.map((snippet) => {
          return (
            <Link href={`/snippets/${snippet.slug}`} key={snippet.slug}>
              <a href={`/snippets/${snippet.slug}`} className={styles.blogItem}>
                <h2>{snippet.title}</h2>

                <p>{snippet.intro}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getAllItems<Snippet>("snippets", ["slug", "title", "createdAt", "intro"]);

  return {
    props: {
      snippets,
    },
  };
};

export default BlogPage;
