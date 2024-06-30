"use client";
import React, { useState } from "react";
import QRCode from "qrcode";
import { saveAs } from "file-saver";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [src, setSrc] = useState<string>("");

  const generate = () => {
    QRCode.toDataURL(url).then(setSrc);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px-2">
        <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
          <div className="md:drid md:grid-cols-3">
            <div className="col-span-2 p-6 grid gap-4">
              <div>
                <label className="font-semibold text-md">Your URL</label>
                <input
                  type="url"
                  className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button
                onClick={generate}
                className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-blue-500 disabled:bg-gray-300"
              >
                Generate QrCode
              </button>
            </div>
            <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
              {src ? (
                <div className="p-4">
                  <img className="w-72" src={src} alt="qrCode" />
                  <button
                    className="bg-blue-400 text-white mt-2 px-4 py-1 w-full"
                    onClick={(e) => saveAs(src, "DensoQR.png")}
                  >
                    Download
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
