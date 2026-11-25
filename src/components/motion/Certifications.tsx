import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Certificate } from "@phosphor-icons/react";

const certs = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Coursera / Google',
    date: 'January 2025',
    credentialId: 'Google UX Design Professional',
    description: 'Comprehensive program covering foundations of UX design, empathizing with users, wireframing, low and high-fidelity prototypes, and usability studies.',
    link: 'https://www.coursera.org',
  },
  {
    title: 'Elements of Agile',
    issuer: 'Miro',
    date: '2025',
    credentialId: 'Miro Agile Certification',
    description: 'Mastery of agile methodologies, collaborative product discovery, workshop facilitation, and cross-functional design workflows.',
    link: 'https://miro.com',
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
              className="group p-8 md:p-10 rounded-[2.5rem] border border-[--color-border] bg-[--color-surface] hover:border-[--color-accent] transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[--color-background] border border-[--color-border] flex items-center justify-center text-[--color-accent] mb-6 group-hover:scale-110 transition-transform">
                  <Certificate size={24} weight="bold" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[--color-accent]">{cert.issuer}</span>
                  <span className="text-[10px] font-mono text-[--color-text-secondary]/60">{cert.date}</span>
                </div>
                <h3 className="text-2xl font-bold font-display tracking-tight text-[--color-text] mb-4">{cert.title}</h3>
                <p className="text-sm text-[--color-text-secondary] font-light leading-relaxed mb-6">{cert.description}</p>
              </div>

              <div className="pt-6 border-t border-[--color-border] flex items-center justify-between">
                <span className="text-xs font-mono text-[--color-text-secondary] uppercase tracking-wider">{cert.credentialId}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[--color-text] group-hover:text-[--color-accent] transition-colors"
                >
                  Verify Credential <ArrowUpRight size={14} weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
