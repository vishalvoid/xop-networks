"use client";
// components/DownloadButton.js
import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const filePath = "/event.ics"; // Path to your .ics file in the public folder
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "event.ics"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={() => handleDownload()}>Shedule a Meeting Now</button>
  );
};

export default DownloadButton;
