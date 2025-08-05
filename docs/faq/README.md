# Частые вопросы (ЧаВо)

Данный список может пополняться, изменяться или удаляться.
Чтобы его пополнить - пингуйте в дискорде, чтобы добавить описание сюда.

## Ошибка: Forbidden modification

Обычно эта ошибка означает подозрительную модификацию папки клиента. 

Пример ошибки:
```java
2022.03.06 20:30:36 [ERROR] java.lang.SecurityException: Forbidden modification (ENTRY_CREATE, 1 times): 'C:\Users\4vr1se\AppData\Roaming\.kj-launcher\updates\MysteryTech\mods\memory_repo'
    at launcher.KeEPerjErRyR55.keepErJErRy6HE(SourceFile:138)
    at launcher.KeEPerjErRyR55.keepErJErRy6HE(SourceFile:147)
    at launcher.KeEPerjErRyR55.run(SourceFile:92)
    at java.lang.Thread.run(Thread.java:748)
```

Иногда с этим сталкиваются пользователи, у которых не была проведена синхронизация клиента или произошли изменения в папке `mods` (создалась какая-то дополнительная директория). или у тех, кто пытается "просунуть" какой-то сторонний мод.

### Решение проблемы
* **ОБЯЗАТЕЛЬНО** прописать команду [syncupdates](/faq/command.html#команда-syncupdates) (просто синхронизировать папку `mods`)
* Убедиться, что ваш клиент не создает каких-то дополнительных папок и `.jar` файлов.
* Убедиться, что никто не пытаестя из игроков просунуть в клиент сторонний инжект.
* Проверить, что в клиенте создана папка `mods\memory_repo` (в нашем случае) или указать ее в `updateExclusions` в [profiles](/config/profiles.html#обновление-и-проверка-фаилов) вашего клиента