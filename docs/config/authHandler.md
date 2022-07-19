# Способы обработки сессии

Для управления авторизациями (joinServer, checkServer) и UUID игроков существуют несколько возможных обработчиков: 

## Официальные обработчики

Для того, чтобы получить необходимые данные пользователя, `LaunchServer` берет данные с официальных серверов ниже указанных сервисов.
Среди них: 
* [Mojang](https://www.minecraft.net/ru-ru) (Официальный сервис)
* [KeeperJerry.RU](https://mc.keeperjerry.ru/) (Мой сервис эмуляции официального Mojang)
* [Ely.by](https://ely.by/) (Сервис сайта авторизации + авторизация Mojang)

Пример конфигурации:
:::: code-group
::: code-group-item Mojang
```bash
authHandler: "mojang";
authHandlerConfig: {
    # Конфигурация способа обработки UUID не тебуется
};
```
Для того, чтобы получить необходимые данные пользователя, `LaunchServer` берет данные с официального сервера [Mojang](https://www.minecraft.net/ru-ru).
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/mojang`!
:::
::: code-group-item KeeperJerry.RU
```bash
authHandler: "keeperjerry";
authHandlerConfig: {
    # Конфигурация способа обработки UUID не тебуется
};
```
`LaunchServer` берет данные с моего сервера [KeeperJerry.RU](https://mc.keeperjerry.ru/).
Этот обработчик рекомендуется использовать небольшим проектам, т.к. весь процесс автоматизирован. 
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/keeperjerry`!

::: tip Все верно: MineSocial.NET переносится на мой домен!
Из-за приколов с геополитикой, мне пришлось отказаться от международного домена. Пользуюсь случаем, я отправил проект на полную переделку (переработка системы сессии и безопасности). Следите за новостями!
:::

:::
::: code-group-item Ely.By
```bash
authHandler: "elyby";
authHandlerConfig: {
    # Конфигурация способа обработки UUID не тебуется
};
```
`LaunchServer` берет данные с сервера [Ely.by](https://ely.by/). 
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/elyby`!
::: tip Смешанная авторизация
Сайт `Ely.by` использует смешанную авторизацию (свою и Mojang). Это значит, что зайти можно как с пользователя на сайте `Ely.By`, так и из лицензии от `Mojang`. За такое проксирование официальных запросов лицензионных аккаунтов, `Ely.By` получил плохой рейтинг. Будьте аккуратны!
:::
:::
::::


## Обработчик типа authlib
Способ аналогичен официальным сервисам, за исключением того, что можно самому напрямую указывать ссылки на сервисы. 
Документация: [joinUrl](https://wiki.vg/Protocol_Encryption#Client), [hasJoinUrl](https://wiki.vg/Protocol_Encryption#Server)

Пример конфигурации:
:::: code-group
::: code-group-item Пример
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "http://example.com/api/join";
    hasJoinUrl: "http://example.com/api/hasJoined";
};
```
:::
::: code-group-item Mojang
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "https://sessionserver.mojang.com/session/minecraft/join";
    hasJoinUrl: "https://sessionserver.mojang.com/session/minecraft/hasJoined";
};
```
:::
::: code-group-item KeeperJerry.RU
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "https://sessionserver.keeperjerry.ru/session/minecraft/join";
    hasJoinUrl: "https://sessionserver.keeperjerry.ru/session/minecraft/hasJoined";
};
```
::: tip Все верно: MineSocial.NET переносится на мой домен!
Из-за приколов с геополитикой, мне пришлось отказаться от международного домена. Пользуюсь случаем, я отправил проект на полную переделку (переработка системы сессии и безопасности). Следите за новостями!
:::
:::
::: code-group-item Ely.by
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "https://authserver.ely.by/session/join";
    hasJoinUrl: "https://authserver.ely.by/session/hasJoined";
};
```
::: tip Смешанная авторизация
Сайт `Ely.by` использует смешанную авторизацию (свою и Mojang). Это значит, что зайти можно как с пользователя на сайте `Ely.By`, так и из лицензии от `Mojang`. За такое проксирование официальных запросов лицензионных аккаунтов, `Ely.By` получил плохой рейтинг. Будьте аккуратны!
:::
:::
:::: 
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/authlib`!

## Обработчик типа textFile
Этот обработчик хранит все данные об авторизациях в текстовом файле, генерирует случайные UUID, но есть опция для генерации UUID из MD5 имени пользователя. 

Пример конфигурации:
```bash
authHandler: "textFile";
authHandlerConfig: {
	# Имя файла, в котором будут сохранены данные об авторизациях
    fileName: "authHandler.cfg";
	# Использовать генерацию UUID из MD5 имени пользователя
    offlineUUIDs: true;
};
```
::: tip Информация
Возможно позже я переименую его на просто `file`. Так что следите за новостями!
:::

## Обработчик типа binaryFile
Этот обработчик хранит все данные об авторизациях в бинарном файле, в остальном идентичен обработчику textFile. 

::: tip Информация
Этот обработчик существует для обратной совместимости. Просто забейте на него.
:::

## Обработчик типа json
Этот обработчик хранит все данные об авторизациях в указанной вами базе данных, к которой идет подключение.

Пример конфигурации:
```bash
authHandler: "json";
authHandlerConfig: {
    url: "https://myserver.tld/handler.php";
    urlCheckServer: "https://myserver.tld/CheckServer.php";
    urlUsernameToUUID: "https://myserver.tld/UsernameToUUID.php";
    urlUUIDToUsername: "https://myserver.tld/UUIDToUsername.php";
	
    userKeyName: "login";
    serverIDKeyName: "serverID";
    uuidKeyName: "uuid";
    accessTokenKeyName: "accessToken";
    responseUserKeyName: "username";
    responseErrorKeyName: "error";
};
```
::: tip Информация
Я немного отошел от этого способа в пользу способа Authlib, поэтому документация и скрипт будут позже
:::

## Обработчик типа SQL

Пример конфигурации:
:::: code-group
::: code-group-item MySQL
```bash
authHandler: "mysql";
authHandlerConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя
    database: "minecraft?serverTimezone=UTC";

    table: "users"; # Таблица
    uuidColumn: "uuid"; # Поле с UUID пользователей
    usernameColumn: "username"; # Поле с именами пользователей
    accessTokenColumn: "accessToken"; # Поле с accessToken
    serverIDColumn: "serverID"; # Поле с serverID
};
```
Этот обработчик хранит все данные об авторизациях в MySQL-базе данных, использует UUID готовые. 
Этот обработчик рекомендуется использовать всем проектам по мере возможности.
:::
::: code-group-item MariaDB
```bash
authHandler: "mariadb";
authHandlerConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя

    table: "users"; # Таблица
    uuidColumn: "uuid"; # Поле с UUID пользователей
    usernameColumn: "username"; # Поле с именами пользователей
    accessTokenColumn: "accessToken"; # Поле с accessToken
    serverIDColumn: "serverID"; # Поле с serverID
};
```
Этот обработчик хранит все данные об авторизациях в MariaDB-базе, использует готовые UUID. Этот обработчик рекомендуется использовать всем проектам по мере возможности.
::: 
::: code-group-item MySQL-8
```bash
authHandler: "mysql-8";
authHandlerConfig: {
    address: "localhost"; # Адрес MySQL-сервера
    port: 3306; # Порт MySQL-сервера (по умолчанию 3306)
    username: "root"; # Имя пользователя MySQL-сервера
    password: "PSP1004"; # Пароль пользователя
    database: "minecraft"; # База данных
    timezone: "UTC"; # Замена ?serverTimezone
    useSSL: false; # Используется ли защищенное соединение

    table: "users"; # Таблица
    uuidColumn: "uuid"; # Поле с UUID пользователей
    usernameColumn: "username"; # Поле с именами пользователей
    accessTokenColumn: "accessToken"; # Поле с accessToken
    serverIDColumn: "serverID"; # Поле с serverID
};
```
Этот обработчик хранит все данные об авторизациях в MySQL-базе данных 8 версии, использует готовые UUID. 
Этот обработчик рекомендуется использовать всем проектам по мере возможности.
::: 
::: code-group-item PostgreSQL
```bash
authHandler: "postgresql";
authHandlerConfig: {
    address: "localhost"; # Адрес PostgreSQL-сервера
    port: 5432; # Порт PostgreSQL-сервера (по умолчанию 5432)
    username: "root"; # Имя пользователя PostgreSQL-сервера
    password: "PSP1004"; # Пароль пользователя
    database: "minecraft"; # База данных

    table: "users"; # Таблица
    uuidColumn: "uuid"; # Поле с UUID пользователей
    usernameColumn: "username"; # Поле с именами пользователей
    accessTokenColumn: "accessToken"; # Поле с accessToken
    serverIDColumn: "serverID"; # Поле с serverID
};
```
Этот обработчик хранит все данные об авторизациях в PostgreSQL-базе данных, использует UUID готовые. 
Этот обработчик рекомендуется использовать всем проектам по мере возможности.
::: 
::: code-group-item SQLite
```bash
authHandler: "sqlite";
authHandlerConfig: {
    table: "test"; # Таблица
    uuidColumn: "uuid"; # Поле с UUID пользователей
    usernameColumn: "username"; # Поле с именами пользователей
    accessTokenColumn: "accessToken"; # Поле с accessToken
    serverIDColumn: "serverID"; # Поле с serverID
    path: "db.db"; # Путь до файла базы данных 
};
```
Этот обработчик хранит все данные об авторизациях в SQLite-базе данных, использует готовые UUID. 
Этот обработчик рекомендуется использовать администраторам проектов с психическими отклонениями.
::: 
:::: 


## Создание таблицы обработчика
Для того чтобы добавить недостающие поля и сгеренерировать UUID, можно использовать SQL-запрос:
:::: code-group
::: code-group-item Пример
```sql
-- Добавляет недостающие поля в таблицу
ALTER TABLE users
ADD COLUMN uuid CHAR(36) UNIQUE DEFAULT NULL,
ADD COLUMN accessToken CHAR(32) DEFAULT NULL,
ADD COLUMN serverID VARCHAR(41) DEFAULT NULL;

-- Создаёт триггер на генерацию UUID для новых пользователей
DELIMITER //
CREATE TRIGGER setUUID BEFORE INSERT ON users
FOR EACH ROW BEGIN
IF NEW.uuid IS NULL THEN
SET NEW.uuid = UUID();
END IF;
END; //
DELIMITER ;

-- Генерирует UUID для уже существующих пользователей
UPDATE users SET uuid=(SELECT UUID()) WHERE uuid IS NULL;
```
::: 
::: code-group-item DLE
```sql
-- Добавляет недостающие поля в таблицу
ALTER TABLE dle_users
ADD COLUMN uuid CHAR(36) UNIQUE DEFAULT NULL,
ADD COLUMN accessToken CHAR(32) DEFAULT NULL,
ADD COLUMN serverID VARCHAR(41) DEFAULT NULL;

-- Создаёт триггер на генерацию UUID для новых пользователей
DELIMITER //
CREATE TRIGGER setUUID BEFORE INSERT ON dle_users
FOR EACH ROW BEGIN
IF NEW.uuid IS NULL THEN
SET NEW.uuid = UUID();
END IF;
END; //
DELIMITER ;

-- Генерирует UUID для уже существующих пользователей
UPDATE dle_users SET uuid=(SELECT UUID()) WHERE uuid IS NULL;
```
::: 
::::