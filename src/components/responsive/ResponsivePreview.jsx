import React, { useState, useRef, useEffect } from 'react';
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const ResponsivePreview = ({ children }) => {
  const [device, setDevice] = useState('desktop');
  const containerRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 3; //scroll-fast
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const switchDevice = (newDevice) => {
    setDevice(newDevice);
    // Force update the component to re-render with the new device state
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  };

  return (
    <div className='flex flex-col items-center h-screen'>
      <div className="flex bg-white py-3 rounded-md px-4 justify-between gap-5 space-x-2 mb-4 w-full">
        <button onClick={handleBackClick}>
          <IoIosArrowBack size={30} className="mr-2" />
        </button>
        <div className="flex justify-center gap-5 space-x-2">
          <button onClick={() => switchDevice('mobile')} className="btn btn-primary">
            <FaMobileAlt size={25} />
          </button>
          <button onClick={() => switchDevice('tablet')} className="btn btn-primary">
            <FaTabletAlt size={25} />
          </button>
          <button onClick={() => switchDevice('desktop')} className="btn btn-primary">
            <FaLaptop size={30} />
          </button>
        </div>
        <button className="bg-primary px-10 py-3 rounded-md text-gray-100 hover:bg-primary-hover">
          SELECT
        </button>
      </div>

      <div
        className={`preview-container ${device}`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="content">
          {children}
        </div>
        {device === 'mobile' && (
          <>
            <div className="camera"></div>
            <div className="top-sensor"></div>
            <div className="power-button"></div>
            <div className="volume-buttons"></div>
            <div className="silent-switch"></div>
          </>
        )}
        {(device === 'mobile' || device === 'tablet') && (
          <div className="bottom-bar"></div>
        )}
      </div>

      <style>{`
        .preview-container {
          position: relative;
          width: 100%;
          height: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .preview-container.mobile {
          width: 430px;
          height: 932px;
          border-radius: 40px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          background: #fff;
        }
        .preview-container.tablet {
          width: 768px;
          height: 1024px;
          border-radius: 8px;
        }
        .preview-container.desktop {
          width: 100%;
          height: 100%;
        }
        .content {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }
        .content::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .top-sensor {
          position: absolute;
          top: 10px;
          left: calc(50% - 50px);
          width: 100px;
          height: 20px;
          background: #000;
          border-radius: 10px;
        }
        .bottom-bar {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          height: 5px;
          width: 100px;
          background: #000;
          border-radius: 5px;
        }
        .bg-back-button {
          background-color: #007BFF; /* Customize this color as needed */
        }
        .bg-back-button-hover {
          background-color: #0056b3; /* Customize this color as needed */
        }
      `}</style>
    </div>
  );
};

export default ResponsivePreview;
