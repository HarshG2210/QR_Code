import "./App.css";

import React, { useRef, useState } from "react";

import { QRCodeCanvas } from "qrcode.react";

const App = () => {
  const [url, setUrl] = useState("https://www.aartimultiservices.com/");
  const qrCodeRef = useRef();

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const downloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="container">
      <h1 className="title">Create Your QR Code</h1>
      
      <div className="input-container">
        <label htmlFor="websiteUrl">Enter Website URL:</label>
        <input
          type="url"
          id="websiteUrl"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter URL"
          className="url-input"
        />
      </div>

      <div className="qr-code" ref={qrCodeRef}>
        <QRCodeCanvas value={url} size={256} includeMargin />
      </div>

      <button className="download-btn" onClick={downloadQRCode}>
        Download QR for your website.
      </button>

      <p>
        Navigate to{" "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="link">
          {url}
        </a>{" "}
        by scanning this QR code.
      </p>
    </div>
  );
};

export default App;
