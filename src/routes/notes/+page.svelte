<script>
  // @ts-nocheck

  export let data;
</script>

<h1 class="text-l sm:text-2xl lg:text-4xl font-bold font-karla">
  Notes from the mentally ill
</h1>
<p>Might start a blog here or smt mane idek...</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each data.posts as post}
    <a
      href={post.url}
      target={post.url.startsWith("notes/") ? "" : "_blank"}
      class="block bg-white dark:bg-gray-800 rounded-lg shadow p-6"
    >
      <div class="font-bold text-xl mb-2">{post.attributes.title}</div>
      <p class="text-gray-700 dark:text-gray-300">
        {post.attributes.description}
      </p>
    </a>
  {/each}
</div>
