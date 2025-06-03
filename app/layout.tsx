import type React from "react"
import "./globals.css"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "Mona Pigga - The Renaissance Meme Coin",
  description: "The most refined and artistic meme coin on Solana, inspired by Leonardo da Vinci's masterpiece!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Cinzel:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
