<template>
  <div class="min-h-screen">
    <Header/>
    <main>
      <section class="lg:px-[15%] px-[5%] pt-20">
        <h1 class="lg:text-5xl text-2xl leading-normal font-semibold text-center">
          Olá, eu sou o Lucas!
        </h1>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:justify-items-center">
        <section class="lg:pt-20 px-10 pt-8">
          <h1 class="mb-4 text-2xl font-black lg:text-4xl">
            Meus Interesses/Inspirações
          </h1>
          <ul class="text-lg list-disc list-inside">
            <li>
              <a
                href="https://ose-21.org/"
                class="underline"
                target="_blank"
                rel="noopener noreferer"
                >Open Source Everything</a
              >
            </li>
            <li>Anti-LGBTQIA+fobia</li>
            <li>Antirracismo</li>
            <li>
              <a
                href="https://pt.wikipedia.org/wiki/Decrescimento_(economia)"
                class="underline"
                target="_blank"
                rel="noopener noreferer"
                >Decrescimento Econômico</a
              >
            </li>
          </ul>
        </section>

        <section class="lg:pt-20 px-10 pt-8">
          <h1 class="mb-4 text-2xl font-black lg:text-4xl">Em Tecnologia</h1>
          <ul class="text-lg list-disc list-inside">
            <li>Programação Funcional</li>
            <li>Computação Científica</li>
            <li>Programação Criativa</li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>