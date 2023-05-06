
const folderPath = './mock/';
let i = 0;
for await (const file of Deno.readDir(folderPath)) {
  if (file.isFile) {
    const filePath = `${folderPath}/${file.name}`;
    const fileContent = await JSON.parse(await Deno.readTextFile(filePath));
    if(fileContent.product?.images.nodes)
      for (const {url} of fileContent.product?.images.nodes) {
        console.log(url);
        await fetch(url).then(async (res) => {
          await Deno.writeFile(`./static/mock/${i}.webp`,  new Uint8Array(await res.arrayBuffer()), {create: true})
        })
        console.log(`./static/mock/${i}`);
        
        Deno.readTextFile(filePath).then(res => {
          Deno.writeTextFile(filePath, res.replaceAll(url, `https://duftsymphonie.ch/mock/${i}.webp`))
        })
        await Deno.readTextFile("./mock/products.json").then(res => {
          Deno.writeTextFile("./mock/products.json", res.replaceAll(url, `https://duftsymphonie.ch/mock/${i}.webp`))
        })
        i++;
      }
  }
}
