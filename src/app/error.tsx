'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { TextGenerateEffect } from '@/components/text-generate-effect/TextGenerateEffect';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-6xl mb-4">⚠️</div>
        
        <TextGenerateEffect
          words="Algo salió mal"
          className="text-3xl font-bold text-gray-900 dark:text-gray-100"
          duration={0.5}
        />
        
        <p className="text-gray-600 dark:text-gray-400">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Detalles del error
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
              {error.message}
            </pre>
          </details>
        )}

        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Intentar de nuevo
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
