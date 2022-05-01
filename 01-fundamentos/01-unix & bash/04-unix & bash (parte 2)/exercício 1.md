## Parte I - Comandos de Input e Output

### OBS: criar pasta `unix_tests`

```bash
mkdir unix_tests
```

### 1. Navegar até `unix_tests`

```bash
cd unix_tests
```

### 2. Criar arquivo `skills2.txt` e adicionar `Internet`, `Unix` e `Bash` um em cada linha

```bash
cat > skills2.txt
# Após isso digitar os items e apertar enter
# Para finalizar só apertar ctrl+d
```

### 3. Adicionar 5 itens a lista e exibir a lista ordenada no terminal

```bash
cat >> skills2.txt
# Após isso digitar os items e apertar enter
# Para finalizar só apertar ctrl+d
sort skills2.txt
```

### 4. Exibir a quantidade de linhas de `skills2.txt`

```bash
wc -l skills2.txt
```

### 5. Criar arquivo chamado `top_skills.txt` contendo as 3 primeiras skills de `skills2.txt` em ordem alfabética

```bash
sort -n skills2.txt | head -n 3 > top_skills.txt
```

### 6. Criar um arquivo chamado `phrases2.txt` e adicionar algumas frases

```bash
cat > phrases2.txt
# Após isso digitar os items e apertar enter
# Para finalizar só apertar ctrl+d
```

### 7. Contar o número de linhas que contém as letras `br`

```bash
grep -c br phrases2.txt | wc -l
```

### 8. Contar o número de linhas que não contém as letras `br`

```bash
grep -v br phrases2.txt | wc -l
```

### 9. Adicionar 2 nomes de países ao final do arquivo `phrases2.txt`

```bash
cat >> phrases2.txt
# Após isso digitar os items e apertar enter
# Para finalizar só apertar ctrl+d
```

### 10. Criar arquivo chamado `bunch_of_things.txt` com os conteúdos de `skills2.txt` e `phrases2.txt`

```bash
cat skills2.txt phrases2.txt > bunch_of_things.txt
```

### 11. Ordenar o arquivo `bunch_of_things.txt` em ordem alfabética

```bash
sort bunch_of_things.txt > bunch_of_things_sorted.txt
```
