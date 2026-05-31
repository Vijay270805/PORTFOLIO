import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: '#050816' }}
    >
      {/* Neural Network Animation */}
      <div className="relative w-40 h-40 mb-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-[var(--primary)]"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 1.5 + i * 0.4, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeOut',
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-[0_0_40px_rgba(0,245,255,0.4)]">
            <span className="text-black font-bold text-2xl font-['Space_Grotesk']">V</span>
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[var(--primary)] font-['Space_Grotesk'] font-semibold text-xl mb-2"
      >
        Vijay D
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[var(--text-secondary)] text-sm mb-8"
      >
        AI Engineer & ML Engineer
      </motion.p>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-[var(--border)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
          style={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <p className="text-[var(--text-secondary)] text-xs mt-2">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </motion.div>
  );
}
