
const folderPath = './mock/';

for await (const file of Deno.readDir(folderPath)) {
  if (file.isFile) {
    const filePath = `${folderPath}/${file.name}`;
    const fileContent = await JSON.parse(await Deno.readTextFile(filePath));
    if(fileContent.product?.images.nodes)
      for (const {url} of fileContent.product?.images.nodes) {
        console.log(url);
        fetch(url).then(async (res) => {
          await Deno.writeFile(`./static/mock/${url.slice(58, -13)}`,  new Uint8Array(await res.arrayBuffer()), {create: true})
        })
        Deno.readTextFile(filePath).then(res => {
          Deno.writeTextFile(filePath, res.replaceAll(url, `https://duftsymphonie.ch/mock/${url.slice(58, -13)}`))
        })
      }
  }
}
