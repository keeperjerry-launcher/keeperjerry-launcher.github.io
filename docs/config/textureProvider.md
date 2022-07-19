# Система скинов и плащей

## Отключить обработчик
Скины и плащи полностью отключаются.

Пример конфигурации:
```bash
textureProvider: "void";
textureProviderConfig: {
    # Конфигурация не требуется для текстур Void
};
```

## Официальные обработчики
Для того, чтобы получить необходимые данные пользователя, LaunchServer берет данные с официальных серверов указанных сервисов.
Среди них: 
* [Mojang](https://www.minecraft.net/ru-ru) (Официальный сервис)
* [KeeperJerry.RU](https://keeperjerry.ru/) (Мой сервис)
* [Ely.by](https://ely.by/) (Сервис эмуляции официального Mojang)

Пример конфигурации:
:::: code-group
::: code-group-item Mojang
```bash
textureProvider: "mojang";
textureProviderConfig: {
    # Конфигурация не требуется для текстур Mojang
};
```
Скины и плащи `LaunchServer` берет с официального сервера [Mojang](https://www.minecraft.net/ru-ru).
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/mojang` и `authHandler/mojang`!
:::
::: code-group-item KeeperJerry.RU
```bash
textureProvider: "keeperjerry";
textureProviderConfig: {
    # Конфигурация не требуется для текстур KeeperJerry.RU
};
```
Скины и плащи `LaunchServer` берет с cервера [KeeperJerry.RU](https://keeperjerry.ru/). 
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/keeperjerry` и `authHandler/keeperjerry`!
:::
::: code-group-item Ely.By
```bash
textureProvider: "elyby";
textureProviderConfig: {
    # Конфигурация не требуется для текстур Ely.by
};
```
Скины и плащи `LaunchServer` берет с cервера [Ely.by](https://ely.by/).
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/elyby` и `authHandler/elyby`!
Если вам нужен обработчик, который может работать с любым способом авторизации, то посмотрите обработчик `request` ниже.
:::
::::

## Обработчик authlib
Скины и плащи LaunchServer берет из вашего эмулятора MojangAPI. Документацию можно найти здесь: [profileURL](https://wiki.vg/Mojang_API#UUID_to_Profile_and_Skin.2FCape).

Пример конфигурации:
:::: code-group
::: code-group-item Пример
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "http://example.com/session/minecraft/profile/";
};
```
:::
::: code-group-item Mojang
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "https://sessionserver.mojang.com/session/minecraft/profile/";
};
```
:::
::: code-group-item KeeperJerry.RU
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "https://sessionserver.keeperjerry.ru/session/minecraft/profile/";
};
```
:::
::: code-group-item Ely.By
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "https://authserver.ely.by/session/profile/";
};
```
:::
::::
Для правильной работоспособности, данный способ необходимо использовать в связке с authProvider/authlib и authHandler/authlib!

## Обработчик request
Скины и плащи настраиваются всего двумя параметрами - маской URL на PNG-файл. 

Пример конфигурации:
:::: code-group
::: code-group-item Пример
```bash
textureProvider: "request";
textureProviderConfig: {
    skinsURL: "http://example.com/MinecraftSkins/%username%.png"; # Маска URL скинов
    cloaksURL: "http://example.com/MinecraftCloaks/%username%.png"; # Маска URL плащей
};
```
:::
::: code-group-item Mojang (legacy)
```bash
textureProvider: "request";
textureProviderConfig: {
    skinsURL: "http://skins.minecraft.net/MinecraftSkins/%username%.png"; # Маска URL скинов
    cloaksURL: "http://skins.minecraft.net/MinecraftCloaks/%username%.png"; # Маска URL плащей
};
```
:::
::: code-group-item Ely.by
```bash
textureProvider: "request";
textureProviderConfig: {
    skinsURL: "http://skinsystem.ely.by/skins/%username%.png"; # Маска URL скинов
    cloaksURL: "http://skinsystem.ely.by/cloaks/%username%.png"; # Маска URL плащей
};
```
:::
::::
Где параметры сами заменяют значения на:
* `%username%` - имя пользователя
* `%uuid%`- UUID пользователя
* `%hash%`- UUID пользователя без тире (без `-`)