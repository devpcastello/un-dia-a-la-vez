import { Link } from "react-router-dom";
import { posts } from "../../../data/posts";

export const BlogCard = () => {
  return (
    <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 p-6">
      {posts.map(({ id, title, image, date, description }) => (
        <Link key={title} to={`/self-care/blog/${id}`}>
          <div className="bg-gray-2 w-80 h-96 rounded-lg mx-auto text-center md:w-[350px] xl:w-[330px]">
            <div className="h-48 w-full ">
              <img
                className="card-image w-full h-full rounded-t-lg"
                src={image}
                alt=""
              />
            </div>
            <div className="p-5">
              <p className="mb-3 text-gray-6 font-light">{date}</p>
              <h3 className="text-2xl mb-3 text-gray-10 font-medium">
                {title}
              </h3>
              <div className=" w-full h-12 overflow-hidden text-clip">
                <p className="text-clip overflow-hidden text-gray-8 font-normal">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
