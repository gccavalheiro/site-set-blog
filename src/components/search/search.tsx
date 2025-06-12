import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

export function Search() {
  const router = useRouter();
  const query = (router.query.q as string) ?? '';

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    router.push(`/blog?q=${encodeURIComponent(value)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  }

  const handleSearch = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router]
  );

  function handleClearSearch() {
    router.push("/blog", undefined, {
      shallow: true,
      scroll: false,
    });
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full md:w-60 group">
      <SearchIcon
        className={cn(
          "text-gray-300 cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? " text-blue-300" : ""
        )}
        onClick={handleSearch}
      />
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleValueChange}
        className="h-10 w-full md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />

      {query && (
        <CircleX
          className="cursor-pointer text-gray-300 absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4"
          onClick={handleClearSearch}
        />
      )}
    </form>
  );
}
