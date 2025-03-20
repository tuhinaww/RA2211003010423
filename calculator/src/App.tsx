import React, { useState } from 'react';
import { Calculator, Sparkles } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { NumberButton } from './components/NumberButton';
import { ResultsDisplay } from './components/ResultsDisplay';
import { fetchNumbers } from './services/api';
import { NumberType, WindowState } from './types';
import { useThemeStore } from './store/themeStore';

const WINDOW_SIZE = 10;

function App() {
  const { theme } = useThemeStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [windowState, setWindowState] = useState<WindowState>({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [],
    avg: 0,
  });

  const handleFetchNumbers = async (type: NumberType) => {
    setLoading(true);
    setError(null);
    
    try {
      const numbers = await fetchNumbers(type);
      const uniqueNumbers = [...new Set(numbers)];
      
      setWindowState(prev => {
        const prevState = [...prev.windowCurrState];
        let newState = [...prevState];
        
        for (const num of uniqueNumbers) {
          if (!newState.includes(num)) {
            if (newState.length >= WINDOW_SIZE) {
              newState.shift();
            }
            newState.push(num);
          }
        }
        
        const avg = newState.length > 0 
          ? newState.reduce((a, b) => a + b, 0) / newState.length 
          : 0;
        
        return {
          windowPrevState: prevState,
          windowCurrState: newState,
          numbers: uniqueNumbers,
          avg: Number(avg.toFixed(2))
        };
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={theme}>
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 
                   dark:from-black dark:via-black dark:to-black 
                   transition-colors duration-300"
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2900')] 
                     opacity-[0.02] bg-cover bg-center mix-blend-overlay"
        />
        
        <div className="relative container mx-auto px-4 py-12">
          <ThemeToggle />
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Calculator className="w-12 h-12 text-cyan-400 dark:text-cyan-400" />
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              SmartStat
              </h1>
              <Sparkles className="w-8 h-8 text-violet-400" />
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A high-performance microservice that computes the moving average of numbers retrieved from an external API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass-morphism rounded-2xl p-8 shadow-xl dark:shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span>Number Types</span>
                {loading && (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-cyan-500 border-t-transparent" />
                )}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {(['p', 'f', 'e', 'r'] as NumberType[]).map((type) => (
                  <NumberButton
                    key={type}
                    type={type}
                    onClick={() => handleFetchNumbers(type)}
                    disabled={loading}
                  />
                ))}
              </div>
            </div>

            <div className="glass-morphism rounded-2xl p-8 shadow-xl dark:shadow-violet-500/5">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
                Results
              </h2>
              {error ? (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400">
                  {error}
                </div>
              ) : (
                <ResultsDisplay windowState={windowState} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App