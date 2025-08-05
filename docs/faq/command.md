# Команды лаунчера

::: warning Документация пишется...
К сожалению, этот раздел еще заполняется
:::

::: tip ИНФОРМАЦИЯ К СВЕДЕНИЮ: 
Ковычки `"text"` указывать не обязательно. Они нужны, если в клиенте имеются пробелы или специальные символы. 
Я крайне не рекомендую делать пробелы в названии, т.к. лаунчер заменяет их на "+" и возникают проблемы при скачивании клиента.
:::

## Команда auth

Данной командой можно проверить авторизацию на вашем сервере.

::: code-tabs
@tab Логика
```sql
auth "<login>" "<password>" # Try to auth with specified login and password
```

@tab Пример
```sql
auth "KeeperJerry" "12345678"
```
:::

Если авторизация успешная - LaunchServer должен показать вам информацию об авторизации (uuid, acsessToken и пр.)

## Команда allowip
::: code-tabs
@tab Логика
```sql
allowip <type> <ip> # Add/Remove IP to Allow List
```

@tab Добавить IP
```sql
allowip add 127.0.0.1 # Добавить IP в Белый список
```

@tab Убрать IP
```sql
allowip del 127.0.0.1 # Убрать IP из Белого списка
```
:::

## Команда blockip
::: code-tabs
@tab Логика
```sql
blockip <type> <ip> # Add/Remove IP to Block List
```

@tab Добавить IP
```sql
blockip add 127.0.0.1 # Добавить IP в Черный список
```

@tab Убрать IP
```sql
blockip del 127.0.0.1 # Убрать IP из Черного списка
```
:::

## Команда build

::: code-tabs
@tab Логика
```sql
build [nothing] # Build launcher binaries
```

@tab Пример
```sql
build
```
:::

## Команда checkserver

::: code-tabs
@tab Логика
```sql
checkserver <username> <serverID> # Try to check server with specified credentials
```

@tab Пример
```sql
checkserver "KeeperJerry" "f88f6574702b11ec90d60242ac120003"
```
:::

## Команда clear

::: code-tabs
@tab Логика
```sql
clear [nothing] # Clear terminal
```

@tab Пример
```sql
clear
```
:::

## Команда debug
::: code-tabs
@tab Логика
```sql
debug [true/false] # Enable or disable debug logging at runtime
```

@tab Включить
```sql
debug true
```

@tab Отключить
```sql
debug false
```
:::

## Команда downloadasset

Данная команда скачает вам нужный ассет с зеркала, если он на нем имеется.

::: code-tabs
@tab Логика
```sql
downloadasset <Версия> "<Ваше_название>"
```

@tab Пример
```sql
downloadasset 1.7.10 "asset1.7.10"
```
:::

## Команда downloadclient

Данная команда скачает вам нужный клиент с зеркала, если оно имеется.

::: code-tabs
@tab Логика
```sql
downloadasset <Версия>-<Сборка(опционально)> "<Ваше_название>"
```

@tab Пример №1
```sql
downloadasset 1.7.10 "Test"
```

@tab Пример №2
```sql
downloadasset 1.12.2-forge "Forge1.12.2"
```

@tab Пример №3
```sql
downloadasset 1.7.10-hitech "HiTech"
```
:::

Сборка указывается вместе с тире слитно после названия версии. 
При скачивании обычной сборки - указывать необязательно. 
Пример доступных клиентов:
```sql
1.12.2 // обычная версия (vanilla)
1.12.2-forge // forge версия
1.14.4-fabric // fabric версия
1.7.10-hitech // готовый HiTech клиент с оптимизацией
```

## Команда dumpbinaryauthhandler

::: code-tabs
@tab Логика
```sql
dumpbinaryauthhandler [nothing] # Dumps BinaryAuthHandler to text file
```

@tab Пример
```sql
dumpbinaryauthhandler
```
:::

## Команда eval

::: code-tabs
@tab Логика
```sql
eval <code> # Evaluate JavaScript code snippet
```

@tab Пример
```sql

```
:::

## Команда gc

::: code-tabs
@tab Логика
```sql
gc [nothing] # Perform Garbage Collection and print memory usage
```

@tab Пример
```sql
gc
```
:::

## Команда help

::: code-tabs
@tab Логика
```sql
help [command name] # Print command usage
```

@tab Пример
```sql
help
```

@tab Пример c описанием
```sql
help downloadasset
```
:::

## Команда indexasset

::: code-tabs
@tab Логика
```sql
indexasset <dir> <index> <output-dir> # Index asset dir (1.7.10+)
```

@tab Пример
```sql

```
:::

## Команда joinserver

::: code-tabs
@tab Логика
```sql
joinserver <username> <accessToken> <serverID> # Try to join server with specified credentials
```

@tab Пример
```sql

```
:::

## Команда logconnections

::: code-tabs
@tab Логика
```sql
logconnections [true/false] # Enable or disable logging connections
```

@tab Включить
```sql
logconnections true
```

@tab Отключить
```sql
logconnections false
```
:::

## Команда rebind

::: code-tabs
@tab Логика
```sql
rebind [nothing] # Rebind server socket
```

@tab Пример
```sql
rebind
```
:::

## Команда stop

::: code-tabs
@tab Логика
```sql
stop [nothing] # Stop LaunchServer
```

@tab Пример
```sql
stop
```
:::

## Команда syncall

::: code-tabs
@tab Логика
```sql
syncall [nothing] # Resync profiles & updates dirs
```

@tab Пример
```sql
syncall
```
:::

## Команда syncbinaries

::: code-tabs
@tab Логика
```sql
syncbinaries [nothing] # Resync launcher binaries
```

@tab Пример
```sql
syncbinaries
```
:::

## Команда syncprofiles

::: code-tabs
@tab Логика
```sql
syncprofiles [nothing] - Resync profiles dir
```

@tab Пример
```sql
syncprofiles
```
:::

## Команда syncupdates

::: code-tabs
@tab Логика
```sql
syncupdates [subdirs...] - Resync updates dir
```

@tab Пример №1
```sql
syncupdates # Синхронизирует все папки
```

@tab Пример №2
```sql
syncupdates "jre-8u282-linux32" "jre-8u282-macosx" # Синхронизирует указанные папки
```
:::

## Команда usernametouuid

::: code-tabs
@tab Логика
```sql
usernametouuid <username> # Convert player username to UUID
```

@tab Пример
```sql
usernametouuid "KeeperJerry"
```
:::

## Команда uuidtousername

::: code-tabs
@tab Логика
```sql
uuidtousername <uuid> # Convert player UUID to username
```

@tab Пример
```sql
uuidtousername "36e90e03fd9c44318c6e13940f26a42e"
```
:::

## Команда unindexasset

::: code-tabs
@tab Логика
```sql
unindexasset <dir> <index> <output-dir> - Unindex asset dir (1.7.10+)
```

@tab Пример
```sql

```
:::

## Команда version

::: code-tabs
@tab Логика
```sql
version [nothing] # Print LaunchServer version
```

@tab Пример
```sql
version
```
:::