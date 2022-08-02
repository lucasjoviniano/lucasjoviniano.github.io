<template>
    <div class="min-h-screen">
        <Header/>
        <main>
            <article class="lg:pt-20 pt-10 relative flex items-start lg:space-x-10 px-[5%] lg:px-[10%] pb-10">
                <ClientOnly>
                    <ContentRenderer
						class="prose lg:prose-base prose-sm prose-slate pr-7 max-w-none"
						:value="data"
					>
						<template #empty>
							<p>No content found.</p>
						</template>
					</ContentRenderer>
                </ClientOnly>
            </article>
        </main>
    </div>
</template>

<script setup>
    const data = await queryContent().where({ title: "Now" }).findOne()
</script>