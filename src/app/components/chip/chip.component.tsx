import React from "react";

interface ChipProps {
  children: React.ReactNode;
}
export function Chip({ children }: ChipProps) {
  return <div className="p-2 rounded-full w-fit bg-cyan-600">{children}</div>;
}
