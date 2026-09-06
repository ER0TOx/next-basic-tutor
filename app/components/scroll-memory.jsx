"use client";

import React, { useEffect } from "react";

const STORAGE_PREFIX = "scroll-memory";

function ScrollMemory() {
  useEffect(() => {
    const container = document.querySelector(".main-content");
    if (!container) return;

    const key = `${STORAGE_PREFIX}:${window.location.pathname}`;

    const restore = () => {
      if (window.location.hash) return;
      const saved = Number(sessionStorage.getItem(key));
      if (Number.isFinite(saved) && saved > 0) {
        container.scrollTop = saved;
      }
    };

    const save = () => {
      sessionStorage.setItem(key, String(container.scrollTop));
    };

    restore();

    container.addEventListener("scroll", save, { passive: true });
    window.addEventListener("popstate", restore);

    return () => {
      container.removeEventListener("scroll", save);
      window.removeEventListener("popstate", restore);
    };
  }, []);

  return null;
}

export default ScrollMemory;