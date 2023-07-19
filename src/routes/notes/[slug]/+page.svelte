<script>
  // @ts-nocheck

  export let data;

  import { onMount } from "svelte";
  import Icon from "svelte-icons-pack/vsc/VscLinkExternal";

  function addIcons(node) {
    onMount(() => {
      const links = node.querySelectorAll("a");
      links.forEach((link) => {
        const icon = new Icon({
          target: link.parentNode,
          anchor: link,
          props: {
            src: AiOutlineNodeExpand,
            className:
              "transition-all duration-200 group-hover:text-violet-500 group-hover:-translate-y-1",
          },
        });
      });
    });

    return {
      // Optionally, destroy the icons when the component is unmounted
      destroy() {
        //...
      },
    };
  }
</script>

<div use:addIcons>{@html data.substring}</div>
