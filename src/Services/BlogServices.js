import { db } from "../config/config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const blogRef = collection(db, "blogs");

class BlogDataServices{
    addBlog= (newBlog)=>{
        return addDoc(blogRef,newBlog)
    }
    getAllBlogs= ()=> {
      return getDocs(blogRef);
    }
};

export default new BlogDataServices();
