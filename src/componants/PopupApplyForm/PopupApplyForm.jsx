import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styles from "./PopupApplyForm.module.css";
import config from "../../services/config";

const PopupApplyForm = ({ jobId, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    currentCtc: "",
    expectedCtc: "",
    mobile: "",
    noticePeriod: "",
    qualification: "",
    resume: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${config.apiUrl}/candidate/apply/${jobId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Applied Successfully!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
        });

        setTimeout(() => {
          onClose();
          // navigate("/"); // Navigate to the Home page
        }, 3000);
      } else {
        toast.error(result.message || "Failed to apply for the job.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2 className={styles.title}>Apply for Job</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.row}>
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="currentCtc"
              placeholder="Current CTC"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.row}>
            <input
              type="number"
              name="expectedCtc"
              placeholder="Expected CTC"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.row}>
            <input
              type="text"
              name="noticePeriod"
              placeholder="Notice Period"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <input
              type="text"
              name="resume"
              placeholder="Resume (Google Drive Link)"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.closeButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      {/* ToastContainer inside the current component */}
      <ToastContainer />
    </div>
  );
};

export default PopupApplyForm;
