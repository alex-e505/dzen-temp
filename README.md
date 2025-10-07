# Dzen.Team - Юридическая информация

Страница юридической информации для Dzen.Team с темной темой и адаптивным дизайном.

## Технологии

- **Next.js 15.5.4** с App Router
- **React 19** 
- **TailwindCSS 4** для стилизации
- **shadcn/ui** компоненты
- **next-themes** для темной темы
- **lucide-react** иконки
- **TypeScript**

## Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Функции

- ✅ Переключатель темы (авто/светлая/темная)
- ✅ Адаптивный дизайн
- ✅ Карточки документов
- ✅ Информация о компании
- ✅ Центрированный контент
- ✅ SEO оптимизация

## Структура

```
src/
├── app/
│   ├── layout.tsx      # Layout с ThemeProvider
│   ├── page.tsx        # Главная страница
│   └── globals.css     # Глобальные стили
├── components/
│   ├── ui/             # shadcn/ui компоненты
│   ├── header.tsx      # Шапка сайта
│   ├── footer.tsx      # Подвал
│   ├── document-card.tsx
│   ├── company-info.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts        # Утилиты
```