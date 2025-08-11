// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Steady Stembayo',
  description: 'Stembayo Education Advertising Documentation Society',
  icons: {
    icon: '/images/Steady-Logo-Small.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}