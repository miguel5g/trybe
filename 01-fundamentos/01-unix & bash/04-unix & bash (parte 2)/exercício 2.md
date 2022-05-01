## Parte II - Permissões

### 1. Navegar até `unix_tests`

```bash
cd unix_tests
```

### 2. Listar as permissões dos arquivos

```bash
ls -l
```

### 3. Mudar a permissão de `bunch_of_things.txt` para que todos os usuários possam ler e escrever

```bash
chmod a=rw bunch_of_things.txt
```

### 4. Remover a permissão de escrita de `bunch_of_things.txt` para todos os usuários

```bash
chmod a-w bunch_of_things.txt
```

### 5. Voltar as permissões padrões de `bunch_of_things.txt` (644)

```bash
chmod 644 bunch_of_things.txt
```
