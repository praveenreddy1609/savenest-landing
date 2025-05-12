// SaveNest Preview Website – Upgraded Premium Framer-Level Landing Page (10 Slides + Footer)

import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

export default function SaveNestPreview() {
  return (
    <main className="bg-[#0e0e0e] text-white font-sans">

   {/* Slide 1 – Hero Welcome */}
<section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">
      Welcome to SaveNest
    </h1>
  </motion.div>
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
    <p className="text-4xl md:text-4xl text-gray-300 mb-6 max-w-3xl">
      India’s Smartest AI-Powered Savings Revolution
    </p>
  </motion.div>
  <p className="text-2xl text-neutral-500">
    Crafted in INDIA with ❤️ Trust
  </p>
</section>


      {/* Slide 2 – Smart Search */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#121212]">
        <h2 className="text-6xl font-bold mb-8">Smart Search – Exact Variant Match</h2>
        <ul className="text-2xl text-gray-400 space-y-4 max-w-4xl">
          <li>🔎 Enter text, paste links, or upload images to search</li>
          <li>🤖 AI instantly matches exact variants across platforms</li>
          <li>💸 See real cashback, EMI options, and SaveNest Points in real time</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: Samsung S25 Ultra – ₹1,29,999 on Amazon | ₹6499 cashback via ICICI card | No-cost EMI up to 9 months | Earn 115 SaveNest Points</p>
        </div>
      </section>

      {/* Slide 3 – Smart Split Cart */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#141414]">
        <h2 className="text-5xl font-bold mb-8">Smart Split Cart Engine</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🧠 Splits your cart intelligently across platforms for maximum savings</li>
          <li>💳 Applies best cashback offers and stackable card discounts</li>
          <li>🪙 Maximizes SaveNest Points + Platform Rewards</li>
        </ul>
      </section>

      {/* Slide 4 – SaveNest ID & Login System */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#111111]">
        <h2 className="text-5xl font-bold mb-8">SaveNest ID – Your Permanent Secure Identity</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🆔 Every user receives a SaveNest ID starting with 'SN-PV-1609XXXX'</li>
          <li>🔐 Linked with verified phone number and email for maximum security</li>
          <li>🔄 SaveNest ID is used for login, recovery, rewards, and silent protection</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: SN-PV-16091234 (Personal Verified ID with silent backend protection)</p>
        </div>
      </section>

      {/* Slide 5 – Category Intelligence */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#121212]">
        <h2 className="text-5xl font-bold mb-8">Category-Specific AI Intelligence</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🧠 Specialized AI for electronics, groceries, fashion, medicines</li>
          <li>📦 Verifies variant specs, expiry dates, authenticity before showing</li>
          <li>🚫 Blocks fake products and risky listings automatically</li>
        </ul>
      </section>

      {/* Slide 6 – Regional Offers + Special Days */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#141414]">
        <h2 className="text-5xl font-bold mb-8">Regional Offers & Special Days</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🗓️ Card-specific deals auto-detected (e.g., HDFC Fridays, ICICI Mondays)</li>
          <li>🎉 Special Days like Mother's Day, Diwali, Rakhi automatically highlighted</li>
          <li>📍 Localized deals based on user's region and language preference</li>
        </ul>
      </section>

      {/* Slide 7 – Trust & Security (Ashwa + Jatayu) */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#181818]">
        <h2 className="text-5xl font-bold mb-8">Trust & Security – Multi-Layer Protection</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🛡️ Ashwa monitors every transaction, reward, and deal health</li>
          <li>🤖 Jatayu offers real-time user help, dragged product insights</li>
          <li>🔒 Device, IP, and behavior-based protection shields SaveNest accounts</li>
        </ul>
      </section>

      {/* Slide 8 – Multi-Platform Smart Integration */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#101010]">
        <h2 className="text-5xl font-bold mb-8">Multi-Platform Integration</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🛍️ Compare prices across Amazon, Flipkart, Croma, Ajio, and 50+ brands</li>
          <li>📲 SaveNest Website, Mobile App, Chrome Extension, Telegram, WhatsApp supported</li>
          <li>🚀 Links verified by AI before shown to users for maximum trust</li>
        </ul>
      </section>

      {/* Slide 9 – Smart Summary Bot */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#151515]">
        <h2 className="text-5xl font-bold mb-8">Smart Summary Bot</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>📝 Converts complex listings into simple 3-line summaries</li>
          <li>🎥 Auto-plays regional language video reviews</li>
          <li>📉 Tracks 30-day price history and sends instant drop alerts</li>
        </ul>
      </section>

      {/* Slide 10 – Family Nest – Pool Rewards */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#161616]">
        <h2 className="text-5xl font-bold mb-8">Family Nest – Share & Pool Rewards</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>👨‍👩‍👧‍👦 Link up to 5 family members securely</li>
          <li>💰 Pool SaveNest Points for faster redemptions</li>
          <li>🔒 Full KYC and device linking protection enabled</li>
        </ul>
      </section>

      {/* Footer – Contact */}
      <section className="bg-[#0a0a0a] text-center py-10 text-lg text-gray-400">
        <p>📧 Contact Admin: <a href="mailto:admin@savenest.in" className="text-blue-400 underline">admin@savenest.in</a></p>
        <p className="mt-2">🚀 Coming Soon – Save More, Live Smarter</p>
        <p className="mt-2 text-red-400">⚠️ Disclaimer: All examples are for preview only, not real offers</p>
      </section>

    </main>
  )
}
