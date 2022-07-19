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

:::: code-group
::: code-group-item Логика
```sql
auth "<login>" "<password>" # Try to auth with specified login and password
```
:::
::: code-group-item Пример
```sql
auth "KeeperJerry" "12345678"
```
:::
::::

Если авторизация успешная - LaunchServer должен показать вам информацию об авторизации (uuid, acsessToken и пр.)

## Команда allowip
:::: code-group
::: code-group-item Логика
```sql
allowip <type> <ip> # Add/Remove IP to Allow List
```
:::
::: code-group-item Добавить IP
```sql
allowip add 127.0.0.1 # Добавить IP в Белый список
```
:::
::: code-group-item Убрать IP
```sql
allowip del 127.0.0.1 # Убрать IP из Белого списка
```
:::
::::

## Команда blockip
:::: code-group
::: code-group-item Логика
```sql
blockip <type> <ip> # Add/Remove IP to Block List
```
:::
::: code-group-item Добавить IP
```sql
blockip add 127.0.0.1 # Добавить IP в Черный список
```
:::
::: code-group-item Убрать IP
```sql
blockip del 127.0.0.1 # Убрать IP из Черного списка
```
:::
::::

## Команда build

:::: code-group
::: code-group-item Логика
```sql
build [nothing] # Build launcher binaries
```
:::
::: code-group-item Пример
```sql
build
```
:::
::::

## Команда checkserver

:::: code-group
::: code-group-item Логика
```sql
checkserver <username> <serverID> # Try to check server with specified credentials
```
:::
::: code-group-item Пример
```sql
checkserver "KeeperJerry" "f88f6574702b11ec90d60242ac120003"
```
:::
::::

## Команда clear

:::: code-group
::: code-group-item Логика
```sql
clear [nothing] # Clear terminal
```
:::
::: code-group-item Пример
```sql
clear
```
:::
::::

## Команда debug
:::: code-group
::: code-group-item Логика
```sql
debug [true/false] # Enable or disable debug logging at runtime
```
:::
::: code-group-item Включить
```sql
debug true
```
:::
::: code-group-item Отключить
```sql
debug false
```
:::
::::

## Команда downloadasset

Данная команда скачает вам нужный ассет с зеркала, если он на нем имеется.

:::: code-group
::: code-group-item Логика
```sql
downloadasset <Версия> "<Ваше_название>"
```
:::
::: code-group-item Пример
```sql
downloadasset 1.7.10 "asset1.7.10"
```
:::
::::

## Команда downloadclient

Данная команда скачает вам нужный клиент с зеркала, если оно имеется.

:::: code-group
::: code-group-item Логика
```sql
downloadasset <Версия>-<Сборка(опционально)> "<Ваше_название>"
```
:::
::: code-group-item Пример №1
```sql
downloadasset 1.7.10 "Test"
```
:::
::: code-group-item Пример №2
```sql
downloadasset 1.12.2-forge "Forge1.12.2"
```
:::
::: code-group-item Пример №3
```sql
downloadasset 1.7.10-hitech "HiTech"
```
:::
::::

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

:::: code-group
::: code-group-item Логика
```sql
dumpbinaryauthhandler [nothing] # Dumps BinaryAuthHandler to text file
```
:::
::: code-group-item Пример
```sql
dumpbinaryauthhandler
```
:::
::::

## Команда eval

:::: code-group
::: code-group-item Логика
```sql
eval <code> # Evaluate JavaScript code snippet
```
:::
::: code-group-item Пример
```sql

```
:::
::::

## Команда gc

:::: code-group
::: code-group-item Логика
```sql
gc [nothing] # Perform Garbage Collection and print memory usage
```
:::
::: code-group-item Пример
```sql
gc
```
:::
::::

## Команда help

:::: code-group
::: code-group-item Логика
```sql
help [command name] # Print command usage
```
:::
::: code-group-item Пример
```sql
help
```
:::
::: code-group-item Пример c описанием
```sql
help downloadasset
```
:::
::::

## Команда indexasset

:::: code-group
::: code-group-item Логика
```sql
indexasset <dir> <index> <output-dir> # Index asset dir (1.7.10+)
```
:::
::: code-group-item Пример
```sql

```
:::
::::

## Команда joinserver

:::: code-group
::: code-group-item Логика
```sql
joinserver <username> <accessToken> <serverID> # Try to join server with specified credentials
```
:::
::: code-group-item Пример
```sql

```
:::
::::

## Команда logconnections

:::: code-group
::: code-group-item Логика
```sql
logconnections [true/false] # Enable or disable logging connections
```
:::
::: code-group-item Включить
```sql
logconnections true
```
:::
::: code-group-item Отключить
```sql
logconnections false
```
:::
::::

## Команда rebind

:::: code-group
::: code-group-item Логика
```sql
rebind [nothing] # Rebind server socket
```
:::
::: code-group-item Пример
```sql
rebind
```
:::
::::

## Команда stop

:::: code-group
::: code-group-item Логика
```sql
stop [nothing] # Stop LaunchServer
```
:::
::: code-group-item Пример
```sql
stop
```
:::
::::

## Команда syncall

:::: code-group
::: code-group-item Логика
```sql
syncall [nothing] # Resync profiles & updates dirs
```
:::
::: code-group-item Пример
```sql
syncall
```
:::
::::

## Команда syncbinaries

:::: code-group
::: code-group-item Логика
```sql
syncbinaries [nothing] # Resync launcher binaries
```
:::
::: code-group-item Пример
```sql
syncbinaries
```
:::
::::

## Команда syncprofiles

:::: code-group
::: code-group-item Логика
```sql
syncprofiles [nothing] - Resync profiles dir
```
:::
::: code-group-item Пример
```sql
syncprofiles
```
:::
::::

## Команда syncupdates

:::: code-group
::: code-group-item Логика
```sql
syncupdates [subdirs...] - Resync updates dir
```
:::
::: code-group-item Пример №1
```sql
syncupdates # Синхронизирует все папки
```
:::
::: code-group-item Пример №2
```sql
syncupdates "jre-8u282-linux32" "jre-8u282-macosx" # Синхронизирует указанные папки
```
:::
::::

## Команда usernametouuid

:::: code-group
::: code-group-item Логика
```sql
usernametouuid <username> # Convert player username to UUID
```
:::
::: code-group-item Пример
```sql
usernametouuid "KeeperJerry"
```
:::
::::

## Команда uuidtousername

:::: code-group
::: code-group-item Логика
```sql
uuidtousername <uuid> # Convert player UUID to username
```
:::
::: code-group-item Пример
```sql
uuidtousername "36e90e03fd9c44318c6e13940f26a42e"
```
:::
::::

## Команда unindexasset

:::: code-group
::: code-group-item Логика
```sql
unindexasset <dir> <index> <output-dir> - Unindex asset dir (1.7.10+)
```
:::
::: code-group-item Пример
```sql

```
:::
::::

## Команда version

:::: code-group
::: code-group-item Логика
```sql
version [nothing] # Print LaunchServer version
```
:::
::: code-group-item Пример
```sql
version
```
:::
::::