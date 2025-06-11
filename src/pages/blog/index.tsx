import { Header } from "@/components/header/header";

export default function BlogPage() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Blog
        </h1>
        <p className="text-lg text-gray-700">This is a simple blog page.</p>
      </div>
    </>
  );
}
