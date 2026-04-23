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

### 5. Toast Notification Stack

* **Описание:** Система уведомлений с глобальным контекстом и стеком тостов. Поддерживает 4 типа (success, error, 
  warning, info), авто-удаление через 4 секунды, паузу по ховеру с сохранением оставшегося времени, ручное закрытие и плавное перестроение стека. Прогресс-бар анимируется через Framer Motion useAnimate, стек - через AnimatePresence mode="popLayout".
* **Тайминг реализации:** ~1 час 20 минут.
* **Путь:**  `/toast-notification`

<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/toast-notification.gif)

</details>

### 6. Context Menu

* **Описание:** Контекстное меню по правому клику с поддержкой вложенного подменю, умным позиционированием у краёв экрана и анимацией через Framer Motion. Меню рендерится через createPortal в document.body. Позиция вычисляется с помощью requestAnimationFrame после первого рендера для точного замера высоты. Подменю открывается по ховеру с задержкой закрытия 200мс и автоматически выезжает влево если не хватает места справа.
* **Тайминг реализации:** ~3 часа.
* **Путь:**  `/context-menu`

<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/context-menu.gif)

</details>

### 7. Animated Tabs

* **Описание:** Компонент вкладок с плавной анимацией индикатора активного таба через layoutId Framer Motion и сменой контента через AnimatePresence mode="wait". Индикатор перемещается между табами с пружинной анимацией, контент появляется с fade + небольшим сдвигом по Y.
* **Тайминг реализации:** ~20 минут.
* **Путь:** `/animated-tabs`

<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/animated-tabs.gif)
</details>

### 8. OTP / PIN Input

* **Описание:** Шестизначный OTP-инпут с автофокусом, навигацией стрелками, Backspace-логикой и поддержкой вставки строки ровно из 6 цифр. Верификация срабатывает автоматически через 300мс после заполнения. При успехе — зелёная подсветка всех ячеек, при ошибке — красная + shake-анимация через Framer Motion на контейнере, после 1.2 секунды код сбрасывается и фокус возвращается на первую ячейку. Статус-текст анимируется через AnimatePresence mode="wait".
* **Тайминг реализации:** ~1 час.
* **Путь:** `pin-input`

<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/pin-input.gif)
</details>

### 9. Multi-step Stepper

* **Описание:** Трёхшаговый stepper с анимацией слайда между шагами (направление зависит от Back/Next через direction: 1 | -1), прогресс-трек через useMotionValue + useTransform с animate() для плавного перехода, dot-индикаторы с состояниями idle/active/done. Success-экран реализован без отдельного булева флага — через step === countStep + 1. Данные шагов хранятся в Record<number, StepperData> с прямой индексацией по номеру шага.
* **Тайминг реализации:** ~1 час.
* **Путь:** `/multi-step-stepper`

<details>
<summary style="font-weight: bold">Превью</summary>

![Preview](/public/multi-step-stepper.gif)
</details>