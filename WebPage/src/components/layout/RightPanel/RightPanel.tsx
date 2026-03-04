//import React from "react";

export interface RightPanelProps {
  title?: string;
  sources?: { id: string; name: string; href?: string }[];
}

export default function RightPanel({ title = "Sources"}: RightPanelProps) {
  return (
    <section aria-labelledby="sources-title" className="panel" style={{ marginTop: 16 }}>
      <h2 id="sources-title" style={{ marginBottom: 12 }}>{title}</h2>
      
    </section>
  );
}