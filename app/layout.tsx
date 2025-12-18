import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petty Family Agency | Life Insurance & Financial Protection',
  description: 'Protect your family with mortgage protection, life insurance, disability coverage, and retirement planning. No medical exam required. Serving Smyrna, GA and beyond.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
