import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
// import PreviewSuspense from "@/components/PreviewSuspense"
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import { LiveQuery } from "next-sanity/preview/live-query";
import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;
export const revalidate = 60;

export default async function Home() {
  const { isEnabled } = draftMode();
  const posts: Post[] = await sanityFetch({ query, tags: ["post"] });

  // if (isEnabled) {
    {/* <PreviewBlogList query={query} /> */}
  return (
    // <Suspense
    //   fallback={
    //     <div role="status">
    //       <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
    //         Loading Preview Data....
    //       </p>
    //     </div>
    //   }
    // >
    <LiveQuery
    enabled={isEnabled}
    query={query}
    initialData={posts}
    as={PreviewBlogList}
    >
        <BlogList posts={posts} />
      </LiveQuery>
  //   </Suspense>
  );
  // }
  // const posts = await client.fetch(query)
  // return <BlogList posts={posts} />
}
