import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogDetail.module.css'; 
import config from "../../services/config";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${config.apiUrl}/blog/blogs/${id}`)
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  // Function to format date as '21 Nov 2024'
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles.singleBlogContainer}>
      {blog ? (
        <>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogDate}>{formatDate(blog.date)}</p>
          <img src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
          <div className={styles.blogContent}>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          {/* <button className={styles.readMoreButton}>
            Read the blog
          </button> */}
        </>
      ) : (
        <p>Loading blog...</p>
      )}
    </div>
  );
};

export default BlogDetailPage;
