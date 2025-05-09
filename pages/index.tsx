// SaveNest Preview Website – Premium Framer-Level Landing Page (9 Slides Complete + Fixed for Vercel + TypeScript)

import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

export default function SaveNestPreview() {
  return (
    <main className="bg-[#0e0e0e] text-white font-sans">

      {/* Slide 1 – Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">Welcome to SaveNest</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <p className="text-4xl md:text-3xl text-gray-300 mb-6 max-w-3xl">India’s Smartest AI-Powered Savings Assistant</p>
        </motion.div>
        <p className="text-2xl text-neutral-500">Crafted in India with ❤️</p>
      </section>

      {/* Slide 2 – Smart Search */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#121212]">
        <h2 className="text-6xl md:text-6xl font-bold mb-8">Smart Search – Find the Best Deals</h2>
        <ul className="text-2xl text-gray-400 space-y-4 max-w-4xl">
          <li>🔍 Enter text, paste links, or upload product images</li>
          <li>🤖 AI instantly compares platforms & selects best rewards</li>
          <li>💸 See cashback, EMI, and SaveNest Coins in real time</li>
        </ul>
        <div className="text-xl text-gray-500 mt-8">
          <p>Example 1: Samsung S25 Ultra – ₹1,29,999 on Amazon, Amazon Pay ICICI card offer on full payment ₹6,499 cashback post delivery, no cost EMI up to 9 months, 101 Coins</p>
          <p>Example 2: Croma 43" Smart TV – ₹21,999, full payment ₹2000 off via HDFC, no cost EMI up to 3 months, 55 Coins</p>
        </div>
      </section>

      {/* Slide 3 – Split Cart Technology */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#141414]">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Split Cart Technology</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🧠 AI checks combo and card offers for all products in your cart</li>
          <li>🛍️ Detects multi-product savings inside a single cart (e.g., Amazon)</li>
          <li>🪙 Finds best stackable offers to maximize Coins + cashback</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example 1: Amazon Cart – AC + Fridge combo = ₹1500 extra off</p>
          <p>Example 2: 5 items with ICICI card = ₹1200 stacked savings + 134 Coins</p>
        </div>
      </section>
      
             {/* Slide 4 – SaveNest ID & Referral System */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#111111]">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">SaveNest ID & Referral System</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🆔 Every user receives a personal SaveNest ID (e.g., SN-PV-849203)</li>
          <li>🔗 Referral rewards apply on your friend’s first 3 valid orders</li>
          <li>🪙 Earn SaveNest Coins automatically when your friends purchase</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: You refer your friend. They buy a mobile worth ₹10,000. You and your friend both earn Coins in your accounts.</p>
        </div>
      </section>

     {/* Slide 5 – Category Intelligence */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#121212]">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Category Intelligence</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🧠 Specialized AIs for electronics, medicine, fashion, groceries, and more</li>
          <li>📦 Validates variant, spec, and expiry data before listing</li>
          <li>🎯 Avoids fake brands and risky product links</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: Only medicines with long expiry & same salt listed</p>
        </div>
      </section>

      {/* Slide 6 – Regional Offer Calendar */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#141414]">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Regional Offer Calendar</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🗓️ Daily card-specific deals: HDFC Fridays, ICICI Mondays</li>
          <li>🎉 Festival stacking: Diwali, Eid, Pongal deals auto-matched</li>
          <li>📍 Detects your region for language + card relevance</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: Tamil Nadu users get Pongal + ICICI stacked deals</p>
        </div>
      </section>

            {/* Slide 7 – Trust & Security */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#181818]">
        <h2 className="text-6xl md:text-7xl font-bold mb-8">Trust & Security</h2>
        <ul className="text-2xl text-gray-400 space-y-6 max-w-4xl">
          <li>🛡️ Jatayu is an advanced chatbot that helps users</li>
          <li>📊 Trust Score Dashboard ensures faster redemptions</li>
          <li>🔐 Device, IP & behavior-based protection layers</li>
        </ul>
        <div className="text-xl text-gray-500 mt-10">
          <p>Example: Jatayu helps users check EMI reward eligibility and explains offers clearly</p>
        </div>
      </section>

            

      {/* Slide 8 – Multi-Platform Integration */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#101010]">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Multi-Platform Integration</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>🛒 Compare prices across Amazon, Flipkart, Croma, Ajio & more</li>
          <li>🧩 Works via Chrome extension, mobile app & Telegram/WhatsApp bots</li>
          <li>🚀 All logic verified by AI before showing any link</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: Flipkart + Amazon prices auto-compared for mobile</p>
          <p>We support 50+ top brands – Save more everywhere!</p>
        </div>
      </section>

      {/* Slide 9 – Smart Summary Bot */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#151515]">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Smart Summary Bot</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>📝 Converts complex listings into 3-line summaries</li>
          <li>🎥 Auto-shows video reviews in user’s local language</li>
          <li>📉 Tracks price history with alerts</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: iPhone 15 – ₹3K drop alert + Telugu unboxing video</p>
        </div>
      </section>

      {/* Slide 10 – Family Nest */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#161616]">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Family Nest – Share & Pool Rewards</h2>
        <ul className="text-xl text-gray-400 space-y-4 max-w-4xl">
          <li>👨‍👩‍👧‍👦 Link up to 5 family members securely</li>
          <li>🔒 KYC & device-based linking prevents abuse</li>
          <li>💰 Pool all SaveNest Coins to redeem faster</li>
        </ul>
        <div className="text-lg text-gray-500 mt-8">
          <p>Example: Family of 4 pools coins to redeem ₹1000 card in days</p>
        </div>
      </section>
        
      {/* Footer Slide – Contact & Disclaimer */}
      <section className="bg-[#0a0a0a] text-center py-10 text-lg text-gray-400">
        <p>📧 Contact admin: <a href="mailto:admin@savenest.in" className="text-blue-400 underline">admin@savenest.in</a></p>
        <p className="mt-2">🚀 Coming Soon: Grab limited seats to save your hard-earned money</p>
        <p className="mt-2 text-red-400">⚠️ Disclaimer: All data shown is just an example and not real</p>
      </section>

    </main>
  )
}

