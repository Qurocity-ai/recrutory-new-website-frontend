import React from "react";
import { FaPeopleGroup, FaGlobe, FaEarthAmericas, FaLanguage } from "react-icons/fa6"; // Import icons
import GlobalInsightViewStyle from "../../styles/GlobalInsight/GlobalInsightView.module.css";

function GlobalInsightView() {
  const data = [
    {
      icon: <FaPeopleGroup />,
      title: "Embracing Global Talent",
      description:
        "We leverage our extensive network and cross-border capabilities to tap into diverse talent pools across continents. From multilingual experts to management, technical, and data specialists, we bring together a global workforce to meet the evolving needs of modern organizations.",
    },
    {
      icon: <FaGlobe />,
      title: "Unlock Your Global Potential",
      description:
        "Partner with Recrutory and unlock the power of global insights. Whether you’re expanding into new markets or seeking specialized talent, trust us to be your strategic partner in navigating the complexities of global talent acquisition.",
    },
    {
      icon: <FaEarthAmericas />,
      title: "Beyond Borders",
      description:
        "Recrutory doesn’t hold back when it comes to hiring offshore resources. Our global reach enables us to navigate international markets seamlessly, providing organizations with the resources they need to thrive in an increasingly interconnected world.",
    },
    {
      icon: <FaLanguage />,
      title: "Multilingual Expertise",
      description:
        "Operating in multicultural environments requires proficiency in multiple languages. With Recrutory, organizations gain access to a diverse talent pool fluent in various languages, facilitating effective communication and cultural understanding on a global scale.",
    },
  ];

  return (
    <div className={GlobalInsightViewStyle.container}>
      {data.map((item, index) => (
        <div key={index} className={GlobalInsightViewStyle.card}>
          <div className={GlobalInsightViewStyle.icon}>{item.icon}</div>
          <div className={GlobalInsightViewStyle.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GlobalInsightView;
