import { component$, useStore } from "@builder.io/qwik";

export const ExampleTest = component$((props: { flag: boolean }) => {
  const state = useStore({
    counter: 0,
  });

  return (
    <>
      <span class="count">Count:{state.counter}</span>
      <div class="icon mb-3">Flag: {props.flag ? "⭐" : "💣"}</div>
      <div class="flex gap-3">
        <button
          type="button"
          class="btn-inc rounded-lg bg-gray-900 py-2 px-4 text-white hover:opacity-80"
          onClick$={() => state.counter++}
        >
          Increment counter
        </button>
        <button
          type="button"
          class="btn-reset rounded-lg border border-red-500 bg-transparent py-2 px-4 text-red-500 hover:opacity-80"
          onClick$={() => (state.counter = 0)}
        >
          Reset
        </button>
      </div>
    </>
  );
});
