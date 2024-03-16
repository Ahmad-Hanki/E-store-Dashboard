"use client";



import { StoreModel } from "@/components/modals/Store-modal";
import { useEffect, useState } from "react";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModel />
    </>
  );
};

export default ModelProvider;
