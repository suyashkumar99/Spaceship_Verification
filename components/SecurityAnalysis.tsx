
import React from 'react';

const SecurityAnalysis: React.FC = () => {
  return (
    <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 border border-slate-800 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto max-h-[80vh] text-slate-300">
      <section>
        <h2 className="text-xl font-black text-white mb-4 border-b border-slate-800 pb-2 uppercase tracking-tighter">1. Data Architecture</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-950/30 p-4 rounded-2xl border border-indigo-500/20">
            <h3 className="font-bold text-indigo-400 mb-2 text-xs uppercase tracking-widest">Excel Integration</h3>
            <p className="text-xs leading-relaxed">
              The system is designed to consume static exports from registration forms (Google Forms/Excel). By converting Excel rows to a JSON array, the application matches input emails against the pre-approved whitelist instantly.
            </p>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50">
            <h3 className="font-bold text-slate-400 mb-2 text-xs uppercase tracking-widest">Unique SHIP-ID</h3>
            <p className="text-xs leading-relaxed">
              Generates a non-sequential, alphanumeric identifier: <code>SHIP-YYYY-XXXX</code>. This prevents unauthorized guessing of participant IDs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-black text-white mb-4 border-b border-slate-800 pb-2 uppercase tracking-tighter">2. Security Protocols</h2>
        <div className="space-y-4">
          <RiskItem 
            risk="Multi-Factor Authorization"
            mitigation="Users must have access to both the specific confirmation link and the live mailbox to receive the 6-digit OTP."
          />
          <RiskItem 
            risk="Temporal Security"
            mitigation="OTPs are set with a T-minus 5 minute expiration window. After this, the session self-destructs and requires a new GET OTP request."
          />
          <RiskItem 
            risk="Rate Limiting"
            mitigation="The 'Resend OTP' protocol includes an exponential cooldown (30s, 60s) to prevent spamming the verification server."
          />
        </div>
      </section>
    </div>
  );
};

const RiskItem: React.FC<{ risk: string; mitigation: string }> = ({ risk, mitigation }) => (
  <div className="border-l-2 border-indigo-500 pl-4 py-1">
    <p className="font-black text-slate-100 text-sm uppercase tracking-tight">{risk}</p>
    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{mitigation}</p>
  </div>
);

export default SecurityAnalysis;
