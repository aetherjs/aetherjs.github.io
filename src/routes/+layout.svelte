<script>
  import "../app.postcss";

  let isDark = false;
  let themeButtonEmoji = "🌝";

  const toggleTheme = () => {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
      themeButtonEmoji = "🌞";
    } else {
      document.documentElement.classList.remove("dark");
      themeButtonEmoji = "🌝";
    }
  };
</script>

<header class="sticky top-0 z-50 py-2">
  <nav class="flex justify-center m-3">
    <a
      href="/"
      class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
      >Home</a
    >
    <a
      href="/honours"
      class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
      >Honours</a
    >
    <a
      href="/notes"
      class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
      >Notes</a
    >
    <!-- <a
      href="/lab"
      class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
      >Lab</a
    > -->
    <button
      on:click={toggleTheme}
      class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
      >{themeButtonEmoji}</button
    >
  </nav>
</header>

<div class="pt-6 px-4">
  <slot />
</div>
