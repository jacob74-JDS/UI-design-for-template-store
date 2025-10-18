
import React, { useState, useCallback } from 'react';
import { generateDesignIdea } from '../services/geminiService';

const DesignIdeaGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter an idea first.');
      return;
    }
    setIsLoading(true);
    setError('');
    setIdea('');
    try {
      const result = await generateDesignIdea(prompt);
      setIdea(result);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Design Idea Generator</h3>
      <p className="text-sm text-gray-500 mb-4">Stuck for an idea? Describe your concept and let our AI assistant sketch out a vision for you.</p>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., a minimalist coffee shop app"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          disabled={isLoading}
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-accent text-primary font-bold px-6 py-2 rounded-md hover:bg-amber-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isLoading && (
         <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
            <div className="bg-secondary h-2.5 rounded-full animate-pulse" style={{width: '75%'}}></div>
         </div>
      )}
      {idea && (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded-md">
            <h4 className="font-semibold mb-2">Generated Concept:</h4>
          <p className="text-gray-700 whitespace-pre-wrap">{idea}</p>
        </div>
      )}
    </div>
  );
};

export default DesignIdeaGenerator;
