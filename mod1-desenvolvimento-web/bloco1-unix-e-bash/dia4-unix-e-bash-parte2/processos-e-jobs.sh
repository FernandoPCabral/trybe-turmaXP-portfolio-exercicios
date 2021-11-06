# UNIX e BASH Parte 2

# Parte 3 - Processos e Jobs


1. Liste todos os processos.


> ps
    PID TTY          TIME CMD
 613999 pts/0    00:00:00 zsh
 615076 pts/0    00:00:00 ps


2. Agora use o comando sleep 30 &.


> sleep 30 &
[1] 616615


3. Use a listagem de processos para encontrar o PID Do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo).


> ps
    PID TTY          TIME CMD
 613999 pts/0    00:00:00 zsh
 616615 pts/0    00:00:00 sleep
 617211 pts/0    00:00:00 ps

> kill 616615
[1]  + 616615 terminated  sleep 30 


4. Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele Continue executando em background.


> sleep 30
> ctrl + z
[1]  + 619381 suspended  sleep 30

> bg
[1]  + 619381 continued  sleep 30


5. Crie um processo em background que rode o comando sleep por 300 segundos.


> [1] 620920


6. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.


> sleep 200
> ctrl + z
[2]  + 621158 suspended  sleep 200

> sleep 100
> ctrl + z
[3]  + 621261 suspended  sleep 100

7. Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.


> jobs
[1]    running    sleep 300
[2]  - suspended  sleep 200
[3]  + suspended  sleep 100

> fg %1
[1]    620920 running    sleep 300
> ctrl + z
[1]  + 620920 suspended  sleep 300


8. Retome a execução Do processo sleep 100 em background com o comando bg.


> bg %3
[3]    621261 continued  sleep 100


9. Termine a execução de todos os processos sleep (mate os processos).


> killall sleep


# Fim do Exercício.