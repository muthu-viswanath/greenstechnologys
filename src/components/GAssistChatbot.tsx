import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Send,
  X,
  Minimize2,
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Briefcase,
  Home,
  Compass
} from 'lucide-react';
import GAssistRobotIcon from './GAssistRobotIcon';
import {
  sendMessageToGAssist,
  ChatMessage,
  ActionCTA
} from '../services/geminiService';

// Quick guide categories for intuitive one-click navigation
const GUIDED_CATEGORIES = [
  {
    id: 'courses',
    title: 'Popular Courses',
    desc: 'Java, Python GenAI, DevOps & SDET',
    icon: BookOpen,
    color: 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100',
    prompt: 'What are the most popular job-oriented courses with 100% placement?'
  },
  {
    id: 'certifications',
    title: 'Global Certifications',
    desc: 'AWS, Oracle SQL, Azure, ISTQB',
    icon: Award,
    color: 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100',
    prompt: 'Tell me about the top IT certifications you offer like AWS and Oracle.'
  },
  {
    id: 'placements',
    title: '100% Placements',
    desc: '₹6.5L - ₹28L Packages & 1400+ MNCs',
    icon: Briefcase,
    color: 'bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100',
    prompt: 'How does your 100% Placement Guarantee work and what are the packages?'
  },
  {
    id: 'hostel',
    title: 'Free Hostel & Batches',
    desc: 'Food, Wi-Fi & Weekday/Weekend timing',
    icon: Home,
    color: 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100',
    prompt: 'Tell me about your Free Hostel facility and batch timings.'
  }
];

