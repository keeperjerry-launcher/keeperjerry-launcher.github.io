# Способы авторизации

Для управления авторизацией существуют несколько возможных обработчиков:

## Обработчики accept и reject
Пример конфигурации:
:::: code-group
::: code-group-item Accept
```bash
authProvider: "accept"; # Название способа авторизации
authProviderConfig: {
    # Конфигурация способа авторизации не тебуется
};
```
Обработчик принимает любые пары логин-пароль за верные, и имя пользователя соответствует логину.
Такой способ хорошо подходит для тестирования, но для использования в production рекомендуется сменить его на один из других.
В отличие от `accept`, другие способы требуют дополнительной конфигурации в блоке `authProviderConfig`.
:::
::: code-group-item Reject
```bash
authProvider: "reject"; # Название способа авторизации
authProviderConfig: {
    message: "Технические работы, приходите позже!";
};
```
Этот способ авторизации - полная противоположность accept. Он принимает любые пары логин-пароль за неверные. 
Этот способ можно использовать во время проведения технических работ. 
:::
:::: 

## Официальные обработчики

Для того, чтобы получить необходимые данные пользователя, `LaunchServer` берет данные с официальных серверов указанных сервисов.
Среди них: 
* [Mojang](https://www.minecraft.net/ru-ru) (Официальный сервис)
* [KeeperJerry.RU](https://keeperjerry.ru/) (Мой сервис)
* [Ely.by](https://ely.by/) (Сервис эмуляции официального Mojang)

Пример конфигурации:
:::: code-group
::: code-group-item Mojang
```bash
authProvider: "mojang";
authProviderConfig: {
    # Конфигурация способа авторизации не тебуется
};
```
Для того, чтобы авторизовать пользователя, `LaunchServer` берет данные с официального сервера [Mojang](https://www.minecraft.net/ru-ru). 
:::
::: code-group-item KeeperJerry.RU
```bash
authProvider: "keeperjerry";
authProviderConfig: {
    # Конфигурация способа авторизации не тебуется
};
```
Для того, чтобы авторизовать пользователя, `LaunchServer` берет данные с моего сервера [KeeperJerry.RU](https://keeperjerry.ru/). 
Этот способ рекомендуется для приватных серверов с небольшим количеством игроков.
::: tip Все верно: MineSocial.NET переносится на мой домен!
Из-за приколов с геополитикой, мне пришлось отказаться от международного домена. Пользуюсь случаем, я отправил проект на полную переделку (переработка системы сессии и безопасности). Следите за новостями!
:::
:::
::: code-group-item Ely.By
```bash
authProvider: "elyby";
authProviderConfig: {
    # Конфигурация способа авторизации не тебуется
};
```
Чтобы пользоваться данной авторизацией, необходимо зарегестрироваться на сайте [Ely.by](https://ely.by/)!
::: tip Смешанная авторизация
Сайт `Ely.by` использует смешанную авторизацию (свою и Mojang). Это значит, что зайти можно как с пользователя на сайте `Ely.By`, так и из лицензии от `Mojang`. За такое проксирование официальных запросов лицензионных аккаунтов, `Ely.By` получил плохой рейтинг. Будьте аккуратны!
:::
:::
::::

## Обработчик типа authlib
Способ аналогичен Mojang, за исключением того, что все запросы `LaunchServer` берет из вашего эмулятора MojangAPI. Документация: [authUrl](https://wiki.vg/Authentication#Authenticate).

Пример конфигурации:
:::: code-group
::: code-group-item Пример
```bash
authProvider: "authlib";
authProviderConfig: {
    authUrl: "http://example.com/authenticate";
};
```
:::
::: code-group-item Mojang
```bash
authProvider: "authlib";
authProviderConfig: {
    authUrl: "https://authserver.mojang.com/authenticate";
};
```
:::
::: code-group-item KeeperJerry.RU
```bash
authProvider: "authlib";
authProviderConfig: {
    authUrl: "https://authserver.keeperjerry.ru/authenticate";
};
```
:::
::: code-group-item Ely.By
```bash
authProvider: "authlib";
authProviderConfig: {
    authUrl: "https://authserver.ely.by/auth/authenticate";
};
```
:::
::::

## Обработчик типа file
Для проверки правильности логина и пароля, этот способ обращается к указанному файлу.

Пример конфигурации:
:::: code-group
::: code-group-item plain
```bash
authProvider: "file"; # Название способа авторизации
authProviderConfig: {
    file: "users.cfg"; # Имя файла, в котором будут приведенные ниже данные
    digest: "plain"; # Алгоритм хеширования пароля.
};
```
::: 
::: code-group-item MD5
```bash
authProvider: "file"; # Название способа авторизации
authProviderConfig: {
    file: "users.cfg"; # Имя файла, в котором будут приведенные ниже данные
    digest: "MD5"; # Алгоритм хеширования пароля.
};
```
:::
::: code-group-item SHA-1
```bash
authProvider: "file"; # Название способа авторизации
authProviderConfig: {
    file: "users.cfg"; # Имя файла, в котором будут приведенные ниже данные
    digest: "SHA-1"; # Алгоритм хеширования пароля.
};
```
:::
::: code-group-item SHA-224
```bash
authProvider: "file"; # Название способа авторизации
authProviderConfig: {
    file: "users.cfg"; # Имя файла, в котором будут приведенные ниже данные
    digest: "SHA-224"; # Алгоритм хеширования пароля.
};
```
:::
::: code-group-item SHA-256
```bash
authProvider: "file"; # Название способа авторизации
authProviderConfig: {
    file: "users.cfg"; # Имя файла, в котором будут приведенные ниже данные
    digest: "SHA-256"; # Алгоритм хеширования пароля.
};
```
:::
::: code-group-item SHA-512
```bash
authProvider: "file"; # Название способа авторизации
authProviderConfig: {
    file: "users.cfg"; # Имя файла, в котором будут приведенные ниже данные
    digest: "SHA-512"; # Алгоритм хеширования пароля.
};
```
:::
:::: 

Пример файла авторизации:
:::: code-group
::: code-group-item plain
```bash
Test: {
    username: "Test";
    password: "12345";
};
KeeperJerry: {
    username: "KeeperJerry";
    password: "12345";
};
```
:::
::: code-group-item MD5
```bash
Test: {
    username: "Test";
    password: "827ccb0eea8a706c4c34a16891f84e7b"; # 12345
};
KeeperJerry: {
    username: "KeeperJerry";
    password: "827ccb0eea8a706c4c34a16891f84e7b"; # 12345
};
```
:::
::: code-group-item SHA-1
```bash
Test: {
    username: "Test";
    password: "8cb2237d0679ca88db6464eac60da96345513964"; # 12345
};
KeeperJerry: {
    username: "KeeperJerry";
    password: "8cb2237d0679ca88db6464eac60da96345513964"; # 12345
};
```
:::
::: code-group-item SHA-224
```bash
Test: {
    username: "Test";
    password: "a7470858e79c282bc2f6adfd831b132672dfd1224c1e78cbf5bcd057"; # 12345
};
KeeperJerry: {
    username: "KeeperJerry";
    password: "a7470858e79c282bc2f6adfd831b132672dfd1224c1e78cbf5bcd057"; # 12345
};
```
:::
::: code-group-item SHA-256
```bash
Test: {
    username: "Test";
    password: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5"; # 12345
};
KeeperJerry: {
    username: "KeeperJerry";
    password: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5"; # 12345
};
```
:::
::: code-group-item SHA-512
```bash
Test: {
    username: "Test";
    password: "3627909a29c31381a071ec27f7c9ca97726182aed29a7ddd2e54353322cfb30abb9e3a6df2ac2c20fe23436311d678564d0c8d305930575f60e2d3d048184d79"; # 12345
};
KeeperJerry: {
    username: "KeeperJerry";
    password: "3627909a29c31381a071ec27f7c9ca97726182aed29a7ddd2e54353322cfb30abb9e3a6df2ac2c20fe23436311d678564d0c8d305930575f60e2d3d048184d79"; # 12345
};
```
:::
::::

## Обработчик типа SQL

Пример конфигурации:

:::: code-group
::: code-group-item MySQL
```bash
authProvider: "mysql"; # Название способа авторизации
authProviderConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя
    database: "dle?serverTimezone=UTC";

    query: "SELECT name FROM dle_users WHERE (email=? OR name=?) AND password=MD5(MD5(?)) LIMIT 1"; 
	# Запрос. Он должен быть SELECT и возвращать имя пользователя в правильном регистре. ? заменяются на параметры ниже:
    queryParams: [ "%login%", "%login%", "%password%" ]; 
	# Параметры к запросу. %login% и %password% заменяются на имя пользователя и пароль соответственно
};
```
Для проверки правильности логина и пароля, этот способ обращается к MySQL-базе данных. 
Этот способ рекомендуется для больших проектов со стандартными алгоритмами хеширования. 
:::
::: code-group-item MariaDB
```bash
authProvider: "mariadb"; # Название способа авторизации
authProviderConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя

    query: "SELECT name FROM dle_users WHERE (email=? OR name=?) AND password=MD5(MD5(?)) LIMIT 1";
	# Запрос. Он должен быть SELECT и возвращать имя пользователя в правильном регистре. ? заменяются на параметры ниже:
    queryParams: [ "%login%", "%login%", "%password%" ]; 
	# Параметры к запросу. %login% и %password% заменяются на имя пользователя и пароль соответственно
};
```
Для проверки правильности логина и пароля, этот способ обращается к MariaDB-базе. 
Этот способ рекомендуется для больших проектов со стандартными алгоритмами хеширования.
:::
::: code-group-item MySQL-8
```bash
authProvider: "mysql-8"; # Название способа авторизации
authProviderConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя
    database: "dle?serverTimezone=UTC"; # База данных
    timezone: "UTC";
    useSSL: false; # Используется ли защищенное соединение

	# Запрос. Он должен быть SELECT и возвращать имя пользователя в правильном регистре. ? заменяются на параметры ниже:
    query: "SELECT name FROM dle_users WHERE (email=? OR name=?) AND password=MD5(MD5(?)) LIMIT 1";
    # Параметры к запросу. %login% и %password% заменяются на имя пользователя и пароль соответственно
	queryParams: [ "%login%", "%login%", "%password%" ];
};
```
Для проверки правильности логина и пароля, этот способ обращается к MySQL-базе данных. 
Этот способ рекомендуется для больших проектов со стандартными алгоритмами хеширования.
:::
::: code-group-item PostgreSQL
```bash
# Скоро
```
::: tip Информация
Я немного отошел от этого способа в пользу способа Authlib, поэтому документация и скрипт будут позже
:::
:::
::: code-group-item SQLite
```bash
authProvider: "sqlite"; # Название способа авторизации
authProviderConfig: {
    path: "db.db"; # Путь до файла базы данных
    query: "SELECT name FROM table_name WHERE (email=? OR name=?) AND password=?"; # Запрос. Он должен быть SELECT и возвращать имя пользователя в правильном регистре. ? заменяются на параметры ниже:
    queryParams: ["%login%", "%login%", "%password%"]; # Параметры к запросу. %login% и %password% заменяются на имя пользователя и пароль соответственно
};
```
Для проверки правильности логина и пароля, этот способ обращается к SQLite-базе данных. 
::: tip Информация
Я немного отошел от этого способа в пользу способа Authlib, поэтому документация и скрипт будут позже
:::
:::
::::

## Обработчик типа SQL-BCrypt
Этот способ рекомендуется для больших проектов с алгоритмом хеширования BCrypt. 

Пример конфигурации:
:::: code-group
::: code-group-item MySQL
```bash
authProvider: "mysql-bcrypt"; # Название способа авторизации
authProviderConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя
    database: "dle?serverTimezone=UTC"; # База данных (при mariadb не нужно указывать serverTimezone)

    query: "SELECT password, name FROM dle_users WHERE (email=? OR name=?) LIMIT 1"; 
	# Запрос. Он должен быть SELECT и возвращать имя пользователя в правильном регистре. ? заменяются на параметры ниже:
    queryParams: [ "%login%", "%login%" ]; 
	# Параметры к запросу. %login% заменяются на имя пользователя. Пароль передается в лаунчер и сравнивает hash
};
```
Для проверки правильности логина и пароля, этот способ обращается к MySQL-базе данных и сравнивает hash пароля.
:::
::: code-group-item MariaDB
```bash
authProvider: "mariadb-bcrypt"; # Название способа авторизации
authProviderConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя

    query: "SELECT password, name FROM dle_users WHERE (email=? OR name=?) LIMIT 1"; 
	# Запрос. Он должен быть SELECT и возвращать имя пользователя в правильном регистре. ? заменяются на параметры ниже:
    queryParams: [ "%login%", "%login%" ]; 
	# Параметры к запросу. %login% заменяются на имя пользователя. Пароль передается в лаунчер и сравнивает hash
};
```
Для проверки правильности логина и пароля, этот способ обращается к MariaDB-базе данных и сравнивает hash пароля.
:::
::: code-group-item MySQL-8
```bash
authProvider: "mysql-8-bcrypt"; # Название способа авторизации
authProviderConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя
    database: "dle?serverTimezone=UTC"; # База данных
    timezone: "UTC"; # Замена ?serverTimezone
    useSSL: false; # Используется ли защищенное соединение

    query: "SELECT password, name FROM dle_users WHERE (email=? OR name=?) LIMIT 1"; # Запрос. Он должен быть SELECT и возвращать имя пользователя в правильном регистре. ? заменяются на параметры ниже:
    queryParams: [ "%login%", "%login%" ]; # Параметры к запросу. %login% заменяются на имя пользователя. Пароль передается в лаунчер и сравнивает hash
};
```
Для проверки правильности логина и пароля, этот способ обращается к MySQL-базе данных и сравнивает hash пароля.
:::
::: code-group-item PostgreSQL
```bash
# Скоро
```
::: tip Информация
Я немного отошел от этого способа в пользу способа Authlib, поэтому документация и скрипт будут позже
:::
:::
::: code-group-item SQLite
```bash
# Скоро
```
::: tip Информация
Я немного отошел от этого способа в пользу способа Authlib, поэтому документация и скрипт будут позже
:::
:::
::::

## Обработчик типа request
Для проверки правильности логина и пароля, этот способ обращается к указанному URL. Этот способ рекомендуется для больших проектов с CMS, которые используют нестандартные алгоритмы хеширования. 

Пример конфигурации:
```bash
authProvider: "request"; # Название способа авторизации
authProviderConfig: {
    url: "https://myserver.tld/auth.php?login=%login%&password=%password%"; # URL, к которому будет обращаться лаунчсервер. %login% и %password% заменяются на указанные логин и пароль, соответственно
    response: "OK:(?<username>.+)"; # Маска ответа успешной авторизации. В capture-группе <username> должно быть имя пользователя. В случае, если ответ отличается, он выводится в качестве ошибки
};
```

## Обработчик типа json
Для проверки правильности логина и пароля, этот способ обращается по URL с передачей POST. 
Я вообще не рекомендую данный способ, если вы не используете headless cms.

Пример конфигурации:
```bash
authProvider: "json"; # Название способа авторизации
authProviderConfig: {
    url: "https://myserver.tld/auth.php";
    userKeyName: "login"; # Ключ POST запроса с именем пользователя (на стороне php $_POST['login'])
    passKeyName: "password"; # Ключ POST запроса с паролем пользователя (на стороне php $_POST['password'])
    ipKeyName: "ip"; # Ключ POST запроса с IP пользователя (на стороне php $_POST['ip'])
    responseUserKeyName: "player"; # Ключ имени пользователя в JSON ответе серверного обработчика
    responseErrorKeyName: "error"; # Ключ ошибки в JSON ответе серверного обработчика
};
```

::: tip Информация
Я немного отошел от этого способа в пользу способа Authlib, поэтому документация и скрипт будут позже
:::
