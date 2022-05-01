## Parte III - Processos & Jobs

### 1. Listar os processos

```bash
ps
```

### 2. Usar o comando sleep em background

```bash
sleep 30 &
```

### 3. Listar os processos e matar o processo criado na etapa 2

```bash
ps
kill <PID>
# Para forçar utilizar o comando kill -9 <PID>
```

### 4. Executar o comando `sleep 30` e matar o processo em seguida

```bash
sleep 30
# ctrl + c
```

### 5. criar um processo em background (sleep 300 segundos)

```bash
sleep 300 &
```

### 6. Criar mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

```bash
sleep 200
# ctrl + z
sleep 100
# ctrl + z
```

### 7. Verificar os processos em execução (jobs) e suspender o sleep 300

```bash
jobs
```


### 8. Retomar a execução do `sleep 100` com `bg`

```bash
bg %<ID>
```

### 9. Matar todos os processos sleep

```bash
kill <PIDs>
```