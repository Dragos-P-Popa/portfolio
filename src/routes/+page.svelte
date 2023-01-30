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

</script>

<div class="sticky z-50 drop-shadow-lg top-0 bg-gray-900 pt-3 pb-3 mb-[10%]">
    <div class="mx-[15%] flex flex-row">
        <div class="basis-0 md:basis-1/2 justify-self-start items-center">
            <div class="collapse md:visible max-w-fit rounded-md p-2 drop-shadow-lg" style="background-color: #374151;">
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
        <div class="md:basis-1/2 basis-full text-xs md:text-md lg:text-xl mx-[-10%] md:mx-[0%] grid grid-cols-3 justify-self-end justify-items-center items-center">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => animateScroll.scrollToTop()} class="hover:drop-shadow-lg hover:scale-110 hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-150 ease-in-out delay-100 rounded-md p-2 bg-inherit">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="" >.home( )</a>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => animateScroll.scrollTo({element: '#projects', offset: -100})} class="hover:drop-shadow-lg hover:scale-110 hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-150 ease-in-out delay-100 rounded-md p-2 bg-inherit">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="">.projects( )</a>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => animateScroll.scrollTo({element: '#about', offset: -100})} class="hover:drop-shadow-lg hover:scale-110 hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-150 ease-in-out delay-100 rounded-md p-2 bg-inherit">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="">.about( )</a>
            </div>
        </div>	
    </div>
</div>

