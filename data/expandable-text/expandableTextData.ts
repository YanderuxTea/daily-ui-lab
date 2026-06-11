export type ExpandableData = {
  title: string;
  description: string;
  tag: string;
  classnameTag: string;
};
export const tsData: ExpandableData = {
  title: "Зачем использовать TypeScript",
  description:
    "TypeScript - строго типизированный язык, расширяющий JavaScript. Он позволяет выявлять ошибки ещё на этапе разработки, задолго до попадания кода в продакшн. Статическая типизация делает рефакторинг безопаснее и значительно улучшает автодополнение в IDE. Для крупных проектов TypeScript становится практически обязательным инструментом: он самодокументирует код и снижает когнитивную нагрузку при работе с чужими компонентами.",
  tag: "TypeScript",
  classnameTag: "bg-et-violet-dim text-et-violet",
};
export const njData: ExpandableData = {
  title: "Next.js App Router",
  description:
    "App Router - новый подход к маршрутизации в Next.js 13+, основанный на React Server Components. Он позволяет рендерить компоненты на сервере по умолчанию, сокращая JavaScript-бандл на клиенте. Поддерживает вложенные лейауты, стриминг через Suspense и параллельную загрузку маршрутов. Переход с Pages Router требует пересмотра подхода к fetch и клиентским хукам - но в итоге приложение работает быстрее и проще масштабируется.",
  tag: "Next.js",
  classnameTag: "bg-et-blue-dim text-et-blue",
};
export const dockerData: ExpandableData = {
  title: "Docker для Node.js проектов",
  description:
    "Docker позволяет упаковать приложение со всеми зависимостями в изолированный контейнер. Это решает классическую проблему «у меня работает» - контейнер ведёт себя одинаково локально, в CI и на продакшн-сервере. Для Node.js типичный Dockerfile включает multi-stage build: сборка в тяжёлом образе, затем копирование артефактов в минимальный alpine. В связке с Docker Compose удобно поднимать полный стек одной командой.",
  tag: "Docker",
  classnameTag: "bg-et-amber-dim text-et-amber",
};
