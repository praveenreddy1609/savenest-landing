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
        <p className="text-md text-neutral-500">Crafted in India 🇮🇳 with ❤️</p>
      </section>
    </main>
  )
}