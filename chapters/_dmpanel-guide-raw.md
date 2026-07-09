# Знакомство

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fznakomstvo%2F_index.md&src=.%2Fznakomstvo-2.png)

#### Спасибо за приобретение подписки на DM Panel!

**Чтобы начать работу с панелью, настоятельно рекомендую ознакомиться с документацией.** **Это поможет Вам свести количество вопросов к минимуму и эффективно автоматизировать процесс фарминга аккаунтов!**

**Если вам удобен книжный формат то можете спускаться ниже**

Инструкция в видео формате: [`**ТЫК**`](https://www.youtube.com/watch?v=fQknMqkD9sE&ab_channel=DMPanel)

---

# Основные возможности DM Panel

- Автоматический беспрерывный процесс фарма на протяжении всей недели, без вашего участия
- Автоматически сбор полученного дропа по наилучшей цене
- Фарм ArmoryPass за 12-16 часов
- Уведомления в Telegram и полное управление с бота
- Детект крашей, зависаний, ошибок
- Игра в режимах: DM, Гонка вооружений, 2х2 напарники
- WebApp приложение с отчетами, статусом фарма, средним дропом**Cистемные требования для фарма аккаунтов:*****Фарм в 6 окон:***Процессор: 16-ядерный
- Оперативная память: 64 ГБ
- Видеокарта: RTX 3080 или аналогичная
- Ssd: 1 tb

***Фарм в 5 окон:***

- Процессор: 16-ядерный
- Оперативная память: 48 ГБ
- Видеокарта: RTX 2060 или аналогичная
- Ssd: 1 tb

***Фарм в 4 окна:***

- Процессор: 12-ядерный
- Оперативная память: 32 ГБ
- Видеокарта: GTX 1070 или аналогичная
- Ssd: 512gb

**Фарм в 3 окна:**

- Процессор: 12-ядерный
- Оперативная память: 24 ГБ
- Видеокарта: RX 580 или аналогичная
- Ssd: 512gb

**Фарм в 2 окна:**

- Процессор: 10-ядерный
- Оперативная память: 16 ГБ
- Видеокарта: GTX 1060 или аналогичная
- Ssd: 512gb

**Фарм в 1 окно (на основной системе, без Hyper-V(*****не рекомендуется*****)):**

- Процессор: 6-ядерный
- Оперативная память: 8 ГБ
- Видеокарта: любая, обеспечивающая 30 FPS на ПК
- Ssd: 256gb
- 11 Win, версия НЕ 24H2
- **Демонстрация: "**[**тык**](https://www.youtube.com/watch?v=QUsf0yO7h0I)**"**
- **Дополнительная информация о панели: @dmpanelbot**
- **Связь с техподдержкой и покупка напрямую: @dmpanelagent**
- **Скорость фарма:**
- **От: ~70 аккаунтов до ~120 аккаунтов в неделю на 1 VM.**

---

# Загрузка образа системы

Первоначально, нужно установить образ операционной системы под виртуальную машину, для это переходим по ссылке:

- "[ТЫК](https://drive.google.com/file/d/141JbUOIhsx4caFlTI430OjouvL88wdRD/view?usp=sharing)"
- Зеркала: "[ТЫК](https://drive.google.com/file/d/1tRs5AGiKHcKbmxvBH5kcAmF5v5iv3cSo/view?usp=sharing)" и "[ТЫК](https://drive.google.com/file/d/1LHtXcJGKHTI2tkVi_QZL5qM3PpaDWdMR/view?usp=sharing)"

Устанавливаем образ системы.

Также стоит скачать .bat файлы.

«[ТЫК](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fzagruzka-obraza-sistemy.md&src=.%2FBAT.rar)»

---

# Установка Hyper -V

Для начала нам нужно включить функцию hyper - v, для этого из скаченного нами ранее архива нужно ОТ ИМЕНИ АДМИНИСТРАТОРА открыть hyperINSTALL.bat.

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fustanovka-hyperv.md&src=.%2Fustanovka-hyperv.png)

