
export default function Home() {
    return (
    <div>
        <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#332447] py-2 shadow-lg focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
            <a
            className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
            href="#">
            <img
            className="mr-4 h-[40px] rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg"
            alt="TE Logo"
            loading="lazy" />
            <span className="text-3xl font-semibold dark:text-neutral-200 mr-4"
            >Home
            </span>
            </a>
            <button
            className="block border-0 bg-transparent px-2 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent3"
            aria-controls="navbarSupportedContent3"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="[&>svg]:w-7">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
            </span>
            </button>
            <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item>
            <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                data-te-navbar-nav-ref>
                <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref>
                <a
                    className="p-0 transition duration-200 hover:text-neutral-700 
                                hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 
                                motion-reduce:transition-none dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 
                                [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/home"
                    data-te-nav-link-ref
                    >Home
                    </a>
                </li>
                <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref>
                <a
                    className="p-0 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/skills"
                    data-te-nav-link-ref
                    >Skills
                    </a>
                </li>
                <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref>
                <a
                    className="p-0 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/projects"
                    data-te-nav-link-ref
                    >Projects
                    </a>
                </li>
                <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref>
                <a
                    className="p-0 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/involvements"
                    data-te-nav-link-ref
                    >Involvements
                    </a>
                </li>
            </ul>
            <span className="ml-2 mr-4">
                Xavier Genio
            </span>
            </div>
        </div>
        </nav>
        <div className="mx-[10vw] my-4 flex flex-col bg-[#2c292f] rounded-3xl border-2 border-purple-200">
            <section>
                <h1 className="rounded-xl border-dashed border-front border-[#493562] border-4 p-2 text-5xl text-center mx-16 my-6 font-semibold">Xavier Genio</h1>
            </section>
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <section className="p-9">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg" className="rounded-full"/>
                    </section>
                </div>
                <div className="basis-2/3">
                    <section className="text-4xl p-2 mx-4 my-2 bg-[#332447] border-dashed border-4 border-[#493562] rounded-3xl">
                        <h1 className="mx-4 my-2 font-semibold text-centered font-[#F5AE52]">
                            About Me{" "}
                        </h1>
                        {/* <span className="font-mono mx-8 text-xl">
                            Hello world!
                        </span> */}
                    </section>
                    <section className="mx-6 my-4 text-xl">
                        <p>
                            Something more about me: I can't choose a color palette nor find a pic of me :(
                        </p>
                        <p className="mt-5">
                            ahhhhhh
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>
    
    )

}