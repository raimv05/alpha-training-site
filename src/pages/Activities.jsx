import React, { useState } from "react";
import { getAssetUrl } from "../utils/assets.js";
import { useData } from "../context/DataContext.jsx";

const tabTitles = ["Industrial Visits", "Workshops & Seminars", "Guest Lectures"];

export default function Activities() {
  const [active, setActive] = useState(0);
  const { activities } = useData();
  const currentTab = tabTitles[active];

  // Filter activities based on selected category tab
  const filtered = activities.filter((act) => act.category === currentTab);
  const videos = filtered.filter((act) => act.type === "video").map((act) => act.path);
  const images = filtered.filter((act) => act.type === "image").map((act) => act.path);

  return (
    <section className="activities_section">
      <div className="container">
        <br /><br /><br /><br /><br />
        <h2 className="activities_title">Student Activities</h2>
        <p className="activities_subtitle">Explore our workshops, visits, projects and events</p>
        <div className="activities_tabs">
          {tabTitles.map((title, index) => (
            <button onClick={() => setActive(index)} className={`tab_btn ${active === index ? "active" : ""}`} key={title}>
              {title}
            </button>
          ))}
        </div>
        <div className="video_grid">
          {videos.map((video) => (
            <video controls className="activity_video" key={video}>
              <source src={video.startsWith("data:") ? video : `${getAssetUrl(video)}?v=${active}`} type="video/mp4" />
            </video>
          ))}
        </div>
        <div className="image_grid">
          {images.map((image) => (
            <img
              src={image.startsWith("data:") ? image : getAssetUrl(image)}
              className="activity_img"
              alt="activity"
              key={image}
              onError={(e) => {
                e.target.src = "/img/activity/visits/3.webp";
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
