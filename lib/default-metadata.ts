import data from "@/data.json";

const { description, title, url } = data;

export const defaultOpenGraph = {
  title,
  description,
  type: "website",
  url,
  siteName: title,
  images: [
    {
      url: "/images/hyperjump-og.png",
      width: 1200,
      height: 630,
      alt: `${title} Logo`,
      type: "image/png"
    }
  ]
};
