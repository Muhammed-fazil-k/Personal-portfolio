import { useRouter } from "next/router";
import React, { useState } from "react";

const CreatePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  async function handleFormSubmit(e) {
    e.preventDefault();
    const reqParams = {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }
    try {
      const res = await fetch("http://localhost:3000/api/add-blog", reqParams);
      if (!res.ok) {
        throw new Error("Failed to add blog");
      }
      const addedBlog = await res.json();
      console.log("Added Blog", res.body);
    } catch (err) {
      console.error("Error adding new Blog -url - :", err);
    }
    setFormData({
      title: "",
      content: "",
    });
    router.push('/blogs');
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
      <p>Creating new Page</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={handleInputChange}
          name="title"
        />
        <input
          type="text"
          placeholder="content"
          onChange={handleInputChange}
          name="content"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
***REMOVED***

export default CreatePage;
