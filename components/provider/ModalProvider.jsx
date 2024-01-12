"use client";

import React, { useEffect, useState } from "react";
import SettingModals from "@/components/models/SettingModals";
import CoverImageModal from "@/components/models/CoverImageModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingModals />
      <CoverImageModal />
    </>
  );
};

export default ModalProvider;