<div class="px-[15%]">
    <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold subpixel-antialiased">
        hey, i'm Dragos!
    </h1>
    <svg viewBox="0 0.09 5 0.25" xmlns="http://www.w3.org/2000/svg">
        {#if ready}
            <path transition:draw="{{delay:500, duration: 2000, easing: quintOut}}"
            d="M 0,0.21 L 1.55,0.11 L 1.4,0.2 L 3,0.1"
            fill="none"
            stroke-linecap="round" 
            stroke-linejoin="round"
            stroke="#059669"
            stroke-width="0.0175px" />
        {/if}
    </svg>
    <p class="md:text-3xl font-light">
        an aspiring software engineer with a keen eye for design.
    </p>

    <div class="pt-10 flex items-center justify-start">
        <div class="flex-none">
            <img class="w-auto" alt="" src="book-square.svg"  />
        </div>
        <div>
            <p class="text-xs md:text-xl pl-4">MEng, BSc Computer Science @ University of Leeds</p>
        </div>
    </div>

    <div class="pt-2 flex items-center justify-start">
        <div class="flex-none">
            <img class="w-auto" alt="" src="direct-inbox.svg"  />
        </div>
        <div>
            <p class="text-xs md:text-xl pl-4">ed20dpp @ leeds.ac.uk</p>
        </div>
    </div>


    
    <h1 id="projects" class="text-xl md:text-3xl lg:text-4xl font-bold mt-[15%] pb-10">
        .projects( )
    </h1>

    <div id="pj" class="w-[100%] h-[100%]">
        <div class="grid grid-cols-10">
            <div class="row-span-full justify-items-end col-start-1 max-[600px]:col-span-10 col-span-6 self-center">
                <p class="text-sm font-light pb-1 text-emerald-600">
                    featured project
                </p>
                <a href="https://github.com/2sway/MVP-may" target="_blank" rel="noreferrer">
                    <div class="hover:underline drop-shadow-lg min-w-[100%] rounded-sm bg-emerald-600 bg-opacity-50 backdrop-blur-sm w-[100%] h-[10%] mb-4 p-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                            <h1 class="lg:text-4xl sm:text-md max-w-fit font-bold ">
                                2Sway iOS application  
                            </h1>
                    </div>
                </a>
                <p class="text-md font-medium pb-1 min-[600px]:w-[70%]">
                    developed 2Sway, an iOS app as the sole technical founder of a university startup. Led the development and designed the user experience.
                </p>
            </div>
            <div class="collapse min-[600px]:visible row-span-full col-span-6 col-end-11 self-center p-4 ">
                <img class="hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 object-cover rounded-lg" src="2sway.jpeg" alt="">
            </div>
        </div>
    </div>

    <div class="pt-8 w-[100%] h-[100%]">
        <div class="grid grid-cols-10 justify-items-end">
            <div class="row-span-full max-[600px]:col-span-0 col-start-1 col-span-6 self-center">
                <img class="collapse min-[600px]:visible hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 object-cover rounded-lg" src="vhnet.jpeg" alt="">
            </div>
            <div class="row-span-full  max-[600px]:col-start-1 col-span-6 col-end-11 self-center min-[600px]:p-4">
                <p class="text-sm font-light pb-1 text-emerald-600  min-w-[100%] min-[600px]:text-right">
                    featured project
                </p>
                <a href="https://github.com/Dragos-P-Popa/VirtualHubWeb" target="_blank" rel="noreferrer">
                    <div class="hover:underline drop-shadow-lg min-w-[100%] rounded-sm bg-emerald-600 bg-opacity-50 backdrop-blur-sm w-[100%] h-[10%] mb-4 p-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <h1 class="lg:text-4xl sm:text-md font-bold">
                            VH-Net WebApp - Laravel
                        </h1>
                    </div>
                </a>
                <p class="text-md font-medium pb-1 min-[600px]:pl-[35%]">
                    developed 2Sway, an iOS app as the sole technical founder of a university startup. Led the development and designed the user experience.
                </p>
            </div>
        </div>
    </div>

    
    <h1 id="other" class="text-xl md:text-2xl font-bold pt-16 pb-10 text-center min-w-[100%]">
        other noteworthy projects
    </h1>


    <div class="grid grid-rows-2 gap-3 justify-items-center">
        
        <a href="https://github.com/Dragos-P-Popa/Flask-todo-website" target="_blank" rel="noreferrer" class="min-w-[100%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition transform hover:-translate-y-1 hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">To-do WebApp - Flask</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">A simple to-do webapp built using Flask with a clean and minimalistic design.</p>
            </div>
        </a>

        <a href="https://github.com/Dragos-P-Popa/portfolio" target="_blank" rel="noreferrer" class="min-w-[100%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition transform hover:-translate-y-1 hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Portfolio Website - Svelte</h5>
                <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">This portoflio website was built from scratch using Svelte and TailwindCSS.</p>
            </div>
        </a>

    </div>

    <h1 id="about" class="text-xl md:text-3xl lg:text-4xl font-bold mt-[10%] pb-10 ">
        .about( )
    </h1>

    <div class="grid grid-cols-4 gap-6">
        <div class="grid grid-cols-4 justify-items-start items-center col-span-4 min-[800px]:col-span-3 min-[600px]:row-span-2">
            <div class="col-span-1">
                <img class="rounded-full hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 " src="dragos.jpeg" alt="">
            </div>
            <div class="ml-10 col-span-3">
                <h1 class="lg:text-3xl sm:text-xl font-bold mt-[10%] pb-2">
                    Dragos Popa
                </h1>
                <p class="lg:text-md pb-10">
                    2nd year Computer Science student
                </p>                    
            </div>
            <div class="whitespace-pre row-span-3 col-span-4 pt-6 whitespace-pre-line">
                Hi! I'm a driven and enthusiastic student currently studying Computer Science at the University of Leeds. I have a strong interest in mobile and web development and actively seek out opportunities to apply my knowledge and skills in real-world settings.
                
                In my free time, I enjoy involving myself in interesting projects and startups around my community. I'm always looking for new challenges and experiences to expand my knowledge and skill set, and I'm eager to see where my studies and passions will take me in the future.
            </div>
        </div>
        <div class="col-span-4 hidden min-[800px]:col-span-1 min-[800px]:block items-center ">
            <div class="border border-2 border-emerald-800 p-5 rounded-md">
                <div class="flex items-center justify-start">
                    <div>
                        <img alt="" src="github.svg" width="40" height="40" />
                    </div>
                    <div>
                        <a href="https://github.com/Dragos-P-Popa" target="_blank" rel="noreferrer" class="hover:underline pl-4 text-xs lg:text-md">Dragos-P-Popa</a>
                    </div>
                </div>
                
                <div class="pt-2 flex items-center justify-start">
                    <div>
                        <img alt="" src="linkedin.svg" width="40" height="40" />
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/dragosppopa/" target="_blank" rel="noreferrer" class="hover:underline text-xs lg:text-md pl-4">Dragos Popa</a>
                    </div>
                </div>

                <div class="pt-2 flex items-center justify-start">
                    <div>
                        <img alt="" src="resume.svg" width="40" height="40" />
                    </div>
                    <div>
                        <a href="https://pdfhost.io/v/g4tJn4n1H_Resume_2022_SWE" target="_blank" rel="noreferrer" class="hover:underline text-xs lg:text-md pl-4">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="border border-2 border-emerald-800 p-5 mt-12 rounded-md min-[800px]:hidden mb-[20%]">
        <div class="flex items-center justify-start text-center">
            <div>
                <img alt="" src="github.svg" width="40" height="40" />
            </div>
            <div>
                <a href="https://github.com/Dragos-P-Popa" target="_blank" rel="noreferrer" class="hover:underline pl-4 text-xs lg:text-md">Dragos-P-Popa</a>
            </div>
        </div>
        
        <div class="pt-2 flex items-center justify-start">
            <div>
                <img alt="" src="linkedin.svg" width="40" height="40" />
            </div>
            <div>
                <a href="https://www.linkedin.com/in/dragosppopa/" target="_blank" rel="noreferrer" class="hover:underline text-xs lg:text-md pl-4">Dragos Popa</a>
            </div>
        </div>

        <div class="pt-2 flex items-center justify-start">
            <div>
                <img alt="" src="resume.svg" width="40" height="40" />
            </div>
            <div>
                <a href="https://pdfhost.io/v/g4tJn4n1H_Resume_2022_SWE" target="_blank" rel="noreferrer" class="hover:underline text-xs lg:text-md pl-4">Resume</a>
            </div>
        </div>
    </div>

</div>

<hr class="h-px mt-[10%] bg-gray-200 border-0 dark:bg-gray-700">
<footer>
    <div class="grid items-center justify-items-center">
        <p class="my-6">Made with &#10084; by Dragos Popa</p>
    </div>
</footer>

<style lang="postcss">
:global(html) {
    background-color: #111827;
}
</style>

<svelte:window bind:scrollY={y}/>
