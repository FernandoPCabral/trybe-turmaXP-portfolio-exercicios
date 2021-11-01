# UNIX e BASH Parte 2

# Manipulação & Busca


1. Na pasta unix_tests, baixe um arquivo com os nomes de todos os países Do mundo utilizando o comando curl:


> curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"


2. Mostre todo o conteúdo Do arquivo countries.txt na tela.


> cat countries.txt


3. Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.


> less countries.txt 
> pressionar Spacebar até chegar na última página Do arquivo


4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.


> less countries.txt
> /Zambia


5. Busque por Brazil no countries.txt.


> grep Brazil countries.txt


6. Busque novamente por brazil, mas agora utilizando o lower case.


> grep -i brazil countries.txt


Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.


7. Busque pelas frases que não contenham a palavra fox.


> grep -v fox phrases.txt


8. Conte o número de palavras Do arquivo phrases.txt.


>wc -w phrases.txt


9. Conte o número de linhas Do arquivo phrases.txt.


>wc -l phrases.txt


10. Crie os arquivos empty.tbt e empty.pdf.


> touch empty.tbt empty.pdf


11. Liste todos os arquivos Do diretório unix_tests.


> ls -a


12. Liste todos os arquivos que terminem com txt.


> ls -a *.txt*


13. Liste todos os arquivos que terminem com tbt ou txt.


> ls -a *t


14. Acesse o manual Do comando ls.


> man ls


# Fim do Exercício.