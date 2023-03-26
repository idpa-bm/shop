import { Head } from "$fresh/runtime.ts";

export type HeadProps = {
  url: URL;
  title: string;
  description: string;
  image?: string;
};

export function HeadElement({ description, image, title, url }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo_icon.svg" sizes="64x64" />
      <meta name="description" content={description} />
      <link rel="stylesheet" href="../font.css" type="text/css"/>
    </Head>
  );
}
