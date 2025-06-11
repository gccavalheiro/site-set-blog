import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function PostPage() {
    const routes = useRouter()
  console.log(routes.query.slug)
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Blog Posts</h1>
      <p className="text-lg text-gray-700">This is a simple blog posts page.</p>

      <Button >Button</Button>
    </div>
  );
}