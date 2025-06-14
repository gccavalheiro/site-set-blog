import {
  AvatarContainer,
  AvatarContent,
  AvatarDescription,
  AvatarImage,
  AvatarTitle,
} from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { PostShare } from "./components/post-share";

export type PostProps = {
  post: Post;
};

export function PostPage(props: PostProps) {
  const { post } = props;

  const publishedDate =
    post?.date && new Date(post?.date).toLocaleDateString("pt-BR");
  const postUrl = `https://site.set/blog${post.slug}`;

  return (
    <main className="py-24 text-gray-100 container">
      <nav className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm truncate max-w-48">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post?.image ?? ""}
              alt={post?.title ?? ""}
              fill
              className="object-cover"
            />
          </figure>

          <div className="py-8 px-6 md:p-6 lg:p-12">
            <header>
              <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              {post?.author && (
                <AvatarContainer>
                  <AvatarImage
                    src={post.author.avatar}
                    alt={post.title}
                    size="sm"
                  />
                  <AvatarContent>
                    <AvatarTitle>{post.author.name}</AvatarTitle>
                    <AvatarDescription>
                      Publicado em {""}
                      <time dateTime={post.date}>{publishedDate}</time>
                    </AvatarDescription>
                  </AvatarContent>
                </AvatarContainer>
              )}
            </header>

            {post?.body.raw && (
              <div className="prose prose-invert max-w-none mt-12">
                <Markdown content={post.body.raw} />
              </div>
            )}
          </div>
        </article>

        <PostShare description={post.description} url={postUrl} title={post.title} />
      </div>
    </main>
  );
}
