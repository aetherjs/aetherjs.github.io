<script lang="ts">
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

<div class="max-w-4xl mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Wishlist</h1>
  {#each Object.entries(groupedItems) as [category, items]}
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">{category}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each items as item}
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <h3 class="text-xl font-medium mb-2">{item.name}</h3>
            {#if item.description}
              <p class="text-gray-600 dark:text-gray-400 mb-3">
                {item.description}
              </p>
            {/if}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-500 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Item
            </a>
            {#if item.price}
              <p class="text-gray-600 dark:text-gray-400 mt-2">${item.price}</p>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
