
import React, { useState, useEffect, useRef } from 'react';
import { VerificationState, Step } from './types';
import { MOCK_DATABASE, Icons } from './constants';
import SecurityAnalysis from './components/SecurityAnalysis';

const App: React.FC = () => {
  const [state, setState] = useState<VerificationState>({
    currentStep: 'EMAIL_INPUT',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - distance / 200) * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
          p.opacity = Math.min(0.8, p.opacity + 0.02);
        } else {
          p.opacity = Math.max(0.1, p.opacity - 0.01);
        }

        ctx.fillStyle = `rgba(129, 140, 248, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    const target = e.currentTarget as HTMLElement;
    target.style.setProperty('--mouse-x', `${e.clientX}px`);
    target.style.setProperty('--mouse-y', `${e.clientY}px`);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    setTimeout(() => {
      const searchEmail = state.email.trim().toLowerCase();
      const participant = MOCK_DATABASE.find(p => p.email.toLowerCase() === searchEmail);
      
      if (participant) {
        setState(prev => ({ 
          ...prev, 
          currentStep: 'CONFIRMATION_DETAILS', 
          participantData: participant
        }));
      } else {
        setError("Invalid credentials. Email address not found in the authorized database.");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleGenerateID = () => {
    setIsLoading(true);
    setTimeout(() => {
      setState(prev => ({ ...prev, currentStep: 'SUCCESS' }));
      setIsLoading(false);
    }, 1200);
  };

  const handleDownloadImage = () => {
    if (!state.participantData) return;

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid effect
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Border
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 15;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Logo Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold italic 40px Inter, sans-serif';
    ctx.fillText('SPACESHIP PROGRAM', 100, 120);

    // Label
    ctx.fillStyle = '#6366f1';
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.fillText('OFFICIAL ENTRY CREDENTIALS', 100, 180);

    // Unique ID Box
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(100, 240, 1000, 300);
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    ctx.strokeRect(100, 240, 1000, 300);

    // The ID
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 120px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(state.participantData.uniqueId || '', canvas.width / 2, 420);

    // Participant Info
    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.fillText('TEAM NAME', 100, 600);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Inter, sans-serif';
    ctx.fillText(state.participantData.name.toUpperCase(), 100, 650);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.fillText('LEADER', 700, 600);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Inter, sans-serif';
    ctx.fillText(state.participantData.eventName.toUpperCase(), 700, 650);

    // Security Footer
    ctx.fillStyle = '#475569';
    ctx.font = '18px Inter, sans-serif';
    ctx.fillText('VERIFIED VIA SPACESHIP SECURE PORTAL | SESSION VALIDATED', 100, 740);

    // Trigger download
    const link = document.createElement('a');
    link.download = `SHIP_ID_${state.participantData.uniqueId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleExitPortal = () => {
    window.close();
    setTimeout(() => {
      if (!window.closed) {
        const confirmed = window.confirm("SECURITY ALERT: Verification session is complete. Would you like to terminate this connection?");
        if (confirmed) {
          window.location.href = "about:blank";
        }
      }
    }, 100);
  };

  const steps: { key: Step; label: string }[] = [
    { key: 'EMAIL_INPUT', label: 'Auth' },
    { key: 'CONFIRMATION_DETAILS', label: 'Review' },
    { key: 'SUCCESS', label: 'Final' }
  ];

  return (
    <div 
      className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 flex flex-col items-center font-sans overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle 300px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(99, 102, 241, 0.3), transparent 80%), 
                           linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)`,
          backgroundSize: `100% 100%, 50px 50px, 50px 50px`
        }}
      />

      <div className="max-w-2xl w-full relative z-10">
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white shadow-lg shadow-indigo-500/20">
              <Icons.Shield />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white uppercase italic">Spaceship</h1>
          </div>
          <button 
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors border border-slate-800 px-4 py-2 rounded-md bg-slate-900/40"
          >
            {showAnalysis ? "Close Dashboard" : "System Diagnostics"}
          </button>
        </header>

        {!showAnalysis && (
          <nav className="flex justify-between mb-12 px-8">
            {steps.map((s, idx) => (
              <div key={s.key} className="flex flex-col items-center gap-2 flex-1 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all duration-500 z-10 ${
                  state.currentStep === s.key ? 'bg-indigo-600 border-indigo-400 text-white' : 
                  steps.findIndex(x => x.key === state.currentStep) > idx ? 'bg-indigo-950 border-indigo-500 text-indigo-400' : 'bg-slate-900 border-slate-800 text-slate-600'
                }`}>
                  {steps.findIndex(x => x.key === state.currentStep) > idx ? '✓' : idx + 1}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-tighter ${state.currentStep === s.key ? 'text-indigo-400' : 'text-slate-600'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </nav>
        )}

        <main className="backdrop-blur-2xl bg-slate-900/60 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700/40 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 animate-pulse">
                Processing Secure Request
              </p>
            </div>
          )}

          {showAnalysis ? (
            <SecurityAnalysis />
          ) : (
            <>
              {state.currentStep === 'EMAIL_INPUT' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Participant Login</h2>
                    <p className="text-slate-400 text-sm font-medium">Please enter your institutional email to begin verification.</p>
                  </div>
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="institutional@domain.com"
                        className="w-full bg-slate-950/50 px-6 py-4 rounded-xl border border-slate-800 focus:border-indigo-500 outline-none transition-all text-base text-white placeholder:text-slate-800"
                        value={state.email}
                        onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/20 uppercase text-xs tracking-widest">
                      Authorize Access
                    </button>
                    {error && <div className="p-4 bg-red-950/20 border border-red-900/30 text-red-400 text-xs font-medium rounded-xl text-center">{error}</div>}
                  </form>
                </div>
              )}

              {state.currentStep === 'CONFIRMATION_DETAILS' && (
                <div className="space-y-8 animate-in slide-in-from-right duration-500">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Review Manifest</h2>
                    <p className="text-slate-400 text-sm font-medium">Validate the information retrieved from our program records.</p>
                  </div>
                  <div className="bg-slate-950/40 rounded-2xl border border-slate-800 divide-y divide-slate-800/50 overflow-hidden">
                    <div className="flex justify-between items-center px-6 py-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Team</span>
                      <span className="text-sm font-bold text-white">{state.participantData?.name}</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Leader</span>
                      <span className="text-sm font-bold text-white text-right ml-4">{state.participantData?.eventName}</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone No.</span>
                      <span className="text-sm font-mono font-bold text-indigo-400">{state.participantData?.registeredDate}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <button 
                      onClick={handleGenerateID}
                      className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 text-xs tracking-widest uppercase shadow-xl shadow-indigo-900/40"
                    >
                      Generate Official Entry ID
                    </button>
                    <button 
                      onClick={() => setState({ currentStep: 'EMAIL_INPUT', email: '' })}
                      className="w-full text-slate-600 text-[9px] font-bold uppercase tracking-widest hover:text-slate-300 transition-colors"
                    >
                      Cancel and Re-identify
                    </button>
                  </div>
                </div>
              )}

              {state.currentStep === 'SUCCESS' && (
                <div className="text-center space-y-10 animate-in zoom-in-95 duration-700">
                  <div className="flex justify-center">
                    <div className="bg-indigo-600/10 p-5 rounded-full border border-indigo-500/20">
                      <Icons.Check />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">Access Confirmed</h2>
                    <p className="text-slate-400 text-sm font-medium">Your credentials have been verified for the Spaceship Program.</p>
                  </div>
                  <div className="bg-slate-950/80 p-12 rounded-2xl border border-indigo-500/30 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 px-4 py-1.5 rounded text-[8px] font-black uppercase tracking-[0.3em]">Official Entry ID</div>
                    <p className="text-4xl md:text-5xl font-mono font-bold text-white tracking-[0.3em] drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                      {state.participantData?.uniqueId}
                    </p>
                  </div>
                  
                  <div className="text-left bg-slate-800/20 p-6 rounded-xl border border-slate-700/30">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      Program Instructions
                    </h4>
                    <ul className="text-[11px] text-slate-400 space-y-3 font-medium leading-relaxed">
                      <li>• Download your Entry Card or screenshot this ID for session check-in.</li>
                      <li>• Proceed to the designated briefing area at the program venue.</li>
                      <li>• Present your ID to the authorized program facilitators upon arrival.</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-4">
                    <button 
                      onClick={handleDownloadImage}
                      className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-500 transition-all text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Download Entry Card
                    </button>
                    <button 
                      onClick={handleExitPortal}
                      className="w-full bg-red-600 text-white font-black py-4 rounded-xl hover:bg-red-500 transition-all text-sm tracking-[0.4em] uppercase shadow-2xl shadow-red-900/40 border border-red-400/30"
                    >
                      EXIT
                    </button>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="text-slate-700 text-[10px] font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors"
                    >
                      Start New Session
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
        
        <footer className="mt-12 text-center">
          <p className="text-[9px] text-slate-700 uppercase tracking-[0.4em] font-bold">Spaceship Program Verification Gateway</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
