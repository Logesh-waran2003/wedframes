import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tamil Wedding Invite — Karthick & Priya | WedFrames',
  description: 'Dark luxury Tamil wedding invitation with split-door hero, gold shimmer, bilingual Tamil & English content, and traditional ceremony timeline.',
  keywords: 'tamil wedding invitation, bilingual wedding card, traditional tamil wedding, dark luxury',
  openGraph: {
    title: 'Karthick & Priya — Tamil Wedding Invitation',
    description: 'A dark luxury Tamil wedding invitation. Bilingual, traditional, cinematic.',
    url: 'https://wedframes.vercel.app/demo/tamil',
    siteName: 'WedFrames',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthick & Priya — Tamil Wedding Invitation',
    description: 'A dark luxury Tamil wedding invitation. Bilingual, traditional, cinematic.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
