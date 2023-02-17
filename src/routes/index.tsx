import { component$ } from "@builder.io/qwik";
import { Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { loader$ } from "@builder.io/qwik-city";
import { ExampleTest } from "~/components/example/example";
import { RadixAvatar } from "~/integrations/react/radix-avatar";
import wretch from "wretch";

interface Quote {
  id: number;
  quote: string;
  author: string;
}
export const useGetDummyJson = loader$(async (): Promise<Quote | null> => {
  return wretch("https://dummyjson.com/quotes/random")
    .get()
    .notFound((error) => {
      console.error(error);
      return null;
    })
    .error(418, (error) => {
      console.error(error);
      return null;
    })
    .json();
});

interface CardProps {
  title: string;
}
export const Card = component$((props: CardProps) => {
  const { title } = props;
  return (
    <div class="rounded-xl bg-slate-100 p-4">
      <h2 class="mb-3 text-sm font-semibold">{title}</h2>
      <Slot />
    </div>
  );
});

export default component$(() => {
  const dummyData = useGetDummyJson();

  return (
    <div class="pt-10">
      <div>
        <h1 class="text-4xl font-bold">
          Qwik City + Radix UI + Tailwind <br /> Vitest + Playwright
          <br />
          Wretch
        </h1>
      </div>
      <div class="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card title="Radix UI Avatar integration example">
          <div class="flex gap-2">
            <RadixAvatar
              client:load
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <RadixAvatar
              client:load
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
              alt="Pedro Duarte"
            />
            <RadixAvatar client:load src="" alt="hoge" fallback="QK" />
          </div>
        </Card>
        <Card title="Counter example">
          <ExampleTest flag />
        </Card>
        <Card title="loader$() example">
          {dummyData.value ? (
            <div>
              <p class="text-lg">
                "{dummyData.value.quote}"
                <span class="ml-2 inline text-sm text-gray-500">
                  QuoteID:{dummyData.value.id}
                </span>
              </p>
              <div class="mt-5 flex  justify-between">
                <span class="font-bold">{dummyData.value.author}</span>
                <ul class="flex items-center text-sm">
                  <li>
                    <span>via</span>
                  </li>
                  <li class="ml-1">
                    <a
                      href="https://dummyjson.com/"
                      class="flex items-center gap-0.5 underline hover:no-underline"
                    >
                      <span>DummyJSON</span>
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <p class="text-red-500">Something went wrong.</p>
          )}
        </Card>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik City my Starter",
  meta: [
    {
      name: "Qwik City my Starter",
      content: "Qwik City + Radix UI + Tailwind + Wretch + Vitest + Playwright",
    },
  ],
};
