import React, { useState } from "react";
import style from "./newblog.module.css";
import BlogDataServices from "../../Services/BlogServices";

const Newblog = () => {
  const [title, setTitle] = useState("");
  const [blog, setblog] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog={
        title,
        blog
    }
    console.log(newBlog);
    try {
      await BlogDataServices.addBlog(newBlog);
      
    } catch (error) {
      
    }

  };

  return (
    <div>
      <div className={style.container}>
        <form action="" onSubmit={handleSubmit} className={style.form}>
          <input type="text" onChange={(e) => setTitle(e.target.value) } />
          <br />
          <br />
          <textarea
            onChange={(e) => setblog(e.target.value) }
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Newblog;
