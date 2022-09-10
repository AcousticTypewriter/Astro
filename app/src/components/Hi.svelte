<script>
	let count = 0;
	
	function handleClick() {
		count += 2;
	}
    fetch('/api/lol').then(res => res.text()).then(data => {console.log(data)})
</script>

<button on:click={handleClick}>
	clicks: {count}
</button>