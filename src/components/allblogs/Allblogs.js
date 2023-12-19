import React, { useEffect, useState } from "react";
import style from "./allblogs.module.css";
import BlogDataServices from "../../Services/BlogServices";

const Allblogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    handleAllBlogs();
  }, []);

  const handleAllBlogs = async () => {
    try {
      const data = await BlogDataServices.getAllBlogs();
      console.log(data.docs);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      {blogs.map((item,index) => {
        return (
          <div key={index} className={style.card}>
            <h1>{item.title}</h1>
            <p>{item.blog}</p>
            <button>edit</button> <button>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Allblogs;
