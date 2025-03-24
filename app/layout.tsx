import type { Metadata } from 'next'

import '@/app/lib/styles/index.sass'

export const metadata: Metadata = {
  title: 'NinDAO',
  description: 'the web3 cyborg for trustless coordination ツ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
