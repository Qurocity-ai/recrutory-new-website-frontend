import React from 'react';
import styles from "../JobListing/StaticJobListing.module.css";

const jobData = [
    {
        title: "Voice Process Specialist",
        company: "Recrutory",
        languages: "Tamil, Telugu, Malayalam, Kannada",
        location: "Pune On-site",
        skills: "Excellent communication in English & Hindi (No MTI/RTI)",
        qualification: "Graduate in any field",
        experience: "Freshers and experienced candidates welcome",
        shift: "Rotational shifts",
        salary: "₹28,500 CTC to ₹40,000 (Pune-Onsite)",
        applylink:"https://forms.gle/j55USKyiGTARkVWb6"

    },
    { title: "Dutch Voice Support Executive", company: "Recrutory", languages: "Dutch (spoken & written)", location: "Gurgaon", skills: "Excellent communication and interpersonal skills", qualification: "Graduate in any field", experience: "Prior experience in voice support or customer service is a plus", shift: "Rotational shifts", salary: "Up to ₹15 LPA", perks: "Relocation assistance",
        applylink: "https://forms.gle/j55USKyiGTARkVWb6"
     },
    { title: "Voice Process Specialist - German & Italian", company: "Recrutory", languages: "German, Italian (B2 or above)", location: "Jaipur", skills: "Excellent spoken proficiency in German/Italian", qualification: "Graduate in any field", experience: "Voice process experience preferred", shift: "Onsite only", salary: "Up to ₹8LPA", relocation: "Provided", 
        applylink: "https://forms.gle/yYLm8AHdo59dUpNU6"
    },
    {
        title: "Voice Process Specialist - Spanish & French",
        company: "Recrutory",
        languages: "Spanish, French (B2 or above)",
        location: "Gurgaon",
        skills: "Excellent spoken proficiency in Spanish/French",
        qualification: "Graduate in any field",
        experience: "Voice process experience preferred",
        shift: "Onsite only",
        salary: "Up to ₹8LPA",
        relocation: "Provided",
        applylink: "https://forms.gle/yYLm8AHdo59dUpNU6"
    },
    {
        title: "Customer Support Executive Voice Process - English",
        company: "Recrutory",
        languages: "English (C1 proficiency)",
        location: "Pune On-site",
        skills: "Excellent communication in English & Hindi (No MTI/RTI)",
        qualification: "Graduate in any field",
        experience: "Freshers and experienced candidates welcome",
        shift: "Rotational shifts",
        salary: "₹40,000 (Pune-Onsite)",
        applylink: "https://forms.gle/j55USKyiGTARkVWb6"
    },
    {
        title: "Voice Support Executive",
        company: "Recrutory",
        languages: "Burmese, Turkish (spoken & written)",
        location: "Chennai On-site",
        skills: "Excellent communication and interpersonal skills",
        qualification: "Graduate in any field",
        experience: "Prior experience in voice support or customer service is a plus",
        shift: "Rotational shifts",
        salary: "Up to ₹8LPA",
        perks: "Relocation assistance",
        applylink: "https://forms.gle/gYmbRZ3vrdGtoa1i9"
    },
    {
        title: "Prompt Evaluation Analyst (LLM Model Responses)",
        company: "Recrutory",
        languages: "Mandarin, Czech, Malay",
        location: "Remote (Global)",
        skills: "Strong analytical skills, excellent written communication, attention to detail",
        qualification: "Master's or Ph.D. required",
        experience: "Experience in content analysis or writing is a plus",
        shift: "27-30 hours/week (Flexible)",
        salary: "Hourly basis",
        perks: "Opportunity to work on cutting-edge AI evaluation                 ",
        duration: "1-3 months",
        applylink: "https://forms.gle/Y9KEg6pr9Eb9UJP58"
    },
    {
        title: "Search Relevance Rating Specialist (Video/Music)",
        company: "Recrutory",
        languages: "Good English writing skills",
        location: "Remote",
        skills: "Analytical mindset, knowledge of Singaporean culture",
        qualification: "No prior experience required",
        experience: "Not required",
        shift: "25-35 hours/week (Mon - Fri), flexible timings",
        salary: "Hourly basis",
        perks: "Work on improving search algorithms and user experience",
        duration: "2-3 months",
        applylink: "https://forms.gle/YG2RaMA95r5PV31L6"
    }
];

const generalJobs = jobData.slice(0, jobData.length - 2); // First set of jobs
const aiJobs = jobData.slice(jobData.length - 2)
function StaticJobListing() {
    return (
        <div className={styles.mainsection}>
            <h1 className={styles.title}>Currently Hiring!!</h1>

            {/* General Jobs Section */}
            <div className={styles.jobGrid}>
                {generalJobs.map((job, index) => (
                    <div className={styles.jobCard} key={index}>
                        <div className={styles.jobTitle}>
                            <h3>{job.title}</h3>
                            <p className="company">{job.company}</p>
                        </div>
                        <hr />
                        <p className="language"><span>Language: </span>{job.languages}</p>
                        <p className="location"><span>Location: </span>{job.location}</p>
                        <p className="description"><span>Skills: </span>{job.skills}</p>
                        <p className="qualification"><span>Qualification: </span>{job.qualification}</p>
                        <p className="experience"><span>Experience:</span>{job.experience}</p>
                        <p className="shift"><span>Shift: </span>{job.shift}</p>
                        <p className="salary"><span>Salary:</span>{job.salary}</p>
                        {job.perks && <p className="perks"><span>Perks:</span> {job.perks}</p>}
                        {job.relocation && <p className="relocation"><span>Relocation:</span> {job.relocation}</p>}
                        {job.date && <p className="date"><span>Date:</span> {job.date}</p>}
                        <a href={job.applylink} className={styles.detailsLink}>
                            Apply Now
                        </a>
                    </div>
                ))}
            </div>

            {/* AI Model Training Jobs Section */}
            <h2 className={styles.subtitle}>Roles in AI Model Training</h2>
            <div className={styles.jobGrid}>
                {aiJobs.map((job, index) => (
                    <div className={styles.jobCard} key={index}>
                        <div className={styles.jobTitle}>
                            <h3>{job.title}</h3>
                            <p className="company">{job.company}</p>
                        </div>
                        <hr />
                        <p className="language"><span>Language: </span>{job.languages}</p>
                        <p className="location"><span>Location: </span>{job.location}</p>
                        <p className="description"><span>Skills: </span>{job.skills}</p>
                        <p className="qualification"><span>Qualification: </span>{job.qualification}</p>
                        <p className="experience"><span>Experience:</span>{job.experience}</p>
                        <p className="shift"><span>Shift: </span>{job.shift}</p>
                        <p className="salary"><span>Salary: </span>{job.salary}</p>
                        {job.perks && <p className="perks"><span>Perks:</span> {job.perks}</p>}
                        {job.relocation && <p className="relocation"><span>Relocation:</span> {job.relocation}</p>}
                        {job.date && <p className="date"><span>Date:</span> {job.date}</p>}
                        <a href={job.applylink} className={styles.detailsLink}>
                            Apply Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaticJobListing;
