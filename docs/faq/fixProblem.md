# Решение проблем

::: tip Информация для пользователей
Если вы хотите добавить документацию о решении какой либо проблемы - сообщите об этом в дискорд канале.
::: 

## Проблемы с launch4J

Во время сборки лаунчера в `.exe` формат, появляется такая ошибка:
```java
2021.08.19 01:58:25 [ERROR] java.io.IOException: net.sf.launch4j.BuilderException: net.sf.launch4j.ExecException: 
java.io.IOException: Cannot run program "/home/launcher/libraries/launch4j/bin/windres": error=2, No such file or directory
```

::: tip Это связанно с разрядностью launch4J
launch4J используется по умолчанию для `x32/x86` систем, чтобы их могли запускать пользователи соответствующей системы. 
:::

Здесь несколько решений: 

1) От `x32/x86` можно отказаться. Достаточно [скачать архив launch4J с официального сайта](https://sourceforge.net/projects/launch4j/files/launch4j-3/3.14/) под нужную ОС и заменив содержимое папки.
Чтобы работало и на `Windows` и на `Linux` - можно скачать оба архива и скопировать их оба с заменой.

2) На 64-битных системах, может помочь установка 32-битного пакета `glibc`:
::: code-tabs
@tab Ubuntu
```bash
apt-get install lib32z1
```

@tab Debian
```bash
apt install lib32z1
```

@tab CentOS
```bash
yum install glibc.i686
```
:::

Если после данной процедуры, у вас появилась такая ошибка на ОС Linux:
```java
2021.08.19 01:58:25 [ERROR] java.io.IOException: net.sf.launch4j.BuilderException: net.sf.launch4j.ExecException: 
java.io.IOException: Cannot run program "/home/launcher/libraries/launch4j/bin/windres": error=13, Permission denied
```
Это значит, вам нужно дать доступ до этого файла, сделав его исполняемым:
```bash
chmod 755 /home/launcher/libraries/launch4j/bin/windres
```

::: tip Нюансы на MacOS
Если вы столкнулись с другой ошибкой, но с Launch4J - скорее всего, вы обладатель систем MacOS. Рекомендуем посетить Discord сервер для решения данной проблемы.
:::