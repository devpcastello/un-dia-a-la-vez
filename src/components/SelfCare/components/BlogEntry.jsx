import { useParams } from "react-router-dom";
import { posts } from "../../../data/posts";

export const BlogEntry = () => {
  const { index } = useParams();
  const post = posts.find((p) => p.id === parseInt(index));

  return (
    <div className="bg-dark-green pt-14">
      {post ? (
        <>
          <div className="w-full h-64 rounded-b-xl overflow-hidden">
            <img className="w-full" src={`${post.image}`} alt="" />
          </div>
          <div className="p-8">
            <h2 className="text-white font-bold text-3xl">{post.title}</h2>
            <p className="text-gray-2 pt-4"> {post.description} </p>
          </div>
        </>
      ) : null}
    </div>
  );
};
