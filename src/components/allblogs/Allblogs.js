import React, { useEffect, useState } from "react";
import style from "./allblogs.module.css";
import BlogDataServices from "../../Services/BlogServices";

const Allblogs = ({getBlogId}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    handleAllBlogs();
  }, [blogs]);

  const handleAllBlogs = async () => {
    try {
      const data = await BlogDataServices.getAllBlogs();
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelBlog= async(id)=>{
    await BlogDataServices.deleteBlog(id)
  }

  return (
    <div className={style.container}>
      {blogs.map((item,index) => {
        return (
          <div key={index} className={style.card}>
            <h1>{item.title}</h1>
            <p>{item.blog}</p>
            <button onClick={()=> getBlogId(item.id)}>edit</button> 
            <button onClick={()=> handleDelBlog(item.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Allblogs;
