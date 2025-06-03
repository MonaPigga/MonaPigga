"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, Users, Zap, Twitter, MessageCircle, Copy, ExternalLink, Palette } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function MonaPiggaLanding() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkv"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100">
      {/* Ornate Header */}
      <header
        className="container mx-auto px-4 py-6 border-b-4 border-amber-800"
        style={{
          background: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center border-4 border-amber-800 shadow-lg">
              <Palette className="text-amber-900 h-6 w-6" />
            </div>
            <span className="text-amber-100 font-bold text-2xl tracking-wider font-display">MONA PIGGA</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#masterpiece"
              className="text-amber-100 hover:text-yellow-300 transition-colors font-display text-lg"
            >
              The Masterpiece
            </a>
            <a href="#gallery" className="text-amber-100 hover:text-yellow-300 transition-colors font-display text-lg">
              Gallery
            </a>
            <a href="#salon" className="text-amber-100 hover:text-yellow-300 transition-colors font-display text-lg">
              Salon
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Classical Art Style */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mona Pigga Portrait with Ornate Frame */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Ornate Frame */}
                <div
                  className="p-8 rounded-lg shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(45deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #A0522D 75%, #8B4513 100%)",
                    border: "8px solid #654321",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="relative border-4 border-amber-900 rounded shadow-inner">
                    <Image
                      src="/MonaPigga.png"
                      alt="Mona Pigga - The Masterpiece"
                      width={400}
                      height={600}
                      className="rounded"
                      style={{ filter: "sepia(10%) contrast(110%) brightness(95%)" }}
                    />
                    {/* Classical nameplate */}
                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded"
                      style={{ background: "linear-gradient(135deg, #DAA520, #B8860B)" }}
                    >
                      <span className="text-amber-900 font-display font-bold text-sm">MONA PIGGA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-900 font-display">MONA PIGGA</h1>
              <p className="text-xl md:text-2xl text-amber-800 mb-8 leading-relaxed font-body">
                A masterpiece of the modern era. The most refined and artistic meme coin on Solana, inspired by the
                greatest artworks in history.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  className="font-display text-lg px-8 py-4 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #DAA520, #B8860B)",
                    border: "2px solid #8B4513",
                  }}
                >
                  <Coins className="mr-2 h-5 w-5" />
                  Acquire PIGGA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-display text-lg px-8 py-4 border-2 border-amber-800 text-amber-800 hover:bg-amber-100"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Gallery
                </Button>
              </div>

              {/* Contract Address - Classical Style */}
              <div
                className="p-4 rounded-lg max-w-md mx-auto lg:mx-0"
                style={{
                  background: "linear-gradient(135deg, #F5DEB3, #DEB887)",
                  border: "2px solid #8B4513",
                }}
              >
                <p className="text-amber-900 text-sm mb-2 font-display">Contract Address:</p>
                <div className="flex items-center justify-between bg-amber-900/20 rounded px-3 py-2">
                  <span className="text-amber-900 font-mono text-sm truncate">{contractAddress}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyToClipboard}
                    className="text-amber-900 hover:text-amber-700 ml-2"
                  >
                    {copied ? "Copied!" : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Renaissance Style */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-display">
            The Numbers Behind the Masterpiece
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "+420%", label: "Potential Growth", color: "emerald" },
              { icon: Users, value: "10K+", label: "Art Enthusiasts", color: "blue" },
              { icon: Coins, value: "1B", label: "Total Collection", color: "yellow" },
              { icon: Zap, value: "0%", label: "Commission", color: "purple" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="shadow-lg border-2"
                style={{
                  background: "linear-gradient(135deg, #F5DEB3, #DEB887)",
                  borderColor: "#8B4513",
                }}
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 text-${stat.color}-600 mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-amber-900 font-display">{stat.value}</div>
                  <div className="text-amber-800 font-body">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Art Gallery Style */}
      <section id="masterpiece" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-display">About The Masterpiece</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              className="shadow-lg border-4"
              style={{
                background: "linear-gradient(135deg, #F5DEB3, #DEB887)",
                borderColor: "#8B4513",
              }}
            >
              <CardHeader>
                <CardTitle className="text-amber-900 font-display text-2xl">🎨 Artistic Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800 font-body leading-relaxed">
                  Mona Pigga unites the timeless beauty of Renaissance art with the modern world of cryptocurrency. A
                  masterpiece that breaks the boundaries between classical art and digital innovation.
                </p>
              </CardContent>
            </Card>

            <Card
              className="shadow-lg border-4"
              style={{
                background: "linear-gradient(135deg, #F5DEB3, #DEB887)",
                borderColor: "#8B4513",
              }}
            >
              <CardHeader>
                <CardTitle className="text-amber-900 font-display text-2xl">🏛️ Cultural Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800 font-body leading-relaxed">
                  Inspired by Leonardo da Vinci&apos;s masterpiece, Mona Pigga brings art to the blockchain. A community of
                  art lovers and crypto enthusiasts united in one token.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap - Art Timeline */}
      <section id="gallery" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12 font-display">
            Timeline of the Masterpiece
          </h2>
          <div className="space-y-8">
            {[
              {
                phase: "First Brushstroke",
                status: "Completed",
                color: "green",
                items: [
                  "Canvas Prepared (Token Launch)",
                  "Initial Sketches (Website & Community)",
                  "Color Palette Chosen (1K+ Members)",
                ],
              },
              {
                phase: "Refinement & Details",
                status: "In Progress",
                color: "yellow",
                items: [
                  "Gallery Exhibitions (DEX Listings)",
                  "Art Critics (Influencer Partnerships)",
                  "Museum Acquisition (10K+ Holders)",
                ],
              },
              {
                phase: "Masterpiece Unveiling",
                status: "Future",
                color: "purple",
                items: [
                  "International Exhibition (NFT Collection)",
                  "Permanent Collection (Staking Program)",
                  "Global Recognition (Major Exchanges)",
                ],
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className={`shadow-lg border-4 border-${phase.color}-600`}
                style={{
                  background: "linear-gradient(135deg, #F5DEB3, #DEB887)",
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Badge className={`bg-${phase.color}-500 text-white font-display px-4 py-2`}>
                      {phase.status}{" "}
                      {phase.status === "Completed" ? "✅" : phase.status === "In Progress" ? "🎨" : "🔮"}
                    </Badge>
                    <CardTitle className="text-amber-900 font-display text-2xl">{phase.phase}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-amber-800 space-y-2 font-body">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community - Art Salon */}
      <section id="salon" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8 font-display">Welcome to the Art Salon</h2>
          <p className="text-xl text-amber-800 mb-12 font-body leading-relaxed max-w-3xl mx-auto">
            Join our exclusive community of art lovers, collectors, and crypto enthusiasts. Together we appreciate the
            finer things in life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="font-display text-lg px-8 py-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #1DA1F2, #0d8bd9)" }}
            >
              <Twitter className="mr-2 h-5 w-5" />
              Twitter Salon
            </Button>
            <Button
              size="lg"
              className="font-display text-lg px-8 py-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #0088cc, #006699)" }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Telegram Gallery
            </Button>
            <Button
              size="lg"
              className="font-display text-lg px-8 py-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #5865F2, #4752C4)" }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discord Atelier
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Classical */}
      <footer
        className="container mx-auto px-4 py-12 border-t-4 border-amber-800"
        style={{ background: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)" }}
      >
        <div className="text-center text-amber-100">
          <p className="mb-4 font-display text-lg">🎨 MONA PIGGA - Where Art Meets Crypto 🎨</p>
          <p className="text-sm font-body opacity-80">
            Disclaimer: This is an artistic project created for entertainment. Always do your own research before
            investing in cryptocurrency.
          </p>
        </div>
      </footer>
    </div>
  )
}
