import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  AvatarContainer,
  AvatarContent,
  AvatarDescription,
  AvatarImage,
  AvatarTitle,
} from "@/components/avatar";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find(
    (post) => post.slug.toLocaleLowerCase() === slug.toLocaleLowerCase()
  );
  const publishedDate =
    post?.date && new Date(post?.date).toLocaleDateString("pt-BR");

  return (
    <main className="my-24 text-gray-100 container">
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
                  <AvatarImage src={post?.author.avatar} alt={post?.title} />
                  <AvatarContent>
                    <AvatarTitle>{post?.author.name}</AvatarTitle>
                    <AvatarDescription>
                      Publicado em {""}
                      <time dateTime={post.date}>{publishedDate}</time>
                    </AvatarDescription>
                  </AvatarContent>
                </AvatarContainer>
              )}
            </header>
          </div>
        </article>
      </div>
    </main>
  );
}
