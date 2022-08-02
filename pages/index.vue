<template>
  <div class="min-h-screen">
    <Header/>
    <main>
      <section class="lg:px-[15%] px-[5%] pt-20">
        <h1 class="lg:text-5xl text-2xl leading-normal font-semibold text-center">
          Olá, eu sou o Lucas!
        </h1>

        <p class="pt-10 text-lg lg:text-2xl">Atualmente cursando <a href="https://www.ccp.ufv.br/?page_id=5" target="_blank" rel="noopener noreferrer">Ciência da Computação</a> na <a href="https://www.ufv.br/" target="_blank" rel="noopener noreferrer">Universidade Federal de Viçosa</a>. 
        Trabalho em projetos Open Source na <a href="https://opensourcelabufv.github.io//" target="_blank" rel="noopener noreferrer">Open Source Lab UFV</a>. Amo o que faço e amo ficar cada vez melhor no que faço.</p>
      </section>

	  <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-500"
				>
					Social
				</p>

				<nav class="flex items-center space-x-7 text-gray-600 justify-center">
					<template v-for="(n, i) in links" :key="`navLink-${i}`">
						<a :href="n.url" class="inline-block nav-link hover:text-primary group" target="_blank" rel="noopener noreferrer">
							<div class="flex items-center space-x-2">
								<Icon :icon="n.icon" class="w-4 h-4" />
								<span class="font-medium"> {{ n.name }}</span>
							</div>
							<div
								class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"
							></div>
						</a>
					</template>
				</nav>
	  </section>
      
      <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14 pb-10">
				<p
					class="text-center uppercase font-medium tracking-wider mb-10 text-gray-500"
				>
					Blog Posts
				</p>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<template
						v-for="(b, i) in blogNav[0].children"
						:key="`blogNavItem-${b._path}-${i}`"
					>
						<div class="px-7 py-5 rounded-lg border-2">
							<h2 class="text-lg font-semibold rainbow-text">
								{{ b.title }}
							</h2>
							<!-- Loop over files inside the content dir -->
							<ul
								v-if="b.children"
								class="list-disc list-inside mt-4 pl-2 space-y-3"
							>
								<template
									v-for="(child, k) in b.children"
									:key="`childNav-${child._path}-${k}-${i}`"
								>
									<li
										class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
									>
										<NuxtLink :to="`/blog${child._path}`">
											{{ child.title }}
										</NuxtLink>
									</li>
								</template>
							</ul>
							<ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
								<li
									class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
								>
									<NuxtLink :to="`/blog${b._path}`"> Ler Mais </NuxtLink>
								</li>
							</ul>
						</div>
					</template>
				</div>
			</section>
    </main>
  </div>
</template>

<script setup>
	import { Icon } from "@iconify/vue";

  	const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("blog"));
	});

	const links = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/lucas.joviniano/',
			icon: 'ant-design:instagram-filled'
		},
		{
			name: 'Github',
			url: 'https://github.com/lucasjoviniano',
			icon: 'akar-icons:github-fill'
		},
		{
			name: 'Letterboxd',
			url: 'https://letterboxd.com/lucasjoviniano/',
			icon: 'simple-icons:letterboxd'
		},
		{
			name: 'Last.fm',
			url: 'https://www.last.fm/user/lucasjoviniano',
			icon: 'cib:last-fm'
		}
	];
</script>

<style scoped>
a {
    @apply underline text-yellowish
}
</style>