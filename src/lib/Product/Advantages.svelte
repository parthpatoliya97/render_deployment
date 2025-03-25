<script>
    export let advantages, primaryColor;
</script>
  
  <!-- Advantages Header -->
  <div class="bg-white py-6 sm:py-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base/7 font-semibold text-{primaryColor}-500">{advantages.label}</h2>
        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          {advantages.title}
        </p>
        <p class="mt-2 text-lg/8 text-gray-600">{advantages.description}</p>
      </div>
    </div>
  </div>
  
  <!-- Features Sections -->
  {#each advantages.data as advantage, i}
    <div class="overflow-hidden bg-white py-6 sm:py-8">
      <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <!-- Content Block:
               For odd features, add "lg:order-last" to shift it after the image on large screens -->
          <div class={`px-6 lg:px-0 lg:pt-4 lg:pr-4 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {advantage.title}
              </p>
              <p class="mt-6 text-lg/8 text-gray-600">
                {advantage.description}
              </p>
            </div>
          </div>
  
          <!-- Image Block: Always rendered second in the source order -->
          <div class="sm:px-6 lg:px-0">
            <div class={`relative isolate overflow-hidden ${advantage.bgColor} px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none`}>
              <div class={`absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] ${advantage.bgColorOverlay} opacity-20 ring-1 ring-white ring-inset`} aria-hidden="true"></div>
              <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  src={advantage.image}
                  alt={advantage.title}
                  width="2432"
                  height="1442"
                  class="-mb-12 w-[37rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div class="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
  