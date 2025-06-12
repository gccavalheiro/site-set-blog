type PostListProps = {
  children: React.ReactNode;
};
export function PostList(props: PostListProps) {
  const { children } = props;

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
