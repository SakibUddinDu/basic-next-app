import React from "react";

const Blogs = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="grid gap-4 grid-cols-3 mt-5">
      {blogs.map((blog) => (
        <div key={blog.id} className="grid-col card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>{blog.body}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More..</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
