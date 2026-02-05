import React from "react"
import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: 'Thandapra Gold Loan & Finance - Coming Soon',
  description: 'Trusted gold loan and finance services by Sherlyn Group since 1989. Coming soon with better services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
