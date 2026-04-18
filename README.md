# UI Lab: Skill Refresher

---

### Доступен для заказов. [Мой профиль на Kwork](https://kwork.ru/user/teawithsuqar)

Мой личный полигон для оттачивания навыков фронтенд-разработки. Здесь я буду собирать изолированные UI-компоненты и 
макеты каждый день.

**Цель:** Сохранять "чистоту кода" и скорость верстки на актуальном стеке, пока фокус смещен на другие задачи.

## Стек технологий
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)


---
## Посмотреть работы можно по этой [ссылке](https://daily-ui-lab.vercel.app/)

---
## Как запустить локально

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/YanderuxTea/daily-ui-lab.git
   ```
2. Перейти в папку
   ```bash
   cd daily-ui-lab
   ```

3. Установить зависимости
   ```bash
   pnpm install
   ```

4. Запустить
   ```bash
   pnpm dev
   ```
---

## Список реализованных модулей

### 1. Glassmorphism Profile Card
* **Описание:** Минималистичная карточка профиля с эффектом матового стекла и адаптивной сеткой статистики.
* **Тайминг реализации:** ~45 минут.
* **Путь:** `/glassmorphism-profile-card`
<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/glassmorphism-profile-card.gif)

</details>

### 2. Interactive Activity Widget
* **Описание:** Дашборд-виджет с динамическим распределением задач и пружинной анимацией прогресса.
* **Тайминг реализации:** ~30 минут.
* **Путь:** `/dashboard-activity-widget`
<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/dashboard-activity-widget.gif)

</details>

### 3. Command Palette
* **Описание:** Интеллектуальная панель управления приложением. Позволяет пользователю быстро перемещаться по 
  разделам и 
  выполнять 
экшены, не отрывая рук от клавиатуры.

* **Тайминг реализации:** ~1.5 часа.
* **Путь:** `/command-palette`

#### Технические фичи:
* **Global Keyboard Listener:** Вызов палитры через `Ctrl + B` и полная навигация стрелками (`ArrowUp`, `ArrowDown`).
* **Smart Filter & Grouping:** Динамическая фильтрация данных с сохранением группировки по категориям через `Array.reduce`.
* **Сквозная индексация:** Реализована логика выбора элементов, которая корректно работает со сгруппированным списком.
* **UI/UX:** * Эффект "стеклянного морфизма" для оверлея.
   * Пружинная анимация появления (`Framer Motion Spring`).
   * Автофокус на `input` при открытии.
   * Backdrop-blur подложка для концентрации внимания на поиске.
<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/command-palette.gif)

</details>

### 4. Message Card
* **Описание:** Карточка сообщения для чатов и форумов с поддержкой интерактивных действий и микроанимаций. Включает 
  базовую структуру (аватар, имя, время, текст) и панель действий (лайк, ответ, меню).
* **Тайминг реализации:** ~30 минут.
* **Путь:** `/message-card`
<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/message-card.gif)

</details>