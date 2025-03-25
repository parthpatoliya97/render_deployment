<script>
  export let logos;
</script>

<div class="bg-gray-900 py-6 sm:py-8 overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg/8 font-semibold text-white">
      {logos.title} 
    </h2>
    <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">{logos.description}</p>
    <!-- The slider container: Using flex with no-wrap ensures all logos are in one horizontal row -->
    <div class="relative mt-10">
      <div class="flex items-center gap-x-8 whitespace-nowrap animate-marquee">
        <!-- Render the logos once -->
        {#each logos.images as logo}
          <img 
            src={logo.src} 
            alt={logo.alt} 
            class="max-h-12 object-contain" 
            width="158" 
            height="48" 
            loading="lazy" 
          />
        {/each}
      </div>
    </div>
  </div>
</div>
