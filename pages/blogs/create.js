import WithAuth from "@/components/higher_order/WithAuth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/CreateBlog.module.css";
import Input from "@/components/Input";
import Button from "@/components/Button";
import inputStyles from '../../styles/Input.module.css'
import APP_URL from "@/config";

const CreatePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const reqParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const URL = `${APP_URL}/api/add-blog`;
    try {
      const res = await fetch(URL, reqParams);
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
    router.push("/blogs");
  }

  
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className={styles["create-container"]}>
      <div className={styles["create-title"]}>
        <h2>Create new blog</h2>
      </div>
      <form className={styles["create-form"]} onSubmit={handleFormSubmit}>
        <div className={styles["create-input"]}>
          <label>Title</label>
          <Input
            type="text"
            placeholder="title"
            onChange={handleInputChange}
            name="title"
          />
        </div>

        <div className={styles["create-input"]}>
          <label>Content</label>
          <textarea
            placeholder="content"
            onChange={handleInputChange}
            name="content"
            className={inputStyles["input"]}
            
          />
        </div>
        <div className={styles["create-button"]}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default WithAuth(CreatePage);
