"use client"

import Link from 'next/link'

const ClientSideRouting = ({ children, route }: { children: React.ReactNode, route: string }) => {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default ClientSideRouting