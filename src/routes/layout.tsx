import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

import Header from "../components/header/header";

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  return (
    <div class="flex min-h-screen flex-col">
      <Header />

      <div class="container mx-auto px-4">
        <Slot />
      </div>

      <footer class="mt-auto">
        <div class="container mx-auto px-4 pb-6">
          <a href="https://www.builder.io/" target="_blank">
            Made with <span class="text-red-400">♡</span> by Builder.io
            <div>{serverTime.value.date}</div>
          </a>
        </div>
      </footer>
    </div>
  );
});
