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
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#121212] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Smart Search – Find the Best Deals</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl">
          <li>🔍 Enter text, paste links, or upload product images</li>
          <li>🤖 AI instantly compares platforms & selects best rewards</li>
          <li>💸 See cashback, EMI, and SaveNest Coins in real time</li>
        </ul>
        <div className="text-sm text-gray-500 mt-6">
          <p>Example 1: Samsung S25 Ultra – ₹1,29,999 on Amazon, ₹6,499 cashback, 101 Coins</p>
          <p>Example 2: Croma 43" Smart TV – ₹21,999, ₹2000 off via HDFC, 55 Coins</p>
        </div>
      </section>

      {/* Slide 3 – Split Cart Technology */}
      <section className="min-h-screen px-6 py-16 bg-[#141414] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Split Cart Technology</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-6">
          <li>🧠 AI checks combo and card offers for all products in your cart</li>
          <li>🛍️ Detects multi-product savings inside a single cart (e.g., Amazon)</li>
          <li>🪙 Finds best stackable offers to maximize Coins + cashback</li>
        </ul>
        <div className="text-sm text-gray-500">
          <p>Example 1: Amazon Cart – AC + Fridge combo = ₹1500 extra off</p>
          <p>Example 2: 5 items with ICICI card = ₹1200 stacked savings + 134 Coins</p>
        </div>
      </section>

      {/* Slide 4 – Family Nest */}
      <section className="min-h-screen px-6 py-16 bg-[#161616] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Family Nest – Share & Pool Rewards</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-6">
          <li>👨‍👩‍👧‍👦 Link up to 5 family members securely</li>
          <li>🔒 KYC & device-based linking prevents abuse</li>
          <li>💰 Pool all SaveNest Coins to redeem faster</li>
        </ul>
        <div className="text-green-400 font-semibold">✅ Save 3x faster as a Family</div>
        <p className="text-sm text-gray-500 mt-3">Example: Family of 4 pools coins to redeem ₹1000 card in days</p>
      </section>

      {/* Slide 5 – Category Intelligence */}
      <section className="min-h-screen px-6 py-16 bg-[#121212] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Category Intelligence</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-6">
          <li>🧠 Specialized AIs for tech, medicine, fashion, grocery</li>
          <li>📦 Validates variant, spec, and expiry data before listing</li>
          <li>🎯 Avoids fake brands and risky product links</li>
        </ul>
        <p className="text-sm text-gray-500">Example: Only medicines with long expiry & same salt listed</p>
      </section>

      {/* Slide 6 – Regional Offer Calendar */}
      <section className="min-h-screen px-6 py-16 bg-[#141414] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Regional Offer Calendar</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-6">
          <li>🗓️ Daily card-specific deals: HDFC Fridays, ICICI Mondays</li>
          <li>🎉 Festival stacking: Diwali, Eid, Pongal deals auto-matched</li>
          <li>📍 Detects your region for language + card relevance</li>
        </ul>
        <p className="text-sm text-gray-500">Example: Tamil Nadu users get Pongal + ICICI stacked deals</p>
      </section>

      {/* Slide 7 – Trust & Security */}
      <section className="min-h-screen px-6 py-16 bg-[#181818] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Trust & Security</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-6">
          <li>🛡️ Jatayu AI protects against fraud, fake links & abuse</li>
          <li>📊 Trust Score Dashboard ensures faster redemptions</li>
          <li>🔐 Device, IP & behavior-based protection layers</li>
        </ul>
        <p className="text-sm text-gray-500">Example: Fraudulent devices blocked from earning rewards</p>
      </section>

      {/* Slide 8 – Multi-Platform Integration */}
      <section className="min-h-screen px-6 py-16 bg-[#101010] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Multi-Platform Integration</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-6">
          <li>🛒 Compare prices across Amazon, Flipkart, Croma, Ajio & more</li>
          <li>🧩 Works via Chrome extension, mobile app & Telegram/WhatsApp bots</li>
          <li>🚀 All logic verified by AI before showing any link</li>
        </ul>
        <p className="text-sm text-gray-500">Example: Flipkart + Amazon prices auto-compared for mobile<br />We support 50+ top brands – Save more everywhere!</p>
      </section>

      {/* Slide 9 – Smart Summary Bot */}
      <section className="min-h-screen px-6 py-16 bg-[#151515] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Smart Summary Bot</h2>
        <ul className="text-lg text-gray-400 space-y-3 max-w-3xl mx-auto mb-6">
          <li>📝 Converts complex listings into 3-line summaries</li>
          <li>🎥 Auto-shows video reviews in user’s local language</li>
          <li>📉 Tracks price history with alerts</li>
        </ul>
        <p className="text-sm text-gray-500">Example: iPhone 15 – ₹3K drop alert + Telugu unboxing video</p>
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
