<script>
	let count = 0;
	
	function handleClick() {
		count += 2;
	}
</script>

<button on:click={handleClick}>
	clicks: {count}
</button>