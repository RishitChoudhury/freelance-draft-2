import React from 'react';
import { ArrowUp, Download, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-dark-text/10 px-6 pb-12 pt-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 text-dark-ash md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-dark-text">LANCEMART AI</p>
            <p className="max-w-sm text-[1.9rem] leading-[1.15] text-dark-text lg:text-[1.62rem]">
              Lancemart <span className="font-serif italic">AI</span>
            </p>
            <p className="max-w-sm text-[1.05rem] leading-relaxed lg:text-[1rem]">
              Machine Intelligence Operating System Architecture for teams building with AI.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[1.05rem] font-semibold text-dark-text lg:text-[1rem]">Research</h4>
            <div className="space-y-3 text-[1.02rem] lg:text-[0.97rem]">
              <a href="#framework" className="flex items-center gap-2 transition-colors hover:text-dark-text">
                <Download className="h-4 w-4" />
                Lancemart Paper
              </a>
              <a href="#optimal-systems" className="block transition-colors hover:text-dark-text">
                Framework Overview
              </a>
              <a href="#how-it-works" className="block transition-colors hover:text-dark-text">
                How It Works
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[1.05rem] font-semibold text-dark-text lg:text-[1rem]">Platform</h4>
            <div className="space-y-3 text-[1.02rem] lg:text-[0.97rem]">
              <a href="#miosa" className="flex items-center gap-1.5 transition-colors hover:text-dark-text">
                Lancemart
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#miosa" className="flex items-center gap-1.5 transition-colors hover:text-dark-text">
                Agency
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#miosa" className="flex items-center gap-1.5 transition-colors hover:text-dark-text">
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[1.05rem] font-semibold text-dark-text lg:text-[1rem]">Contact</h4>
            <a href="mailto:hello@lancemart.ai" className="text-[1.02rem] transition-colors hover:text-dark-text lg:text-[0.97rem]">
              hello@lancemart.ai
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-text/10 pt-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-[0.98rem] text-dark-ash lg:text-[0.94rem]">© 2026 Lancemart AI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="#framework"
                className="inline-flex items-center gap-2 rounded-full bg-dark-text px-5 py-2.5 text-[0.95rem] font-medium text-stark-white shadow-[0_10px_28px_rgba(17,17,17,0.25)] transition-transform hover:-translate-y-0.5 lg:text-[0.92rem]"
              >
                <Download className="h-4 w-4" />
                Read the Paper
              </a>
              <a
                href="#miosa"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-dark-text text-stark-white shadow-[0_10px_28px_rgba(17,17,17,0.25)] transition-transform hover:-translate-y-0.5"
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
