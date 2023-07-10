<script>
  import "../app.postcss";
</script>

<header class="sticky top-0 z-50 bg-white py-2">
  <nav class="flex justify-center">
    <a href="/" class="mx-4 text-lg font-semibold text-gray-700">Home</a>
    <a href="/honours" class="mx-4 text-lg font-semibold text-gray-700">Honours</a>
    <a href="/notes" class="mx-4 text-lg font-semibold text-gray-700">Notes</a>
    <a href="/lab" class="mx-4 text-lg font-semibold text-gray-700">Lab</a>
  </nav>
</header>


<div class="pt-6 px-4">
  <slot />
</div>
