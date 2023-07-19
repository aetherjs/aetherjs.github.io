<script>
  // @ts-nocheck

  export let data;
</script>

<h1 class="text-l sm:text-2xl lg:text-4xl font-bold font-karla">
  Notes from the mentally ill
</h1>
<p>Might start a blog here or smt mane idek...</p>

<ul>
  {#each data.posts as post}
    <li><a href={post.url}>{post.attributes.title}</a></li>
  {/each}
</ul>
