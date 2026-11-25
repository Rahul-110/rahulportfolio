import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Coursera',
    date: 'January 2025',
    image: '/images/google-ux-cert.png', // User needs to ensure this asset exists
    link: '#',
  },
  {
    title: 'Elements of Agile',
    issuer: 'Miro',
    date: '2025',
    image: '/images/miro-agile-badge.png', // User needs to ensure this asset exists
    link: '#',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 md:py-40 bg-[--color-background] border-t border-[--color-border]">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[--color-accent]"></span>
            <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-[--color-accent]">07 / CONTINUOUS LEARNING</span>
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-medium tracking-tighter text-[--color-text] leading-[0.9]">
            Certifications & <br/>
            <span className="italic font-serif text-[--color-text-secondary]">Growth.</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[2rem] border border-[--color-border] bg-[--color-surface] hover:border-[--color-accent] transition-all"
            >
              <img src={cert.image} alt={cert.title} className="w-16 h-16 mb-6 object-contain" />
              <h3 className="text-xl font-bold font-display tracking-tight text-[--color-text] mb-2">{cert.title}</h3>
              <p className="text-sm text-[--color-text-secondary] mb-1">{cert.issuer}</p>
              <p className="text-xs font-mono text-[--color-text-secondary]/60">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
