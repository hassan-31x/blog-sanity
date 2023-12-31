
import { usePreview } from "@/sanity/lib/preview"
import BlogList from "./BlogList"
import { adminClient } from "@/sanity/lib/client"

type Props = {
    query: string
}

const PreviewBlogList = async ({ query }: Props) => {
    const posts = await adminClient.fetch(query)
    console.log("🚀 ~ file: PreviewBlogList.tsx:12 ~ PreviewBlogList ~ posts:", posts)
    
  return <BlogList posts={posts} />
}

export default PreviewBlogList