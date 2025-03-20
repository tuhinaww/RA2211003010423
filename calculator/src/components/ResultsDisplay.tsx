import React from 'react';
import { WindowState } from '../types';
import { ArrowRight } from 'lucide-react';

type Props = {
  windowState: WindowState;
};

export const ResultsDisplay: React.FC<Props> = ({ windowState }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 p-4 rounded-lg bg-black/50 border border-white/5">
          <h3 className="text-slate-300 font-medium mb-2">Previous State</h3>
          <p className="text-slate-400 font-mono">
            [{windowState.windowPrevState.join(', ')}]
          </p>
        </div>
        <ArrowRight className="text-slate-600" />
        <div className="flex-1 p-4 rounded-lg bg-black/50 border border-white/5">
          <h3 className="text-slate-300 font-medium mb-2">Current State</h3>
          <p className="text-slate-400 font-mono">
            [{windowState.windowCurrState.join(', ')}]
          </p>
        </div>
      </div>
      
      <div className="p-4 rounded-lg bg-black/50 border border-white/5">
        <h3 className="text-slate-300 font-medium mb-2">Latest Numbers</h3>
        <p className="text-slate-400 font-mono">
          [{windowState.numbers.join(', ')}]
        </p>
      </div>
      
      <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/5 to-violet-500/5 border border-cyan-500/20">
        <h3 className="text-slate-300 font-medium mb-2">Average</h3>
        <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
          {windowState.avg}
        </p>
      </div>
    </div>
  );
};