'use client'
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export function PostShare(props: PostShareProps) {
  const { description, title, url } = props;
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });

  return (
    <aside className="space-y-6">
      <div className="py-4 md:py-0">
        <h2 className="mb-4 hidden lg:block text-heading-xs text-gray-100">
          Compartilhar
        </h2>

        <div className="flex lg:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              variant="outline"
              className="lg:justify-start w-full lg:w-fit "
              onClick={() => provider.action()}
              title={provider.name}
            >
              {provider.icon}
              <span className="hidden lg:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
