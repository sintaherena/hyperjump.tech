/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/smdd2024",
        has: [
          {
            type: "query",
            key: "lang",
            value: "(?<lang>.*)",
          },
        ],
        destination: "/smdd2024/:lang",
        permanent: true,
      },
      {
        source: "/smdd2024",
        destination: "/smdd2024/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
