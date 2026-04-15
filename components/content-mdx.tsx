import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeRaw from "rehype-raw";
import { mdxComponents, projectMdxComponents } from "@/components/mdx-elements";

function mdxOptionsForVariant(variant: ContentMdxVariant) {
  const isPaper = variant === "paper";
  return {
    mdxOptions: {
      // Paper (project) pages rely on MDX components (e.g. <persona-cards />).
      // Use real MDX parsing for paper pages; avoid rehypeRaw which conflicts with MDX JSX nodes.
      format: (isPaper ? "mdx" : "md") as "md" | "mdx",
      rehypePlugins: isPaper ? [] : [rehypeRaw],
    },
  };
}

export type ContentMdxVariant = "dark" | "paper";

export async function ContentMdx({
  source,
  variant = "dark",
}: {
  source: string;
  variant?: ContentMdxVariant;
}) {
  const components = variant === "paper" ? projectMdxComponents : mdxComponents;
  return (
    <MDXRemote source={source} components={components} options={mdxOptionsForVariant(variant)} />
  );
}
