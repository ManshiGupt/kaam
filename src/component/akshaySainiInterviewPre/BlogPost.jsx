import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const BlogPost = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const re = await axios.get("https://dummyjson.com/posts");
    setData(re.data.posts);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      BlogPost
      <div className="flex flex-col gap-4 px-10">
        {data.map((d, i) => (
          <div key={i} className="bg-gray-300  rounded-lg  p-4">
            <Post
              title={d.title}
              body={d.body}
              tag={d.tags}
              likes={d.reactions.likes}
              dislikes={d.reactions.dislikes}
              views={d.views}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
