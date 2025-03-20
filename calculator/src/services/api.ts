import { NumberType } from '../types';

const API_BASE_URL = 'http://20.244.56.144/test';
const TIMEOUT = 500;

export const fetchNumbers = async (type: NumberType): Promise<number[]> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  const typeMap = {
    p: 'primes',
    f: 'fibo',
    e: 'even',
    r: 'rand'
  };

  try {
    const response = await fetch(`${API_BASE_URL}/${typeMap[type]}`, {
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error('Failed to fetch numbers');
    }

    const data = await response.json();
    return data.numbers;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout after 500ms');
    }
    throw error;
  }
};