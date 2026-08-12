# Версии источников

Перевод подготовлен и проверен для следующего набора версий:

- All the Mods 10: `7.3`
- Minecraft: `1.21.1`
- NeoForge: `21.1.247`

Контрольные суммы SHA-256:

```text
d5c4f1ace4debe15673b4a8fc18bd425aeb8f7a5f244c9e553e9330426429bcf  All-the-Mods-10-7.3.zip
0cb19c6c5d0e84bd0e2d397f2ef2970f9622f519da63910b42519124d951a662  manifest.json
a42e883b6ba05f577eda99856625833c305a3848396e6a705af8f5a4181107e3  TRANSLATION_FILES.txt
```

Список overlay основан на побайтовом сравнении текущих переводов с каталогом `overrides/` исходного архива ATM10 7.3.
Дополнительно включён 21 неизменённый `kubejs/assets/<namespace>/lang/ru_ru.json`: вместе с дополненными файлами они должны
загружаться из пакета OpenLoader, поскольку KubeJS 2101 пропускает стандартные языковые JSON. Из списка исключён устаревший
объединённый файл FTB Quests `config/ftbquests/quests/lang/ru_ru.snbt`.
