<script>
    export let ctas;
</script>

<div class="bg-indigo-100">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
      <h2 class="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{@html ctas.title}</h2>
      <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
        <a href="{ctas.data[0].link}" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{ctas.data[0].title}</a>
        <a href="{ctas.data[1].link}" class="text-sm/6 font-semibold text-gray-900">{ctas.data[1].title} <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </div>
  