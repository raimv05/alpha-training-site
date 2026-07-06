import React from "react";
import { useState } from "react";
import { getAssetUrl } from "../utils/assets.js";

const tabs = [
  {
    title: "Industrial Visits",
    videos: ["/img/activity/visits/36.mp4"],
    images: [
      "/img/activity/visits/3.webp", "/img/activity/visits/4.webp", "/img/activity/visits/6.webp", "/img/activity/visits/7.webp",
      "/img/activity/visits/9.webp", "/img/activity/visits/10.webp", "/img/activity/visits/16.webp", "/img/activity/visits/17.webp",
      "/img/activity/visits/18.webp", "/img/activity/visits/19.webp", "/img/activity/visits/20.webp", "/img/activity/visits/21.webp",
      "/img/activity/visits/23.webp", "/img/activity/visits/24.webp", "/img/activity/visits/26.webp", "/img/activity/visits/27.webp",
      "/img/activity/visits/29.webp", "/img/activity/visits/30.webp", "/img/activity/visits/41.webp", "/img/activity/visits/43.webp",
    ],
  },
  {
    title: "Workshops & Seminars",
    videos: ["/img/activity/workshops/38.mp4"],
    images: [
      "/img/activity/workshops/2.webp", "/img/activity/workshops/8.webp", "/img/activity/workshops/47.webp", "/img/activity/workshops/13.webp",
      "/img/activity/workshops/14.webp", "/img/activity/workshops/32.webp", "/img/activity/workshops/33.webp", "/img/activity/workshops/35.webp",
      "/img/activity/workshops/39.webp", "/img/activity/workshops/42.webp", "/img/activity/workshops/48.webp",
    ],
  },
  {
    title: "Guest Lectures",
    videos: ["/img/activity/lectures/37.mp4"],
    images: [
      "/img/activity/lectures/1.webp", "/img/activity/lectures/5.webp", "/img/activity/lectures/11.webp", "/img/activity/lectures/12.webp",
      "/img/activity/lectures/15.webp", "/img/activity/lectures/22.webp", "/img/activity/lectures/25.webp", "/img/activity/lectures/28.webp",
      "/img/activity/lectures/31.webp", "/img/activity/lectures/40.webp", "/img/activity/lectures/45.webp", "/img/activity/lectures/46.webp",
    ],
  },
];

export default function Activities() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="activities_section">
      <div className="container">
        <br /><br /><br /><br /><br />
        <h2 className="activities_title">Student Activities</h2>
        <p className="activities_subtitle">Explore our workshops, visits, projects and events</p>
        <div className="activities_tabs">
          {tabs.map((tab, index) => (
            <button onClick={() => setActive(index)} className={`tab_btn ${active === index ? "active" : ""}`} key={tab.title}>
              {tab.title}
            </button>
          ))}
        </div>
        <div className="video_grid">
          {current.videos.map((video) => (
            <video controls className="activity_video" key={video}>
              <source src={`${getAssetUrl(video)}?v=${active}`} type="video/mp4" />
            </video>
          ))}
        </div>
        <div className="image_grid">
          {current.images.map((image) => <img src={getAssetUrl(image)} className="activity_img" alt="activity" key={image} />)}
        </div>
      </div>
    </section>
  );
}
