import Link from 'next/link';
import { TextGenerateEffect } from '@/components/text-generate-effect/TextGenerateEffect';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-8xl mb-4">404</div>
        
        <TextGenerateEffect
          words="Página no encontrada"
          className="text-3xl font-bold text-gray-900 dark:text-gray-100"
          duration={0.5}
        />
        
        <p className="text-gray-600 dark:text-gray-400">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Volver al inicio
          </Link>
          
          <Link
            href="/projects"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
          >
            Ver proyectos
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Enlaces útiles:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/about" className="text-purple-600 dark:text-purple-400 hover:underline">
              Sobre mí
            </Link>
            <Link href="/skills" className="text-purple-600 dark:text-purple-400 hover:underline">
              Habilidades
            </Link>
            <Link href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
