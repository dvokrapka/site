<form id="siteBrief" class="brief-form">
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Назва Вашої компанії:</span>
        </div>
        <div class="dv-form-input">
            <input class="write-answer" type="text" name="orgname">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Чим Ви займаєтесь?</span>
        </div>
        <div class="dv-form-input">
            <textarea class="write-answer" rows="5" name="sphere"></textarea>
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Як сайт назвемо?</span>
        </div>
        <div class="dv-form-input">
            <input class="write-answer" type="text" name="sitename" placeholder="www.best-site-ever.com">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Тип сайту:</span>
        </div>
        <div class="dv-form-input dv-box">
            <label class="chk-row">Сайт-візитка
                <input name="type" type="radio" checked="checked">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Лендінг
                <input name="type" type="radio">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Портфоліо/галерея
                <input name="type" type="radio">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Корпоративний сайт
                <input name="type" type="radio">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Сайт-каталог
                <input name="type" type="radio">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Інтернет-магазин
                <input name="type" type="radio">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Блог
                <input name="type" type="radio">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Інше:
                <input name="type" type="radio">
                <span class="mark-radio"></span>
            </label>
            <input class="write-answer" type="text" name="type">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Вкажіть основні сторінки/розділи сайту:</span>
        </div>
        <div class="dv-form-input dv-box">
            <label class="chk-row">Головна
                <input type="checkbox" name="pages[home]" checked="checked">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Про компанію
                <input type="checkbox" name="pages[about]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Контакти
                <input type="checkbox" name="pages[contacts]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Каталог/галерея
                <input type="checkbox" name="pages[catalog]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Послуги/товари з підрозділами
                <input type="checkbox" name="pages[serices]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Новини
                <input type="checkbox" name="pages[news]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Блог
                <input type="checkbox" name="pages[blog]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Інші:
                <input type="checkbox" >
                <span class="mark-chkbx"></span>
            </label>
            <input class="write-answer" type="text" name="pages[optional]">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Ключові сервіси сайту:</span>
        </div>
        <div class="dv-form-input dv-box">
            <label class="chk-row">Медіа галерея
                <input name="services[gallery]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Відгуки/коментарі
                <input name="services[comments]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Стрічка новин
                <input name="services[newsfeed]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Форма зворотнього зв'язку
                <input name="services[callback]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Калькулятор
                <input name="services[calculator]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Автовідповідач
                <input name="services[bot]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Кнопки соціальних мереж
                <input name="services[social]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Завантаження файлів
                <input name="services[upload]" type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Інше:
                <input type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <input name="services[optional]" class="write-answer" type="text">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Чи потрібні іншомовні версії сайту?</span>
        </div>
        <div class="dv-form-input dv-box">
            <label class="chk-row">Так
                <input name="multilang" type="radio" checked="checked">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Ні
                <input name="multilang" type="radio">
                <span class="mark-radio"></span>
            </label>
        </div>
    </div>
    <!-- Content -->
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Готовність матеріалу, який буде викладений на сайт</span>
        </div>
        <div class="dv-form-input dv-box">
            <label class="chk-row">Всі матеріали готові
                <input type="radio" checked="checked" name="materials[ready]">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Потрібно редагувати
                <input type="radio" name="materials[toedit]">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Потрібно створювати контент з нуля
                <input type="radio" name="materials[create]">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Інше:
                <input type="radio" name="materials">
                <span class="mark-radio"></span>
            </label>
            <input class="write-answer" type="text" name="materials[optional]">
        </div>
    </div>
    <!-- Firmstyle -->
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Маєте власний фірмовий стиль?</span>
        </div>
        <div class="dv-form-input dv-box">
            <label class="chk-row">Звісно, що за питання?
                <input name="firmstyle[yes]" type="radio" checked="checked">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Немаю (((... А можете зробити?
                <input name="firmstyle[todo]" type="radio">
                <span class="mark-radio"></span>
            </label>
            <label class="chk-row">Просто поставте туди що-небудь
                <input name="firmstyle[none]" type="radio">
                <span class="mark-radio"></span>
            </label>
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Сайти, які Вам подобаються:</span>
        </div>
        <div class="dv-form-input">
            <textarea name="liked" class="write-answer" placeholder="www.site-susida.com"></textarea>
        </div>
    </div>
    <!-- Terms -->
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Бажаний термін здачі проекту:</span>
        </div>
        <div class="dv-form-input">
            <input class="write-answer" name="deadline" type="text" placeholder="на вчора" data-uk-datepicker="{format:'DD.MM.YYYY', i18n: { months:['Січень','Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'], weekdays:['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] }}">
        </div>
    </div>
    <!-- Budget -->
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Бюджет на розробку сайту ($):</span>
        </div>
        <div class="dv-form-input">
            <div class="dv-input-slider">
                <div class="srange-spans">
                    <input class="min-cost" type="number" min="200" step="50" name="cost[min]">
                    <span></span>
                    <input class="max-cost" type="number" max="5000" step="50" name="cost[max]">
                </div>
                <div class="srange-slider"></div>
            </div>
        </div>
    </div>
    <!-- Afterservice -->
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Чи потрібна подальша підтримка сайту:</span>
        </div>
        <div class="dv-form-input dv-box">
            <label class="chk-row">Дизайнерська
                <input type="checkbox" name="support[design]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Контентна
                <input type="checkbox" name="support[content]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Технічна
                <input type="checkbox" name="support[tech]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Рекламна
                <input type="checkbox" name="support[adv]">
                <span class="mark-chkbx"></span>
            </label>
            <label class="chk-row">Інша:
                <input type="checkbox">
                <span class="mark-chkbx"></span>
            </label>
            <input class="write-answer" type="text" name="support[optional]">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Запланований щомісячний бюджет на просування/підтримку сайту:</span>
        </div>
        <div class="dv-form-input">
            <div class="dv-input-slider">
                <div class="srange-spans">
                    <input class="min-cost" type="number" min="0" step="1" name="supbudget[min]">
                    <span></span>
                    <input class="max-cost" type="number" max="5000" step="1" name="supbudget[max]">
                </div>
                <div class="srange-slider"></div>
            </div>
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Ваші коментарі/побажання</span>
        </div>
        <div class="dv-form-input">
            <textarea class="write-answer" rows="8" name="comment"></textarea>
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Долучіть, будь ласка, матеріали <br>(за наявності)</span>
        </div>
        <div class="dv-file-upload">
            <svg class="upload-ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21000 29700">
                <path class="top" d="M12795.28 16984.82c205.42,237.42 564.47,263.31 801.87,57.92 237.42,-205.42 263.31,-564.47 57.92,-801.89l-2231.91 -2577.09c-205.42,-237.42 -564.47,-263.31 -801.88,-57.92 -23,19.92 -43.95,41.24 -62.97,63.76l-2235.28 2571.24c-205.42,237.42 -179.5,596.47 57.89,801.89 237.42,205.39 596.47,179.5 801.89,-57.92l1241.5 -1428.1 -3.26 4032.72c0,313.71 254.34,568.02 568.01,568.02 313.68,0 568.02,-254.31 568.02,-568.02l3.24 -4030.59 1234.97 1425.97 -0.01 0.01z" />
                <path d="M16948.16 9986.22c-43.87,-3201.7 -2661.99,-5792.98 -5873.98,-5792.98 -1428.75,0 -2805.27,519.76 -3875.87,1463.52 -955.5,842.26 -1609.13,1967.81 -1867.97,3203.57 -18.92,-0.21 -37.66,-0.37 -56.37,-0.37 -2744.12,-0.03 -4976.77,2232.57 -4976.77,4976.77 0,2744.16 2232.65,4976.76 4976.82,4976.76l3475.78 0c247.29,0 447.87,-200.47 447.87,-447.84 0,-247.37 -200.58,-447.84 -447.87,-447.84l-3475.78 0c-2250.36,0 -4081.12,-1830.78 -4081.12,-4081.08 0,-2250.33 1830.76,-4081.09 4081.12,-4081.09 119.89,0 246.63,6.42 387.52,19.68 238.79,22.34 453.18,-147.5 485.71,-385.39 161.26,-1182.07 744.87,-2269.25 1643.36,-3061.3 906.89,-799.5 2073.02,-1239.76 3283.53,-1239.76 2745.38,0 4978.85,2233.52 4978.85,4978.85 0,98.84 -7.34,200.74 -15.11,308.6l-3.32 45.87c-9.32,131.74 40,260.89 134.82,352.89 94.71,92 225.1,137.45 356.71,124.26 119.1,-12 239.29,-18.03 357.16,-18.03 1939.91,0 3518.25,1578.26 3518.25,3518.22 0,1939.9 -1578.28,3518.19 -3518.25,3518.19l-3654.93 0c-247.29,0 -447.84,200.47 -447.84,447.84 0,247.37 200.55,447.84 447.84,447.84l3654.93 0c2433.81,0 4413.93,-1980.02 4413.93,-4413.87 -0.05,-2412.02 -1944.99,-4378.48 -4349.04,-4413.33l0.02 0.02zm-5873.92 -3688.11c-1872.67,0 -3475.74,1399.49 -3728.87,3255.28 -33.45,245.08 138.18,470.87 383.21,504.31 20.55,2.79 40.92,4.16 61.05,4.16 220.47,0 412.58,-162.82 443.13,-387.34 192.92,-1414.23 1414.47,-2480.7 2841.43,-2480.7 247.37,0 447.84,-200.47 447.84,-447.84 0.05,-247.34 -200.47,-447.87 -447.79,-447.87z" />
            </svg>
            <input name="files" type="file" multiple>
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Контактна особа:</span>
        </div>
        <div class="dv-form-input">
            <input class="write-answer" type="text" name="name">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Контактний телефон:</span>
        </div>
        <div class="dv-form-input">
            <input class="write-answer" type="tel" name="tel">
        </div>
    </div>
    <div class="dv-form-row">
        <div class="dv-form-title">
            <span>Електронна пошта:</span>
        </div>
        <div class="dv-form-input">
            <input class="write-answer" type="email" name="email">
        </div>
    </div>
    <div class="form-submit-btn">
        <div class="titles brief-intro">
            <h2>Дякуємо за Ваш час та терпіння!</h2>
            <p>Натисніть НАДІСЛАТИ і ми це обов’язково компенсуємо!</p>
        </div>
        <button type="submit" class="sm-button sm-black">Надіслати</button>
    </div>
</form>