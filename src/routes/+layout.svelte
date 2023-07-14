<script>
  import "../app.postcss";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let themeButtonEmoji = "🌝";

  let isDark = localStorage.getItem("aetherdarktheme") === "true" ?? false;
  if (isDark) {
    document.documentElement.classList.add("dark");
    themeButtonEmoji = "🌞";
  }

  let headerOpacity = 1;
  let maxHeight = 200; // Default value

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

  onMount(() => {
    // Define your media queries
    const mediaQueries = {
      small: window.matchMedia("(max-width: 640px)"),
      medium: window.matchMedia("(min-width: 641px) and (max-width: 1024px)"),
      large: window.matchMedia("(min-width: 1025px)"),
    };

    const calculateMaxHeight = () => {
      // Update maxHeight based on the screen size
      if (mediaQueries.small.matches) {
        maxHeight = 16 * 0.8;
      } else if (mediaQueries.medium.matches) {
        maxHeight = 32 * 0.8;
      } else if (mediaQueries.large.matches) {
        maxHeight = 80 * 0.8;
      }
    };

    const fadeOnScroll = () => {
      const scrollPos = window.scrollY;
      headerOpacity = Math.max(0, 1 - scrollPos / maxHeight);
    };

    // Initialize
    calculateMaxHeight();
    fadeOnScroll();

    window.addEventListener("scroll", fadeOnScroll);
    for (const mq of Object.values(mediaQueries)) {
      mq.addListener(calculateMaxHeight);
      mq.addListener(fadeOnScroll);
    }

    return () => {
      window.removeEventListener("scroll", fadeOnScroll);
      for (const mq of Object.values(mediaQueries)) {
        mq.removeListener(calculateMaxHeight);
        mq.removeListener(fadeOnScroll);
      }
    };
  });
</script>

<header
  class="sticky top-0 z-50 py-2 bg-white dark:bg-black transition-colors duration-500 ease-in-out"
  style="opacity: {headerOpacity}"
>
  <nav class="flex justify-between m-3">
    <div class="flex gap-0 sm:gap-3 lg:gap-6 flex-grow sm:justify-center">
      <a
        href="/"
        class="nav-link {$page.url.pathname === '/' ? 'underline' : ''}">Home</a
      >
      <a
        href="/work"
        class="nav-link {$page.url.pathname === '/work' ? 'underline' : ''}"
        >CV</a
      >
      <a
        href="/notes"
        class="nav-link {$page.url.pathname === '/notes' ? 'underline' : ''}"
        >Notes</a
      >
      <a
        href="/lab"
        class="nav-link {$page.url.pathname === '/lab' ? 'underline' : ''}"
        >Lab</a
      >
    </div>
    <button
      on:click={toggleTheme}
      class="mx-2 text-l sm:text-3xl lg:text-5xl font-basteleur font-semibold dark:text-white hover:blur-sm transition duration-300"
      >{themeButtonEmoji}</button
    >
  </nav>
</header>

<div
  class="mx-auto max-w-xs sm:max-w-screen-sm lg:max-w-screen-lg grid grid-cols-1 gap-8 p-4 sm:p-8 lg:p-20"
>
  <slot />
</div>
