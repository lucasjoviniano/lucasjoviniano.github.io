---
date: 2021-09-04
author: Lucas Joviniano
title: Como eu faço minhas anotações usando o Obsidian e o Logseq
description: Utilizando os programas Logseq e Obsidian para fazer anotações.
head.title: Como eu faço minhas anotações usando o Obsidian e o Logseq
head.description: Utilizando os programas Logseq e Obsidian para fazer anotações.
---

Nos últimos anos tentei usar diversos aplicativos de anotaçãoes, do complexo [Notion](https://www.notion.so/) ao simples [Google Keep](https://keep.google.com/ "Google Keep"), e sempre senti que faltava algo. Basicamente, organizar minhas anotações tem alguns requisitos mínimos:

* Não usar Nuvem (a não ser para sincronização)
* Fácil de dar CTRL + C e CTRL + V
* Boa Interface
* Posso abrir as notas em qualquer programa (por serem arquivos locais)
* Controle de Versão

Considerando isso, recentemente conheci duas ferramentas: O [Obsidian](https://obsidian.md/ "Obsidian") e o [Logseq](https://logseq.com/ "Logseq"), e eles são basicamente tudo o que eu precisava. Os dois apps têm a mesma ideia: organizar as anotações num esquema de [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten). Então por que usar os dois? 

Bem, são estilos um pouco diferentes. Gosto de Logseq como um caderno de rascunhos, onde faço notas rápidas e "bagunçadas". Depois, uso isso no Obsidian para organizar e consolidar essas notas, transformado - as em [evergreen notes](https://notes.andymatuschak.org/Evergreen_notes).

Então vou explicar como configuro os dois programas para trabalharem juntos da melhor forma que encontrei (até agora). Não vou entrar em muitos detalhes de como funcionam os programas, vou apenas assumir que quem está lendo já usou e entende o básico de como funciona cada um.

## Configurando o Obsidian

Abrindo as configurações do Obsidian, sigam os passos abaixo.

### Mudando a pasta de novas páginas

- Files and Links
	- Default Location For New Notes: In the folder specified below
    	- pages
        
### Mudando o Local de Anexos (Imagens, etc.)

- Files and Links
	- Default Location For New Attachments: In the folder specified below
    	- assets
    - New Link Format: Relative Path to File
    - Use Wikilinks: Off
    
### Anotações Diárias

- Core Plugins
	- Daily Notes: On
- Daily Notes
	- Date Format: YYYY_MM_DD
    - New File Location: journals
    
## Configurando o Logseq

Com o Logseq aberto na pasta das anotações, clique nos "..." na parte superior > Settings > Edit config.edn for current repo (Ao lado de Current Graph)

No config.edn, adicione as seguintes linhas

:journal/file-name-format "yyy-MM-dd"
:page-name-order "file"


E pronto! Todo o setup está conigurado. Agora você pode aproveitar o maravilhoso mundo dos arquivos MD e Zettelkasten.
