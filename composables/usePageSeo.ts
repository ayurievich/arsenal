type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
};

export function usePageSeo(input: PageSeoInput) {
  const indexable = useIsIndexable();
  const canonical = absoluteUrl(input.path);
  const image = input.ogImage || absoluteUrl("/og-image.jpg");
  const robots = indexable ? "index, follow" : "noindex, nofollow";

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogImage: image,
    ogType: input.type || "website",
    ogUrl: canonical,
    twitterCard: "summary_large_image",
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: image,
    robots,
  });

  useHead({
    link: [{ rel: "canonical", href: canonical }],
  });

  return { canonical, indexable };
}
