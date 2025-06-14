import {
  AvatarContainer,
  AvatarContent,
  AvatarImage,
  AvatarTitle,
} from "@/components/avatar";
import Image from "next/image";
import Link from "next/link";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export function PostCard(props: PostCardProps) {
  const { author, date, description, image, slug, title } = props;

  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="p-2 flex flex-col h-full overflow-hidden">
        {/* Imagem Container */}
        <div className="relative">
          <div className="absolute bg-gray-600 rounded-bl-md top-0 right-0 px-3 py-1">
            <time className="text-body-xs text-gray-300" dateTime={date}>
              {new Date(date).toLocaleDateString("pt-BR")}
            </time>
          </div>
          <Image
            src={image}
            alt={title}
            width={288}
            height={144}
            className="w-full h-60 md:h-40 object-cover rounded-sm object-center"
          />
        </div>

        {/* Post info */}
        <div className="px-2 my-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>

          <p className="text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Post footer */}
        <div className="flex px-2 mt-auto pb-2 pt-3 items-center gap-3 border-t border-gray-400">
          <AvatarContainer>
            <AvatarImage src={author.avatar} alt={author.name} size="xs" />
            <AvatarContent>
              <AvatarTitle className="text-gray-300">{author.name}</AvatarTitle>
            </AvatarContent>
          </AvatarContainer>
        </div>
      </div>
    </Link>
  );
}
