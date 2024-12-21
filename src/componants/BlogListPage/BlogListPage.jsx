import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogList.module.css';
import config from "../../services/config";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; 

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${config.apiUrl}/blog/blogs`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.reverse());
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  // Get the blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Pagination Logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
    
    <div className={styles.envelope}>

    <h1>Blogs</h1>

    <div className={styles.blogsContainer}>
      {currentBlogs.length > 0 ? (
        <>
          <div className={styles.blogGrid}>
            {currentBlogs.map((blog) => (
              <div key={blog._id} className={styles.blogCard}>
                <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                  <img src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                  <p className={styles.blogDate}>{formatDate(blog.date)}</p> {/* Format date */}
                  <p className={styles.blogSummary}>{blog.summary}</p>
                  <div className={styles.readMore}>Read More</div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
    </div>
    
    </>
  );
};

export default BlogListPage;