при запуске, загрузка компонентов пойдет автоматически, после вам нужно будет перезагрузить компьютер(вписать английскую букву Y), когда в консольке выпишет:

***Вы установили Hyper - V.***

**Если у вас обновляется основная система виндовс, то последующая привязка HWID ПО может сброситься, чтобы этого избежать, в архиве лежит еще 1 батник(updateOFF.bat), аналогично запускаем его от администратора.**

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fustanovka-hyperv.md&src=.%2Fustanovka-hyperv-6.png)

***Вы приостановили обновления Windows.***

---

# Создание виртуальной машины(ВМ)

Нажимаем "создать"(в красной рамочке), а после "Виртуальная машина" (в синей рамочке).

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm.png)

В окне создания нажимаем "далее"(в красной рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-2.png)

На следующей странице указываем Имя нашей VM(в синей рамочке) и жмем "далее"(в красной рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-3.png)

После на следующей странице нажимаем "2 поколение"(в синей рамочке) и "далее"(в красной рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-4.png)

На следующей странице нам нужно выделить память для В/М, прописываем "8192"(в синей рамочке), убираем галочку с параметра(в зеленой рамочке) и нажимаем "далее"(в красной рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-5.png)

После на следующей странице нажимаем "подключение" и выбираем нашу сеть(с вашим названием(в синей рамочке)) и после нажимаем "далее"(в красной рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-6.png)

На следующей странице нам нужно подключить виртуальный жесткий диск, для этого нужно только вписать "100" в "размер"(в синей рамочке) и после нажимаем "далее"(в красной рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-7.png)

Далее нам нужно прописать параметры установки, для этого нажимаем на "Установить операционную систему из файла загрузочного образа"( в синей рамочке), а в кнопке "обзор", выбираем наш Iso файл, который мы скачали ранее и после нажимаем "далее"(в красной рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-8.png)

На следующей странице просто нажимаем "готово"( в красной рамочке) и ждём пока создастся В/М:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-9.png)

После вы должны зайти в "параметры В/М" (в красной рамочке) и включаем "доверенный платформенный модуль"(в зеленой рамочке), после нажимаем "применить" :

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-10.png)

В разделе процессор(в красной рамочке) указываем кол-во CPU для работы указываем не менее 6(в синей рамочке) и нажимаем "применить":

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-11.png)

Заходим в "контрольные точки"(в красной рамочке), убираем галочку(в синей рамочке) и нажимаем "применить" и "ОК"

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fsozdanie-virtualnoy-mashiny-vm.md&src=.%2Fsozdanie-virtualnoy-mashiny-vm-12.png)

Вы создали виртуальную машину(ВМ)

---

# Подключение к вм и установка windows

После установки мы должны нажать на нашу В/М(в красной рамочке), после на "подключить"(в синей рамочке) и "пуск" (в зеленой рамочке):

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows.png)

Если вы всё правильно сделали, то уже после нажатия кнопки "подключить у вас открывается новое окно, после нажатия на пуск, переходите в него и яростно нажимаете любую клавишу на клавиатуре для пуска установки виндовс. Если вы всё сделали правильно, перед вами высветится Hyper - V, а после "Ghostspectre", в нём снизу нажимаете на значок(в красной рамочке), после на "YES" (в синей рамочке), после ждём установки:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-2.png)

После нажимаем то, что в красных и синих рамочках:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-3.png)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-4.png)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-5.png)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-6.png)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-7.png)

После начнется установка, она будет продолжительной(время установки зависит от характеристик Вашего накопителя), ожидаем пока появится окно ниже:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-8.png)

Ждём перезагрузки внутри вм и готово, мы на главном экране:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fpodklyuchenie-k-vm-i-ustanovka-windows.md&src=.%2Fpodklyuchenie-k-vm-i-ustanovka-windows-9.png)

---

# NVIDIA

*Если у вас видеокарта Nvidia:*

- Если видеокарта 30хх и выше серии, то скачиваем 572.70: "[тык](https://www.nvidia.com/en-us/drivers/details/242141)"
- Если видеокарта 50хх и выше серии, то скачиваем самый совершенный драйвер.
- Если видеокарта 20хх и ниже серии, то скачиваем 546.33: "[тык](https://www.nvidia.com/download/driverResults.aspx/217032/ru/)".

