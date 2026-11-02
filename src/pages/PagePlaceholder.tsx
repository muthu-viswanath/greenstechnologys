import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, PhoneCall, Mail } from 'lucide-react';

interface PagePlaceholderProps {
  title: string;
  subtitle?: string;
}

export default function PagePlaceholder({ title, subtitle }: PagePlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 py-20 text-center"
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-4">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        <span>Fresh Build Ready</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#243f40] mb-4">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8">
        {subtitle || 'This page is ready to be freshly designed with your custom layouts, animations, and content.'}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#3f6f52] hover:bg-[#2d523c] transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all shadow-xs"
        >
          <PhoneCall className="w-4 h-4 text-emerald-600" />
          <span>Contact Admissions</span>
        </a>
      </div>
    </motion.div>
  );
}
