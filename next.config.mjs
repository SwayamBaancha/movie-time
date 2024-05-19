/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          port: "",
        },
        {
          protocol: "https",
          hostname: "links.papareact.com",
          port: "",
        },
      ],
    },
  };
  
 export default nextConfig;
  