При этом скачивание должно быть с чистой установкой на каждом виде драйверов:

- Если установщик драйверов по ссылкам:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fnastroyka-i-probros-drayverov-2%2Fnvidia.md&src=.%2F_index-2.png)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fnastroyka-i-probros-drayverov-2%2Fnvidia.md&src=.%2F_index-5.png)

- Если установка драйверов в Geforce experience: ![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fnastroyka-i-probros-drayverov-2%2Fnvidia.md&src=.%2F_index-6.png)

Далее установка базовая, если нужно перезагрузить - перезагружаем пк.

---

# AMD

*Если у вас видеокарта AMD:*

Просто скачивайте самый совершенный драйвер на вашу видеокарту через установщик или Adrenalin Edition™ Application.

---

# Проброс драйверов

- Скачиваем данные "[тык](https://drive.google.com/file/d/1Tw4nzs3aJQaA54-5kjDms2BNh7bEGjBJ/view)" и разархивируем их на основном ПК
- Запускаем и открываем В/М
- Открываем первый файл, пишем в первой строке имя вашей В/М ![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fprobros-drayverov.md&src=.%2Fprobros-drayverov.png)
- Запускаем от имени администратора PowerShell
- Копируем наш файл и нажимаем enter, в конце должно быть написано Succes ![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fprobros-drayverov.md&src=.%2Fprobros-drayverov-2.png)
- Теперь на самой В/М переходим по данному пути "C:\Temp\System32", после чего копируем все файлы в данную папку "C:\Windows\System32". После того как все скопировалось завершаем работу В/М. Заходим в параметры(в красной рамочке), далее "службы интеграции"(в синей рамочке) и отключаем гостевые службы(в зеленой рамочке), после "применить" и "ОК": ![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fprobros-drayverov.md&src=.%2Fprobros-drayverov-3.png)
- Открываем второй файлик и так же указываем имя нашей VM ![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fprobros-drayverov.md&src=.%2Fprobros-drayverov-4.png)
- Вновь запускаем PowerShell от имени администратора, вставляем туда скопированные данные и нажимаем ENTER ![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fprobros-drayverov.md&src=.%2Fprobros-drayverov-5.png)

**Чтобы точно быть уверенным в том, что проброс удался, необходимо зайти в диспетчер устройств на вашей В/М. В пункте видеоадаптеры будет проброшенная вами видеокарта, как на основном ПК.**

*Если что - то пошло не так, опуститесь в раздел проблемы*

---

# Настройка системы

Заходим на вм и включаем расширенный сеанс:

Расширенный сеанс hyper - v создан для обмена данными между хостом и вм, крайне полезная штука, ОДНАКО при фарме нужно его выключать иначе дальнейший чит не будет функционировать корректно.

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-hyper-v%2Fnastroyka-sistemy.md&src=.%2Fnastroyka-sistemy-3.png)

Расширенный сеанс может включиться не сразу, буквально вм не увеличится в размерах и выдаст ошибку подключения к вм. В таких случаях нужно просто перезагрузить вм, а если это не помогло, то перезагрузить пк.

---

# Настройка панели на ВМ

Скачиваем архив с панелью из бота(@dmpanelbot) или текстовика panel.txt и разархивируем в корень диска C.

«корень диска C:» (часто называют «корень системного диска») — это самая верхняя папка на жёстком диске. Туда можно попасть, открыв «Этот компьютер» → диск C:. Все папки и файлы внутри него (например, Program Files, Windows, Users) находятся в корне. Соответственно Панель должна лежать по пути С:\\dmpanel\\dmpanel.exe

Открываем dmpanel.exe, копируем лицензионный ключ, покупаем подписку, далее "управление подписками", выбираем нашу подписку, далее "добавить HWID" и вставляем ключ:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-paneli-na-vm.md&src=.%2Fnastroyka-paneli-na-vm.png)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-paneli-na-vm.md&src=.%2Fnastroyka-paneli-na-vm-2.png)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-paneli-na-vm.md&src=.%2Fnastroyka-paneli-na-vm-3.png)

