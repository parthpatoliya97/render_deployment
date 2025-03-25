<script>
  export let stats;
</script>

<div class="relative isolate overflow-hidden bg-gray-900 py-6 sm:py-8">
  <!-- Background image, dynamic via hero.bgImage -->
  <img
    src={stats.bgImage}
    alt={stats.alt}
    class="absolute inset-0 -z-10 size-full object-cover"
    loading="lazy"
  />
  <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold text-rose-400">
        {stats.label}
      </h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
        {stats.title}
      </p>
      <p class="mt-6 text-lg text-gray-300">
        {stats.description}
      </p>
    </div>
    <dl class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4 justify-items-center">
      {#each stats.data as stat}
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6 text-center">
          <dt class="text-sm">{stat.title}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">
            {stat.description}
          </dd>
        </div>
      {/each}
    </dl>
  </div>
</div>
