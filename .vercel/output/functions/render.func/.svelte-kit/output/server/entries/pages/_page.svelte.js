import { c as create_ssr_component, d as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#111827}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let src = "wave-animated.png";
  $$result.css.add(css);
  return `<div class="${"sticky z-50 drop-shadow-lg top-0 bg-gray-900 pt-3 pb-3 mb-[10%]"}"><div class="${"mx-[15%] flex flex-row"}"><div class="${"basis-0 md:basis-1/2 justify-self-start items-center"}"><div class="${"collapse md:visible max-w-fit rounded-md p-2 drop-shadow-lg"}" style="${"background-color: #374151;"}"><img alt="${""}" class="${["pl-1", ""].join(" ").trim()}" width="${"40"}" height="${"40"}" id="${"wave"}"${add_attribute("src", src, 0)}></div></div>
        <div class="${"md:basis-1/2 basis-full text-xs md:text-md lg:text-xl mx-[-10%] md:mx-[0%] grid grid-cols-3 justify-self-end justify-items-center items-center"}">
            <div class="${"hover:drop-shadow-lg hover:scale-110 hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-150 ease-in-out delay-100 rounded-md p-2 bg-inherit"}">
                <a href="${""}">.home( )</a></div>
            
            <div class="${"hover:drop-shadow-lg hover:scale-110 hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-150 ease-in-out delay-100 rounded-md p-2 bg-inherit"}">
                <a href="${""}">.projects( )</a></div>
            
            <div class="${"hover:drop-shadow-lg hover:scale-110 hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-150 ease-in-out delay-100 rounded-md p-2 bg-inherit"}">
                <a href="${""}">.about( )</a></div></div></div></div>

<div class="${"px-[15%]"}"><h1 class="${"text-2xl md:text-4xl lg:text-5xl font-bold subpixel-antialiased"}">hey, i&#39;m Dragos!
    </h1>
    <svg viewBox="${"0 0.09 5 0.25"}" xmlns="${"http://www.w3.org/2000/svg"}">${``}</svg>
    <p class="${"md:text-3xl font-light"}">an aspiring software engineer with a keen eye for design.
    </p>

    <div class="${"pt-10 flex items-center justify-start"}"><div class="${"flex-none"}"><img class="${"w-auto"}" alt="${""}" src="${"book-square.svg"}"></div>
        <div><p class="${"text-xs md:text-xl pl-4"}">MEng, BSc Computer Science @ University of Leeds</p></div></div>

    <div class="${"pt-2 flex items-center justify-start"}"><div class="${"flex-none"}"><img class="${"w-auto"}" alt="${""}" src="${"direct-inbox.svg"}"></div>
        <div><p class="${"text-xs md:text-xl pl-4"}">ed20dpp @ leeds.ac.uk</p></div></div>


    
    <h1 id="${"projects"}" class="${"text-xl md:text-3xl lg:text-4xl font-bold mt-[15%] pb-10"}">.projects( )
    </h1>

    <div id="${"pj"}" class="${"w-[100%] h-[100%]"}"><div class="${"grid grid-cols-10"}"><div class="${"row-span-full justify-items-end col-start-1 max-[600px]:col-span-10 col-span-6 self-center"}"><p class="${"text-sm font-light pb-1 text-emerald-600"}">featured project
                </p>
                <a href="${"https://github.com/Dragos-P-Popa/2sway"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"hover:underline drop-shadow-lg min-w-[100%] rounded-sm bg-emerald-600 bg-opacity-50 backdrop-blur-sm w-[100%] h-[10%] mb-4 p-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"}"><h1 class="${"lg:text-4xl sm:text-md max-w-fit font-bold "}">2Sway iOS application  
                            </h1></div></a>
                <p class="${"text-md font-medium pb-1 min-[600px]:w-[70%]"}">developed 2Sway, an iOS app as the sole technical founder of a university startup. Led the development and designed the user experience.
                </p></div>
            <div class="${"hidden min-[600px]:block row-span-full col-span-6 col-end-11 self-center p-4 "}"><img class="${"hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 object-cover rounded-lg"}" src="${"2sway.webp"}" alt="${""}"></div></div></div>

    <div class="${"pt-8 w-[100%] h-[100%]"}"><div class="${"grid grid-cols-10 justify-items-end"}"><div class="${"row-span-full max-[600px]:col-span-0 col-start-1 col-span-6 self-center"}"><img class="${"hidden min-[600px]:block hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 object-cover rounded-lg"}" src="${"vhnet.webp"}" alt="${""}"></div>
            <div class="${"row-span-full max-[600px]:col-start-1 col-span-6 col-end-11 self-center min-[600px]:p-4"}"><p class="${"text-sm font-light pb-1 text-emerald-600 min-w-[100%] min-[600px]:text-right"}">featured project
                </p>
                <a href="${"https://github.com/Dragos-P-Popa/VirtualHubWeb"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"hover:underline drop-shadow-lg min-w-[100%] rounded-sm bg-emerald-600 bg-opacity-50 backdrop-blur-sm w-[100%] h-[10%] mb-4 p-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"}"><h1 class="${"lg:text-4xl sm:text-md font-bold"}">VH-Net WebApp - Laravel
                        </h1></div></a>
                <p class="${"text-md font-medium pb-1 min-[600px]:pl-[35%]"}">as a solo project, I developed VH-Net, a webapp built using Laravel framework. The website leverages various API&#39;s to gather data such as weather information, files, and map geolocation information.
                </p></div></div></div>

    
    <h1 id="${"other"}" class="${"text-xl md:text-2xl font-bold pt-16 pb-10 text-center min-w-[100%]"}">other noteworthy projects
    </h1>


    <div class="${"grid grid-rows-2 gap-3 justify-items-center"}"><a href="${"https://github.com/Dragos-P-Popa/Flask-todo-website"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"min-w-[100%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition transform hover:-translate-y-1 hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none"}"><div class="${"flex flex-col justify-between p-4 leading-normal"}"><h5 class="${"mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"}">To-do WebApp - Flask</h5>
                <p class="${"mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"}">A simple to-do webapp built using Flask with a clean and minimalistic design.</p></div></a>

        <a href="${"https://github.com/Dragos-P-Popa/portfolio"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"min-w-[100%] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition transform hover:-translate-y-1 hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none"}"><div class="${"flex flex-col justify-between p-4 leading-normal"}"><h5 class="${"mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"}">Portfolio Website - Svelte</h5>
                <p class="${"mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"}">This portoflio website was built from scratch using Svelte and TailwindCSS.</p></div></a></div>

    <h1 id="${"about"}" class="${"text-xl md:text-3xl lg:text-4xl font-bold mt-[10%] pb-10 "}">.about( )
    </h1>

    <div class="${"grid grid-cols-4 gap-6"}"><div class="${"grid grid-cols-4 justify-items-start items-center col-span-4 min-[800px]:col-span-3 min-[600px]:row-span-2"}"><div class="${"col-span-1"}"><img class="${"rounded-full hover:border-solid hover:border-2 hover:border-emerald-600 border-solid border-2 border-transparent transition duration-300 ease-in-out delay-150 "}" src="${"dragos.webp"}" alt="${""}"></div>
            <div class="${"ml-10 col-span-3"}"><h1 class="${"lg:text-3xl sm:text-xl font-bold mt-[10%] pb-2"}">Dragos Popa
                </h1>
                <p class="${"lg:text-md pb-10"}">2nd year Computer Science student
                </p></div>
            <div class="${"whitespace-pre row-span-3 col-span-4 pt-6 whitespace-pre-line"}">Hi! I&#39;m a driven and enthusiastic student currently studying Computer Science at the University of Leeds. I have a strong interest in mobile and web development and actively seek out opportunities to apply my knowledge and skills in real-world settings.
                
                In my free time, I enjoy involving myself in interesting projects and startups around my community. I&#39;m always looking for new challenges and experiences to expand my knowledge and skill set, and I&#39;m eager to see where my studies and passions will take me in the future.
            </div></div>
        <div class="${"col-span-4 hidden min-[800px]:col-span-1 min-[800px]:block items-center "}"><div class="${"border border-2 border-emerald-800 p-5 rounded-md"}"><div class="${"flex items-center justify-start"}"><div><img alt="${""}" src="${"github.svg"}" width="${"40"}" height="${"40"}"></div>
                    <div><a href="${"https://github.com/Dragos-P-Popa"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"hover:underline pl-4 text-xs lg:text-md"}">Dragos-P-Popa</a></div></div>
                
                <div class="${"pt-2 flex items-center justify-start"}"><div><img alt="${""}" src="${"linkedin.svg"}" width="${"40"}" height="${"40"}"></div>
                    <div><a href="${"https://www.linkedin.com/in/dragosppopa/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"hover:underline text-xs lg:text-md pl-4"}">Dragos Popa</a></div></div>

                <div class="${"pt-2 flex items-center justify-start"}"><div><img alt="${""}" src="${"resume.svg"}" width="${"40"}" height="${"40"}"></div>
                    <div><a href="${"https://pdfhost.io/v/g4tJn4n1H_Resume_2022_SWE"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"hover:underline text-xs lg:text-md pl-4"}">Resume</a></div></div></div></div></div>

    <div class="${"border border-2 border-emerald-800 p-5 mt-12 rounded-md min-[800px]:hidden mb-[20%]"}"><div class="${"flex items-center justify-start text-center"}"><div><img alt="${""}" src="${"github.svg"}" width="${"40"}" height="${"40"}"></div>
            <div><a href="${"https://github.com/Dragos-P-Popa"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"hover:underline pl-4 text-xs lg:text-md"}">Dragos-P-Popa</a></div></div>
        
        <div class="${"pt-2 flex items-center justify-start"}"><div><img alt="${""}" src="${"linkedin.svg"}" width="${"40"}" height="${"40"}"></div>
            <div><a href="${"https://www.linkedin.com/in/dragosppopa/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"hover:underline text-xs lg:text-md pl-4"}">Dragos Popa</a></div></div>

        <div class="${"pt-2 flex items-center justify-start"}"><div><img alt="${""}" src="${"resume.svg"}" width="${"40"}" height="${"40"}"></div>
            <div><a href="${"https://pdfhost.io/v/g4tJn4n1H_Resume_2022_SWE"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"hover:underline text-xs lg:text-md pl-4"}">Resume</a></div></div></div></div>

<hr class="${"h-px mt-[10%] bg-gray-200 border-0 dark:bg-gray-700"}">
<footer><div class="${"grid items-center justify-items-center"}"><p class="${"my-6"}">Made with ❤ by Dragos Popa</p></div></footer>



`;
});
export {
  Page as default
};
