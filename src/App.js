import React, { useState } from 'react'
import Newblog from './components/addblog/Newblog'
import Allblogs from './components/allblogs/Allblogs'

const App = () => {
  const [blogId,setBlogId] = useState("");

  const handleId =(id)=>{
    setBlogId(id);
    console.log(id);
  }
  return (
    <div>
      <Newblog blogId={blogId} setBlogId={setBlogId} />
      <Allblogs getBlogId={handleId} />
      
    </div>
  )
}
export default App