- В папке с панелью:
- В файл logpass.txt добавляем данные от своих аккаунтов в формате login:password
- В папку mafs добавляем maFile от ваших аккаунтов.maFile должны быть обязательно без пароля и ПЕРЕИМЕНОВАНЫ в соответствии с логином(автоматическая программа, которая переименовывает + урезает(согласно стандарту по п.7) представлена ниже: "maFile_renamer + cut.exe" , если нужно только переименовать без урезания - ‘‘maFile_renamer.exe".Снять пароль можно нажав кнопку "Manage Encryption" в Вашем SDA. Она находится справа сверхуКаждый maFile должен содержать: shared_secret и steam_id ( Пример урезанного maFile: {"shared_secret":"-","Session":{"SteamID":"id"}} )
- Если все было сделано верно, запускаете панель и видим следующее окно:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-paneli-na-vm.md&src=.%2Fnastroyka-paneli-na-vm-4.png)

Нажимаем импорт, в списке появятся ваши аккаунты, а после "Настройки"

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-paneli-na-vm.md&src=.%2Fnastroyka-paneli-na-vm-5.png)

Далее:

- Указываем путь ко стиму кнопкой "Выбрать папку"
- нажимаем "Получить" для заполнения полей vendor и device id.Если vendor и device id не подтягиваются, у вас по - прежнему стоят нули (часто встречается на видеокартах AMD), то вам нужно вручную зайти в CS2, перейти в настройки графики и потыкать рандомные настройки графики, чтобы графика стала "кастомная".Переходим по пути Переходим в SteamFolder\userdata\id\730\local\cfgОткрываем файл cs2_video.txtКопируем VendorID и DeviceID, после чего вставляем их в соответствующие поля в панели
- 3. "ID чата" берем из телеграмма: заходим в нашего бота @dmpanelbot, вводим /start и копируем цифры: ![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-paneli-na-vm.md&src=.%2Fnastroyka-paneli-na-vm-7.png) *эти цифры и есть ваш сhat id.*
- Token нужен для отправки статистики о фарме в ваш тг бот, для этого переходим в тг бота: @BotFather, в нём нажимаем:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fnastroyka-paneli-na-vm.md&src=.%2Fnastroyka-paneli-na-vm-6.png)

*Этот API и есть токен, вставляете в панель.*

Чтобы бот заработал, его нужно запустить, для этого переходим в него и просто снизу нажимаем start.

---

# Проблема связанная с файлами Nvapi(при запуске кс)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fchastye-problemy%2Fproblema-svyazannaya-s-faylami-nvapi-pri-zapuske.md&src=.%2Fproblema-svyazannaya-s-faylami-nvapi-pri-zapuske.png)

Если при запуске игры возникает эта ошибка, то вам нужно зайти в проводник, потом на диск с, в поиске написать nvapi. После поиска удалить все найденные файлы(абсолютно все найденные). Это решит вашу проблему.

---

# Проблема видимости видеокарты(показана встроенная видеокарта)

Если при открытии диспетчера устройств(Device Manager), Вы видите такое:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fchastye-problemy%2Fproblema-vidimosti-videokarty.md&src=.%2Fproblema-vidimosti-videokarty.png)

Как можно заметить в устройствах видеоадаптеров нет вашей основной видеокарты. Решить эту проблему можно лишь выключением встроенной видеокарты в BIOS:

### Отключение видеокарты в BIOS

*Самый надежный способ отключить встроенную видеокарту — это изменить настройки BIOS. Если отключить интегрированную графику на этом уровне, система не будет воспринимать её как существующую. Это помогает избежать возможных конфликтов, которые могут возникнуть при отключении встроенного видеоадаптера через операционную систему или сторонние программы.*

*Для этого необходимо зайти в BIOS и найти раздел, связанный с настройками интегрированной графики. Наиболее распространённые варианты:*

