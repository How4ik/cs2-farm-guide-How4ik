# Привет!

Для начала работы есть всего 2 обязательных шага:\
1\. Подготовка системы и ПО.\
2\. Установка и настройка Standard ARB.

### Jump right in

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Подготовка системы и ПО</strong></td><td>Настройте систему и удалите лишнее ПО</td><td></td><td></td><td><a href="/pages/CyH2xJQs9yWJ1S8BYNav">/pages/CyH2xJQs9yWJ1S8BYNav</a></td></tr><tr><td><strong>Установка</strong> Standard ARB</td><td>Узнайте как установить и настроить панель.</td><td></td><td></td><td><a href="/pages/7aUFmnCMx9m4smGncsXL">/pages/7aUFmnCMx9m4smGncsXL</a></td></tr></tbody></table>


# Шаг 0. Подготовка системы.

{% hint style="danger" %}
При настройке только Standard Activity Booster & Account Manager можно пропустить этот шаг.
{% endhint %}

Отключите интегрированную видео карту если она у вас есть и вы собираетесь фармить на дискретной видеокарте.

Это нужно что бы избежать крашей игры.

Как определить есть ли она у вас?

1. Открыть диспетчер задач `Ctrl+Shift+Esc`
2. Перейти на вкладку `Производительность`&#x20;
3. Если в списке есть больше одного `Графического процессора`, то у вашего процессора есть интегрированная видеокарта.

**Важно! Отключить видеокарту нужно в BIOS. Отключение её в системе не поможет.**

Как это сделать ищите в гугле по запросу "как отключить интегрированную видеокарту в bios \<Mother Board Name>"

Например: "как отключить интегрированную видеокарту в bios asus tuf gaming b550-plus"

## Windows

{% hint style="danger" %}
Для Standard Activity Booster & Account Manager подходит Windows любо версии.
{% endhint %}

Обязательно используем оригинальный образ **Windows 11 Pro x64** последней вышедшей версии. Так как панель проверяется разработчиком конкретно на такой версии Windows, будет логичным использовать её и нам.\
На Windows 10 так всё должно работать, но рекомендоманная именно 11.

Саму установку описывать не буду, гайд не про это, и инструкций по поиску, загрузке и установке самой Windows много.

После установки Windows нам в обязательном порядке необходимо установить базовые драйвера для нашей системы. Зачастую их можно найти на сайте - производителе установленной материнской платы.

После установки драйверов нам надо настроить файл подкачки:

1. Нажимаем **Win+R**
2. Вставляем - **sysdm.cpl**
3. Переходим в **Дополнительно** - **Быстродействие**
4. В параметрах быстродействия выбираем - **Дополнительно**
5. Виртуальная память - **Изменить**
6. Размер задаем по формуле: **Количество RAM** + **Файл Подкачки** >= **120 Гб!**&#x20;
7. Жмём **ОК**, перезапускаем ПК

<figure><img src="/files/UglpanZvcgGxMER99YD6" alt=""><figcaption></figcaption></figure>


# Шаг 1. Установка ПО