export default function GAssistChatbot() {
  const navigate = useNavigate();

  // Chat window state
  const [isOpen, setIsOpen] = useState(false);
  const [isTeaserVisible, setIsTeaserVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoCourseName, setDemoCourseName] = useState('Java Full Stack with Gen AI');
  const [demoFormData, setDemoFormData] = useState({ name: '', phone: '', preferredBatch: 'Weekend' });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Scroll suggestions horizontally
  const scrollSuggestions = (direction: 'left' | 'right') => {
    if (suggestionsRef.current) {
      const scrollDistance = 160;
      suggestionsRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  // Suggested follow-ups based on active topic
  const getFollowUpChips = () => {
    if (activeTopic === 'courses') {
      return [
        'Java Full Stack Syllabus',
        'Python & Gen AI Details',
        'DevOps Cloud Program',
        'SDET Automation Testing',
        'Course Fees & EMI',
        'Speak to Counselor'
      ];
    }
    if (activeTopic === 'certifications') {
      return [
        'AWS SAA-C03 Cert',
        'Oracle 19c SQL Associate',
        'ISTQB QA Testing Exam',
        'Azure Cloud Cert',
        'PMP® Certification',
        'Exam Voucher Info'
      ];
    }
    if (activeTopic === 'placements') {
      return [
        'Average Fresher Salary?',
        'Top Hiring Partners',
        'Mock Interview Process',
        'Alumni Success Stories',
        'Contact Placement Cell'
      ];
    }
    if (activeTopic === 'hostel') {
      return [
        'Hostel Food & Wi-Fi',
        'Weekday vs Weekend Batches',
        'OMR Headquarters Address',
        'Adyar & Velachery Hubs',
        'Book Free Demo'
      ];
    }
    return [
      'Java Full Stack',
      'Python & Gen AI',
      'AWS Certification',
      'Placement Guarantee',
      'Free Hostel Info',
      'Batch Timings',
      'Book Free Demo'
    ];
  };

  // Initialize greeting and Proactive Auto-Activation
  useEffect(() => {
    const welcomeMsg: ChatMessage = {
      id: 'welcome-init',
      sender: 'assistant',
      text: `### Hello! I am G-Assist 🤖\nYour personal AI Academic & Career Counselor for **Greens Technologys**.\n\nI can help you explore **180+ courses**, **53 industry certifications**, our **100% placement program**, or our **Free Hostel facilities**.\n\n👇 **Tap a topic below or type your question:**`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      ctas: [
        { label: 'Browse 180+ Courses', type: 'navigate', target: '/courses', variant: 'primary' },
        { label: 'WhatsApp Counselor', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' },
        { label: 'Book Free Demo', type: 'demo', target: 'General Demo', variant: 'accent' }
      ]
    };
    setMessages([welcomeMsg]);

    // Proactive Auto-Activation: After 2.5 seconds, gently display teaser
    const hasSeenTeaser = sessionStorage.getItem('gassist_teaser_dismissed');
    const timer = setTimeout(() => {
      if (!hasSeenTeaser && !isOpen) {
        setIsTeaserVisible(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isThinking]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setIsTeaserVisible(false);
      setUnreadCount(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Handle CTA Action click
  const handleCtaClick = (cta: ActionCTA) => {
    if (cta.type === 'navigate') {
      navigate(cta.target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    } else if (cta.type === 'whatsapp') {
      const msg = encodeURIComponent(
        `Hello Greens Technologys, I was chatting with G-Assist and would like counseling regarding: ${cta.target || 'Course Enrollment & Placements'}.`
      );
      window.open(`https://wa.me/918939915577?text=${msg}`, '_blank');
    } else if (cta.type === 'call') {
      window.location.href = `tel:${cta.target.replace(/\s+/g, '')}`;
    } else if (cta.type === 'demo') {
      setDemoCourseName(cta.target || 'Java Full Stack with Gen AI');
      setIsDemoModalOpen(true);
    }
  };

  // User sends a message
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isThinking) return;

    setInputText('');

    // Categorize query topic for guided follow-ups
    const qLower = query.toLowerCase();
    if (qLower.includes('course') || qLower.includes('java') || qLower.includes('python') || qLower.includes('devops') || qLower.includes('sdet')) {
      setActiveTopic('courses');
    } else if (qLower.includes('certif') || qLower.includes('aws') || qLower.includes('oracle') || qLower.includes('istqb') || qLower.includes('azure') || qLower.includes('pmp')) {
      setActiveTopic('certifications');
    } else if (qLower.includes('placement') || qLower.includes('salary') || qLower.includes('job') || qLower.includes('package')) {
      setActiveTopic('placements');
    } else if (qLower.includes('hostel') || qLower.includes('batch') || qLower.includes('branch') || qLower.includes('timing') || qLower.includes('address')) {
      setActiveTopic('hostel');
    }

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsThinking(true);

    try {
      const response = await sendMessageToGAssist(query, [...messages, userMessage]);

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ctas: response.ctas
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: 'assistant',
        text: "I am having trouble connecting momentarily. You can speak directly with our Senior Course Advisor at **+91 89399 15577** on WhatsApp for instant guidance!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ctas: [
          { label: 'Chat on WhatsApp', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' },
          { label: 'Call Head Office', type: 'call', target: '+918939982288', variant: 'secondary' }
        ]
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  };

  // Handle Free Demo Submission
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoFormData.name || !demoFormData.phone) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setDemoSubmitted(true);
    setTimeout(() => {
      setIsDemoModalOpen(false);
      setDemoSubmitted(false);
      const confirmMsg: ChatMessage = {
        id: `demo-conf-${Date.now()}`,
        sender: 'assistant',
        text: `🎉 **Free Demo Session Reserved!**\nThank you **${demoFormData.name}**! Your 1-on-1 demo for **${demoCourseName}** (${demoFormData.preferredBatch} batch) is booked. Confirmation details were sent to **${demoFormData.phone}**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ctas: [
          { label: 'WhatsApp Counselor', type: 'whatsapp', target: '918939915577', variant: 'whatsapp' },
          { label: 'View Syllabus', type: 'navigate', target: '/courses', variant: 'primary' }
        ]
      };
      setMessages((prev) => [...prev, confirmMsg]);
      setDemoFormData({ name: '', phone: '', preferredBatch: 'Weekend' });
    }, 1500);
  };

  // Markdown rendering helper with comfortable, larger font sizes
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');

    return (
      <div className="space-y-2 text-sm sm:text-[15px] leading-relaxed text-slate-800">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={idx} className="h-1" />;

          // Headings
          if (trimmed.startsWith('### ')) {
            return (
              <h4 key={idx} className="font-bold text-base sm:text-lg flex items-center gap-1.5 mt-1 text-emerald-800">
                {trimmed.replace('### ', '')}
              </h4>
            );
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h3 key={idx} className="font-extrabold text-lg sm:text-xl mt-1 text-emerald-900">
                {trimmed.replace('## ', '')}
              </h3>
            );
          }

          // Bullet points
          if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            const bulletContent = trimmed.substring(2);
            return (
              <div key={idx} className="flex items-start gap-2 pl-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                <span>{renderInlineFormatting(bulletContent)}</span>
              </div>
            );
          }

          // Numbered lists
          const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
          if (numMatch) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-0.5">
                <span className="font-bold text-emerald-700 text-sm flex-shrink-0 mt-0.5">
                  {numMatch[1]}.
                </span>
                <span>{renderInlineFormatting(numMatch[2])}</span>
              </div>
            );
          }

          return <p key={idx}>{renderInlineFormatting(trimmed)}</p>;
        })}
      </div>
    );
  };

  // Inline formatting helper (bold)
  const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-slate-950">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* ============================================================ */}
      {/* 1. FLOATING LAUNCHER BUTTON & PROACTIVE WELCOME BUBBLE       */}
      {/* ============================================================ */}
      <div className="fixed bottom-6 right-6 z-[1040] flex flex-col items-end pointer-events-auto">
        {/* Proactive Greeting Teaser Pill */}
        <AnimatePresence>
          {isTeaserVisible && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              className="mb-3 max-w-[320px] sm:max-w-[360px] bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-emerald-500/30 text-slate-800 relative"
            >
              <button
                onClick={() => {
                  setIsTeaserVisible(false);
                  sessionStorage.setItem('gassist_teaser_dismissed', 'true');
                }}
                className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-start gap-3">
                <GAssistRobotIcon size={38} isThinking={false} className="flex-shrink-0 mt-0.5" />
                <div className="pr-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-slate-900">G-Assist</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      AI Active
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-snug">
                    👋 Need help picking the right course or certification with 100% placement?
                  </p>
                </div>
              </div>

              {/* Quick Action Chips */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setIsTeaserVisible(false);
                    handleSendMessage('Tell me about Java Full Stack with Gen AI course');
                  }}
                  className="text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                >
                  ☕ Java Track
                </button>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setIsTeaserVisible(false);
                    handleSendMessage('Tell me about your 100% placement program');
                  }}
                  className="text-xs font-bold bg-purple-50 hover:bg-purple-100 text-purple-800 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                >
                  💼 Placements
                </button>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setIsTeaserVisible(false);
                  }}
                  className="text-xs font-bold bg-slate-900 hover:bg-emerald-700 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-0.5 ml-auto cursor-pointer"
                >
                  Chat <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Robot Avatar Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            if (isTeaserVisible) setIsTeaserVisible(false);
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Open G-Assist AI Chatbot"
          className="relative group w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#243f40] via-[#1a3233] to-[#0f2122] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 border-2 border-[#86c37c]/80 transition-all duration-300 cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full bg-[#86c37c] opacity-30 animate-ping duration-1000 -z-10 group-hover:opacity-50" />
          <GAssistRobotIcon size={36} isThinking={isThinking} />

          {/* Active Status Badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </span>

          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -left-1 bg-amber-500 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full border border-white shadow-xs">
              1
            </span>
          )}

          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-700 hidden sm:flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Chat with G-Assist AI
          </span>
        </motion.button>
      </div>

      {/* ============================================================ */}
      {/* 2. CHAT WINDOW (CLAMPED TO NEVER HIT NAVBAR)                 */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            // Height is strictly clamped: max-h-[calc(100dvh-7.25rem)] ensures at least 92px clearance from top, keeping it safely below navbar
            className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-[1050] w-[calc(100vw-1.5rem)] sm:w-[420px] max-w-[430px] h-[540px] max-h-[calc(100dvh-7.25rem)] bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden font-sans"
          >
            {/* Clean Header (API Key and Restart removed) */}
            <div className="bg-gradient-to-r from-[#243f40] via-[#2d4d4e] to-[#1e3637] text-white px-4 py-3 flex items-center justify-between border-b border-emerald-500/20 shadow-xs flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <GAssistRobotIcon size={34} isThinking={isThinking} />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-slate-900 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-base text-white">G-Assist</h3>
                  </div>
                  <p className="text-xs text-emerald-200/90 font-medium leading-none mt-1">
                    Greens Technologys Academic Counselor
                  </p>
                </div>
              </div>

              {/* Header Action: Only clean Close/Minimize */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Minimize"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Messages Stream */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-7 h-7 flex-shrink-0 mt-0.5">
                      <GAssistRobotIcon size={26} />
                    </div>
                  )}

                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#243f40] text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs'
                    }`}
                  >
                    {msg.sender === 'assistant' ? (
                      renderFormattedText(msg.text)
                    ) : (
                      <p className="text-sm sm:text-[15px] font-medium leading-relaxed">{msg.text}</p>
                    )}

                    {/* CTAs inside Assistant message */}
                    {msg.ctas && msg.ctas.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2">
                        {msg.ctas.map((cta, ctaIdx) => {
                          const isWhatsApp = cta.variant === 'whatsapp';
                          const isAccent = cta.variant === 'accent';
                          const isPrimary = cta.variant === 'primary';

                          let btnClasses =
                            'text-xs sm:text-[13px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ';

                          if (isWhatsApp) {
                            btnClasses += 'bg-[#25D366] hover:bg-[#20bd5a] text-white';
                          } else if (isAccent) {
                            btnClasses += 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold';
                          } else if (isPrimary) {
                            btnClasses += 'bg-[#243f40] hover:bg-[#1a3233] text-white';
                          } else {
                            btnClasses += 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200';
                          }

                          return (
                            <button
                              key={ctaIdx}
                              onClick={() => handleCtaClick(cta)}
                              className={btnClasses}
                            >
                              {isWhatsApp && <MessageCircle className="w-3 h-3 fill-current" />}
                              {cta.type === 'call' && <Phone className="w-3 h-3" />}
                              {cta.type === 'demo' && <Calendar className="w-3 h-3" />}
                              {cta.type === 'navigate' && <ExternalLink className="w-3 h-3" />}
                              <span>{cta.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <span
                      className={`text-[10px] block text-right mt-1.5 font-mono ${
                        msg.sender === 'user' ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Thinking Indicator */}
              {isThinking && (
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="w-7 h-7 flex-shrink-0 mt-0.5">
                    <GAssistRobotIcon size={26} isThinking={true} />
                  </div>
                  <div className="bg-white text-slate-600 border border-slate-200/80 rounded-2xl rounded-tl-xs px-3.5 py-2.5 shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-xs sm:text-sm font-medium text-slate-500 pl-0.5">
                      G-Assist is analyzing curriculum...
                    </span>
                  </div>
                </div>
              )}

              {/* Initial Guided Category Cards (shown on welcome) */}
              {messages.length <= 1 && !isThinking && (
                <div className="pt-1.5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 pl-0.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-600" />
                    Recommended Guides:
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {GUIDED_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => handleSendMessage(cat.prompt)}
                          className={`p-3 rounded-xl border text-left transition-all shadow-xs cursor-pointer ${cat.color}`}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span className="font-bold text-xs sm:text-sm leading-tight">{cat.title}</span>
                          </div>
                          <p className="text-xs opacity-90 line-clamp-1">{cat.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Smart Guided Follow-Up Suggestions with Left & Right Arrow Navigation */}
            <div className="px-2.5 py-2 bg-slate-100/80 border-t border-slate-200/80 flex items-center gap-1.5 flex-shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex-shrink-0">
                Suggested:
              </span>

              {/* Scroll Left Button */}
              <button
                type="button"
                onClick={() => scrollSuggestions('left')}
                className="w-6 h-6 rounded-full bg-white hover:bg-slate-200 text-slate-600 flex items-center justify-center border border-slate-300/80 shadow-2xs transition-colors cursor-pointer flex-shrink-0"
                title="Scroll Left"
                aria-label="Scroll suggestions left"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {/* Horizontal Scroll Area */}
              <div
                ref={suggestionsRef}
                className="flex items-center gap-1.5 overflow-x-auto scrollbar-none scroll-smooth flex-1 py-0.5"
              >
                {getFollowUpChips().map((chip, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => handleSendMessage(chip)}
                    className="text-xs font-semibold bg-white hover:bg-emerald-50 hover:text-emerald-900 hover:border-emerald-400 text-slate-700 border border-slate-200/90 px-3 py-1 rounded-lg whitespace-nowrap shadow-2xs transition-colors cursor-pointer flex-shrink-0"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Scroll Right Button */}
              <button
                type="button"
                onClick={() => scrollSuggestions('right')}
                className="w-6 h-6 rounded-full bg-white hover:bg-slate-200 text-slate-600 flex items-center justify-center border border-slate-300/80 shadow-2xs transition-colors cursor-pointer flex-shrink-0"
                title="Scroll Right"
                aria-label="Scroll suggestions right"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Clean Input Box */}
            <div className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about courses, fees, syllabus, jobs..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                disabled={isThinking}
                className="flex-1 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isThinking}
                className="w-9 h-9 rounded-xl bg-[#243f40] hover:bg-emerald-700 disabled:opacity-40 text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer flex-shrink-0"
                title="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* 3. FREE DEMO SESSION BOOKING MODAL                           */}
      {/* ============================================================ */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-600 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2.5 mb-3.5">
                <GAssistRobotIcon size={36} />
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Book Free 1-on-1 Demo
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold">
                    With Senior Greens Tech Industry Mentor
                  </p>
                </div>
              </div>

              {demoSubmitted ? (
                <div className="text-center py-5">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-1.5 animate-bounce" />
                  <h4 className="font-bold text-slate-900 text-base">Seat Reserved!</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Check your phone for joining link & counselor confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-0.5">
                      Course Interested
                    </label>
                    <input
                      type="text"
                      value={demoCourseName}
                      onChange={(e) => setDemoCourseName(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-0.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={demoFormData.name}
                      onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-0.5">
                      Mobile Number (for WhatsApp link)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={demoFormData.phone}
                      onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-0.5">
                      Preferred Batch
                    </label>
                    <select
                      value={demoFormData.preferredBatch}
                      onChange={(e) => setDemoFormData({ ...demoFormData, preferredBatch: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-slate-900"
                    >
                      <option value="Weekend (Sat & Sun)">Weekend (Sat & Sun)</option>
                      <option value="Weekday Morning">Weekday Morning (7:30 AM - 9:30 AM)</option>
                      <option value="Weekday Evening">Weekday Evening (6:30 PM - 8:30 PM)</option>
                      <option value="Online Live Interactive">Online Live Interactive</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#243f40] hover:bg-emerald-700 text-white font-extrabold py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer mt-1"
                  >
                    Confirm Free Demo Session
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    🔒 100% Free counseling session with syllabus walkthrough.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
