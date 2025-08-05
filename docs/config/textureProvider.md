# Система скинов и плащей

## Отключить обработчик
Данным способом скины и плащи полностью отключаются на стороне лаунчера. Можно применять данный обработчик, если на сервере имеется плагин `SkinsRestorer` или т.п.

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
* [MineSocial.RU](https://minesocial.ru/) (Мой сервис)
* [Ely.by](https://ely.by/) (Сервис эмуляции официального Mojang)

Пример конфигурации:
::: code-tabs
@tab Mojang
```bash
textureProvider: "mojang";
textureProviderConfig: {
    # Конфигурация не требуется для текстур Mojang
};
```

@tab MineSocial.RU
```bash
textureProvider: "minesocial";
textureProviderConfig: {
    # Конфигурация не требуется для текстур MineSocial.RU
};
```

@tab Ely.By
```bash
textureProvider: "elyby";
textureProviderConfig: {
    # Конфигурация не требуется для текстур Ely.by
};
```
:::
Скины и плащи `LaunchServer` берет с указанного вами cервера. 
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider` и `authHandler`!


## Обработчик authlib
Скины и плащи LaunchServer берет из вашего эмулятора MojangAPI. Документацию можно найти здесь: [profileURL](https://wiki.vg/Mojang_API#UUID_to_Profile_and_Skin.2FCape).

Пример конфигурации:
::: code-tabs
@tab Пример
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "http://example.com/session/minecraft/profile/";
};
```

@tab Mojang
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "https://sessionserver.mojang.com/session/minecraft/profile/";
};
```

@tab MineSocial.RU
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "https://sessionserver.minesocial.ru/session/minecraft/profile/";
};
```

@tab Ely.By
```bash
textureProvider: "authlib";
textureProviderConfig: {
    profileURL: "https://authserver.ely.by/session/profile/";
};
```
:::
Для правильной работоспособности, данный способ необходимо использовать в связке с `authProvider/authlib` и `authHandler/authlib`!

## Обработчик request
Скины и плащи настраиваются всего двумя параметрами - маской URL на PNG-файл. 

Пример конфигурации:
::: code-tabs
@tab Пример
```bash
textureProvider: "request";
textureProviderConfig: {
    skinsURL: "http://example.com/MinecraftSkins/%username%.png"; # Маска URL скинов
    cloaksURL: "http://example.com/MinecraftCloaks/%username%.png"; # Маска URL плащей
};
```

@tab Mojang (legacy)
```bash
textureProvider: "request";
textureProviderConfig: {
    skinsURL: "http://skins.minecraft.net/MinecraftSkins/%username%.png"; # Маска URL скинов
    cloaksURL: "http://skins.minecraft.net/MinecraftCloaks/%username%.png"; # Маска URL плащей
};
```

@tab Ely.by
```bash
textureProvider: "request";
textureProviderConfig: {
    skinsURL: "http://skinsystem.ely.by/skins/%username%.png"; # Маска URL скинов
    cloaksURL: "http://skinsystem.ely.by/cloaks/%username%.png"; # Маска URL плащей
};
```
:::
Где параметры сами заменяют значения на:
* `%username%` - имя пользователя
* `%uuid%`- UUID пользователя
* `%hash%`- UUID пользователя без тире (без `-`)