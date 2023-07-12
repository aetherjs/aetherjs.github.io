<script>
  import "../app.postcss";
</script>

<header class="sticky top-0 z-50 bg-white py-2">
  <nav class="flex justify-center m-3">
    <a href="/" class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold ">Home</a>
    <a href="/honours" class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold">Honours</a>
    <a href="/notes" class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold">Notes</a>
    <a href="/lab" class="mx-4 text-xl sm:text-3xl lg:text-5xl  font-basteleur font-semibold">Lab</a>
  </nav>
</header>


<div class="pt-6 px-4">
  <slot />
</div>
