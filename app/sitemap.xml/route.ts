export const dynamic = "force-dynamic";

type LanguageCode = "en" | "id";

type AlternateLinks = {
  [lang in LanguageCode]: string;
};

type SitemapUrl = {
  loc: string;
  lastmod: string;
  alternates: AlternateLinks;
};

export async function GET(): Promise<Response> {
  const lastModified = new Date().toISOString();

  const urls: SitemapUrl[] = [
    {
      loc: "https://hyperjump.tech",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech",
        id: "https://hyperjump.tech/id"
      }
    },
    {
      loc: "https://hyperjump.tech/services",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/services",
        id: "https://hyperjump.tech/services/id"
      }
    },
    {
      loc: "https://hyperjump.tech/services/cto-as-a-service",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/services/cto-as-a-service",
        id: "https://hyperjump.tech/services/cto-as-a-service/id"
      }
    },
    {
      loc: "https://hyperjump.tech/services/software-as-a-service",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/services/software-as-a-service",
        id: "https://hyperjump.tech/services/software-as-a-service/id"
      }
    },
    {
      loc: "https://hyperjump.tech/services/tech-due-diligence",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/services/tech-due-diligence",
        id: "https://hyperjump.tech/services/tech-due-diligence/id"
      }
    },
    {
      loc: "https://hyperjump.tech/services/erp-implementation",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/services/erp-implementation",
        id: "https://hyperjump.tech/services/erp-implementation/id"
      }
    },
    {
      loc: "https://hyperjump.tech/case-studies",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/case-studies",
        id: "https://hyperjump.tech/case-studies/id"
      }
    },
    {
      loc: "https://hyperjump.tech/case-studies/erp-fisheries",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/case-studies/erp-fisheries",
        id: "https://hyperjump.tech/case-studies/erp-fisheries/id"
      }
    },
    {
      loc: "https://hyperjump.tech/case-studies/ctoaas-media",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/case-studies/ctoaas-media",
        id: "https://hyperjump.tech/case-studies/ctoaas-media/id"
      }
    },
    {
      loc: "https://hyperjump.tech/inferenceai",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/inferenceai",
        id: "https://hyperjump.tech/inferenceai/id"
      }
    },
    {
      loc: "https://hyperjump.tech/inferenceai/rag-chatbot",
      lastmod: lastModified,
      alternates: {
        en: "https://hyperjump.tech/inferenceai/rag-chatbot",
        id: "https://hyperjump.tech/inferenceai/rag-chatbot/id"
      }
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    ${Object.entries(url.alternates)
      .map(
        ([lang, href]) =>
          `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`
      )
      .join("\n    ")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url.loc}" />
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
