import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'South Indian Wedding Invite — Karthick & Priya | WedFrames',
  description: 'Illustrated South Indian wedding invitation with temple scenes, marigold aesthetics, ceremony timeline, live countdown, and WhatsApp RSVP.',
  keywords: 'south indian wedding invitation, tamil wedding invite, illustrated wedding card, temple',
  openGraph: {
    title: 'Karthick & Priya — South Indian Wedding Invitation',
    description: 'An illustrated South Indian wedding invitation. Temple scenes, marigold gold, ceremony timeline.',
    url: 'https://wedframes.vercel.app/demo/southindian',
    siteName: 'WedFrames',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthick & Priya — South Indian Wedding Invitation',
    description: 'An illustrated South Indian wedding invitation. Temple scenes, marigold gold, ceremony timeline.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
