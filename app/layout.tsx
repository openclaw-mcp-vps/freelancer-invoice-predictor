import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Predictor — Know When Clients Will Actually Pay',
  description: 'ML-powered payment date predictions with confidence intervals for freelancers and consultants. Stop guessing your cash flow.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6af13182-c263-4ed3-ad91-094acb60f03d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
