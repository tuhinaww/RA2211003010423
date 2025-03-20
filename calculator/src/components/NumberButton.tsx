import React from 'react';
import { NumberType } from '../types';
import { Calculator, Binary, Hash, Shuffle } from 'lucide-react';

type Props = {
  type: NumberType;
  onClick: () => void;
  disabled: boolean;
};

const typeConfig: Record<NumberType, {
  label: string;
  icon: React.ComponentType<any>;
  description: string;
}> = {
  p: {
    label: 'Prime',
    icon: Calculator,
    description: 'Generate prime numbers'
  },
  f: {
    label: 'Fibonacci',
    icon: Binary,
    description: 'Generate Fibonacci sequence'
  },
  e: {
    label: 'Even',
    icon: Hash,
    description: 'Generate even numbers'
  },
  r: {
    label: 'Random',
    icon: Shuffle,
    description: 'Generate random numbers'
  }
};

export const NumberButton: React.FC<Props> = ({ type, onClick, disabled }) => {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="relative group overflow-hidden rounded-xl button-gradient text-white p-6
                 transition-all duration-300 transform hover:scale-[1.02]
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                 shadow-lg hover:shadow-xl dark:shadow-blue-500/10"
    >
      <div className="flex flex-col items-center gap-3">
        <Icon className="w-8 h-8" />
        <span className="font-semibold text-lg">{config.label}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </button>
  );
};