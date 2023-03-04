import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header
      class="h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url(/header_bg.svg)",
      }}
    >
      <div class="rainfall w-full h-full absolute" />
      <nav class="w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative">
        <a href="/">
          <img
            src="/logo_icon.svg"
            alt="Deno Logo"
            class="h-20 w-20"
          />
        </a>
        <h1>
          <img
            src="/text_logo.png"
            alt="Duftsymphonie"
            class="h-16"
            width="200"
            height="24"
          />
        </h1>
        <Cart />
      </nav>
    </header>
  );
}
