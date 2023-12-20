import React, { useEffect, useState } from "react";
import style from "./newblog.module.css";
import BlogDataServices from "../../Services/BlogServices";

const Newblog = ({blogId,setBlogId}) => {
  const [title, setTitle] = useState("");
  const [blog, setblog] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog={
        title,
        blog
    }
    console.log(newBlog);
    if(blogId !== undefined && blogId !== ""){
         await BlogDataServices.updateBlog(blogId,newBlog);

    }else{
      try {
        await BlogDataServices.addBlog(newBlog);
      } catch (error) {
        console.log(error)
      }
    }
    setTitle("");
    setblog("")
  };
  const editHandler=async (id)=> {
    const BlogData = await BlogDataServices.getBlog(id);
    setTitle(BlogData.data().title);
    setblog(BlogData.data().blog);
    console.log("data : ",BlogData.data());
  }
  useEffect( ()=> {
    if(blogId !== undefined && blogId !== ""){
      editHandler(blogId);
      // console.log(blogId);
    }
  },[blogId])

  return (
    <div>
      <div className={style.container}>
        <form action="" onSubmit={handleSubmit} className={style.form}>
          <input type="text" onChange={(e) => setTitle(e.target.value) } value={title} />

          <br />
          <br />
          <textarea
            onChange={(e) => setblog(e.target.value) }
            value={blog}
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <br />
          {blogId!=="" ? <input type="submit" value="update" />:<input type="submit" value="add" />}
          
        </form>
      </div>
    </div>
  );
};

export default Newblog;
