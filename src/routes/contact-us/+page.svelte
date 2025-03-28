<script>
	import ContactUs from "$lib/Home/ContactUs.svelte"; 

	export let data 
	const {contactUs}=data


</script>

<ContactUs {contactUs}/>