# Unix & Bash (Parte 2)

## Inputs e outputs no terminal

Inputs (entradas) são dados que os comandos recebem para serem processados.
Outputs (saídas) são dados que os comandos produzem para serem exibidos.

## Sinal > (maior)

Pega o output de um comando e escreve em um arquivo.

Exemplo:

```bash
echo "Hello World" > hello.txt
```

## Sinal >> (maior maior)

Acrescenta o input de um comando ao final de um arquivo.

Exemplo:

```bash
echo "Hello World" >> hello.txt
```

## Concatenação (cat)

Junta dois inputs em um output.

Exemplo:

```bash
cat hello.txt hello2.txt > hello3.txt
```

## Ordenação (sort)

Ordena inputs e repassa para um output.

Exemplo:

```bash
sort < hello.txt > hello2.txt
```

## Usuário do sistema (who)

Saber informações sobre o usuário do sistema.

## Juntar outputs em um único input (|)

O | (pipe) repassa o output de um comando para o input de outro.

```bash
cat hello.txt hello2.txt | sort > hello3.txt
```

## Permissões de arquivos (ls -l)

```bash
| Permissões | Links | Proprietário | Grupo | Tamanho | Data e Hora  | Nome     |
| ---------- | ----- | ------------ | ----- | ------- | ------------ | -------- |
| drwxr-xr-x | 2     | root         | root  | 4096    | Out 19 09:10 | composer |
```

- **Permissões** É possível verificar o tipo do item e nível de permissão para Leitura, Escrita e Execução de item ou diretório;
- **Links** Número de ligações que o item possui, no caso do diretório, número de subdiretórios que possui;
- **Proprietário** Quem é a pessoa dona, quem criou. É o diretório padrão da pessoa usuária, o home;
- **Grupo** Grupo ao qual pertence o item ou diretório. Utilizado para dar permissões à outras pessoas;
- **Tamanho** Em Bytes;
- **Data e Hora** Momento em que foi criado ou última modificação;
- **Nome** Nome do item ou diretório;

Tipos de permissões:

- r - Read | 4
- w - Write | 2
- x - Execute | 1

As permissões são divididas em 4 grupos:

| Tipo | Dono | Grupo | Outros |
| ---- | ---- | ----- | ------ |
| -    | rwx  | rwx   | rwx    |
| d    | rwx  | rwx   | rwx    |

1. Se começa com - (minus), é um arquivo e se começa com d, é um diretório.
2. Permissões do usuário.
3. Permissões do grupo.
4. Permissões de outros.

Exemplos:

rwx = 111 ( 7 | Acesso Total )
r-- = 100 ( 4 | Somente Leitura )
-w- = 010 ( 2 | Somente Escrita )
--x = 001 ( 1 | Somente Execução )
rw- = 110 ( 6 | Somente Leitura e Escrita )
r-x = 101 ( 5 | Somente Leitura e Execução )
-wx = 011 ( 3 | Somente Escrita e Execução )
--- = 000 ( 0 | Todos Acessos Negados )

## Alterar permissões (chmod)

`chmod <alvo><modo><permissões> <arquivo>`

Alvos:

- u = usuário
- g = grupo
- o = outros
- a = todos

Modo:

- **-** Remover
- **+** Adicionar
- **=** Igual

Exemplo:

```bash
chmod u-rw hello.txt
```

## Processos (ps)

```bash
PID Nome Status Tempo Comando
  1 root Z      00:00 bash
```

## Processos em background (&)

```bash
sleep 10 &
```

## Suspender processos

`ctrl` + `z`

## Colocar processos suspensos em background (bg)

```bash
bg
```

## Processos em execução (jobs)

```bash
jobs
```

## Continuar processo suspensos (fg)

Quando um processo é suspenso, ele recebe um identificador que é utilizado para continuar o processo, por exemplo: `%1`.

```bash
fg %1
```

## Matar um processo

Processo em foreground (fg): `ctrl` + `c`

Processo em background (bg): `kill <PID>`

## Pesquisar diretórios e arquivos (find)

O find é um comando para pesquisar em diretórios por arquivos ou outras pastas, de acordo com os parâmetros passados a ele. Esses parâmetros podem ser `name`, `date`, `size` e `type`. Caso nenhum atributo seja passado, ele pesquisará tudo que estiver dentro do diretório atual.

Exemplos:

```bash
# Para listar todos os arquivos que terminam em .txt
find . -name "*.txt"

# Para localizar todos os diretórios
find . -type d

# Para localizar todos os arquivos
find . -type f

# Localizar tanto arquivos quanto diretórios que comecem
# por algum trecho
find ./teste -name "exemplo*"
# Resultado
./teste/exemplo.txt
./teste/exemplo

# Localizar somente arquivos que comecem por algum trecho
find ./teste -type f -name "exemplo*"
# Resultado
./teste/exemplo.txt

# Localizar somente diretórios que comecem por algum trecho
find ./teste -type d -name "exemplo*"
# Resultado
./teste/exemplo
```
