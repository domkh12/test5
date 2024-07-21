import React, { useState } from "react";
import { motion } from "framer-motion";
import DeveloperTemplate from "../../pages/template/developerTemplate";
import ResponsivePreview from "../responsive/ResponsivePreview";

const SlideUpPreview = () => {
  const [device, setDevice] = useState("desktop");
  return (
    <ResponsivePreview device={device} setDevice={setDevice}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 50 }}
        className="\"
        style={{ height: "100vh", width: "100%" }}
      >
        <DeveloperTemplate />
      </motion.div>
    </ResponsivePreview>
  );
};

export default SlideUpPreview;
