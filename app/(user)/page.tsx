import { draftMode } from "next/headers"
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import PreviewSuspense from "@/components/PreviewSuspense"
import PreviewBlogList from "@/components/PreviewBlogList"
import BlogList from "@/components/BlogList"
import { Suspense } from "react"

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export default async function Home() {
  const { isEnabled } = draftMode()

  if (isEnabled) {
    return (
      <Suspense fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#F7AB0A]">Loading Preview Data....</p>
        </div>
      )}>
        <PreviewBlogList query={query} />
      </Suspense>
    )
  }

  const posts = await client.fetch(query)


  return <BlogList posts={posts} />
}
