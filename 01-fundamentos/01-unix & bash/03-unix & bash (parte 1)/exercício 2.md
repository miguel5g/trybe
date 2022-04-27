## Manipulação & Busca

### 1. Baixar o arquivo com o comando `curl`

```bash
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

### 2. Mostrar todo o conteúdo do arquivo `countries.txt` na tela.

```bash
cat countries.txt
```

### 3. Mostrar o conteúdo de `countries.txt` página por página até encontrar a `Zambia`.

```bash
less countries.txt
```

### 4. Mostrar o conteúdo de `countries.txt` página por página e buscar por `Zambia`.

```bash
less countries.txt

# Para buscar por um termo basta digitar o que está abaixo
# \Zambia
```

### 5. Buscar por `Brazil` em `countries.txt`.

```bash
grep Brazil countries.txt
```

### 6. Buscar por `brazil` em `countries.txt` mas em _lower case_.

```bash
grep -i brazil countries.txt
```

### 7. Buscar por palavras que não tem a palavra `fox`.

```bash
grep -v fox countries.txt
```

### 8. Contar o número de palavras em `phrases.txt`.

```bash
wc -w phrases.txt
```
### 9. Contar o número de linhas em `phrases.txt`.

```bash
wc -l phrases.txt
```

### 10. Criar arquivos `empty.tbt` e `empty.txt`.

```bash
touch empty.tbt empty.txt
```

### 11. Listar todos os arquivos dentro de `unix_tests`.

```bash
# Presumindo que eu já esteja em `unix_tests`
ls
```

### 12. Listar todos os arquivos que terminam com `.txt`.

```bash
ls *.txt
```

### 13. Listar todos os arquivos que terminam com `.tbt` ou `txt`.

```bash
ls *.t?t
```

### 14. Acessar o manual do comando `ls`.

```bash
man ls
```