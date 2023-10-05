import { PrismicPreview } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import React from 'react';

export default function Posts() {
  return (
    <div>
      <PrismicPreview repositoryName={'alvaro-portifolio'} />
      <h1>POSTS HERE</h1>
      <Link href='posts/123'>Ir para 123</Link>
    </div>
  );
}
