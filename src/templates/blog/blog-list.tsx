import { Search } from "@/components/search";
import { Post } from "contentlayer/generated";
import { SearchX } from "lucide-react";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";
import { PostList } from "./components/post-list";

export type BloglistProps = {
  posts: Post[]
}

export function BlogList(props: BloglistProps) {
  const { posts } = props
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const postList = query
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLocaleLowerCase())
      )
    : posts;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="text-balance text-start text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      {postList.length > 0 ? (
        <PostList>
          {postList.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
              image={post.image}
              author={{
                avatar: post.author.avatar,
                name: post.author.name,
              }}
            />
          ))}
        </PostList>
      ) : (
        <div className="container">
          <div className="border-dashed border-2 border-gray-400 p-8 flex flex-col items-center gap-4">
            <SearchX className="w-12 h-12 text-cyan-400" />
            <h2 className="text-heading-lg font-normal text-gray-100">
              Nenhum resultado encontrado
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
