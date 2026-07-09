> For the complete documentation index, see [llms.txt](https://info.tacompany.ru/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://info.tacompany.ru/steam-obuchenie/obuchenie-zarabotku-steam/sda-i-rabota-s-nim.md).

# SDA и работа с ним

Для более лёгкого обучения - подпишитесь [на чат](https://t.me/NFTgamebots) от создателей обучения.&#x20;

Если вам нужно автоматизировать заработок в Steam, то готовые решения есть [тут](https://t.me/TAsteamBot), боты под заказ можно заказать [тут](https://t.me/skywk).&#x20;

### Что такое SDA?

**Steam Desktop Authenticator (SDA)** — это программа, которая позволяет управлять двухфакторной аутентификацией (2FA) в Steam прямо с вашего компьютера. Она является альтернативой официальному мобильному приложению Steam и используется для генерации кодов аутентификации, необходимых для входа в аккаунт и подтверждения трейдов. SDA особенно полезен тем, кто часто торгует предметами или использует Steam на нескольких устройствах, поскольку он упрощает процесс авторизации и помогает избежать возможных задержек, связанных с использованием мобильного устройства. Кроме того, программа позволяет сохранять резервные коды.

Внимание! Команда "ТА" не имеет никакого отношения к разработке SDA.&#x20;

### Как установить и запустить SDA?

* До начала прикрепления SDA вы должны открепить свой Steam аккаунт от Steam Guard.
* **Скачайте Steam Desktop Authenticator** с официального репозитория по ссылке: [GitHub - Jessecar96/SteamDesktopAuthenticator](https://github.com/Jessecar96/SteamDesktopAuthenticator).\
  **Важно:** Скачивая программу с других источников, вы рискуете загрузить мошеннические программы. Используйте только рекомендованную ссылку.
* Нажмите на ссылку "Releases".

<figure><img src="/files/t9XNaFUBa8pQl7NAlFT4" alt=""><figcaption></figcaption></figure>

* Выберите самую последнюю версию (на момент написания статьи это 1.0.14) и откройте внизу поле Assets.

<figure><img src="/files/l6UyvE8OJKAUiRXINqy5" alt=""><figcaption></figcaption></figure>

* Скачайте файл `SDA-1.0.14.zip`.&#x20;
* После завершения загрузки откройте архив, распакуйте его, и дважды щелкните на `Steam Desktop Authenticator.exe`, чтобы запустить программу.

<figure><img src="/files/ukXQfhyyDOgfnTNxY1jG" alt="" width="375"><figcaption></figcaption></figure>

* В появившемся окне выберите опцию "This is my first time..." (если это ваш первый аккаунт).

<figure><img src="/files/oc1Hh8z57b1fAZAPfSgV" alt="" width="375"><figcaption></figcaption></figure>

* Нажмите на кнопку "Setup new Account".

<figure><img src="/files/EGD0l7xg3DYxdkUinoMx" alt="" width="314"><figcaption></figcaption></figure>

* Введите логин и пароль от вашего аккаунта Steam.

<figure><img src="/files/hDGEkEeMCvhsYb5iWiUh" alt="" width="302"><figcaption></figcaption></figure>

* Укажите адрес электронной почты, на который будет отправлен код подтверждения. Затем введите ваш номер телефона с международным кодом (в формате, указанном в окне).

<figure><img src="/files/PWI4E8JTnx2HgmTimAbc" alt="" width="375"><figcaption></figcaption></figure>

* После получения письма на почту, перейдите по ссылке в письме, чтобы подтвердить привязку номера телефона к аккаунту.

<figure><img src="/files/90m6AVfJmBB5YzxjvUIx" alt="" width="375"><figcaption></figcaption></figure>

* Вернитесь в Steam Desktop Authenticator и нажмите "OK".

<figure><img src="/files/hyaudP6VoncGn8iDlhYm" alt="" width="360"><figcaption></figcaption></figure>

* Если вы планируете использовать [Steam бот](https://t.me/TAsteamBot), оставьте следующее поле пустым и нажмите "Accept".\
  **Важно:** Отсутствие пароля в приложении необходимо для работы бота. В остальных случаях обязательно устанавливайте пароли и храните их в надежном месте.

<figure><img src="/files/hEtKvv6vjrtUUVi1ovSv" alt="" width="375"><figcaption></figcaption></figure>

* Появится код в формате `R12345` — запишите его и нажмите "OK". Этот код понадобится для восстановления аккаунта.
* Введите код, полученный в SMS, и нажмите "Accept".

<figure><img src="/files/R7FX6vXT89RvSxNat6H8" alt="" width="375"><figcaption></figcaption></figure>

* В следующем окне снова введите код в формате `R12345` и нажмите "Accept".

<figure><img src="/files/4CujNjFbtJGa1gWPcbqI" alt="" width="375"><figcaption></figcaption></figure>

* Готово! Теперь перейдите в папку `maFiles`, которая находится в директории, куда вы распаковали архив.

<figure><img src="/files/3FrJwFALUnqB1j8OqrCN" alt="" width="375"><figcaption></figcaption></figure>

* В этой папке содержится информация, необходимая для работы бота. Откройте нужный файл как текстовый документ.\
  **Важно:** Никогда не передавайте этот файл на другие ресурсы или сторонним ботам и храните его в надежном месте. Этот файл даёт доступ к вашему Steam аккаунту.
* Откройте файл блокнотом и найдите в файле поля "Shared\_secret", "Identity\_secret", и "SteamID". Скопируйте их значения и вставьте в соответствующие поля в боте, если вы хотите запустить [Steam бот](https://t.me/TAsteamBot).

Статья написана специально для проекта "Технологии Автоматизации" (ТА). \
Вопросы по статье можете задавать в нашем чате: <https://t.me/NFTgamebots>\
Ссылка на бота для торговли в Steam: <https://t.me/TAsteamBot>
