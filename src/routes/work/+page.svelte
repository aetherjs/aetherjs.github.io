<script>
  import Icon from "svelte-icons-pack/Icon.svelte";
  import VscLinkExternal from "svelte-icons-pack/vsc/VscLinkExternal";

  const testData = [
    {
      heading: "Zühlke Group",
      dates: "2022 - Present",
      description:
        "Mostly frontend development in an international IT group, specialising in React.js. AWS Certified Cloud Practitioner. Research for the Blockchain topic group. Based in Frankfurt am Main, Germany. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin placerat augue. Donec purus lectus, vehicula sit amet vehicula ut, vulputate eget dolor. Fusce in suscipit est, at ullamcorper ex. Aenean laoreet fringilla bibendum. Sed mattis blandit vehicula. Morbi tempor rhoncus ligula, et mattis purus ornare et. Pellentesque sagittis arcu id varius vehicula. Morbi congue consequat elit sit amet hendrerit. Quisque molestie mi vel leo sollicitudin laoreet. Morbi tortor leo, posuere quis rutrum non, pellentesque id massa. Aliquam nec dolor faucibus, dictum quam ac, laoreet ante. Integer sed arcu aliquam nisi pharetra tempus in placerat felis. Donec porttitor ante nunc, in ullamcorper nibh semper ac.",
    },
    {
      heading: "Soulbonds.xyz",
      dates: "October 2021 - August 2022",
      description:
        "Working on the fullstack DApp - in a small, self-managed team of two developed frontend (React.js, Ethers.js), backend API (Node.js), and a unique EVM Smart Contract (Solidity, Hardhat.js, Foundry). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin placerat augue. Donec purus lectus, vehicula sit amet vehicula ut, vulputate eget dolor. Fusce in suscipit est, at ullamcorper ex. Aenean laoreet fringilla bibendum. Sed mattis blandit vehicula. Morbi tempor rhoncus ligula, et mattis purus ornare et. Pellentesque sagittis arcu id varius vehicula. Morbi congue consequat elit sit amet hendrerit. Quisque molestie mi vel leo sollicitudin laoreet. Morbi tortor leo, posuere quis rutrum non, pellentesque id massa. Aliquam nec dolor faucibus, dictum quam ac, laoreet ante. Integer sed arcu aliquam nisi pharetra tempus in placerat felis. Donec porttitor ante nunc, in ullamcorper nibh semper ac.",
      link: { name: "soulbonds.xyz", url: "https://www.soulbonds.xyz/" },
    },
    {
      heading: "Jetbrains Research",
      dates: "Summer 2020",
      description:
        "A research project in the R&D unit of the dev tools colossus. Under the supervision developed a code dependency extraction tool, and studied how the obtained data can be user to streamline code review processes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin placerat augue. Donec purus lectus, vehicula sit amet vehicula ut, vulputate eget dolor. Fusce in suscipit est, at ullamcorper ex. Aenean laoreet fringilla bibendum. Sed mattis blandit vehicula. Morbi tempor rhoncus ligula, et mattis purus ornare et. Pellentesque sagittis arcu id varius vehicula. Morbi congue consequat elit sit amet hendrerit. Quisque molestie mi vel leo sollicitudin laoreet. Morbi tortor leo, posuere quis rutrum non, pellentesque id massa. Aliquam nec dolor faucibus, dictum quam ac, laoreet ante. Integer sed arcu aliquam nisi pharetra tempus in placerat felis. Donec porttitor ante nunc, in ullamcorper nibh semper ac.",
      link: {
        name: "Research preprint",
        url: "https://arxiv.org/abs/2104.09473",
      },
    },
  ];
</script>

<h1 class="text-l sm:text-2xl lg:text-4xl font-bold font-basteleur">
  Work Lore:
</h1>

{#each testData as episode, index (episode.heading)}
  <div class="">
    <h2 class="text-m sm:text-l lg:text-2xl font-basteleur">
      {episode.heading}
    </h2>
    <h3 class="font-bold">{episode.dates}</h3>
    <p class="my-3">{episode.description}</p>
    {#if episode.link}
      <div class="group inline-flex items-center space-x-2">
        <Icon
          src={VscLinkExternal}
          className="transition-all duration-200 group-hover:text-violet-500 group-hover:-translate-y-1"
        />
        <a
          class="mt-[-5px] underline transition-all duration-200 group-hover:text-violet-500 group-hover:-translate-y-1 visited:text-gray-400"
          href={episode.link.url}
        >
          {episode.link.name}
        </a>
      </div>
    {/if}
    {#if index !== testData.length - 1}
      <div class="mt-5 ml-10 h-20 border-l border-black dark:border-white" />
    {/if}
  </div>
{/each}

<p>
  Nullam eu consectetur sapien, euismod porta tortor. Pellentesque condimentum
  vel nunc non efficitur. Nunc sit amet dolor congue, sodales metus quis,
  scelerisque orci. Nam tristique dapibus orci vitae molestie. Nulla mollis non
  ex non consectetur. Donec at eleifend ante, et pellentesque elit. In fringilla
  lectus ac nibh consectetur rhoncus. Duis lobortis id eros et posuere. Integer
  finibus erat metus. Etiam pharetra, leo ac pulvinar tristique, turpis enim
  lobortis diam, at porttitor ex odio vitae dolor.
</p>

<h1 class="text-l sm:text-2xl lg:text-4xl font-bold font-basteleur">
  Education
</h1>

<p>
  Nullam eu consectetur sapien, euismod porta tortor. Pellentesque condimentum
  vel nunc non efficitur. Nunc sit amet dolor congue, sodales metus quis,
  scelerisque orci. Nam tristique dapibus orci vitae molestie. Nulla mollis non
  ex non consectetur. Donec at eleifend ante, et pellentesque elit. In fringilla
  lectus ac nibh consectetur rhoncus. Duis lobortis id eros et posuere. Integer
  finibus erat metus. Etiam pharetra, leo ac pulvinar tristique, turpis enim
  lobortis diam, at porttitor ex odio vitae dolor.
</p>
