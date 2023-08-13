<script>
  export let startCount = 0;

  let count = startCount;
</script>

<div>
  <h4>Svelte Island</h4>
  <p>counter: {count}</p>
  <button
    on:click={() => {
      count = count + 1;
    }}>Increase counter</button
  >
</div>
