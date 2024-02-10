import { BlogCard } from "../../Home/BlogCard";

export const Blog = () => {
  return (
    <section className="h-auto w-full py-14">
      <div className=" bg-color6 h-fit w-full flex gap-8 flex-col">
        <h2 className="ml-3 text-4xl text-center text-white pt-10 pb-4">
          Descubre mi blog:
        </h2>
        <BlogCard />
      </div>
    </section>
  );
};
