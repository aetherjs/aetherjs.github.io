<script>
  export let data;

  // Group items by category
  $: groupedItems = data.items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
</script>
</script>

<div class="max-w-4xl mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Wishlist</h1>

  {#each Object.entries(groupedItems) as [category, items]}
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{category}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each items as item}
          <div class="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <h3 class="text-xl font-medium">{item.name}</h3>
              {#if item.price}
                <p class="text-gray-600 mt-2">${item.price}</p>
              {/if}
            </a>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
