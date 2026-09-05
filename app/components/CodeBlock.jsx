"use client";

import { useState } from "react";

export default function CodeBlock({ code, title, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "4px",
        overflow: "hidden",
        background: "white",
        marginTop: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "white",
          borderBottom: "2px solid black",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span
              style={{
                display: "block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "black",
              }}
            />
            <span
              style={{
                display: "block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "black",
              }}
            />
            <span
              style={{
                display: "block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "black",
              }}
            />
          </div>
          {title && (
            <span style={{ fontSize: "14px", fontWeight: 500, color: "black" }}>
              {title}
            </span>
          )}
          {language && (
            <span
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "gray",
                border: "1px solid #ccc",
                borderRadius: "3px",
                padding: "1px 6px",
              }}
            >
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: copied ? "black" : "gray",
            background: "none",
            border: copied ? "1px solid black" : "1px solid #ccc",
            borderRadius: "3px",
            padding: "2px 8px",
            cursor: "pointer",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <pre
          style={{
            padding: "16px",
            fontSize: "14px",
            lineHeight: "1.6",
            fontFamily: "monospace",
            color: "black",
            margin: 0,
            background: "white",
          }}
        >
          <code style={{ color: 'green' }}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
