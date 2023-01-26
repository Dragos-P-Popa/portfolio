<script lang="ts">
    import { draw } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    // @ts-ignore
    import * as animateScroll from "svelte-scrollto";

    let ready = false;
    let active = false;
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


<div class="sticky z-50 drop-shadow-lg top-0 bg-gray-900 pt-3 pb-3 mb-[10%]">
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
            <div class="rounded-md p-2 bg-inherit" style="background-color: {homeBg};">
                <a href="#home" on:click={() => animateScroll.scrollToTop()} on:click={home}>.home( )</a>
            </div>
            <div class="rounded-md p-2 bg-inherit" style="background-color: {projectsBg};">
                <a href="#projects" on:click|preventDefault={scrollIntoView} on:click={projects}>.projects( )</a>
            </div>
            <div class="rounded-md p-2 bg-inherit" style="background-color: {aboutBg};">
                <button on:click={about}>.about( )</button>
            </div>
        </div>	
    </div>
</div>
    

<div class="px-[15%]">
    <h1 class="lg:text-5xl sm:text-xl font-bold subpixel-antialiased">
        hey, i'm Dragos!
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
        an aspiring software engineer with a keen eye for design.
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

    <div class="w-[100%] h-[100%]">
        <div class="grid grid-cols-10">
            <div class="row-span-full justify-items-end col-start-1 col-span-6 self-center">
                <p class="text-sm font-light pb-1 text-emerald-600">
                    Featured project
                </p>
                <div class="drop-shadow-lg  min-w-[100%] rounded-sm bg-emerald-600 bg-opacity-50 backdrop-blur-sm w-[100%] h-[10%] mb-4 p-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <h1 class="lg:text-4xl sm:text-md max-w-fit font-bold ">
                        2Sway iOS application
                    </h1>
                </div>
                <p class="text-md font-medium pb-1 w-[70%]">
                    Developed 2Sway, an iOS app as the sole technical founder of a university startup. Led the development and designed the user experience.
                </p>
            </div>
            <div class="row-span-full col-span-6 col-end-11 self-center p-4 ">
                <img class="hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 object-cover rounded-lg" src="https://images.unsplash.com/photo-1610212411735-e68d49920025?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="">
            </div>
        </div>
    </div>

    <div class="pt-8 w-[100%] h-[100%]">
        <div class="grid grid-cols-10 justify-items-end">
            <div class="row-span-full col-start-1 col-span-6 self-center">
                <img class="hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 object-cover rounded-lg" src="https://images.unsplash.com/photo-1610212411735-e68d49920025?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="">
            </div>
            <div class="row-span-full col-span-6 col-end-11 self-center p-4 ">
                <p class="text-sm font-light pb-1 text-emerald-600  min-w-[100%] text-right">
                    Featured project
                </p>
                <div class="drop-shadow-lg min-w-[100%] rounded-sm bg-emerald-600 bg-opacity-50 backdrop-blur-sm w-[100%] h-[10%] mb-4 p-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    <h1 class="lg:text-4xl sm:text-md font-bold">
                        VH-Net Laravel WebApp
                    </h1>
                </div>
                <p class="text-md font-medium pb-1 pl-[35%]">
                    Developed 2Sway, an iOS app as the sole technical founder of a university startup. Led the development and designed the user experience.
                </p>
            </div>
        </div>
    </div>


    
</div>

<style lang="postcss">
:global(html) {
    background-color: #111827;
}
</style>