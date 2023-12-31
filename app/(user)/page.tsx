import { draftMode } from "next/headers"

export default function Home() {
  const { isEnabled } = draftMode()

  if (isEnabled) {
    return <div>Draft Mode</div>
  }


  return (
    <div>Not in Draft Mode</div>
  )
}
