import React from "react";
const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="mx-auto max-w-4xl h-full w-full">{children}</main>;
};
export default ChatLayout;
