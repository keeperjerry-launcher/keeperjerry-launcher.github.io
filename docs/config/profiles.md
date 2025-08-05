# Настройка игрового клиента

::: tip Информация
Я немного отошел от этогй доки в пользу способа Authlib, поэтому документация будут позже
:::

Рассмотрим пример конфига игрового клиента:
::: code-tabs
@tab Структура
```java
# Основная настройка клиента
version: "x.x.x"; # Версия клиента
assetIndex: "x.x.x"; # Индекс ресурсов (имя файла в indexes), 1.7.10+

# Настройка файлов клиента
dir: "XXXXX"; # Директория клиента
assetDir: "XXXXX"; # Директория ресурсов клиента
jvmVersion: "XXXXX"; # Директория Java для клиента

# Параметры клиента
sortIndex: 0; # Индекс для сортировки профилей в списке серверов лаунчера
title: "XXXXX"; # Заголовок профиля в лаунчере
serverAddress: "XXXXX"; # Имя сервера для автозахода
serverPort: 25565; # Порт сервера для автозахода

# Обновление и проверка файлов
updateFastCheck: true; # Менее надёжная, но намного более быстрая проверка файлов

# Файлы и директории, которые будут обновлены, но не будут проверяться во время игры
update: [];

# Файлы и директории, которые должны быть обязательно проверены. \\ Нужно для экранизации точки (Regexp)
updateVerify: [];

# Исключения из файлов и директорий выше
updateExclusions: [];

# Параметры и аргументы запуска клиента
mainClass: "XXXXX"; # Главный класс клиента

# Classpath клиента
classPath: [];

# Дополнительные аргументы JVM
jvmArgs: [];

# Дополнительные аргументы клиента
clientArgs: [];
```

@tab Пример 1.5.2
```java
# Основная настройка клиента
version: "1.5.2"; # Версия клиента
assetIndex: "---"; # Индекс ресурсов (имя файла в indexes), 1.7.10+

# Настройка файлов клиента
dir: "Test1.5.2"; # Директория клиента
assetDir: "asset1.5.2"; # Директория ресурсов клиента
jvmVersion: "jre-8u282"; # Директория Java для клиента

# Параметры клиента
sortIndex: 0; # Индекс для сортировки профилей в списке серверов лаунчера
title: "Test1.5.2"; # Заголовок профиля в лаунчере
serverAddress: "server.tld"; # Имя сервера для автозахода
serverPort: 25565; # Порт сервера для автозахода

# Обновление и проверка файлов
updateFastCheck: true; # Менее надёжная, но намного более быстрая проверка файлов

# Файлы и директории, которые будут обновлены, но не будут проверяться во время игры
update: [
    "servers\\.dat"
];

# Файлы и директории, которые должны быть обязательно проверены. \\ Нужно для экранизации точки (Regexp)
updateVerify: [
    "libraries", 
    "natives", 
    "mods", 
    "minecraft\\.jar"
];

# Исключения из файлов и директорий выше
updateExclusions: [
    # "mods/ic2",
    # "mods/railcraft"
];

# Параметры и аргументы запуска клиента
mainClass: "net.minecraft.launchwrapper.Launch"; # Главный класс клиента

# Classpath клиента
classPath: [ 
    "minecraft.jar", 
    "libraries" 
];

# Дополнительные аргументы JVM
jvmArgs: [
    # Some options from Mojang's launcher
    "-XX:+UseG1GC",
    "-XX:+UnlockExperimentalVMOptions",
    "-XX:G1NewSizePercent=20",
    "-XX:G1ReservePercent=20",
    "-XX:MaxGCPauseMillis=50",
    "-XX:G1HeapRegionSize=32M",

    # Some options from me
    "-XX:+AlwaysPreTouch",
    "-XX:-TieredCompilation",
    "-XX:+DisableAttachMechanism",

    # Legacy bridge (for 1.6.4 & lower) settings
    "-Dlauncher.legacy.skinsURL=http://skins.minecraft.net/MinecraftSkins/%username%.png",
    "-Dlauncher.legacy.cloaksURL=http://skins.minecraft.net/MinecraftCloaks/%username%.png"
];

# Дополнительные аргументы клиента
clientArgs: [];
```

@tab Пример 1.7.10
```java
```

@tab Пример 1.12.2
```java
```

@tab Пример 1.18.1
```java
```
:::

## Основная настройка клиента

* Параметр `version` - отвечает за версию MineCraft. Нужен для правильной работы клиента.
* Параметр `assetIndex` - Требуется для новой структуры assets, которые зашифрованы в файле `json` (найти можно в папке ассетов).

## Настройка файлов клиента

dir: "XXXXX";
assetDir: "XXXXX";
jvmVersion: "jre-8u282";

## Параметры клиента

sortIndex: 0;
title: "XXXXX";
serverAddress: "server.tld";
serverPort: 25565;

## Обновление и проверка файлов

updateFastCheck: true;
update: [];

updateVerify: [ 
    "libraries", 
    "natives", 
    "mods",
    "minecraft\\.jar", 
    "forge\\.jar"
];

updateExclusions: [ 
    "mods/carpentersblocks",
    "mods/ic2",
    "mods/railcraft" # и т.д.
];