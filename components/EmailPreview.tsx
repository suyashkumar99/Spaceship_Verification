
import React from 'react';

interface EmailPreviewProps {
  title: string;
  subject: string;
  body: string;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ title, subject, body }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</h4>
      </div>
      <div className="p-4 bg-slate-50 flex-grow">
        <div className="mb-3">
          <span className="text-xs text-slate-400 block">Subject:</span>
          <p className="text-sm font-semibold text-slate-700">{subject}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded p-4 text-xs text-slate-600 whitespace-pre-wrap font-sans leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
