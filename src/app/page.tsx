
import { Metadata } from "next";
import Home from "./Home.client";

export const metadata: Metadata = {
  title: "Avishkar Hyperloop | IIT Madras",
  description: "Pioneering the future of hyperloop transportation in India. Avishkar Hyperloop is engineering a sustainable, ultra-high-speed future for global connectivity.",
};

export default function Page() {
  return  <Home />;

}