- «Advanced» – «Primary Graphics Adapter».
- «Config» – «Graphic Devices».
- «Advanced Chipset Features» – «Onboard GPU».

*Способ отключения встроенной видеокарты может варьироваться в зависимости от модели материнской платы и версии BIOS. Обычно достаточно установить значение «Disabled» для соответствующего параметра. В некоторых случаях может потребоваться переключение между опциями «Integrated Graphics» и «Discrete Graphics».*

*Кроме того, в настройке «Primary Graphics Adapter» нужно выбрать интерфейс подключения графического адаптера, который будет использоваться вместо встроенной графики. Для дискретной видеокарты это, как правило, PCI-E.*

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fchastye-problemy%2Fproblema-vidimosti-videokarty.md&src=.%2Fproblema-vidimosti-videokarty-2.png)

*Чтобы сохранить внесённые изменения, нажмите клавишу F10 или перейдите на вкладку «Exit» и выберите опцию «Save & Exit». Это применит новую конфигурацию и перезагрузит систему.*

---

# Проблема проброса драйверов видеокарты(неудачный проброс)

Если ваша видеокарта отображается в списке диспетчера устройств(Device manager), однако рядом с ней стоит восклицательный знак:

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fchastye-problemy%2Fproblema-probrosa-drayverov-videokarty-neudachnyy.md&src=.%2Fproblema-probrosa-drayverov-videokarty-neudachnyy.png)

**Обратите внимание, что для файлов ниже нужно, чтобы на основной системе и В/М был драйвер 546.33**

В данном случае поможет в ручную прокинуть драйвера:

Скачиваем архив по ссылке: "[ТЫК](https://drive.google.com/file/d/1ZHjN15id-ln7viHTKytuF2bWoB-kmLFi/view?usp=sharing)"

- Зеркала: "[ТЫК](https://drive.google.com/file/d/1r1fYy1VhO5r2F35Cc_ZzQ7-wEFnSiNXU/view?usp=sharing)" и "[ТЫК](https://drive.google.com/file/d/1lrNbaZkBB9Wojc_Vb3eXM5UXTS82VR2q/view?usp=sharing)"

Содержимое архива прокидываем на самой В/М по данному пути: "C:\Windows\System32" с ЗАМЕНОЙ. После того как все скопировалось завершаем В/М. Заходим в параметры(в красной рамочке), далее "службы интеграции"(в синей рамочке) и отключаем гостевые службы(в зеленой рамочке), после "применить" и "ОК":

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fchastye-problemy%2Fproblema-probrosa-drayverov-videokarty-neudachnyy.md&src=.%2Fproblema-probrosa-drayverov-videokarty-neudachnyy-2.png)

Открываем второй файлик и так же указываем имя нашей VM

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fchastye-problemy%2Fproblema-probrosa-drayverov-videokarty-neudachnyy.md&src=.%2Fproblema-probrosa-drayverov-videokarty-neudachnyy-3.png)

Вновь запускаем PowerShell от имени администратора, вставляем туда скопированные данные и нажимаем ENTER

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Fchastye-problemy%2Fproblema-probrosa-drayverov-videokarty-neudachnyy.md&src=.%2Fproblema-probrosa-drayverov-videokarty-neudachnyy-4.png)

**Чтобы точно быть уверенным в том, что проброс удался, необходимо зайти в диспетчер устройств на вашей В/М. В пункте видеоадаптеры будет проброшенная вами видеокарта, как на основном ПК.**

---

# Настройки(красная рамочка)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Ffunkcii-dm-panel%2Fnastroyki-krasnaya-ramochka.md&src=.%2Fnastroyki-krasnaya-ramochka.png)

