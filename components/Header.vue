<template>
    <nav class="flex items-center justify-between flex-wrap p-10">
        <NuxtLink to="/">
            <span class="before:inline-block after:inline-block align-middle font-bold text-2xl mr-16 before:mr-4 after:ml-4 hover:before:translate-x-2 hover:after:-translate-x-2 before:content-['{'] after:content-['}'] before:duration-300 after:duration-300 before:transition-transform after:transition-transform"> jovi.</span>
        </NuxtLink>
        <div class="lg:flex-grow">
            <span class="block mt-4 md:inline-block md:mt-0 mr-4 underline">
                <NuxtLink to="/">
                    home
                </NuxtLink>
            </span>
            <span class="block mt-4 md:inline-block md:mt-0 mr-4 underline">                
                <NuxtLink to="/now">
                    now
                </NuxtLink>
            </span>
        </div>
    </nav>
</template>