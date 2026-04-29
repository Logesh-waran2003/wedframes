import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cinematic Wedding Invite — Karthick & Priya | WedFrames',
  description: 'A layered parallax cinematic wedding invitation with envelope reveal, firefly particles, and scroll storytelling.',
  keywords: 'cinematic wedding invitation, digital wedding invite, parallax wedding, GSAP wedding',
  openGraph: {
    title: 'Karthick & Priya — Cinematic Wedding Invitation',
    description: 'A full-screen cinematic wedding experience. Scroll through our story.',
    url: 'https://wedframes.vercel.app/demo/cinematic',
    siteName: 'WedFrames',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthick & Priya — Cinematic Wedding Invitation',
    description: 'A full-screen cinematic wedding experience. Scroll through our story.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