**ОБЯЗАТЕЛЬНО!** нужно установить [.NET и ASP.NET Core.](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

**Это нужно сделать даже если вы считаете что у вас всё установлено.**

* [ ] Скачать и установить [.NET Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.8-windows-x64-installer)
* [ ] Скачать и установить [ASP.NET Core Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.8-windows-x64-installer)
* [ ] Скачать и установить [.NET 10.0](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-10.0.201-windows-x64-installer)


# Шаг 1.2 Настройка Avast

1. Скачиваем и устанавливаем [Avast Premium Security](https://www.avast.com/premium-security)\
   [Как правильно установить Avast](/standard-arb-docs/dopolnitelnye-nastroiki/ustanovka-avast)
2. Устанавливаем NVIDIA Driver версии 546.65\
   <https://www.nvidia.com/download/driverResults.aspx/218047/en-us/>
3. Открываем Avast -> Меню\
   ![](/files/0wt6yGr2s8OnMYaMvP8M)
4. Настройки\
   ![](/files/Z83oyPtOcZCRszaCz0xQ)
5. Поиск\
   ![](/files/Ss54bTwW1p3924tcIbNj)
6. В поле вводим `geek:area` и нажимаем на `Секретные дополнительные настройки`\
   &#x20;![](/files/LZLtKeOoPanIqm3zaudV)
7. Находим `Песочница` и ниже будет настройка "`Exclusions`" и нажимаем на кнопку "`Edit`"\
   ![](/files/0wGJpiflM4ygSmJpW50L)
8. В открывшемся окне вставляем эти строки. \
   :exclamation: **Не важно NVIDIA у вас или AMD.**\
   \
   :exclamation::exclamation:**Проверьте путь до папки Steam и игры.**\
   \
   :exclamation::exclamation::exclamation:**Поменяйте** \<USERNAME> **на своё имя юзера.**

```
C:\Users\<USERNAME>\AppData\Local\NVIDIA\*
C:\Users\<USERNAME>\AppData\LocalLow\NVIDIA\PerDriverVersion\DXCache\*
C:\Users\<USERNAME>\AppData\LocalLow\AMD\DxCache
C:\Program Files\*
C:\Windows\*
C:\ProgramData\*
C:\Users\*
C:\Program Files (x86)\Steam\userdata\*
C:\Program Files (x86)\Steam\bin\*
C:\Program Files (x86)\Steam\config\*
C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo\*
C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\core\*
C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo_core\*
C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo_lv\*
C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo_imported\*
```

9. Нажмите кнопку "**Save**"\
   ![](/files/X8UvksUyc8a8qxL6vzDo)

Это всё.&#x20;


# Шаг 2. Установка и обновление драйверов

## Для AMD CPU или GPU:

Для AMD процессорв тоже нужны драйвера.

1. Переходим на [официальный сайт AMD](https://www.amd.com/en/support/download/drivers.html)
2. Нажимаем "Download Windows Drivers" скачиваем и устанавливаем. Программа сама определить всё что вам нужно установить.
3. При установке выбираем пукт "Drivers only"

<figure><img src="/files/6R83gS19WBRoGHi4ci2r" alt=""><figcaption></figcaption></figure>

## Для Intel

Установка драйверов не требуется.

## Для видеокарт NVIDIA&#x20;

1. Переходим на [официальный сайт NVIDIA](https://www.nvidia.com/en-us/drivers/)
2. Выбираем свою видеокарту и устанавливаем драйвера последней версии.
3. **НЕ устанавливайте** GeForce Experience. Nvidia Overlay приводит к крашам игры.\
   Если он установлен удалите его.<br>


# Шаг 3. Установка Standard ARB

1. Скачиваем архив с последней версией из Telegram бота [Standard BOT](https://t.me/standard_arb_bot)\
   ![](/files/nsw9ipLBVXxJ2BTfzExS)
2. Разархивируем в любое удобное место.
3. Запускаем "Standard.Desktop.exe".\
   ![](/files/Eye5xjsX9eR7yMTGw6Zk)
4. Рядом с программой должен появиться файл HWID.txt
5. Возвращаемся в [Standard BOT](https://t.me/standard_arb_bot)
6. Выбираем `Мои подписки`\
   ![](/files/TZoHgIpR5Q7u3TkNQ0y4)
7. Выбираем подписку которую ходим активировать.\
   ![](/files/IU5EK2EFEIJpMpNBs4Od)
8. Нажимаем `Активировать лицензию`\
   ![](/files/Z9PJMUjczplgaRxSYiFm)
9. Откройте файл HWID.txt и скопируйте содержимое в буфер обмена.
10. Отправьте содержимое боту как сообщение.\
    ![](/files/aBgkVMsapuez4KM72Lpy)
11. Если вы всё сделали правильно, то вы увидите сообщение "`Ваша лицензия успешно активирована!`"
12. Запускаем "Standard.Desktop.exe" ещё раз. Теперь она должна запуститься.\
    ![](/files/M8ztn7CWN2dskiBI6Cif)


# Шаг 4. Отключение Smart Screen

{% hint style="warning" %}
Предварительно [отключите Фильтр SmartScreen в Windows 10](/standard-arb-docs/prochee/otklyuchenie-smartscreen-v-windows-10)
{% endhint %}

Для корректной работы фермы перед её запуском необходимо в скачанном архиве с панелью, в папке "publish" запустить все файлы с расширением .exe

<figure><img src="/files/uwLUUWo1YZ03MSrH7Wse" alt=""><figcaption></figcaption></figure>


# Шаг 5. Настройка Standard ARB

{% hint style="danger" %}
При настройке только Standard Activity Booster & Account Manager пропустите этот шаг.
{% endhint %}

1. Нажимаем кнопку Settings\
   ![](/files/CvqCG6UyYSmwbE1n6n4B)

2. Перед вами откроется окно настроек.\
   ![](/files/jZl1hWyw6RbTOcemeetX)

3. Путь до папки Steam\
   Пример как указывать: `C:\Program Files (x86)\Steam`

4. &#x20;Путь до папки с игрой\
   Пример как указывать: `C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive`

5. &#x20;Таймауты для разных этапов фарма, указываются в минутах:\
   (8) Steam launch - если за указанное время аккаунты и игры не будут полностью загружены панель перезапустит следующую пачку аккаунтов.\
   При первом запуске программы аккаунты запускаются дольше.\
   \
   (9) Make friends - если за указанное время аккаунты не смогу добавиться в друзья друг к другу панель перезапустит пачку аккаунтов.\
   Среднее время на этот этап до 1 минуты.\
   \
   (10) Search server - если за указанное время общий сервер не будет найден панель перезапустит пачку аккаунтов.\
   Время поиска от 2 до 15 минут. В среднем до 5 минут.\
   \
   (11) Max minutes between games - если процесс фарма прервётся и панель не сможет его восстановить, то по пришествию указанного времени пачка будет перезапущена.\
   Подобные ошибки крайне редки и панель почти всегда восстанавливает процесс фарма однако, игра не всегда стабильна и переодически случаются ошибки требующие перезапуска аккаунтов(1-2 раза в день).

6. Farm 0 lvl - поставьте галочку если хотите фармить **non-prime** аккаунты.

7. Try to find Steam - панель автоматически найдёт через реестр Windows папку где установлен Steam и CS2

8. Save settings - сохранение настроек. Настройки будут сохранены в файле appsettings.Production.json

9. Close - закрыть окно настроек. Настройки не будут сохранены в файл.


# Шаг 6. Импорт аккаунтов

1. В контекстном меня выбираем "Setup" -> "Import accounts"\
   ![](/files/om8zJwvUqdHPKvYpUS54)
2. Откроется файловый диалог для выбора файлов содержащих пары login и passwod

```
login1:password1
login2:password2
login3:password3
```

3. Выберите файл(ы)\
   ![](/files/92vKddUtGC7FxCdp63VZ)
4. После выбора файлов с логинами и паролями откроется ещё один файловый диалог для выбора папки содержащей maFiles\
   **Важно! Файлы .maFile должны быть названы логинами аккаунтов.**\
   Например login1.maFile\
   ![](/files/DjPWz568trkNj4hlwm3v)
5. Если для каких-то аккаунтов в папке не будут найдены maFile, то панель пометит такие аккаунты красным цветом.\
   ![](/files/wOmQzD7GGBtuocr0q9fK)
6. Что бы это исправить В контекстном меня выбираем "Setup" -> "Update maFiles"\
   ![](/files/eGzlucWHD2PQTFYHBYce)
7. В файловом диалоге выбираем папку которая содержит недостающие maFile-s.

Не беспокойтесь о дубликатах аккаунтов и maFiles, панель их проигнорирует.

8. Спарсите Lvl аккаунтов.\
   В контекстном меню "Controls" -> "Parse private LVL"\
   ![](/files/joT8wcb56DF7IVPL1zOW)

9. Далее для всех аккаунтов рекомендуется создать сессии для стабильной работы.\
   Нужно выделать аккаунты и нажать Create session, при работе без прокси пауза между авторизациями 1 минута для того что бы не поймать Rate limit на авторизацию.

<figure><img src="/files/5sIo6Ea69PYZdX5JXLu8" alt=""><figcaption></figcaption></figure>

Если всё хорошо в столбце с печенькой должна появиться появиться галочка. В самом правом столбце будет результат выполнения или код ошибки.


# Шаг 7. Настройка SRT

Перед запуском нужно настроить SRT(Steam Route Tool). Эта программа для выбора региона сервера в каком аккаунты будут играть.

**SRT встроен в программу**\
Остальные **SRT не работают** должным образом.

* Прежде всего Идём в Пуск -> Ищем "`Брандмауэр Защитника Windows`"\
  Проверяем что открывшееся окно выглядит вот так.<br>

  <figure><img src="/files/l8ikitkkjDJtNea7BtZt" alt=""><figcaption></figcaption></figure>

* Если нет, то нажимаем кнопку "Использовать рекомен. параметры"\
  ![](/files/P3l1g3Maifan1J2Pti87)

* **SRT** встроенный в программу выглядит вот так:\
  ![](/files/xR8vtZX8R8hltbgHD89b)<br>

* Для того что бы выбрать лучший сервер переходим на сайт \
  <https://24timezones.com/#/map>\
  И смотрим где сейчас ночь или утро, оптимально с 01:00 до 12:00\
  ![](/files/3dj1pFZiM8ycEYfBr85R)\
  На пример на скриншоте оптимальны азиатские сервера\
  Singapure, Sydney, Seul, Tokyo и т.д

* Выбираем один из них -> находим в таблице -> выбираем ->\
  нажимаем кнопку "Choose server"\
  ![](/files/IkJUT3vV9LgrKcqlphen)<br>

Всё готово что бы начинать фарм.


# Шаг 8. Запуск

{% hint style="info" %}
Что бы остановить панель используйте комбинацию **CTRL + ALT + Q**
{% endhint %}

1. Перед первым запуском панели. На аккаунтах нужно спарсить Private LvL и Exp.\
   ![](/files/DYAxHgt5Du93Sb0ZLyg2)

{% hint style="info" %}
Для собственного успокоения после того как панель офармтит все аккаунты можно спарсить их ещё раз. На случай если почему-то панель не смогла это сделать сама.
{% endhint %}

2. Далее нам нужно создать сессии которые будут использоваться для авторизации.\
   1\. Переходим на вкладку Management\
   2\. Выделяем все аккаунт в таблице с помощью Ctrl+a\
   3\. Нажимаем кнопку Creare sessions<br>

   <figure><img src="/files/fwnCZMcorLUCexQuHWVT" alt=""><figcaption></figcaption></figure>
3. Теперь можно начинать фарм. Жмём Start и с этого момента ваше участие не требуется.\
   ![](/files/oDmDHTlpl0CaqTO46lPC)
4. Что бы остановить панель используйте комбинацию **CTRL + ALT + Q**


# Шаг 9. Сбор дропа

Панель не собирает дроп в игре. Это в первую очередь связано с неточностью при выборе и невозможностью нормально оценить предметы.

Вместо подобного кривого решения панель соберёт дроп без запуска игры.

{% hint style="info" %}
Прежде всего спешу заверить что это безопасно и с точки зрения игры отличить запускали вы игру для сбора или сделали это через панель невозможно.
{% endhint %}

1. Для сбора дропа нажимаем Controls -> Collect drop for all<br>

   <figure><img src="/files/K4u0lg2giGQYms0MO7Lu" alt="" width="100"><figcaption></figcaption></figure>

2. Перед вами открое окно сборщика дропа.\
   ![](/files/THg8Av8eoZy2NdVGogzM)\
   \
   Ставим галочку **`Select automatically by max price`** если хотим что бы панель сама собрала самый дорогой дроп.\
   В противном случае панель будет спрашивать что собрать у вас.\
   \
   ![](/files/oeec7KabmeYF03aPSe3I)

3. Нажимаем кнопку **`Start`**&#x20;

4. После того как дроп будет собран можно посмотреть что вам выпало, цену предмета и его float.\
   ![](/files/3tLxXXSxjlqRuJUqQzcB)

{% hint style="info" %}
Черным текстом отображаются предметы которые выбраны.\
Серым проигнорированные предметы.
{% endhint %}


# Обновление до новой версии

Для обновления до следующей версии нужно заменять все файлы в папке файлами из архива.

{% hint style="info" %}
Все настройки сохраняются в файле **appsettings.Production.json**

Все данные аккаунтов сохраняются в базе данных, база данных в свою очередь находится в папке db

Файлы из архива не повредят и не затрут ваши настройки и данные аккаунтов.
{% endhint %}


# Функционал вкладки "Management" (что и куда жмать)


# Группа "Account Management"

<figure><img src="/files/li5ve3wPVMIEMoG1yBuG" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Все функции работают только для выделенных аккаунтов.\
Без [прокси](https://t.me/node_proxy_bot?start=87083713) работает в однопоточном режиме (под одному аккаунту подряд).\
С [прокси](https://t.me/node_proxy_bot?start=87083713) возможна работа единовременно любого количества аккантов. 👉🏻 [Настройка](/standard-arb-docs/prochee/gde-i-kak-importirovat-proksi)
{% endhint %}

1. <mark style="color:green;">**Create Session**</mark> - создает сессию аккаунта. Необходимо сделать при первом иморте аккаунтов
2. <mark style="color:green;">**Load game/vac bans**</mark> - покажет наличие VAC бан
3. <mark style="color:green;">**Update All Info**</mark> - обновляет всю информацию на аккаунте (на данный момент кнопка не работает)
4. <mark style="color:green;">**Update Balance**</mark> - показывает текущий баланс аккаунта
5. <mark style="color:green;">**Update Steam Points**</mark> - отображает количество [очков магазина](https://store.steampowered.com/points/shop) украшений профиля&#x20;
6. <mark style="color:green;">**Update games for cards farm**</mark> - показывает, сколько карточек может выфармить аккаунт. Помимо отображения числа позволяет отфармить эти карты через функции "Activity Booster"
7. <mark style="color:green;">**Update last transaction date**</mark> - показывает дату последней транзакции на аккаунте (последняя транзакция - либо последняя **покупка** на ТП, либо покупка в магазине Steam). Это необходимо для понимания когда заблокируется ТП (1 год от этой даты)


# Группа "Inventory and Trading"

<figure><img src="/files/fYljDRRaggkJIvmy8jGX" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Все функции работают только для выделенных аккаунтов.\
Без [прокси](https://t.me/node_proxy_bot?start=87083713) работает в однопоточном режиме (под одному аккаунту подряд).\
С [прокси](https://t.me/node_proxy_bot?start=87083713) возможна работа единовременно любого количества аккантов. 👉🏻 [Настройка](/standard-arb-docs/prochee/gde-i-kak-importirovat-proksi)
{% endhint %}

1. <mark style="color:green;">**Reload Inventory**</mark> - загружает предметы инвентарей из указанных в настройках игр
2. <mark style="color:green;">**Loot Accounts**</mark> - отправляет загруженные предметы на указанную трейд ссылку. 👉🏻 Подробнее
3. <mark style="color:green;">**Load Trade Offer Url**</mark> - загружает ссылки на обмен (ПКМ по аккаунту Copy Trade Offer Link)
4. <mark style="color:green;">**Accept All Confirmations**</mark> - принимает все SDA подтверждения
5. <mark style="color:green;">**Accept All Income Offers**</mark> - принимает все входящие обмены (только пустые с твоей стороны)
6. <mark style="color:green;">**Stack Items**</mark> - объединяет в один слот все предметы во всех  инвентарях, которые можно соединить

<figure><img src="/files/LMx3ZJsZpZWEpTXlyVOi" alt=""><figcaption></figcaption></figure>

7. <mark style="color:green;">**Check Trade Restrictions**</mark> - проверка доступности обменов


# Группа "Market and Store"

<figure><img src="/files/BtZfr8egkW5Axxn3hG0t" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Все функции работают только для выделенных аккаунтов.\
Без [прокси](https://t.me/node_proxy_bot?start=87083713) работает в однопоточном режиме (под одному аккаунту подряд).\
С [прокси](https://t.me/node_proxy_bot?start=87083713) возможна работа единовременно любого количества аккантов. 👉🏻 [Настройка](/standard-arb-docs/prochee/gde-i-kak-importirovat-proksi)
{% endhint %}

1. <mark style="color:green;">**Check Market Restrictions**</mark> - проверяет торговую площадку на наличие блокировки
2. <mark style="color:green;">**Update market history**</mark> - загружает всю историю торговой площадки
3. <mark style="color:green;">**Unblock Market**</mark> - покупает самый дешевый внутриигровой предмет для разблокировки ТП.

&#x20;(требует на балансе наличие 0.01 USD. На Украинских аккаунтах 1.00 UAH)

4. <mark style="color:green;">**Buy TF2 Keys on Steam Market**</mark> - эта функция позволит создавать заказы на покупку для всего доступного баланса на ВСЕХ выбранных аккаунтах
5. <mark style="color:green;">**Open buy item dialogue**</mark> - открывает диалог покупки предметов на ТП

<figure><img src="/files/13TkpqL9hB9UylY2lN0k" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
a. вставляем ссылку из торговой площадки на необходимый предмет

b. покупка на весь имеющийся баланс на аккаунте

c. покупка определенного количества предметов

d. создать заказ на покупку

e. будет куплен самый дешевый предмет, который доступен на рынке
{% endhint %}

6. <mark style="color:green;">**Open game purchase dialogue**</mark> - открыть диалог покупки игр

<figure><img src="/files/UBEc5eGKNtVcHBvWA5um" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
a. вставляем ссылку из стим магазина или Package ID игры

b. вводим код страны

c. минимальное количество новых игр (при значении "2" бандл не купится, если у Вас в итоге не будет 2 новые игры из этого бандла)
{% endhint %}


# Группа "CS2 Actions"

<figure><img src="/files/YKIeMB2Chzx8jdy2n8jC" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Все функции работают только для выделенных аккаунтов.\
Без [прокси](https://t.me/node_proxy_bot?start=87083713) работает в однопоточном режиме (под одному аккаунту подряд).\
С [прокси](https://t.me/node_proxy_bot?start=87083713) возможна работа единовременно любого количества аккантов. 👉🏻 [Настройка](/standard-arb-docs/prochee/gde-i-kak-importirovat-proksi)
{% endhint %}

1. <mark style="color:green;">**Update game info**</mark> - загружает данные о прайм статусе, уровне и количестве опыта
2. <mark style="color:green;">**Parse Drop Statistics**</mark> - парсит статистику дропа. С отображением даты последнего дропа
3. <mark style="color:green;">**Claim medal**</mark> - получить медаль
4. <mark style="color:green;">**Buy CS2 Prime Upgrade**</mark> - покупка прайм статуса
5. <mark style="color:green;">**Update pass progress**</mark> - обновить текущий прогресс Armory Pass
6. <mark style="color:green;">**Buy Armory Pass**</mark> - [покупка Armory Pass](https://standard-arb.gitbook.io/standard-arb-docs/nachalo/farm-armory/shag-1.-podgotovka-akkauntov-k-farmu-i-pokupka-armory-pass)
7. <mark style="color:green;">**Activate Armory Pass**</mark> - [активация Armory Pass](https://standard-arb.gitbook.io/standard-arb-docs/nachalo/farm-armory/shag-1.-podgotovka-akkauntov-k-farmu-i-pokupka-armory-pass)
8. <mark style="color:green;">**Deactivate Completed Pass**</mark> - [деактивация Armory Pass](https://standard-arb.gitbook.io/standard-arb-docs/nachalo/farm-armory/shag-3.-okonchanie-farma-i-pokupka-predmetov-za-zvyozdy)
9. <mark style="color:green;">**Buy items in Armory Store**</mark> - [покупка предметов в Armory Store](https://standard-arb.gitbook.io/standard-arb-docs/nachalo/farm-armory/shag-3.-okonchanie-farma-i-pokupka-predmetov-za-zvyozdy)


# Группа "Account Credentials"

<figure><img src="/files/OQLJdnyJLnyY8GaCwiqh" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Все функции работают только для выделенных аккаунтов.\
Без [прокси](https://t.me/node_proxy_bot?start=87083713) работает в однопоточном режиме (под одному аккаунту подряд).\
С [прокси](https://t.me/node_proxy_bot?start=87083713) возможна работа единовременно любого количества аккантов. 👉🏻 [Настройка](/standard-arb-docs/prochee/gde-i-kak-importirovat-proksi)
{% endhint %}

1. <mark style="color:green;">**Open steam profile**</mark> - открыть профиль стим.
2. <mark style="color:green;">**Change Password**</mark> - сменить пароль

{% hint style="info" %}
Новый пароль будет сохранён в базе данных и доступен для копирование через ПКМ -> Copy Login:Password.

Так же пара Login:Password сохранится в текстовый файл NewPasswords.txt рядом с панель.
{% endhint %}

3. <mark style="color:green;">**Change email**</mark> - перепревязка почты.

{% hint style="info" %}
Поддерживаются следующие почтовые домены:

1. hotmail.com
2. outlook.com
3. live.com

Формат импорта:

<email1@domain.com>|password|RefreshToken|ClientId\
<email2@domain.com>|password|RefreshToken|ClientId

Кнопка импорта почт доступна там же гре кнопка импорта аккаунтов.
{% endhint %}


# Фарм ARMORY


# Шаг 1. Подготовка аккаунтов к фарму и покупка Armory Pass

После импорта и парсинга LVL аккаунтов из [Шаг 6. Импорт аккаунтов](/standard-arb-docs/nachalo/shag-6.-import-akkauntov), следует закупить Armory pass.

Покупка Armory pass:

1. Для этого переходим на вкладку "Management"&#x20;
2. Открываем функционал "Looter Settings"
3. Выбираем нужное нам количество Armory pass для покупки "Passes to buy" 1-5 (стоит отметить, что для одного аккаунта купить можно одновременно максимум 5 на плотный отфарм).
4. В группе "CS2 Actions" нажимаем "Buy Armory Pass".&#x20;
5. После успешной покупки нужного количества Armory Pass обязательно нужно активировать их "Activate Armory Pass"&#x20;

<figure><img src="/files/ujthSiJpRVz6J9C4XP4m" alt=""><figcaption></figcaption></figure>


# Шаг 2. Запуск фарма Armory pass

После покупки и активации Armory pass на аккаунтах переходим к его фарму:&#x20;

1. Переходим на вкладку  "Farming"&#x20;
2. Выделяем 6 аккаунтов, которые хотим фармить в первой пачке
3. Жмем на них ПКМ - "Farm BattlePass for selected" (после они выделятся небесно-голубым цветом)

<figure><img src="/files/AhcdckOSZPM0ttaVd8vb" alt=""><figcaption></figcaption></figure>

Аккаунты выделенные небесно-голубым цветом будут фармить Armory Pass

<figure><img src="/files/zuxasM15rwzacnJdvjgy" alt=""><figcaption></figcaption></figure>

4. Непосредственно запуск фарма в вкладке "Controls"
5. Выбираем параметр "Start".

<figure><img src="/files/zWiISXpQggFj2t70fGWE" alt=""><figcaption></figcaption></figure>

После старта должен запуститься процесс фарма (открытие аккаунтов стим и игр соответственно)

<figure><img src="/files/vrOMz74tYRKd9Pow52sJ" alt=""><figcaption></figcaption></figure>

Когда на первых 6-ти аккаунтах из пачки завершается фарм звёзд Armory pass оно само не остановится и нужно этот момент контролировать (для этого подойдет настройка уведомлений через ТГ-бота [Telegram Notifications](/standard-arb-docs/telegram-notifications)). &#x20;

По окончании фарма отключаем его "Controls" ----> "Stop"

<figure><img src="/files/TcWzwNdjGSZi3sLpS5SO" alt=""><figcaption></figcaption></figure>


# Шаг 3. Окончание фарма и покупка предметов за звёзды

После того как фарм Armory pass и звёзд благополучно завершен переходим к стадии закупки шмоток.

1. На вкладке "Managment"
2. В функционале "Looter Settings"&#x20;
3. Выбираем в параметре "Armory Store item" необходимую шмотку&#x20;
4. В группе "CS2 Actions"&#x20;
5. Нажимаем "Buy items in Armory Store" и оно закупит на все звезды выбранный Вами товар.
6. После закупки деактивируем завершенные пассы "Deactivate Completed Pass"

<figure><img src="/files/8QNQjPGk6buIviEwCBLE" alt=""><figcaption></figcaption></figure>


# Wingman(2 vs 2)

В обновление 2.8.0.0 на замену режиму Arms Race был добавлен фарм в режиме 2 на 2.\
Фарм в режиме Wingman работает **без необходимости играть ничьи.**\
Аккаунты играют в особом порядке который позволяем им находить игры между собой.

Для работы панели используется AI который начиная с этой версии работает на GPU, при этом он так же может работать и CPU если вы используете встроенную видео карту.\
Принудительно выключить использование GPU можно в настройках в разделе **Maps,** переключатель **Use GPU for AI**\
![](/files/DrualXJggsWL6HdjxPWk)

Обновлённый интерфейс:

<figure><img src="/files/WzqWJliyd0w15UGORuwp" alt=""><figcaption></figcaption></figure>

\
Новые переключатели:

1. **Enable Sorting** - включает в таблице возможность сортировки аккаунтов по столбцам. При его выключении сортировка продолжает работать, но поменять её нельзя(что бы случайно не сбить).

{% hint style="info" %}
Для сортировки по нескольким столбцам кликайте по названию столбца с зажатой кнопкой Shift.
{% endhint %}

2. **Enable grouping** - включает возможность объединить аккаунты в группы в которых они будут фармить до тех по пока дроп не получат все аккаунты в группе.

{% hint style="danger" %}
**Аккаунты без группы** в фарме участвовать не будут!
{% endhint %}

3. **Wingman mode -** включает фарм в режиме Wingman. \
   Шестерёнка рядом с **Wingman mode** откроет небольшое меню настроек.

<figure><img src="/files/2DkACrssm6gbfE6iot4w" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Применение гранат может немного ускорить процесс фарма.
{% endhint %}

{% hint style="info" %}
Если по какой-то причине вы хотите наиграть ничьи,  выкрутите ползунок Tie probability в 100%\ <img src="/files/VUpCbrsnktPt1Reu52j6" alt="" data-size="original">
{% endhint %}

## Группировка аккаунтов.

{% hint style="success" %}
Используйте группировку **после получения званий**. До этого сортируйте аккаунты по **W/L Diff**. И у становите таймаут поиска сервера 15 минут.
{% endhint %}

1. Если ваши аккаунты уже играли в режиме 2 на 2, то перед объединением их в группы необходимо спарсить их статистику.\
   1\. Выделите аккаунты в таблице.\
   2\. Нажмите ПКМ\
   3\. Выберите пункт: "**Update CS2 stats**"\
   ИЛИ\
   1\. Перейдите на вкладку Management\
   2\. Выделите аккаунты\
   3\. В секции **CS2 Actions** кнопка **Update CS2 Game Stats**\
   [Как добавить прокси и установить потоки.](https://standard-arb.gitbook.io/standard-arb-docs/prochee/kak-prodat-terminal-keis)
2. Отсортируйте аккаунты по статистике.
3. Для добавления аккаунта в группу кликните по нему ПКМ и нажите "**Assing to group**"

<figure><img src="/files/UIZaXiUllaUSMyCaBR5s" alt=""><figcaption></figcaption></figure>

4. Выберите существующую группу или создайне новую.

{% hint style="info" %}
Вы можете выбрать несколько аккаунтов используая CTRL+Click или SHIFT+Click\
А так же выбрать все аккаунты через CTRL+A, нажать **Assing to group** и все аккаунты будут собраны группы.
{% endhint %}

{% hint style="info" %}
Аккаунты между группами можно перетаскивать мышкой.
{% endhint %}

## Выбор карт

Вы можете включить сразу все доступные карты. После каждой смены карты панель будет выбирать случайную из списка. Время фарма на картах отличается незначительно.\
Карты de\_nuke и de\_vertigo будут добавлены в одном из следующих обновлений.

{% hint style="info" %}
Карта de\_inferno является самой популярной в режиме 2 на 2, выключите её для облегчения поиска игры в случае если вы испытываете с этим проблемы.
{% endhint %}

{% hint style="info" %}
Панель не чувствительна к высокому пингу, вы можете выбирать SRT сервер с пингом до 220 без риска отмены игры.
{% endhint %}

## Фарм 8 или 12 аккаунтов одновременно.

Вы можете добавить на свой ПК дополнительных пользователей с собственными клавиатурой и мышью с помощью RDPWrapper. Что позволит вам запустить копию панели под каждым из созданных пользователей.

[ПО и гайд как это сделать доступно по этой ссылке.](/standard-arb-docs/prochee/nastroika-rdp-i-parallelnogo-farma)


# Activity Booster

**Activity Booster** - это модуль основная задача которого очеловечить ваши аккаунты.\
Он спроектирован для работы в фоновом режиме и не должен мешать процессу фарма кейсиков.

### Wizard

В обновлении от 11.05.25 в Activity Booster добавлен Wizard - Мастер настройки Activity Booster. Он создан для упрощения первоначальной настройки задач.

{% hint style="success" %}
Если вы не хотите разбираться с настройками просто жмите Далее. Все настройки уже оптимальные.

Не забудьте запустить Activity Booster кнопкой Start.
{% endhint %}

<figure><img src="/files/xcjmJrZFomvZAh2Q2MOS" alt="" width="375"><figcaption></figcaption></figure>

На текущий момент представлены 2 пресета настроек:

* Фарм кликеров
* Повышение активности аккаунта

При выборе **Фарм кликеров** всё что требуется нажимать кнопку Далее. В итоге вы получите оптимальные настройки для фарма.\
При выборе **Повысить активность аккаунта** вам доступна опциональная задача **Покупка случайной игры в Steam** с возможностью выбрать периодичности её выполнение:

* Один раз
* Один раз в неделю
* Один раз в месяц

Для покупки будет выбрана она из игр из Steam Store со следующими фильтрами:

* Игры не должно быть на аккаунте
* В игре есть карточки

Со списком можно ознакомить по ссылке - [Steam games](https://store.steampowered.com/search/?sort_by=Price_ASC\&category2=29\&hidef2p=1\&ndl=1)

<details>

<summary>Интерфейс остальных шагов</summary>

<figure><img src="/files/DVuJNWYlLxVBUlB9mU09" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/rx07aadytp68PgKVEPxj" alt=""><figcaption><p>График работы</p></figcaption></figure>

</details>

Последний шаг это сохранение подготовленных задач.<br>

<figure><img src="/files/oxtIOcbBQDX88IvcnNJS" alt="" width="375"><figcaption></figcaption></figure>

## Обзор

Сердцем Activity Booster является **Task Scheduler** найти его можно на вкладке Activity Booster.

<figure><img src="/files/t9HwmqhRSFUH228eD3Xw" alt=""><figcaption></figcaption></figure>

1. **Import proxies** - для работы рекомендовано использовать прокси.&#x20;
2. **Clear Proxies** - кнопка удаления всех прокси и отвязки их от аккаунтов.
3. **Proxies count** - количество прокси в базе.
4. **Accounts without proxies** - количество аккаунтов к которым не привязаны прокси.
5. **Start/Stop** - кнопка запуска и остановки Activity Booster.
6. **Threads count** - количество потоков которое будет использоваться для работы Activity Booster.
7. **Total Activities** - общее количество выполненных и запланированных активностей.
8. **Completed Activities** - количество выполненных активностей.
9. **Create** - кнопка создания запланированной задачи- **Scheduled Task**.
10. **Edit** - кнопка редактирования запланированной задачи.
11. **Delete** - кнопка удаления запланированной задачи.
12. **Scheduled Task Table** - таблица со всеми запланированными задачами.
13. **Scheduled Task** - запланированная задача.
14. **Use proxy** - переключатель для включения и отключения прокси.

## Create **Scheduled Task**

<figure><img src="/files/JwPSjeePiMofnocrTwPB" alt="" width="375"><figcaption></figcaption></figure>

Запланированные задачи спроектированы для многократного, однократного или регулярного запуска.\
Задача будет запущена для каждого аккаунта добавленного в панель.\
Для задач предоставляются следующие гарантии:

1. Периодичность выполнения:\
   **Daily** - задача будет выполняться 1 раз для каждого аккаунта в случайное время между From и To.\
   **Weekly** - задача будет выполнена для каждого аккаунта в выбранные дни в случайное время между From и To. Задачи планируются на текущую неделю с понедельника до воскресенья.\
   **Monthly** - задача будет выполнена указанное количество раз(Count executions) за месяц в случайное время между From и To.  Задачи планируются на текущий месяц.\
   **Onetime** - задача будет выполнена только один раз для каждого аккаунта в случайное время между From и To.\
   **Every** - задача будет выполняться с заданным интервалом(execute every) в течении времени между From и To. Execute every конфигурируется в формате hh:mm(часы:минуты). Время выполнения задачи рассчитывается по формуле Время запуска предыдущей задачи + Execute every. \
   К примеру вы запланировали задачу с типом **Every**, временем **Execution every** 0:30 и **Duration** 5 минут. Первая задача была запущена в 19:00, завершится в 19:05. Вторая задача будет запланирована на 19:30, третья на 20:00 и т.д.
2. Коридор времени выполнения. Задачи будут планироваться и выполняться только в указанный временной промежуток от From до To.

## Интерфейс

**Action** - задача которая будет выполняться.

**Task name** - имя задачи.

**Status** - вкл/выкл планирования и выполнения задачи.

**Execution type** - тип выполнения задачи **Daily, Weekly, Monthly, Onetime, Every**&#x20;

**Time table** - временной промежуток в который будет планироваться и выполняться задача.

**Duration** - время в течении которого будет выполняться задача с динамическим выполнением. На момент написания гайда это "Play random game on account" активность.

**Minimal delay between runs** - минимальная задержка для запуска автивности.

**Active days** - доступны для типа выполнения **Weekly** дни в которые будет планироваться выполнение задачи.

**Count Executions** - доступно для типа выполнения **Monthly** количество раз которе задача будет выполнена в течении текущего месяца в случайное время между **From** и **To.**

**Execute Every** - доступно для типа выполнения **Every** временной промежуток между планированием выполнения задачи.

## Рекомендованные задачи

Можно создать сразу две и запустить.

<figure><img src="/files/gadNW8Jaw9nuDL87XpG7" alt="" width="375"><figcaption><p>Первая</p></figcaption></figure>

<figure><img src="/files/rrTzws9A26qQdHnjZLPM" alt="" width="375"><figcaption><p>Вторая</p></figcaption></figure>


# Account Management

Account Manager - позволяет автоматизировать рутинные действия на аккаунтах.

<figure><img src="/files/TjKHiQXzvQ3BADK9MZ8h" alt=""><figcaption></figcaption></figure>

Для того что бы активировать какую либо функцию вам нужно выделить 1 или более аккаунтов таблице.

Сделать это можно любым привычным вам способом:

1. Ctrl+A - выбрать всё
2. Ctrl+ПКМ - добавить в выделенные аккаунт
3. Shift+ПКМ - выделить все аккаунты между уже выделенным и тем по которому кликнули

## Описание интерфейса

<figure><img src="/files/ElMGciJQThHAcecld0QI" alt=""><figcaption></figcaption></figure>

1. **Печенька** - галочка означающая сохранена ли сессия для аккаунта, это означает что панель не будет авторизовываться в стиме если нужно совершить какие-то действия
2. **Корона** - наличие прайм статус на аккаунте. По умолчанию её всегда нет, что бы проставить её нужно выполнить команду **Update game info**, она проверит наличие прайма и обновит Private LvL
3. **Items** - количество предметов в инвентаре CS2
4. **Cost** - общая стоимость инвентаря CS2
5. **Market** - открыт ли доступ к торговой площадке Steam, по умолчанию галочка не проставлена, что бы обновить информацию нужно выполнить команду **Check Market Restrictions**
6. **Last Task Result** - тут будет отображаться результат последних выполненных задач
7. ~~**Pause between trades** - пауза в секундах между отправкой предложений обменов отправленных командой **Loot Accounts**~~
8. **Count passes to buy** - тут можно указать сколько Armory Passes панель купит/активирует за один раз командами **Buy Armory Pass/Activate Armory Pass**
9. Drop stats end date - крайняя дата до которой будет собираться история дропа для аккаунта командой **Parse Drop Statictics**
10. **Armory Store Item** - тут можно выбрать какие предметы будут закупаться в Armory Store командой **Buy items in armory store**\ <img src="/files/WwCJeNT7zhysK5jDofGX" alt="" data-size="original">
11. **Stop** - остановить выполнение команд.
12. **Trade url** - можно сохранить несколько трейд ссылок на которые будут лутаться предметы командой **Loot Accounts.** Для отправки предложения обмена будет выбран случайный из списка.
13. <img src="/files/y3zqfwq79432l6bjZYtm" alt="" data-size="line"> Кнопка открывающая настройки **Лутинга**. Более подробно о нём в следущем разделе.\ <a href="/pages/xx8CPUpXtXvSz7NnM3Wb" class="button primary">Перейти к разделу Looter Settings</a>

Назначение всех команд интуитивно понятно по названию и делает ровно то что там написано без неожиданных действий.


# Inventory Manager

Inventory Manager - автоматизирует продажу предметов на торговой площадке steam и позволяет управлять активными листингами. Поддерживает многопоточную оценку предметов, продажу, подтверждение и отмену листингов.

<figure><img src="/files/vC8zh6OhDPocsWCMYDfx" alt="" width="563"><figcaption></figcaption></figure>

Интерфейс Inventory Manager разделён на 2 части - список аккаунтов и инвентарь.

### Looter/Inventories settings

Кнопка <img src="/files/4UHlJmJfEw0dKMAM9MYB" alt="" data-size="line"> в правом верхнем углу списка аккаунтов откроет окно настроек.

<figure><img src="/files/clAPVDT6TUKN8Wx2etP9" alt="" width="375"><figcaption></figcaption></figure>

**Proxies count** - показывает количество сохранённых прокси.&#x20;

{% hint style="info" %}
Прокси автоматически привязываются к аккаунту и в случает ошибки подключения или рейт лимита будет заменена случайно не занятой. \
Одна прокси может быть привязана к нескольким аккаунтам если количество аккаунтов больше чем количество прокси. В таком случае в случае ошибок или рейт лимита замена производиться не будет.
{% endhint %}

{% hint style="info" %}
Купить хорошие прокси можно в нашем Telegram боте - [The Node Proxy](https://t.me/node_proxy_bot?start=87083713)
{% endhint %}

**Переключатель** <img src="/files/ZnHo3bQh10P4N9DzRviv" alt="" data-size="line"> позволяет мягко **включить/отключить прокси** по всей программе.

**Number of threads** - количество потоков которые будут использоваться для параллельной обработки задач. К примеру на скриншоте это 50 потоков, значит одновременно до 50 аккаунтов будут выставлять предметы на продажу, отправлять трейды, загружать инвентари или выполнять другие задачи поддерживающие параллельное выполнение.

<img src="/files/kMb9bJgvJBDfrRnB3kfV" alt="" data-size="line"> - во включенном состоянии предметы не подлежащие продажи на торговой площадке будут игнорироваться и не будут сохраняться в программе.

**Max items per trade** - настройка для лутера ограничивающая максимальное количество предметов в отправляемом предложении обмена.

**Delay between accounts** - настройка для лутера устанавливающая паузу для потока между отправляемыми предложениями обмена.

**Delay when inventory empty** - настройка для лутера устанавливающая паузу для потока между отправляемыми предложениями обмена если не было найдено предметов для отправки.

<figure><img src="/files/ZuaX6tVs4LKGc6bvGpjc" alt="" width="375"><figcaption></figcaption></figure>

Окно настройки инвентарей с которыми программу будет работать. Тут нужно добавить и сохранить интересующие вас AppId/ContextId. Список поддерживаемых кликеров для добавления в 1 клик доступен в выпадающем списке под списком инвентарей ![](/files/3N1XOGhEr9eP5jepUGzo)

<figure><img src="/files/JaD7uFHyd4t3hmY2b2Bm" alt="" width="375"><figcaption></figcaption></figure>

В поле ![](/files/VQucDiYnH2NlF8RvifJO) вы можете ввести своё сочетание AppId/ContextId и добавить в общий список. К примеру для Steam предметов(карточки, фоны, дизайн профиля) это будет 753/6, для всех остальных игр AppId/2.

**Удалить добавленные инвентари** вы можете кликнул ПКМ по строке в списке и нажав Remove

<figure><img src="/files/HQUiVps55CDwCHHfVfKM" alt="" width="375"><figcaption></figcaption></figure>

Или выбрав в списке не нужный инвентарь и нажать кнопку ![](/files/RZrvrDgCGuUBUiKKfa6d)После завершения редактирования нужно нажать кнопку <img src="/files/0zpZSdwfFyKNuFJgyWm3" alt="" data-size="line">

На вкладке **Ignored Items** вы можете настроить предметы которые будут игнорировать при загрузке инвентаря и не будут сохранены в базу данных или отправлены при лутинге. При фильтрации используется точное соответствие, то есть если вы добавите в список предмет Banana, будут игнорировать предметы чей названием Banana\
Предмет с названием Another Banana игнорировать <mark style="background-color:red;">НЕ</mark> будет.

## Основной интерфейс

### Карточка аккаунта

<figure><img src="/files/hcNKWnKF6UA6oWSaPIyy" alt=""><figcaption><p>Карточка Аккаунта</p></figcaption></figure>

Состоит из логина аккаунта и ID в таблице аккаунтов.\
Кнопка ![](/files/INcW7ptKAL3dtiygJuHX)позволяет обновить информацию о балансе аккаунта.\
![](/files/yrITOLoEHmWP2qijJQBy)при наведении на него будут показан последний лог событий для аккаунта. Если есть новые события будет выглядеть вот так ![](/files/9ajfGIO8LzM2qoAmItak)\ <img src="/files/Dz5lCygb9Qn1OK3fc7Kx" alt="" data-size="original">\
\
\&#xNAN;**$** - баланс аккаунта, в скобочках Pending баланс.\
\&#xNAN;**$L** - сумма всех листингов.\
**List** - общее число листингов для аккаунта.\
**Inv** - суммарное количество предметов кешированное в программе.\
**Inv. value** - суммарная оценка стоимости предметов в инвентаре.

Кнопка ![](/files/0Wikl8CSZ3k2RYI9MNZs)обновляет инвентарь аккаунта.\
Кнопка   ![](/files/7LAf0OxKuB09BvBHlXbM) обновляет листинги аккаунта.

Рядом с логином аккаунта вы можете увидеть значок ![](/files/63aHzcFyBcn64JsAQI2J) сообщающий вам что программа не знает имеет ли аккаунт доступ к торговой площадке. Если на него нажать программа проверит имеется ли такая возможность.

После того как вы выберете 1 или более аккаунтов в верхней части появятся новые кнопки\
![](/files/10hdpjPFDCOiHbgCAwI9)

Они позволят обновить информацию о балансе, инвентарь или листинги для всех выбранных аккаунтов в многопоточном режиме.\
Кнопка <img src="/files/NvGkkxOhYX2mdoDWTU6P" alt="" data-size="line"> снимет выделение со всех аккаунтов.

### Инвентарь

В правой части экрана находится обозреватель инвентаря:

<figure><img src="/files/SENY1ggUme3Q0Ki9yQv1" alt="" width="563"><figcaption><p>Обозреватель инвентаря</p></figcaption></figure>

Он состоит из 3 вкладок: **Items, Listings и Sell.**\
На вкладке **Items** сгруппированные по AppId и Market Name предметы. Число в синем квадрате это общее количество предметов в группе.

Для продажи предметов вам нужно выбрать те которые вы хотите продать. Сделать это можно кликнув по предмету, воспользоваться кнопкой Select All, горячими клавишами CTRL+A, выбрать произвольный рендж через SHIFT+CLICK.<br>

<figure><img src="/files/nUksouRBZ3ow2swZENLm" alt="" width="375"><figcaption></figcaption></figure>

### Оценка предметов для продажи

Затем перейти на вкладку **Sell** где будет таблица предметов сгруппированных по AppId, Market Name и валюте аккаунта владельца предмета.

<figure><img src="/files/0id725W2vSWKnXjdAQWw" alt="" width="563"><figcaption></figcaption></figure>

Для автоматической оценки(на момент написания гайда) доступны 2 режима:

* <img src="/files/zDXemSG7k9mTRWiSHwfo" alt="" data-size="line"> - установит цену продажи по цене самого дешевого листинга предмета.\ <img src="/files/GOeg94cwtU2aahj0JidW" alt="" data-size="line">установит цену самого дорогого Buy Order для предмета.

В режиме <img src="/files/APmAFuJL8O9R9diSEDBz" alt="" data-size="line">цены на все предметы вам нужно будет установить вручную, о нём расскажу позже.

После выбора способа оценки вам нужно нажать на одну из кнопок <img src="/files/zichH80mVaHwELh9iKeT" alt="" data-size="line"><br>

Обе кнопки сделаю одно и тоже - проставят цену для продажи согласно выбранному режиму, но кнопка <img src="/files/g4wDtpQHwNjgd7oMqJ4x" alt="" data-size="line"> перед запросом цены в Steam проверит есть ли в кеше цена. Если она есть будет использовано старое значение, если ничего нет будет получена актуальная цена с торговой площадки.\
\
Кнопка <img src="/files/IULHNhwjKTzf0gqgFoUF" alt="" data-size="line"> проигнорирует кешированные данные и получит актуальные с торговой площадки.

После завершения оценки вы получите результат похожий на:

<figure><img src="/files/xok4GMSGKNgSkiIBjD3g" alt=""><figcaption></figcaption></figure>

У всех предметов должна появиться **Price** - цена которую заплатит покупатель.\
\
**Total amount** - сумма которую заплатит покупатель за все предметы предметы **Price \* Quntity**(количество предметов).

**Total Receive** - сумма которую вы получите на баланс после продажи.

В нижней части\
**Total -** итоговая сумма которую вы получите сгруппированная по валютам аккаунтов участвующих в продаже.

**Sell Items -** после того как у всех выбранных предметов будет получена цена кнопка станет активна.<br>

### Что делать если вместо цены я вижу Not found?

Если вы видите Not found или не согласны с ценой предмета, вы можете кликнуть ПКМ по предмету и в появившемся контекстном меню нажать кнопку Price manually или Remove что бы удалить.

<figure><img src="/files/1fgcHYyqdWmvSzjbajOP" alt="" width="197"><figcaption></figcaption></figure>

Если вы нажмёте Price manually у вас откроется окно запроса цены:

<figure><img src="/files/tdzvayghwGcmMhaBt99z" alt="" width="563"><figcaption></figcaption></figure>

Тут есть всё необходимое для оценки предмета вручную.\
В самом верху есть название предмета.

Кнопка <img src="/files/vnLmPK0nlJGPAFwFAD3g" alt="" data-size="line"> позволяет скопировать название.\
Кнопка <img src="/files/63YBoZQDneOZzJD7sSPl" alt="" data-size="line"> откроет в браузере ссылку на предмет на торговой площадке Steam.

Ниже вы можете выбрать временной период для графика и посмотреть минимальную, максимальную и среднюю цену за этот период.

По графику можно кинуть и поле Sell Price будет установлена цена с той точки по которой вы кликнули.<br>

Что бы подтвердить выбранную цену нажмите на зелёную кнопку Confirm, а для отмены Cancel.

### Продажа предметов.

Продажа полностью автоматическая и не требует вашего участия.\
Если аккаунт наткнется на ошибку TooManyRequests, то продажа для этого аккаунта будет приостановлена на 30 секунд, при повторе ошибки на 45, при следующем повторе на 60 и если это не поможет она будет остановлена полностью для этого аккаунта.

### Листинги

После продажи листинги и инвентарь обновятся автоматически. Посмотреть их можно на вкладке **Listings**

<figure><img src="/files/yP17Cl6OCq8KGHL4Q8BG" alt="" width="563"><figcaption></figcaption></figure>

Кнопка <img src="/files/6uESEh1LVJloY5CzFOHD" alt="" data-size="line"> обновит листинги на выбранных аккаунтах.\
После обновления исполненные продажи получат галочку в столбце Complited<br>

<figure><img src="/files/Pt4jdTHkQHTTcgsyXiKe" alt="" width="375"><figcaption></figcaption></figure>

{% hint style="info" %}
Выполненные листинги будут автоматически удалены при следующем обновлении листингов.
{% endhint %}

Кнопка <img src="/files/za61ZEywYO4TYUmCtxk7" alt="" data-size="line"> позволяет отменить все листинги на всех аккаунтах.


# Как купить игру/набор игр

На вкладке Management находим кнопку "Open game purchase dialogue"

<figure><img src="/files/QKUBcS5sIXGpx9rDEXww" alt=""><figcaption></figcaption></figure>

Откроется окно покупки игр.

<figure><img src="/files/22HiE9QjifHRdzU7d0Zy" alt=""><figcaption></figcaption></figure>

1. Находим в Steam Store игру.
2. Вставляем ссылку на неё в это поле.
3. Нажимаем Load Game Info - прогрузятся доступные пакеты для покупки. Тут же покажет какие игры с карточками.
4. Выберите нужный пакет.
5. Опционально можно выделить все аккаунты где хватит баланса на его покупку.
6. Нажать Continue что бы купить.


# Как продать Terminal кейс?

Для продажи вам потребуются прокси, [купить можно вот тут](https://t.me/node_proxy_bot?start=87083713).

{% hint style="success" %}
На 100 тысяч листингов нужно примерно 1Gb трафика.
{% endhint %}

1. На вкладке Management находим кнопку "Reload inventory" и нажимаем на шестерёнку.

<figure><img src="/files/Wzr7EdVAT1fVE6m8u7yW" alt="" width="317"><figcaption></figcaption></figure>

2. В открывшемся окне импортируем прокси и устанавливаем количество потоков.

<figure><img src="/files/ISD5xkCoRx4aOb9EeDv9" alt="" width="375"><figcaption></figcaption></figure>

3. Нажимаем кнопку "Save"
4. Выбираем аккаунты на которых нужно продать дроп и по очереди нажимаем кнопки.\
   1\. Update balance - если не загружали ранее\
   2\. Check market restrictions - если не загружали ранее.\
   3\. Reload inventory.\ <br>

   <figure><img src="/files/HEmC7fKeBAGa7UEyaZAL" alt="" width="563"><figcaption></figcaption></figure>

Если где-то видим красные ошибки нажимаем ПКМ по этому аккаунта, Rotate proxy и запускаем функцию ещё раз.

<figure><img src="/files/s2YBjbeerpgT4UY3sQ5M" alt="" width="364"><figcaption></figcaption></figure>

5. Переходим на вкладку Inventory manager, нажимаем на кнопку обновления списка аккаунтов и выделяем аккаунты(кликом по нему или ctrl+a что бы выбрать все)<br>

   <figure><img src="/files/FwChFlZ7zRi7Jx1Jsk6L" alt="" width="183"><figcaption></figcaption></figure>
6. Выбираем предметы которые хотим продать <br>

   <figure><img src="/files/fGVojQHZ9oFtiIDdEOkG" alt=""><figcaption></figcaption></figure>
7. Переходим на вкладку Sell и выбираем как мы хотим оценить предметы.\
   1\. Lowest market price - цена самого дешевого предмета.\
   2\. Auto-Buy price - цена автоматической покупки.\
   3\. Manual price - панель покажет график цен и попросит вам задать цену.
8. И нажимаем кнопку Force refresh prices или Price items.\
   Price items - установит цену из закешированных данных.\
   Force refresh prices - перепарсит цены.<br>

   <figure><img src="/files/FGNs37ofT6p0dcDZhP7M" alt=""><figcaption></figcaption></figure>
9. После успешной оценки кнопка Sell items станет активна.\ <br>

   <figure><img src="/files/PFeBL0Bs8o8B8FWhi9pD" alt=""><figcaption></figcaption></figure>
10. После начала продажи предметов кнопка Sell items поменяется на Stop. Когда Stop сменится на Sell Items - продажи завершены.
11. Так как мы работаем с прокси, а они часто перестают работать в неподходящий момент, повторяем шаги с 4 по 10.
12. Что бы обновить список листингов на аккаунтах нажимаем на эту кнопку

<figure><img src="/files/UJCHknil0cXGaJFWQ8mX" alt="" width="354"><figcaption></figcaption></figure>


# Активация Wallet Code

<figure><img src="/files/PqZhY2axejVal3CvXI1s" alt=""><figcaption></figcaption></figure>

Для активации кодов нужно:

1. Нажмите **Import codes**<br>

   <figure><img src="/files/IW3ajlG3m73PyO7YRhNx" alt=""><figcaption></figcaption></figure>

На этом шаге вам нужно добавить Wallet коды.&#x20;

* Вы можете вставить коды списком в текстовое поле в самом верху формы.
* Загрузить из файла с помощью кнопки **Load from file**
* Добавить один код введя его в поле **Single code**

{% hint style="success" %}
Каждая строка должна содержать **ОДИН** wallet code или несколько разделённых двоеточием — **:**

```
AAAAA-BBBBB-CCCCC:DDDDD-EEEEE-FFFFF
AAAAA-BBBBB-CCCCC
```

{% endhint %}

2. Нажмите "**Preview**" что бы првоерить добавляемые коды.
3. Если всё в порядке нажмите "**Confirm import**".

{% hint style="info" %}
Коды добавленные через **:** называются **группой кодов** и могут быть привязаны и активированы только на одном аккаунте все вместе.
{% endhint %}

3. После импорта кодов нужно привязать их к аккаунтам на которых вы хотите их активировать.\
   Выберите коды и нажмите **Bind selected**

<figure><img src="/files/rbloGxkQQ2Z2bkNd2VeW" alt=""><figcaption></figcaption></figure>

4. В открывшемся окне выделите аккаунты к которым вы хотите привязать коды для последующей активации.

<figure><img src="/files/l4MuV3ZDbjHj2kQAgmQS" alt=""><figcaption></figcaption></figure>

5. Нажмите кнопку **Activate all assigned** для активации привязанных кодов.
6. Результат активации доступен в основной таблице.

<figure><img src="/files/YAYxXQbOSC4Pw4f9xAft" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Активированные коды удалить нельзя, они сохраняются для истории.
{% endhint %}


# Часто задаваемые вопросы

### Привязал HWID, программа не запускается и создаёт новый hwid.txt файл

Вам нужно синхронизировать системное время.

<details>

<summary>Как синхронизировать системное время</summary>

Нажмите **ПКМ по времени в пуск** -> **Настройка даты и времени**

<figure><img src="/files/3OJko4hTETj9LlSgxi4E" alt="" width="352"><figcaption></figcaption></figure>

Затем нажмите **Синхронизировать**

<figure><img src="/files/kl7HcRYf9Q4csfZSxvVC" alt="" width="375"><figcaption></figcaption></figure>

</details>

### Хочу что бы активность "Add random clicker game" добавляла игры по моему списку AppId.

Рядом с Standard.Desktop.exe создайте файл FreeGames.txt со список нужных вам AppId.

## Сменил пароль от аккаунта программой и он не сохранился.

Есть очень небольшая вероятность что это произойдёт. Из-за ошибки прокси запрос на смену пароля стим принял и обработал, но в ответ софт получил ошибку.&#x20;

Новый пароль можно найти в базе данных. База данных находится в папке db рядом с .exe.

Скачиваем <https://sqlitebrowser.org/dl/>

Открываем и нажимаем Open Database

<figure><img src="/files/W7otujx4ZdnJ4Uv4reks" alt="" width="563"><figcaption></figcaption></figure>

Выбираем файл standard.db<br>

<figure><img src="/files/DF2rl6TuGjEiA945AsXc" alt="" width="563"><figcaption></figcaption></figure>

Открываем вкладку Browse Data и выбираем таблицу Accounts

<figure><img src="/files/sniEZgzuLQtuhMJTX7Vl" alt=""><figcaption></figcaption></figure>

Находим колонку Login и в поле Фильтр вводим логин нашего аккаунта.

<figure><img src="/files/Bg9S9CG9ASAbYYrXBbnO" alt=""><figcaption></figcaption></figure>

&#x20;Мотаем в конец таблицы и находим колонку NewPassword это и есть новый пароль аккаунта.

<figure><img src="/files/yO3zUompOrjjTvvVDatq" alt=""><figcaption></figcaption></figure>

Скопируйте его и замените старый пароль в колонке Password новым, что бы получилось вот так

<figure><img src="/files/cW2cFq9WeJzBKNCI6SQ3" alt=""><figcaption></figcaption></figure>

Что бы применить наши изменения нажимаем кнопку Записать изменения

<figure><img src="/files/d8bHhtfKXw0qujjum6pQ" alt=""><figcaption></figcaption></figure>

Всё, новый пароль сохранён в базе.


# Где и как импортировать прокси

После импорта аккаунтов обязательно необходимо импортировать под них прокси.

{% hint style="success" %}
Приобрести прокси можно здесь 👉🏻 [NODE Proxy](https://t.me/node_proxy_bot?start=87083713)
{% endhint %}

После покупки и скачки файла с прокси

На вкладке "<mark style="color:green;">**Activity Booster**</mark>" выбираем "<mark style="color:green;">**Import Proxies**</mark>"

<figure><img src="/files/XljsZFyhPemTkTZ5pEFX" alt=""><figcaption></figcaption></figure>

Выбираем наш файл с прокси нажимаем "<mark style="color:green;">**Open**</mark>"

<figure><img src="/files/z7bGaCdwHw10vJi9bCMC" alt=""><figcaption></figcaption></figure>

В конечном итоге должно получиться так:

* отобразиться количество загруженных нами прокси в графе "<mark style="color:green;">**Proxies count**</mark>"
* аккаунтов без прокси должно быть 0 в графе "<mark style="color:green;">**Accounts without proxy**</mark>"

<figure><img src="/files/oO6tER6k0hdPkhFo2pFS" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
При добавлении новых аккаунтов в ферму следует по новой импортировать прокси. Предварительно очистив их кнопкой "<mark style="color:green;">**Clear Proxies**</mark>"
{% endhint %}


# Отключение SmartScreen в Windows 10

В последних версиях Windows 10 порядок отключения SmartScreen с помощью изменения параметров системы выглядит следующим образом:

1. Откройте Центр безопасности Защитника Windows (для этого можно нажать правой кнопкой мыши по значку защитника Windows в области уведомлений и выбрать «Открыть», либо, если значка нет — открыть Параметры — Обновление и безопасность — Защитник Windows и нажать по кнопке «Открыть центр безопасности»).
2. Справа выбрать пункт «Управление приложениями и браузером».
3. Выключить SmartScreen, при этом отключение доступно для проверки приложений и файлов, фильтра SmartScreen для браузера Edge и для приложений из магазина Windows 10.&#x20;

<figure><img src="/files/dJkn0R4tVDk7s5wftBQ7" alt=""><figcaption></figcaption></figure>


# Настройка RDP и параллельного фарма

1. Скачайте актуальную версию [StandardRDPClient(updated 04.03.26)](https://mega.nz/file/5cBBRaSY#TWJzMZ7Zzw8DPn0K1QBC5_1pBDszEuBKhTlWcOxkvs8), [yandex.disk](https://disk.yandex.ru/d/skEZAjB-OPAl_w) (пароль: standard)
2. Разархивируйте в удобное для вас место и запустите **StandardRDPClient.exe**

<figure><img src="/files/1Jn8mBL76GIRiCbrpIgL" alt=""><figcaption></figcaption></figure>

3. В меню **RDP Wrapper** нажимаем:\
   \- "**Install**" и дожидаемся завершения\
   \- "**Update**" и так же дожидаемся завершения
4. Нажимаем "**Open RDPConf**". В открывшемся окне устанавливаем настройки как на сриншоте\
   \- **"RDP port"** - можно установить на своё усмотрение\
   \- Authentication Mode - **"Network Level Authentication"**\
   \- Session Shadowing Mode - **"Disable Shadowing"**\
   \- Включите **"Enable Remote Desktop"**\
   \- Включите **"Single session per user"**

<figure><img src="/files/Rd78JiyOfXHNivyGUC9p" alt=""><figcaption></figcaption></figure>

5. Нажмите кнопку "**Apply**".
6. Перезагрузите компьютер.
7. Откройте "**RDPConf"**, он должен выглядеть вот так.

<figure><img src="/files/SEaGIrT5Ubb86lNpRh3t" alt=""><figcaption></figcaption></figure>

Wrapper state: <mark style="color:$success;">**Installed**</mark> - если значение другое см. Пункт №3\
Service state: <mark style="color:$success;">**Running**</mark> - если значение другое ваша система не поддерживает RDP\
Listener state: <mark style="color:$success;">**Listening**</mark> - если видите Not listening и \[fully supported] попробуйте обновить RDPWrapper через меню. Если это не помогло и у вас официальная Windows обратитесь в чат за помощью.

## Добавление локальных юзеров.

1. В **StandardRDPClient** откройте меню "**Local Users**" -> "**Add User**"\
   ![](/files/R3XIy1Xb86iwl7H1wiur)
2. В поле "**User**" введите уникальное название вашего юзера, например: rdp\_1, rdp\_2, user1, user2 и т.п

{% hint style="danger" %}
Используйте **только латиницу, цифры и нижнее подчеркивание**.
{% endhint %}

3. В поле "**Password**" укажите пароль. Используйте сложный пароль для безопасности, запоминать его не потребуется.
4. Установите галочку "**Grant Administrator rights**"
5. Нажмите кнопку "**Create**"
6. Создайте столько юзеров сколько параллельных программ вы хотите запустить.

## Создание подключения

1. В **StandardRDPClient** нажмите кнопку "**New**" для создания нового RDP подключения.

<figure><img src="/files/97ALEWbi9Je653mW6hRw" alt=""><figcaption></figcaption></figure>

2. В поле "**Name**" задаём название подключения(может быть любым).
3. **Host** оставляем без изменения.
4. **Port** задаём такой же как в "**RDPConf"**\
   ![](/files/sCmq3Z4a5whHfTwuZUkl)
5. В выпадающем списке "**Select User**" выбираем созданного в педыдущем шаге юзера.\
   "**Username**" и "**Password**" подставятся автоматически.
6. Нажимаем кнопку "**Save**"
7. Повторите для второго юзера.

## Запуск подключения.

1. Поочередно выберите созданные подключения и нажмите "**Connect**"
2. Автоматически откроется wfreerdp для каждого подключения.

{% hint style="info" %}
**StandardRDPClient** автоматически перезапустит wfreerdp к RDP если соединение разорвётся или wfreerdp зависнет.
{% endhint %}


# Как фильтровать предметы для лута

Для фильтрации предметов для лута доступны 2 вида фильтров.

1. По полному названию предмета *(прим. CZ75-Auto | Honey Paisley (Field-Tested))*
2. По Steam тегу предмета *(прим. Container, Rifle, Agent, Mil-Spec Grade)*

У каждого фильтра есть два списка:

* **Whitelist** (Include) — что разрешено. Пусто = разрешено всё.
* **Blacklist** (Exclude) — что запрещено. Имеет приоритет над whitelist.

Как это работает: предмет проходит фильтр, если он в whitelist (или whitelist пуст) и не в blacklist. Фильтры по названию и по тегу проверяются независимо — предмет должен пройти оба.

Примеры:

* Лутать только ножи, кроме одного конкретного: Whitelist тегов = Knife, Blacklist названий = ★ Karambit | Doppler → утащит все ножи, кроме этого Karambit.
* Лутить всё, кроме кейсов и стикеров: Blacklist тегов = Container, Sticker, остальные списки пустые → утащит всё, что не контейнер и не стикер.
* Лутить только два конкретных скина: Whitelist названий = AK-47 | Redline (Field-Tested), AWP | Asiimov (Field-Tested) → утащит только эти два предмета, ничего больше.

### Где найти теги?

В фильтрах инвентаря Steam.

<figure><img src="/files/rSbkFixiNaPlUqQquOFI" alt=""><figcaption></figcaption></figure>

Копируйте значение так как оно отображается тут без ().

Пример: \
\&#xNAN;*StatTrak™*\
*Agent*\
*The 2018 Nuke Collection*


# 2.5.1.8

* Добавлена возможность смены пароля на аккаунтах:

> - Перед сменой пароля будет сгенерирован новый пароль и сохранён в колонку NewPassword в базе данных.
> - Если в процессе смены пароля произойдёт ошибка(прокси или стима) при следующей попытке будет использоваться тот же самый пароль что был сгенерирован при первой попытке.
> - После смены пароля, старый пароль будет записан в колонку OldPassword, новый пароль будет записан в Password и также пара Login:NewPassword будет записана в файл NewPasswords.txt рядом с exe программы.
> - При следующей попытке смены пароля будет сгенерирован новый пароль.

* Добавлена возможность загрузить историю продаж на торговой площадке.

> - UI для просмотра данных в разработке.
> - Дату завершения парсинга можно задать в "Drop stats end date"(находится под полем с трейд линками).
> - Историю можно найти в базе данных.

* Добавлена возможность получить список VAC/Game для каждого аккаунта с отображением APPID, названии игры и доп. сообщении если оно есть.
* Исправлена ротация прокси при создании сессий в случае ошибок.
* Исправлен бесконечный запуск выполненных задач.
* Исправлена пометках неудачного лутинга как удачного.
* Ошибка при лутинге будет отображаться корректно.


# Обновление 11.05.25

Крупное обновление основным нововведением которого является Inventory Manager и Wizard для Activity Booster.

## Изменения от 11.05.25

<details>

<summary><strong>Inventory Manager UI</strong></summary>

<figure><img src="/files/11HgGn17hczDQ0aS0smh" alt=""><figcaption><p>Inventory Manager</p></figcaption></figure>

</details>

**Inventory Manager:**

* Позволяет в многопоточном режиме <mark style="background-color:green;">продавать предметы на торговой площадке</mark>
* <mark style="background-color:green;">Просматривать и отменять</mark> существующие <mark style="background-color:green;">листинги</mark>
* <mark style="background-color:green;">Автоматическая продажа предметов</mark> по Минимальной цене на торговой площадке
* Автоматическая продажа предметов по Buy Order
* Многопоточное обновление инвентарей, балансов и листингов всех инвентарей одной кнопкой
* Режим ручного проставления цен с удобным интерфейсом и графиком продаж предметов
* Фильтры предметов по AppId и множество вариантов сортировки инвентаря
* Оптимизирована загрузка цен, учитываются рейт лимиты, цены кешируются в базу данных
* <mark style="background-color:green;">Работа как с прокси так и без</mark>
* Полностью <mark style="background-color:green;">автоматическое подтверждение продаж</mark> в мобильном приложении

<details>

<summary>New Looter Settings UI</summary>

<figure><img src="/files/ZuaX6tVs4LKGc6bvGpjc" alt="" width="375"><figcaption></figcaption></figure>

</details>

**Looter Settings:**

* Интерфейс доработан и стал ещё удобнее
* Добавлен список всех поддерживаемых кликеров для легкого добавления игр в лутер
* Удалить игру из списка можно через контекстное меню кликнул ПКМ по игре

<details>

<summary>Wizard UI</summary>

<figure><img src="/files/xcjmJrZFomvZAh2Q2MOS" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/DVuJNWYlLxVBUlB9mU09" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/rx07aadytp68PgKVEPxj" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/oxtIOcbBQDX88IvcnNJS" alt=""><figcaption></figcaption></figure>

</details>

**Wizard для Activity Booster:**

* **Wizard - мастер настройки режима работы для создания задач под ваши нужды в 1 клик**&#x20;
* Режим Фарма кликеров
* Режим Повышения активности аккаунта
* Добавлена автоматическая очистка выполненных задач с типом выполнения Every что бы не забивали базу данных
* Активность Buy random cheapest game теперь покупает только игры с карточками Steam

**PROXY:**

* В случае ошибок подключения, прокси автоматически заменяется свободной из списка
* Прокси больше не привязаны к аккаунтам 1 к 1, если у вас меньше прокси чем аккаунтов они будут равномерно распределены между всеми аккаунтами.


# Обновления 30.04.25

## Изменения от 30.04.2025:

* **PROXY**: Добавлена повсеместная поддержка прокси.
* **PROXY**: Прокси больше не привязываются к аккаунтам один к одному, к примеру теперь можно добавить 10 прокси для 100 аккаунтов и у каждого аккаунта будет прокси.
* **PROXY**: Включить или отключить прокси можно на вкладке Activity Booster
* **CLICKERS**: Добавлена новая игра для фарма: [Waifu](https://store.steampowered.com/app/3188910/Waifu__Kawaii_Idler__Clicker/)\ <sub>Что бы включить её фарм поставьте галочку "Farm Waifu game" в окне Create task, можно как отредактировать старый Task так и создать новый.</sub>\ <sub>Для фарма Waifu прокси не используются так как потребление трафика огромно(около 100мб в сутки на 1 аккаунт). А также требуется стабильное подключение. Мной протестирован фарм 700 аккаунтов одновременно, проблем не было.</sub>

<details>

<summary>Где включить фарм Waifu?</summary>

<img src="/files/1ARByKefNUa3sSDbScnT" alt="" data-size="original">

</details>

## **NEW LOOTER:**

<details>

<summary>Интерфейс</summary>

<figure><img src="/files/6u7rStTzGwBd4cIoFOef" alt="" width="375"><figcaption></figcaption></figure>

<figure><img src="/files/YC2BPbYI59KKpcvriGMb" alt="" width="375"><figcaption></figcaption></figure>

<figure><img src="/files/hXxTo73l0oLijvvAGfR9" alt="" width="375"><figcaption></figcaption></figure>

</details>

{% hint style="info" %}
Интерфейс конфигурации можно открыть кликнув на значок шестеренки на кнопках "Reload Inventory" или "Loot Accounts"
{% endhint %}

* Добавлена многопоточность
* Фильтр игр для лутинга
* Фильтр игнорируемых предметов
* Фильтр не продаваемых предметов
* Конфигурация максимального размера трейда
* Настройки применяются для  "Reload Inventory"  и "Loot Accounts"

## UI изменения

* Таблица аккаунтов на вкладке Management больше не блокируется при выполнение задач.
* После выполнения всех задач будут автоматически выделены те которые закончились неудачно.
* Добавлена возможность сортировки по столбцам "Market available" и "Last Task Result"
* Исправлена сортировки по цене инвентаря
* Оптимизация работы направленные на улучшение отзывчивости UI и устранение лагов.

<details>

<summary>Прошлые изменения</summary>

```
26.04.25:
- Добавлена возможность многопоточной работы Activity Booster без прокси, для нормальной работы у всех аккаунтов должны быть созданы сессии
- Добавлен Action и Активность в Activity Booster для разблокировки торговой площадки покупкой '<a href="https://store.steampowered.com/itemstore/866510/detail/15/">AerlyTight</a>' предмета.
  Покупка будет осуществлена только если торговая площадка заблокирована и не будет разблокирована в ближайшее время.
- Доработан просмотр истории активностей и устранены лаги из-за большого количества активностей.
- Оптимизирована работа фарма кликеров на большом количестве аккаунтов

20.04.25:
- Исправлена ошибка в планировщеке задач приводившая к планированию задач в прошлом
- Изменен порядок запуска задач для равномерного выполнения задач аккаунтами
- При установленной галочке "Farm clickers" кликеры будут запускаться одновременно для фарма сразу всех доступных
- Для игры 'Amarillo's Butt Slapper' добавлено автоматическое открытие кейсов при дропе

19.04.25:
- Для Action 'Add random clicker game' добавлена опция 'Add all clickers' при создании новой задачи 
- Для Action 'Play random game on account' добавлена опция 'Farm clickers' при создании новой задачи(панель будет играть только в кликеры)
- Исправлена ошибка из-за которой панель игнорировала некоторые кликеры
- Исправлена ошибка из-за которой задачи не запускались в работу

18.04.25:
- Исправлено сохранение настроек
- Исправлен фарм нулёвых аккаунтов
```

</details>


# Как фармить карточки?

На вкладке Managemetn [выделяем все аккаунты](#user-content-fn-1)[^1] и нажимаем кнопку Update games for cards farm

<figure><img src="/files/2IL9VCVhrydnTNn1it81" alt=""><figcaption></figcaption></figure>

После обновления информации в столбце <img src="/files/tSgvujYEGRhpslq50k5c" alt="" data-size="line"> будет отображено количество игр для фарма карточек, а в столбце <img src="/files/hQ3vWlvOZD2T4kaGxVEJ" alt="" data-size="line"> количество карточек которые можно получить.

Переходим на вкладку Activity Booster, нажимаем кнопку Wizard и в открывшемся окне выбираем "Фармить карточки", затем "Далее" и "Завершить"

<figure><img src="/files/sIU1eehPzEsP06QbeeT8" alt=""><figcaption></figcaption></figure>

Далее в поле "Threads count" указываем [количество потоков](#user-content-fn-2)[^2]\(сколько аккаунтов будут фармить карточки одновременно). И нажимаем кнопку Start.

<figure><img src="/files/Q3uxFan5cnhudL7Ur7rF" alt=""><figcaption></figcaption></figure>

[^1]: Можно использовать горячие клавиши CTRL+A

[^2]: Без прокси максимум 1500 потоков. С прокси до 16000, в зависимости от вашего провайдера и роутера.


# Фиксим краши CS2

## Шаг 1. Отключаем Game bar

1. В меню "**ПУСК**" вводим "**Параметры**"

<figure><img src="/files/e7B7RkY5Z2ps1dGu6p1B" alt="" width="341"><figcaption></figcaption></figure>

2. Далее выбираем "**Игры**"

<figure><img src="/files/eyFn0dpNzvVt3AV28PRu" alt="" width="375"><figcaption></figcaption></figure>

3. Ставим переключатель в положение "**Откл.**"<br>

<figure><img src="/files/eOGb7xWWRq0szBlr2ckH" alt="" width="375"><figcaption></figcaption></figure>

4. Теперь выбираем пункт "Игровой режим" и отключаем его тоже

   <figure><img src="/files/9VuU6rGDrGGhFJZkMGCB" alt=""><figcaption></figcaption></figure>

## Шаг 2. Полностью удаляем все приложения связанные с Game bar и xbox.

1. В меню "Пуск" вводим PowerShell, на нужной опции кликаем **ПКМ и выбираем Запустить от имени администратора.**

<figure><img src="/files/NFL6xAfyPl0hoV4KRvx4" alt="" width="349"><figcaption></figcaption></figure>

2. В открывшееся окно копируем и вставляем следующую команду.

```powershell
Get-ProvisionedAppxPackage -Online | `
Where-Object { $_.PackageName -match "xbox" } | `
ForEach-Object { Remove-ProvisionedAppxPackage -Online -PackageName $_.PackageName }
```

<figure><img src="/files/YW3ldz3RP9RM77XyNWSR" alt="" width="563"><figcaption></figcaption></figure>

3. Нажимаем **Enter** и вы должны получить следующий результат.

<figure><img src="/files/U5PUhhFY05wzUK2QLMzQ" alt="" width="563"><figcaption></figcaption></figure>

После этого краши обязаны прекратиться.


# Установка AVAST

## Если вы в РФ

Если вы в РФ, то перед началом установки вам нужен VPN.\
Включаете VPN и скачиваете[ Avast по ссылке](https://www.avast.com/download-thank-you.php?product=PRW-ONLINE-PP\&locale=en-ww\&direct=1)<br>

1. Запускаем установщик и в открывшемся окне жмём **Настройки**

<figure><img src="/files/q64ARdgQavRpvWNwSBCC" alt=""><figcaption></figcaption></figure>

2. Убираем всё кроме песочницы. Это обязательно!

<figure><img src="/files/Y7yX167PJJtnFgTNIT2B" alt=""><figcaption></figcaption></figure>

3. Ожидаем установки

<figure><img src="/files/emKhpXxfxNOyoK9UriBh" alt=""><figcaption></figcaption></figure>

4. Окно пропадет и аваст фоново запустится. Открыть его вы вероятно не сможете. Для входа в настройки надо установить VPN, перезапустить пк, быстро включить VPN и зайти в настройки, где вы можете указать ключ. Ключ лицензии вы можете купить [**ЗДЕСЬ**](https://t.me/expanse_shopbot)
5. После установки Avast, мы переходим в папку где у вас установлен Steam, жмём по нему ПКМ и выбираем - "Всегда запускать в песочнице".

<figure><img src="/files/ekIwu4sv33LHE4XZVWP6" alt=""><figcaption></figcaption></figure>

6. Там же жмём свойства, и в меню "Совместимость" устанавливаем - запускать от имени администратора

<figure><img src="/files/qNH9vTG55XMAR5E0klwA" alt=""><figcaption></figcaption></figure>

7. Далее вам надо запустить Steam вне песочницы (ПКМ по Steam.exe) и в случае появления предупреждающих или информативных окон - нажать "не показывать снова" и далее, далее. После успешного входа в Steam и загрузки CS2, нам надо разово запустить игру.


# Решение проблем(краши CS2, зависания, высокая нагрузка)

## Не запускается Steam.

1. Проверяем версию NVIDIA драйвера.\
   Открываем "Панель управления NVIDIA", в меню пуск ищем NVIDIA Control Panel\
   Нажимаем на значок домика и проверяем что версия драйвера **546.65**\
   ![](/files/NOgNQKxAIdzWsm7cxaVX)
2. Если версия не соответствует [устанавливаем по гайду.](/standard-arb-docs/nachalo/shag-1.2-nastroika-avast)

### Если версия драйвера уже 546.65, а Steam не запускается или перестаёт запускаться через некоторое время:

1. Открываем Пуск -> Установка и удаление программ
2. В поиске ищем "nvidia графический драйвер"
3. Нажимаем Удалить и удаляем драйвер.<br>

   <figure><img src="/files/c2dmhj1KMjLAgmg08NPI" alt=""><figcaption></figcaption></figure>
4. Устанавливаем NVIDIA Driver версии 546.65 <https://www.nvidia.com/download/driverResults.aspx/218047/en-us/>

## Сделал всё, но Steam всё так же не запускается или перестаёт запускаться через некоторое время.

Переходим к более радикальным методам.\
❗ **Внимание! Данные настройки серьезно влияют на безопасность вашего компьютера.**\
❗ **После их применения не рекомендуется использовать компьютер для других задач.**

1. Идём в Пуск -> "Безопасность Windows"

<figure><img src="/files/qYG4JI5jwrXwdpTQZU81" alt="" width="351"><figcaption></figcaption></figure>

2. В открывшемся окне переходим на вкладку "Управление приложениями/браузером"\
   И нажимаем "Параметры защиты от эксплоитов"
3. На следующем экране убеждаемся что мы на вкладке "Системные параметры"\
   И в каждом выпадающем списке выбираем пункт "Выкл. по умолчанию"

<figure><img src="/files/4CC69aQeNYjlQLC3Shix" alt="" width="563"><figcaption></figcaption></figure>

4. Итоговый результат должен выглядеть вот так.

<figure><img src="/files/GrcY1ztFUkQPtuXdy0YC" alt=""><figcaption></figcaption></figure>

5. Закрываем окно. Перезагружаем компьютер.

## Запускается только одно окно CS2

Убедитесь что [вы правильно установили Avast по гайду.](/standard-arb-docs/dopolnitelnye-nastroiki/ustanovka-avast)\
Если всё сделали верно и вокруг окна Steam и CS2 есть синяя рамка - перезагрузите компьютер.\
Если проблема сохраняется - переустановите Avast.


# Устранение неисправностей

## Всё ниже перечисленное приводит к крашам игры.

Если есть хоть

## Все системы(Windows 10, Windows 11)

**Отключите GameBar.**\
Не хочу копипастить прекрасный гайд, по этому простото ссылка:\
<https://www.xda-developers.com/how-disable-xbox-game-bar-windows/>\
\
Для тех кто не знает английский - по картинкам всё понятно.

**Geforce Experience** - если установлен, то удаляем.

**AMD Adrenalin Edition** – если установлен, удаляем. Если его можно удалить только вместе с драйверами, всё равно удаляем и устанавливаем заново, но при установке выбираем пункт 'Установить только драйверы' или 'Drivers only'<br>

<figure><img src="/files/6R83gS19WBRoGHi4ci2r" alt=""><figcaption></figcaption></figure>

**Discord** - перед запуском софт его нужно закрыть.


# Telegram Notifications

1. Для настройки уведомлений в Telegram нам нужно создать своего бота\
   Для этого переходим в <https://t.me/BotFather> и жмём кнопку Start\
   ![](/files/aaR80s9OYe6hNXxTLMlu)
2. Вводим команду `/newbot` и имя для нашего бота.\
   В моём случае это будет "`standard_notifications_bot`"\
   ![](/files/OmVB4Bqvc8VEtIn3bhzX)
3. В ответ мы получим Api ключ от нашего бота\
   ![](/files/RMlsTAGXU9qZvHgUG0Lw)
4. Далее в панели идём в Settings -> TG Bot\
   ![](/files/YXebt6oYudQTqiL3byGo)<br>
5. И сохраняем наш Api Key в поле TG bot Api Key\
   ![](/files/fklPj8wcv6YGo04lonn2)
6. Теперь идём в <https://t.me/standard_arb_bot> -> отправляем команду /start\
   копируем свой ID\
   ![](/files/QZBqOGcF70FpV30X9gGd)<br>
7. Вставляем свой ID в поле Clients Telegram IDs:\
   ![](/files/mcVK4JwtXz2AIfST3Hb4)\
   \
   Если вы хотите получать уведомления в несколько аккаунтов Telegram, то можно ввести ID аккаунтов через запятую.\
   ![](/files/o42yTgfd87sEytsaA0QA)<br>
8. С каждого из аккаунтов нужно открыть своего бота в Telegram и ввести команду /start или нажать кнопку Start.\
   ![](/files/UYOgKqcoLXT2YJgSlmIW)
9. Теперь панель будет присылать вам уведомления подобного содержания.\
   ![](/files/BGPZzLuKp4oYku1b6hNh)


# Настройка Shooting режима

{% hint style="info" %}
В версии 2.0 появился новый Shooting режим. В этом режиме вместо стандартных киллов ножом фармящие боты используют **оружие**.

Shooting режим опционален и на момент версии 2.0 поддерживается на карте ar\_baggage и ar\_shoots\
Knife режим будет также доступен для всех карт как и раньше.
{% endhint %}

## Как работает Shooting режим

> Короткий ответ - **на основе ИИ.**\
> С помощью ИИ панель обнаруживает противников на карте, а далее по полученным данным наводится и убивает.\
> С выходом Shooting режима из ЗБТ каждый пользователь сможет убедиться в этом лично загрузив видео или картинку и панель постарается найти на ней врагов.

## Как включить Shooting режим

Что-бы включить Shooting режим:

1. Переходим в "Settings" -> Вкладка "Maps"\
   ![](/files/gQMJU9B1b55iDZETIUuD)
2. В поле Main map выбираем ar\_baggage или ar\_shoots.
3. В поле Second map  выбираем карту которая будет после Main map.\
   Панель автоматически проголосует за неё после завершения раунда.\
   \
   **Если вы оставите это поле пустым, то после смены карты и загрузки на новую, панель проведёт голосование за смену карты на ar\_baggage**
4. Переключатель "**Enable Shooting mode**" переводим в положение **On**\
   ![](/files/3d8A8ukXkkdlhQmtZlFj)
5. Значение для пункта "Mouse move delay" подбираем экспериментально для своего ПК.\
   Меньше значение - быстрая и резкая наводка.\
   Больше значение - более плавная и медленная наводка.\
   Рекомендую начать с 3000 и по собственному желанию настроить.


