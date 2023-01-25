<script lang="ts">
    import { draw } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    // @ts-ignore
    import * as animateScroll from "svelte-scrollto";

    let ready = false;
    let active = false;
    let y: number;
    let src = "wave-animated.png";
    onMount(() => ready = true);

    let aboutBg: String, projectsBg: String, homeBg: String = "#0f172a";
    homeBg = "#374151";

    function about() {
        projectsBg = "#0f172a";
		aboutBg = "#374151";
        homeBg = "#0f172a";
	}
    function projects() {
		projectsBg = "#374151";
        aboutBg = "#0f172a";
        homeBg = "#0f172a";
	}
    function home() {
        projectsBg = "#0f172a";
        aboutBg = "#0f172a";
		homeBg = "#374151";
	}

    // @ts-ignore
    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
        el.scrollIntoView({
        behavior: 'smooth'
        });
    }
</script>


<div class="sticky drop-shadow-lg top-0 bg-gray-900 pt-3 pb-3 mb-[10%]">
    <div class="mx-[15%] flex flex-row">
        <div class="basis-1/2 justify-self-start items-center">
            <div class="max-w-fit rounded-md p-2 drop-shadow-lg" style="background-color: #374151;">
                <img alt="" class="pl-1" width="40" height="40" class:active on:mouseenter={() => {
                    src = "wave-animated.gif";
                    setTimeout(
                        function() {
                            src = "wave-animated.png";  
                    }, 870);
                }}
                on:mouseleave={() => {
                    src = "wave-animated.png";
                }} id="wave" src={src}/>
            </div>
        </div>
        <div class="basis-1/2 grid grid-cols-3 justify-self-end justify-items-center items-center">
            <div class="rounded-md p-2 bg-inherit transition ease-in-out duration-300" style="background-color: {homeBg};">
                <a href="#home" on:click={() => animateScroll.scrollToTop()} on:click={home}>.home()</a>
            </div>
            <div class="rounded-md p-2 bg-inherit hover:bg-gray-600 transition ease-in-out duration-300" style="background-color: {projectsBg};">
                <a href="#projects" on:click|preventDefault={scrollIntoView} on:click={projects}>.projects()</a>
            </div>
            <div class="rounded-md p-2 bg-inherit hover:bg-gray-600 transition ease-in-out duration-300" style="background-color: {aboutBg};">
                <button on:click={about}>.about()</button>
            </div>
        </div>	
    </div>
</div>
    

<div class="px-[15%]">
    <h1 class="lg:text-5xl sm:text-xl font-bold">
        lorem ipsum
    </h1>
    <svg viewBox="0 0.09 5 0.25" xmlns="http://www.w3.org/2000/svg">
        {#if ready}
            <path transition:draw="{{duration: 2000, easing: quintOut}}"
            d="M 0,0.21 L 1.55,0.11 L 1.4,0.2 L 3,0.1"
            fill="none"
            stroke-linecap="round" 
            stroke-linejoin="round"
            stroke="#059669"
            stroke-width="0.0175px" />
        {/if}
    </svg>
    <p class="lg:text-3xl sm:text-sm font-light">
        neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
    </p>

    <div class="pt-10 flex items-center justify-start">
        <div>
            <img alt="" src="book-square.svg" width="40" height="40" />
        </div>
        <div>
            <p class="pl-4">MEng, BSc Computer Science @ University of Leeds</p>
        </div>
    </div>

    <div class="pt-2 flex items-center justify-start">
        <div>
            <img alt="" src="direct-inbox.svg" width="40" height="40" />
        </div>
        <div>
            <p class="pl-4">ed20dpp @ leeds.ac.uk</p>
        </div>
    </div>
    
    <h1 id="projects" class="lg:text-4xl sm:text-xl font-bold pt-24 pb-10">
        .projects( )
    </h1>

</div>

<style lang="postcss">
:global(html) {
    background-color: #111827;
}
</style>

<svelte:window bind:scrollY={y} />