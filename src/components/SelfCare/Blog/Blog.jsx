import { BlogCard } from "../../Home/BlogCard/BlogCard";

export const Blog = () => {
  return (
    <div className="h-screen w-full">
      <div className="pt-20 bg-dark-green  h-fit w-full flex gap-8 flex-col">
        <BlogCard />
      </div>
    </div>
  );
};
