import Script from 'next/script'

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
      <head>
        <Script src="https://www.digistore24-scripts.com/service/digistore.js"></Script>
        <Script type="text/javascript">
        {`
          digistorePromocode( {"product_id": 602817, "adjust_domain": true } );
        `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
