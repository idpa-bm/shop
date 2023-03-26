import GitHub from "./IconGithub.tsx";

export function Footer() {
  return (
    <footer
      class="w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-between"
    >
      <a href="/bc/ueberuns">
        <span class="text-gray-600">
          Über uns
        </span>
      </a>
      <a href="/bc/AGB">
        <span class="text-gray-600">
          AGB`s
        </span>
      </a>
      <a href="/bc/Datenschutzbestimmung">
        <span class="text-gray-600">
          Datenschutz Bestimmungen
        </span>
      </a>
    </footer>
  );
}
