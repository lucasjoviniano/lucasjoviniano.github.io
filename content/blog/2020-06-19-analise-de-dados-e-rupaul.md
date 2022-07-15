+++
title = "Análise de Dados e RuPaul's Drag Race"
template = "post.html"

[taxonomies]
tags = ["TV", "Reality", "LGBT", "Python", "Pandas", "RuPaul", "Drag Race"]
+++

![RuPaul falando "Hello, Hello, Hello"](https://media.giphy.com/media/W1SYNTF2HmihUGnOWX/giphy.gif)

Uuuuh girl! Estamos naquela época do ano muito conhecida pelos fãs de Drag Race: quando a RuPaul lança uma temporada atrás da outra pra alimentar os fãs sedentos. Já tivemos a 12ª temporada, o RuPaul's Secret Celebrity Drag Race, estamos tendo o All Stars 5 e já tem Drag Race Canada confirmada para julho!

O show conquistou muitos espectadores durante suas 12 temporadas regulares, rendendo assim diversos spin-offs. Mas as temporadas regulares ainda são o show principal. Com essa legião de pessoas assistindo, e ainda por ser um show de competição, as pessoas costumam comparar com frequência as temporadas para determinar qual é a melhor. Se você já acompanhou alguma dessas discussões, já deve ter visto o quanto são acaloradas.

Tendo isso em mente, me veio a seguinte pergunta: É possível determinar qual é a melhor temporada de RuPaul's Drag Race usando análise de dados? Bem, teoricamente sim. Eu só precisaria de uma base de dados para trabalhar e uma métrica para definir o que é melhor. Assim, resolvi tentar responder essa pergunta. **So, start your engines, and may the best season... win!**

![RuPaul levantando a mão](https://media.giphy.com/media/xUOwGfqVY7J3fQpi3C/giphy.gif)

Para isso, escolhi a base de dados do [IMDB](https://www.imdb.com/). E a métrica, óbviamente, será as notas dadas pelos usuários da plataforma. E na parte tech? Bem, escolhi python por um simples motivo: a biblioteca imdbpy. Ela nos permite acessar facilmente os dados do IMDb. Na parte da visualização, usaremos matplotlib com seaborn, além de pandas para manipular os dados. Então, vamos ao código!

# Carregando os Dados

Primeiro, importamos as biblotecas e defiimos algumas configurações básicas para a visualização dos gráficos.

```python
from imdb import IMDb
import pandas as pd
import matplotlib.pyplot as plt

import seaborn as sns
%matplotlib inline

sns.set()
sns.set_style("white")
sns.set_context("notebook", font_scale=1.5)

bar_color = '#E5989B'
top_bar_text_color = '#6D6875'
```

Após isso, precisamos pegar os dados do IMDb. Aqui, pegamos os dados básicos que a biblioteca trás para a gente, e depois atualizamos com algumas informações extras.

```python
ia = IMDb()
rp = ia.get_movie('1353056')
ia.update(rp, ['episodes', 'vote details'])
```

Com isso, temos todas as infomações que precisamos. Porém, temos também várias informações que não precisamos. Para facilitar o trabalho de análise, vamos estruturar os dados de outra forma usando um DataFrame do pandas.

```python
# Variáveis auxiliares
season = []
title = []
rating = []
ep = []
votes = []

for s in rp['episodes']:
    for i, e in rp['episodes'][s].items():
        season.append(s)
        title.append(e['title'])
        rating.append(e['rating'])
        votes.append(e['votes'])
        ep.append(i)

df = pd.DataFrame(list(zip(title, season, ep, rating, votes)), columns = ['Title', 'Season', 'Episode', 'Rating', 'Votes'])
df.head(10)
```

No código acima, pegamos somente as informações: Título do Eṕisódio, sua respectiva temporada, seu número, sua nota e quantidade de pessoas que avaliaram. Essas informações são mais do que suficientes para o que queremos. Aqui está uma amostra de como os dados estão armazenados.

![Primeiros 10 episódios salvos](https://i.imgur.com/hGRQs21.png)

# Analisando os Dados

Com isso, podemos começar as visualizações! Mas primero, vamos definir quais perguntas eu quero responder:

1. Qual é o melhor episódio de cada temporada?
2. Qual o melhor Snatch Game?
3. Qual a temporada mais bem avaliada?

Com as perguntas definidas, vamos começar a respondê - las.

## 1 - Qual o melhor episódio de cada temporada?

Conseguir essa informação é simples, só precisamos pedir para o pandas nos retornar a linha com o maior valor na coluna Rating. A primeira linha do código abaixo cuida disso, enquanto as próximas cuidam da visualização.

```python
best_eps = df.iloc[df.groupby('Season')['Rating'].idxmax()]

fig, ax = plt.subplots(figsize=(12, 6))
rects = ax.bar(best_eps.Season, best_eps['Rating'], color= bar_color)
for i in range(len(rects)):
        height = rects[i].get_height()
        ax.text(rects[i].get_x() + rects[i].get_width()/2, 0.5,
                str(best_eps.iloc[i, : ]['Episode']) + ' - ' + best_eps.iloc[i, : ]['Title'],
                ha='center', va='bottom', rotation = 90, color='#FFFFFC')

ax.set_xlabel('Temporada')
ax.set_xticks(best_eps.Season)
sns.despine()
plt.show()
```

![Gráfico mostrando o melhor episódio por temporada](https://i.imgur.com/8hevnmE.png)

Podemos notar que o Snatch Game é o favorito em três temporadas diferentes, mostrando assim o quanto o público gosta desse challenge. Temos também em destaque a Grande Final da Nona Temporada, que foi a primeira final no estilo Lipsync For The Crown e nos deu o tão conhecido lipsync de So Emotional por Sasha Velour e Shea Coulee.

![Sasha Velour revelando as pétalas embaixo de sua peruca](https://media.giphy.com/media/3oKHWalGcgCRqvL4uQ/giphy.gif)

### 2 - Qual o melhor Snatch Game?

O Snatch Game é um dos desafios mais clássicos de Drag Race. Ele aparece em todas as temporadas, com exceção da primeira, e é muito amado pelos fãs. Usando o último gráfico já podemos ver qual o melhor, mas vamos ver a comparação entre todos. Aqui estamos filtrando somente as linhas em que o título do episódio contenha as palavras _Snatch Game_.

```python
pe = df[df.Title.str.contains('Snatch Game')]
fig, ax = plt.subplots(figsize=(12, 6))

rects = ax.bar(pe.Season, pe['Rating'], color= bar_color)
for rect in rects:
        height = rect.get_height()
        ax.text(rect.get_x() + rect.get_width()/2., 1.05*height,
                '%.1f' % float(height),
                ha='center', va='bottom', color = top_bar_text_color)

ax.set_xlabel('Temporada')
ax.set_xticks(pe.Season)
sns.despine()
plt.show()
```

![Nota de todos os Snatch Games](https://i.imgur.com/F3Uw9zB.png)

Como já sabiamos, **o melhor Snatch Game** foi o da Sexta Temporada! Realmente tivemos ótimas performances nesse ano: Bianca Del Rio como Judge Judy (uma das personagens favoritas da RuPaul), Adore Delano como Anna Nicole Smith e, a vencedora do desafio, BenDeLaCreme como Maggie Smith.

![BenDeLaCreme interpretando Maggie Smith](https://media.giphy.com/media/3oriNOpTC2NHEDpTWM/giphy.gif)

Em **segundo lugar** temos a Quarta Temporada! A ganhadora desse episódio foi a Chad Michaels, interpretando, obviamete, a Cher!

![Chad Michaels como Cher](https://media.giphy.com/media/JFsnpzgST6vao/giphy.gif)

### 3 - Qual a temporada mais bem avaliada?

Chegamos a pergunta final: Qual a melhor temporada?? Aqui, eu usarei a mediana das notas dos episódios para calcular a nota da temporada. Mas porque a mediana? E porque não a média? Bem, a média nos daria um valor que é afetado por episódios muito ruins ou episódios muito bons. Isso quer dizer que uma temporada média com um episódio muito bom poderia ser considerada boa, mas um episódio compensa por toda uma temporada mediana? Bem, eu acho que não, então usarei a mediana para eliminar essa sensibilidade dos resultados.

```python
ps = df.groupby(['Season']).median()

fig, ax = plt.subplots(figsize=(12, 6))

rects = ax.bar(ps.index, ps['Rating'], color= bar_color)
for rect in rects:
        height = rect.get_height()
        ax.text(rect.get_x() + rect.get_width()/2., 1.05*height,
                '%.1f' % float(height),
                ha='center', va='bottom', color = top_bar_text_color)

ax.set_xlabel('Temporada')
ax.set_xticks(ps.index)
ax.get_yaxis().set_visible(False)
sns.despine()
plt.show()
```

![Nota de cada temporada](https://i.imgur.com/aVEwhUk.png)

Então, temos que a melhor temporada, definida pelo público, é a **Sexta Temporada!** Ela inclusive já havia figurado como Melhor Snatch Game (que é também considerado o melhor episódio entre todas as temporadas). Em segundo e terceiro lugar temos a **quinta e a quarta** temporada, respectivamente.

![Cast da sexta temporada](https://www.out.com/sites/out.com/files/2013/12/10/rpdr6slide1.jpg)

**"Mas eu não concordo com esse resultado!!"**. Bem, acontece. Mas é importante lembrar que isso vem da base de dados do IMDb, portanto só reflete a opinião dos usuários de lá. Pode ser que a maioria das pessoas não concorde com o resultado, e tá tudo bem! O importante mesmo é ter um show de grande representatividade como esse na TV e não importa quem os usuários do IMDb pensam que é melhor, com quem você se identifica ainda é a opinião mais importante.

![Rupaul falando "Everybody Say Love!"](https://media.giphy.com/media/gkXcg0fmfy4V97fSdh/giphy.gif)

Com isso, concluímos a Análise de Dados com RuPaul's Drag Race. Claro, eu pdoeria fazer muito mais que isso, como analisar os All Stars e definir outras perguntas, mas acho que já foi conteúdo o suficiente. O código desse post pode ser encontrado [aqui](https://github.com/lucasjoviniano/rpdr-eda/blob/master/Rupaul.ipynb). No mais, obrigado e até a próxima!
