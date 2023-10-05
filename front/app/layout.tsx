import { Header } from '@components';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@prismicioconfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portifólio - Álvaro Menezes',
  description: 'TODO'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen flex-col items-center'>
          <Header />
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
