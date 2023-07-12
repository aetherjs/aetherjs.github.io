<script>
  import "../app.postcss";
  import { onMount } from "svelte";

  let themeButtonEmoji = "🌝";
  let isDark = localStorage.getItem("aetherdarktheme") === "true" ?? false;
  if (isDark) {
    document.documentElement.classList.add("dark");
    themeButtonEmoji = "🌞";
  }

  const toggleTheme = () => {
    isDark = !isDark;
    if (isDark) {
      localStorage.setItem("aetherdarktheme", "true");
      document.documentElement.classList.add("dark");
      themeButtonEmoji = "🌞";
    } else {
      localStorage.setItem("aetherdarktheme", "false");
      document.documentElement.classList.remove("dark");
      themeButtonEmoji = "🌝";
    }
  };
</script>

<header
  class="sticky top-0 z-50 py-2 bg-white dark:bg-black drop-shadow-lg transition-colors duration-500 ease-in-out"
>
  <nav class="flex justify-between m-3">
    <div class="flex gap-0">
      <a
        href="/"
        class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
        >Home</a
      >
      <a
        href="/honours"
        class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
        >Honours</a
      >
      <a
        href="/notes"
        class="mx-2 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
        >Notes</a
      >
      <!-- <a
      href="/lab"
      class="mx-4 text-xl sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
      >Lab</a
    > -->
    </div>
    <button
      on:click={toggleTheme}
      class="mx-2 text-l sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white"
      >{themeButtonEmoji}</button
    >
  </nav>
</header>

<div class="grid grid-cols-1 gap-8 p-4 sm:p-8 lg:p-20">
  <slot />
</div>
