# Способы обработки сессии

Для управления авторизациями (joinServer, checkServer) и UUID игроков существуют несколько возможных обработчиков: 

## Официальные обработчики

Для того, чтобы получить необходимые данные пользователя, `LaunchServer` берет данные с официальных серверов ниже указанных сервисов.
Среди них: 
* [Mojang](https://www.minecraft.net/ru-ru) (Официальный сервис)
* [MineSocial.RU](https://minesocial.ru/) (Мой сервис эмуляции официального Mojang)
* [Ely.by](https://ely.by/) (Сервис сайта авторизации + авторизация Mojang)

Пример конфигурации:
::: code-tabs

@tab Mojang
```bash
authHandler: "mojang";
authHandlerConfig: {
    # Конфигурация способа обработки UUID не тебуется
};
```

@tab MineSocial.RU
```bash
authHandler: "minesocial";
authHandlerConfig: {
    # Конфигурация способа обработки UUID не тебуется
};
```

@tab Ely.By
```bash
authHandler: "elyby";
authHandlerConfig: {
    # Конфигурация способа обработки UUID не тебуется
};
```
:::

::: tip Смешанная авторизация
Сайт `Ely.by` использует смешанную авторизацию (свою и Mojang). Это значит, что зайти можно как с пользователя на сайте `Ely.By`, так и из лицензии от `Mojang`. За такое проксирование официальных запросов лицензионных аккаунтов, `Ely.By` получил плохой рейтинг. Будьте аккуратны!
:::


## Обработчик типа authlib
Способ аналогичен официальным сервисам, за исключением того, что можно самому напрямую указывать ссылки на сервисы. 
Документация: [joinUrl](https://wiki.vg/Protocol_Encryption#Client), [hasJoinUrl](https://wiki.vg/Protocol_Encryption#Server)

Пример конфигурации:
::: code-tabs

@tab Пример
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "http://example.com/api/join";
    hasJoinUrl: "http://example.com/api/hasJoined";
};
```

@tab Mojang
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "https://sessionserver.mojang.com/session/minecraft/join";
    hasJoinUrl: "https://sessionserver.mojang.com/session/minecraft/hasJoined";
};
```

@tab MineSocial.RU
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "https://sessionserver.minesocial.ru/session/minecraft/join";
    hasJoinUrl: "https://sessionserver.minesocial.ru/session/minecraft/hasJoined";
};
```

@tab Ely.by
```bash
authHandler: "authlib";
authHandlerConfig: {
    joinUrl: "https://authserver.ely.by/session/join";
    hasJoinUrl: "https://authserver.ely.by/session/hasJoined";
};
```
:::

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

## Обработчик типа binaryFile
Этот обработчик хранит все данные об авторизациях в бинарном файле, в остальном идентичен обработчику textFile. 

::: tip Информация
Этот обработчик существует для обратной совместимости лаунчера Sashok724. Поэтому можно не брать во внимание данный способ.
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
Данный способ не описывается в пользу способа Authlib. Если данный способ будет актуален - будет обновлена инструкция по данному способу.
:::

## Обработчик типа SQL

Пример конфигурации:
::: code-tabs

@tab MySQL
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

@tab MariaDB
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

@tab MySQL-8
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

@tab PostgreSQL
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

@tab SQLite
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
:::

## Создание таблицы обработчика
Для того чтобы добавить недостающие поля и сгеренерировать UUID, можно использовать SQL-запрос:
::: code-tabs

@tab Пример
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

@tab DLE
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