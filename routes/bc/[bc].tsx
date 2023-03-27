import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "twind";
import { aspectRatio } from "@twind/aspect-ratio";
import { formatCurrency } from "@/utils/data.ts";
import { graphql } from "@/utils/shopify.ts";
import { Footer } from "@/components/Footer.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import { Header } from "@/components/Header.tsx";
import IconCart from "@/components/IconCart.tsx";
import { CSS, render } from "https://deno.land/x/gfm@0.2.1/mod.ts";


export const handler: Handlers<{}> = {
  async GET(_req, ctx) {   
    
    const res = await fetch(`https://raw.githubusercontent.com/idpa-bm/Dokumentation/main/bc/${ctx.params.bc}.md`).then((response) => {
      return response.text();
    })
  
    const html = render(res);
    
    return ctx.render({content:html.replaceAll("<h2", "<h2 class='text-2xl font-bold mt-8 mb-4'").replaceAll("<h1", "<h1 class='text-3xl font-bold mt-8 mb-4'").replaceAll("<a class='anchor'","<a class='anchor invisible'")});
  },
};


export default function Home(ctx: PageProps<{content: string}>) {
  const { data ,url } = ctx;
 
  return (
    <div>
      <HeadElement
        description="Duftsymphony"
        image={url.href + "logo_icon.svg"}
        title="Duftsymphony"
        url={url}
      />
      <Header />
      <div
        class="w-11/12 max-w-5xl mx-auto mt-28"
        aria-labelledby="information-heading"
      >
        <h1 class='text-3xl font-bold mt-8 mb-4'></h1>
        <h2 class='text-2xl font-bold mt-8 mb-4'></h2>
         <div dangerouslySetInnerHTML={{ __html: data.content }} />
      <Footer />
    </div>
    </div>
  );
}
