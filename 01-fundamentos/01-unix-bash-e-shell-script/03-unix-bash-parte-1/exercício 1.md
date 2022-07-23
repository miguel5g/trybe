## Criação de arquivos e diretórios

### 1. Criar pasta `unix_tests` e navegar até ela

```bash
mkdir unix_tests
cd unix_tests
```

### 2. Criar um arquivo chamdo `trybe.txt`

```bash
touch trybe.txt
```

### 3. Criar uma cópia do arquivo `trybe.txt` chamado `trybe_backup.txt`

```bash
cp trybe.txt trybe_backup.txt
```

### 4. Renomear o arquivo `trybe.txt`

```bash
# Este é uma pegadinha, pois para renomear um arquivo, é
# necessário fornecer o novo nome.
# Segue um exemplo:
mv trybe.txt trybe_renamed.txt
```

### 5. Criar diretório `backup` dentro de `unix_tests`

```bash
mkdir backup
```

### 6. Mover `trybe_backup.txt` para `backup`

```bash
mv trybe_backup.txt backup
```

### 7. Dentro de `unix_tests` criar diretório `backup2`

```bash
mkdir backup2
```

### 8. Mover `trybe_backup.txt` para `backup2`

```bash
mv ./backup/trybe_backup.txt backup2
```

### 9. Apagar a pasta `backup`

```bash
rm -rf backup
```

### 10. Renomear a pasta `backup2` para `backup`

```bash
mv backup2 backup
```

### 11. Mostrar o diretório atual e listar tudo dentro dele

```bash
pwd
ls
```

### 12. Apagar o diretório `backup`

```bash
rm -rf backup
```

### 13. Limpar o terminal

```bash
clear
```

### 14. Mostrar na tela as primeiras 5 skills do arquivo `skills.txt`

```bash
head -5 skills.txt
```

### 15. Mostrar na tela as últimas 4 skills do arquivo `skills.txt`

```bash
tail -4 skills.txt
```

### 16. Apagar todos os arquivos que terminem em `.txt`

```bash
rm *.txt
```
