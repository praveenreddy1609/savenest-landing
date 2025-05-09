// SaveNest Preview Website – Premium Framer-Level Landing Page (9 Slides Complete + Fixed for Vercel + TypeScript)

import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

export default function SaveNestPreview() {
  return (
    <main className="bg-[#0e0e0e] text-white font-sans">

      {/* Slide 1 – Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">Welcome to SaveNest</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-xl">India’s Smartest AI-Powered Savings Assistant</p>
        </motion.div>
        <p className="text-md text-neutral-500">Crafted in India with ❤️</p>
      </section>

      {/* Slide 2 – Smart Search */}
      <section className="min-h-screen px-6 py-16 bg-[#121212]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Smart Search – Find the Best Deals</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>🔍 Enter text, paste links, or upload product images</li>
          <li>🤖 AI instantly compares platforms & selects best rewards</li>
          <li>💸 See cashback, EMI, and SaveNest Coins in real time</li>
        </ul>
      </section>

      {/* Slide 3 – Split Cart Technology */}
      <section className="min-h-screen px-6 py-16 bg-[#141414]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Split Cart Technology</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>🧠 AI checks each product in your cart</li>
          <li>🛍️ Re-routes items to the platform with best price + reward</li>
          <li>🪙 Earn more SaveNest Coins without lifting a finger</li>
        </ul>
      </section>

      {/* Slide 4 – Family Nest */}
      <section className="min-h-screen px-6 py-16 bg-[#161616]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Family Nest – Share & Pool Rewards</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>👨‍👩‍👧‍👦 Link up to 5 family members securely</li>
          <li>🔒 KYC & device-based linking prevents abuse</li>
          <li>💰 Pool all SaveNest Coins to redeem faster</li>
        </ul>
        <div className="text-center text-green-400 font-semibold">✅ Save 3x faster as a Family</div>
      </section>

      {/* Slide 5 – Category Intelligence */}
      <section className="min-h-screen px-6 py-16 bg-[#121212]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Category Intelligence</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>🧠 Specialized AIs for tech, medicine, fashion, grocery</li>
          <li>📦 Validates variant, spec, and expiry data before listing</li>
          <li>🎯 Avoids fake brands and risky product links</li>
        </ul>
      </section>

      {/* Slide 6 – Regional Offer Calendar */}
      <section className="min-h-screen px-6 py-16 bg-[#141414]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Regional Offer Calendar</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>🗓️ Daily card-specific deals: HDFC Fridays, ICICI Mondays</li>
          <li>🎉 Festival stacking: Diwali, Eid, Pongal deals auto-matched</li>
          <li>📍 Detects your region for language + card relevance</li>
        </ul>
      </section>

      {/* Slide 7 – Trust & Security */}
      <section className="min-h-screen px-6 py-16 bg-[#181818]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Trust & Security</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>🛡️ Jatayu AI protects against fraud, fake links & abuse</li>
          <li>📊 Trust Score Dashboard ensures faster redemptions</li>
          <li>🔐 Device, IP & behavior-based protection layers</li>
        </ul>
      </section>

      {/* Slide 8 – Multi-Platform Integration */}
      <section className="min-h-screen px-6 py-16 bg-[#101010]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Multi-Platform Integration</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>🛒 Compare prices across Amazon, Flipkart, Croma, Ajio & more</li>
          <li>🧩 Works via Chrome extension, mobile app & Telegram/WhatsApp bots</li>
          <li>🚀 All logic verified by AI before showing any link</li>
        </ul>
      </section>

      {/* Slide 9 – Smart Summary Bot */}
      <section className="min-h-screen px-6 py-16 bg-[#151515]">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Smart Summary Bot</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-10">
          <li>📝 Converts complex listings into 3-line summaries</li>
          <li>🎥 Auto-shows video reviews in user’s local language</li>
          <li>📉 Tracks price history with alerts</li>
        </ul>
      </section>

      {/* Footer Slide – Contact & Disclaimer */}
      <section className="bg-[#0a0a0a] text-center py-10 text-sm text-gray-400">
        <p>📧 Contact admin: <a href="mailto:admin@savenest.in" className="text-blue-400 underline">admin@savenest.in</a></p>
        <p className="mt-2">🚀 Coming Soon: Grab limited seats to save your hard-earned money</p>
        <p className="mt-2 text-red-400">⚠️ Disclaimer: All data shown is just an example and not real</p>
      </section>

    </main>
  )
}
