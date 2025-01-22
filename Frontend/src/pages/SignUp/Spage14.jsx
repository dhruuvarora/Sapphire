import React, { useState, useRef, useEffect } from "react";
import { assets } from "./../../assets/assets";
import { Camera } from "lucide-react";

const SPage14 = ({ formData, updateFormData, onNextStep }) => {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    // Check if we already have camera permission
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setHasPermission(true);
        stream.getTracks().forEach((track) => track.stop()); // Stop the test stream
        startCamera(); // Automatically start camera if permission exists
      })
      .catch((err) => {
        setHasPermission(false);
        console.error("Camera permission not granted:", err);
      });
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setShowCamera(true);
      setHasPermission(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setShowCamera(false);
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const image = canvas.toDataURL("image/jpeg");
    setCapturedImage(image);
    stopCamera();
    updateFormData({ photoTaken: true, photoURL: image, isValid: true });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
        updateFormData({
          photoTaken: true,
          photoURL: reader.result,
          isValid: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    if (capturedImage) {
      onNextStep();
    }
  };

  const handleQRClick = () => {
    stopCamera();
    setShowQR(true);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">In-Person Verification (IPV)</h1>
      <p className="text-gray-600 mb-8">Step 7 of 9</p>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6">
        {showCamera && !capturedImage ? (
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full rounded-lg"
            />
            <button
              onClick={takePhoto}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3"
            >
              <Camera className="w-6 h-6" />
            </button>
          </div>
        ) : capturedImage ? (
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full rounded-lg"
          />
        ) : showQR ? (
          <div className="text-center py-8">
            <h2 className="text-lg font-semibold mb-4">
              If your camera isn't working, scan the QR code to upload a photo
              from your phone.
            </h2>
            <img src={assets.qr2} alt="QR Code" className="mx-auto w-48 h-48" />
            <button
              onClick={() => {
                setShowQR(false);
                startCamera();
              }}
              className="text-black hover:text-gray-700 mt-4"
            >
              go-back
            </button>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="mb-4 text-black">Turn on your camera</p>
            <button
              onClick={startCamera}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {hasPermission ? "Start Camera" : "Allow"}
            </button>
          </div>
        )}
      </div>

      {capturedImage && (
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setCapturedImage(null);
              startCamera();
            }}
            className="flex-1 border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 text-black"
          >
            <Camera size={20} /> Re image
          </button>
          <label className="flex-1 border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 cursor-pointer text-black">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Camera size={20} /> Upload image
          </label>
        </div>
      )}

      {!showQR && !showCamera && !capturedImage && (
        <div className="text-center mb-4">
          <span className="text-black">Problems with Webcam? </span>
          <button
            onClick={handleQRClick}
            className="text-blue-500 hover:text-blue-700 inline-block"
          >
            Click Here
          </button>
        </div>
      )}

      <button
        onClick={handleContinue}
        disabled={!capturedImage}
        className={`w-full py-3 rounded ${
          capturedImage
            ? "bg-teal-800 text-white hover:bg-teal-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default SPage14;