- Красная рамочка - настройки бота телеграмм для статистики.
- Зеленая рамочка - Vendor id и Device id - цифры, позволяющие открывать кс в маленьком окошке, чтобы автоматически они подстиавились, нужно нажать кнопку «Получить».
- Синяя рамочка справа вверху - здесь Вы можете выбрать карты, на которых будет играть ваш бот.
- Фиолетовая рамочка - выбор CFG бота. Всего есть пока 5 CFG:**legit** — самый слабый конфиг.
- **hard** — сильный конфиг.
- Желтая рамочка - настройка операции:**Включить режим операции** — бот прекращает фармить кейсы, весь приоритет направляется на фарм пропусков.
- **Перезагрузить ПК при VAC-ошибке** — при длительной игре может возникнуть VAC-ошибка; чтобы автоматически её обходить, предусмотрена функция перезагрузки ПК.
- **Таймаут при VAC-ошибке** — при длительной игре возможна VAC-ошибка; данная функция позволяет сделать паузу, чтобы переждать её действие.
- **Проверить файлы игры при VAC-ошибке** — при появлении VAC-ошибки бот может выполнить проверку целостности файлов, что иногда помогает устранить проблему.

---

# Трейды(оранжевая рамочка)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Ffunkcii-dm-panel%2Ftreydy-oranzhevaya-ramochka.md&src=.%2Ftreydy-oranzhevaya-ramochka.png)

В красную рамочку нужно вставить вашу трейд ссылку, а ниже выбрать параметры, которые вам интересны:

- Авто - отправка - отправка дропа сразу после получения на аккаунте.
- Отправлять только кейсы - отправка только кейсов, без скинов.
- Отправлять карточки стима - дополнительно к инвентарю кс, будут лутаться карточки.
- Отправлять предметы TF2 - дополнительно к инвентарю кс, будут лутаться предметы TF2.

---

# Таймер(желтая рамочка)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Ffunkcii-dm-panel%2Ftaymer-zheltaya-ramochka.md&src=.%2Ftaymer-zheltaya-ramochka.png)

В красной рамочке выбираете время, а в желтой день недели.

- Включение запуска по таймеру - согласно Вами указанному времени, фарм будет старотовать.
- Включение через минуту после запуска - через минуту, как панель открылась, начнётся фарм.
- Включение автозагрузки - при перезагрузке или включении виртуальной машины или хоста, панель автозапуском откроется.

---

# Хранилище(зеленая рамочка)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Ffunkcii-dm-panel%2Fkhranilische-zelenaya-ramochka.md&src=.%2Fkhranilische-zelenaya-ramochka.png)

Хранилище - аккаунт, на который будут приходить трейды с дропом, а панель будет сама их принимать, просто введите данные аккаунта, добавьте его мафайл и запустите.

---

# Прочее(Синяя рамочка)

![](https://docs.dmpanel.com/api/article/resource/get?catalogName=dmpanelguide&articlePath=dmpanelguide%2Fnastroyka%2Ffunkcii-dm-panel%2Fprochee.md&src=.%2Fprochee.png)

Настройки сбора предметов:

- Включить сбор дропа - после отфарма, дроп будет автоматически собираться.
- Включить продвинутый сбор дропа - улучшенная система сбора дропа, анализирующая не только редкость, но и цену, паттерн и качество скина.
- Не собирать графике - не собирать, чтобы не забивать инвентарь копейками.
- Проверять паттерн - делать упор на качество скина.

Настройки фарма:

- Перемешивать аккаунты - каждую неделю аккаунты будут запускаться в рандомном порядке.
- Включить частичный фарм - фукнция для отфарма аккаунтов, но не полностью, ниже можно написать до какого уровня, согласно XP, а после в конце по 2 кругу дофармливает аккаунты.
- остановить фарм после полуфарма(частичного фарма) - не отфарливает аккаунт до конца
- Проверять на VAC и КТ - проверка перед фармом, чтобы сразу пропускать аккаунт.

Настройка добавления бесплатных игр:

- Включить добавление бесплатных игр - перед фармом, на аккаунт добавятся игры.
- Запускать игру перед фармом - прогрев на 35 сек, перед началом фарма.

Прочее:

- Получать медаль - сбор медали автоматически при достижении 40 лвла на аккаунте.
- Выключить логин по сессии - стандартный вход по логину и паролю.
- Проверять на отфарм - пропускать аккаунт, если он уже был отфармлен, чтобы не терять фремя.