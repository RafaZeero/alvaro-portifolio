import { PrismicRichText } from '@prismicio/react';
import { createClient } from '@prismicioconfig';

interface PageProps {
  params: {
    uid: string;
  };
}

export default async function Page({ params }: any) {
  const client = createClient();

  const page = await client.getByUID('mypage', params.uid);

  return (
    <>
      <h1>{page.uid}</h1>

      {page.data.slices.map(slice => {
        return (
          <>
            {slice.primary.numerocampinho}

            {slice.items.map(item => {
              return (
                <>
                  <PrismicRichText field={item.textocampo} />
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
}
