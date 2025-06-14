import { BlogList, BloglistProps } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";

export default function BlogPage(props: BloglistProps) {
  const { posts } = props;
  
  return <BlogList posts={posts} />;
}

export const getStaticProps = (() => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps<BloglistProps>;
