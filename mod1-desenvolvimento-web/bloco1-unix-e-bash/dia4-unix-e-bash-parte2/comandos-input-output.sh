# UNIX e BASH Parte 2

# Parte 1 - Comandos de Input e Output


1. Navegue até a pasta unix_tests.


> cd unix_tests


2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.


> cat > skills2.txt
Internet
Unix
Bash


3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.


> cat >> skills2.txt
laranja
acerola
melancia
cadeira
escada

> sort skills2.txt
acerola
Bash
cadeira
escada
Internet
laranja
melancia
Unix


4. Conte quantas linhas tem o arquivo skills2.txt.


> wc -l skills2.txt
8 skills2.txt


5. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.


> head -3 skills2.txt | sort > top_skills.txt
Bash
Internet
Unix


6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.


> cat > phrases2.txt
uma luz azul me guia
eu quero aquele bolo
voce chegara as nove
brasil um pais de todos


7. Conte o número de linhas que contêm as letras br.


> grep br phrases2.txt | wc -l
1


8. Conte o número de linhas que não contêm as letras br.


> grep -v br phrases2.txt | wc -l
3


9. Adicione dois nomes de países ao final Do arquivo phrases2.txt.


> cat >> phrases2.txt
argentina
chile


10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.


> cat phrases2.txt countries.txt > bunch_of_things.txt


11. Ordene o arquivo bunch_of_things.txt.


> sort bunch_of_things.txt


# Fim do Exercício.