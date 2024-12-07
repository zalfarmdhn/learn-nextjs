import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bitcoin Realtime",
  description: `Live Bitcoin (BTC) Updates: Price, Market Cap, and Trends
Track Bitcoin (BTC) in real-time with live updates on price, market capitalization, trading volume, and market trends. Stay informed about the latest fluctuations, historical data, and insights into the world's leading cryptocurrency. Perfect for investors and enthusiasts monitoring Bitcoin's role in the evolving crypto market.`,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
