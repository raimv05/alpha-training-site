import React from "react";
import { useState, useEffect } from "react";

const tabs = [
  {
    title: "Industrial Visits",
    videoKey: "industrial_visit_video",
    imagesKey: "industrial_visit_images",
  },
  {
    title: "Workshops & Seminars",
    videoKey: "workshops_seminars_video",
    imagesKey: "workshops_seminars_images",
  },
  {
    title: "Guest Lectures",
    videoKey: "guest_lectures_video",
    imagesKey: "guest_lectures_image",
  },
];

function normalizeImages(images) {
  if (!Array.isArray(images)) return [];
  return images
    .map((image) => {
      if (typeof image === "string") {
        return { id: image, url: image, alt: "activity" };
      }
      if (image?.url) {
        return { id: image.id ?? image.url, url: image.url, alt: image.alt || "activity" };
      }
      return null;
    })
    .filter(Boolean);
}

function getTabMedia(activities, tab) {
  const video = activities?.[tab.videoKey] || "";
  const images = normalizeImages(activities?.[tab.imagesKey]);
  return { video, images };
}

export default function Activities() {


  const [activities, setActivities] = useState(null);
 
  useEffect(() => {
      const fetchActivities = async () => {
          try {
              const response = await fetch(
                  "https://alphaitms.com/wp-json/training/v1/activities"
              );
              const data = await response.json();
              setActivities(data);
          } catch (error) {
              console.error(error);
          }
      };
 
      fetchActivities();
  }, []);
 
  const [active, setActive] = useState(0);
  const current = tabs[active];
  const { video, images } = getTabMedia(activities, current);

  return (
    <section className="activities_section">
      <div className="container">
        <br /><br /><br /><br /><br />
        <h2 className="activities_title">{activities?.title}</h2>
        <p className="activities_subtitle">{activities?.text}</p>
        <div className="activities_tabs">
          {tabs.map((tab, index) => (
            <button onClick={() => setActive(index)} className={`tab_btn ${active === index ? "active" : ""}`} key={tab.title}>
              {tab.title}
            </button>
          ))}
        </div>
        {video && (
          <div className="video_grid">
            <video controls className="activity_video" key={video}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}
        <div className="image_grid">
          {images.map((image) => (
            <img src={image.url} className="activity_img" alt={image.alt} key={image.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
