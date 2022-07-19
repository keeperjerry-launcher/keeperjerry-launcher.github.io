# Загрузка и настройка клиентов

::: tip Эй! Не так быстро!
Перед тем как начать операции с клиентами, рекомендуется сначала настроить LaunchServer!
Перейдите на вкладку [Настройка](/config/), если вы этого еще не сделали!
::: 

## Что такое клиент

Клиент - это специальная сборка клиента MineCraft под определенную стилистику сервера. 
Это может быть сборка `HiTech`, `Magic` и т.д. Клиенты могут отличаться как модами, так и версиями самого клиента.
Настраивать данные клиенты придется вручную или скачать готовую сборку через зеркало.

Клиент содержит в себе несколько компонентов:
1) `assets` - папка с ассетами клиента
2) `client` - папка с клиентом игры MineCraft
3) `client.cfg` - файл настройки клиента, который находится в папке `profiles`

::: tip Обратите внимание: 
Данные директории можно переименовать как угодно. Но для удобства, обычно используют названия, которые обозначают версию.

Например с ассетами: `asset1.7.10`, `assets-1.12.2` и т.д.

Или названия самих сборок: `MiniGames`, `HiTech-1.7.10` и т.д.
:::

## Распаковка клиента

В данной документации мы расмотрим пример со скачиванием нужной нам сборки из официального зеркала. 

::: tip Обратите внимание: 
Если вы качаете сборку из неофициальных зеркал, инструкция не гарантирует правильности работы клиента.
Некоторые "сверхразумы" (как например Day-D) забывают провести настройку клиента ~~когда тащат сборки у Gravit'a, даже банально 
не вытащив гребаный authlib~~

Так же, ковычки `(например "MiniGames")` указывать не обязательно. Они нужны, если в клиенте имеются пробелы или специальные символы. 
Я крайне не рекомендую делать пробелы в названии, т.к. лаунчер заменяет их на "+" и возникают проблемы при скачивании клиента.
:::

Для начала нам нужны "ассеты". Это файлы лаунчера, которые содержат в себе текстуры и ресурсы для игры MineCraft.

Скачаем "ассеты" следующей командой: [подробнее](/faq/command.html#команда-downloadasset)
```sql
downloadasset 1.12.2 "asset1.12.2"
```

::: tip Обратите внимание: 
Если у вас несколько клиентов одной версии и для каждого вы хотите настроить папку ассетов индивидуально, вы можете с переименовать папку с ассетами как угодно **(главное без пробелов)** и не забыть указать ее в `profiles` клиента
(параметр `assetDir`).
:::

Теперь скачаем клиент и настроим его. Для примера, мы возьмем forge сборку и назовем ее `HiTech`:

```
downloadclient 1.12.2-forge "HiTech"
```

По завершению скачки, мы перейдем в папку `profiles` и увидим созданный файл клиента `HiTech.cfg`. Подробнее о его настройке описано [здесь](/config/profiles.html)