import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-3 text-2xl">Página no encontrada</p>
      <Link href="/" className="mt-6 text-blue-600 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
