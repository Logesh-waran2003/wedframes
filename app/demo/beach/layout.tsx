import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beach Wedding Invite — Karthick & Priya | WedFrames',
  description: 'Elegant beach-inspired digital wedding invitation with warm ivory tones, horizontal scroll events, and smooth animations.',
  keywords: 'beach wedding invitation, digital wedding invite, elegant wedding card, ivory gold',
  openGraph: {
    title: 'Karthick & Priya — Beach Wedding Invitation',
    description: 'An elegant beach wedding invitation. Warm tones, smooth animations.',
    url: 'https://wedframes.vercel.app/demo/beach',
    siteName: 'WedFrames',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthick & Priya — Beach Wedding Invitation',
    description: 'An elegant beach wedding invitation. Warm tones, smooth animations.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
