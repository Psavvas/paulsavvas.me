import { notFound } from 'next/navigation';

import RedirectClient from './RedirectClient';
import { REDIRECTS } from '../redirects';

type RedirectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RedirectPage(props: RedirectPageProps) {
  const { slug } = await props.params;
  const destination = REDIRECTS[slug];

  if (!destination) notFound();

  return <RedirectClient slug={slug} destination={destination} />;
}
