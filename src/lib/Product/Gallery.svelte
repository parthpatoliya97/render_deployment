<script>
    export let gallery;
</script>

<section class="bg-gray-50 py-10 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-base/7 font-semibold text-rose-600">{gallery.label}</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {gallery.title}
            </p>
            <p class="mt-2 text-lg/8 text-gray-600">{gallery.description}</p>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each gallery.data as image}
				<img class="w-full rounded-lg shadow-lg" src={image.src} alt={image.alt} loading="lazy" />
			{/each}
		</div>
	</div>
</section>
