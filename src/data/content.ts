export type Locale = 'ru' | 'en'

export const locales: Locale[] = ['ru', 'en']

export const contacts = {
  phone: '+7 (915) 272-85-65',
  phoneHref: 'tel:+79152728565',
  email: 'daniil0073777@gmail.com',
  telegram: '@daniil_antsibor',
  telegramHref: 'https://t.me/daniil_antsibor',
  github: 'github.com/AntsiborDaniil',
  githubHref: 'https://github.com/AntsiborDaniil',
}

const ru = {
  meta: {
    title: 'Стрельцов Даниил — Продуктовый Frontend-разработчик',
    description:
      'Даниил Стрельцов — продуктовый Frontend-разработчик (React, TypeScript, Next.js). Портфолио, стек, проекты и контакты.',
  },
  profile: {
    name: 'Даниил Стрельцов',
    brandNav: 'AntsiborDaniil',
    brandHero: 'Стрельцов Даниил',
    role: 'Продуктовый Frontend-разработчик',
    tagline: 'React · TypeScript · Next.js',
    about:
      'Привет! Я Даниил, мне 20. Программированием занимаюсь с 14 лет, сейчас за плечами — опыт работы в BigTech и больших командах. Коммерческий опыт начинал с фриланса: много общался с клиентами, учился договариваться и смотреть на проект не только с технической, но и с продуктовой стороны — это очень помогает мне сейчас.',
    location: 'Москва',
    education: {
      school: 'НИТУ МИСИС',
      degree: 'Прикладная информатика · Бакалавр',
      year: '2028',
    },
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'English', level: 'B2' },
    ],
  },
  experience: [
    {
      id: 'cian',
      company: 'Циан',
      role: 'Стажёр Frontend-разработчик',
      period: 'Июнь 2026 — н.в.',
      link: 'https://cian.ru',
      highlights: [
        'Отладка и фикс багов документооборота — продуктово важной части микросервиса',
        'Playwright-тесты ключевых сценариев: покрытие микросервиса близко к 100%',
        'Контракт между front и back для продуктовой фичи, продуктовые груминги',
        'Правки ui-kit, Storybook и документация; снижение тех. долга команды',
        'Мониторинг микросервиса через ELK и Grafana, помощь смежным сервисам',
      ],
    },
    {
      id: 'freelance',
      company: 'Фриланс',
      role: 'Fullstack / Frontend-разработчик',
      period: 'Апрель 2025 — н.в.',
      highlights: [
        'Интернет-магазин ZNVES: полный frontend с нуля, REST-интеграция, SSR/SSG, FSD, CSP',
        '10+ лендингов и многостраничных сайтов под ключ (frontend + backend), деплой и поддержка',
        'Telegram-боты с Web App / Mini Apps, обработка медиа и генерация контента',
        'CI/CD (GitHub Actions + Docker), code review и улучшение архитектуры',
      ],
    },
    {
      id: 'yandex',
      company: 'Яндекс · ШРИ',
      role: 'Обучение',
      period: 'Июнь — Август 2025',
      link: 'https://yandex.ru/jobs/',
      highlights: [
        'Инфраструктура на Yandex Cloud и настройка workflows',
        'Интернационализация интерфейса (арабский и английский)',
        'Ускорение Node-сервера чанками, глобальное состояние в веб-приложении',
        'E2E (Playwright), unit и интеграционные тесты, оптимизация через Performance API',
      ],
    },
  ] as { id: string; company: string; role: string; period: string; link?: string; highlights: string[] }[],
  projects: [
    {
      id: 'znves',
      title: 'ZNVES',
      subtitle: 'Интернет-магазин одежды',
      description:
        'Полный frontend с нуля: каталог, корзина, оформление заказа, ЛК и избранное. Pixel-perfect UI, FSD, CSP, Telegram Login, Яндекс.Карты и Метрика.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'SCSS Modules', 'TanStack Query', 'Zustand'],
      links: [{ label: 'Открыть сайт', href: 'https://znves.ru/' }],
      accent: 'zinc',
    },
    {
      id: 'mindful',
      title: 'Mindful',
      subtitle: 'Таро онлайн · Mini App',
      description:
        'Веб-приложение и Telegram Mini App: расклады, карта дня, библиотека карт, цели и аффирмации. Monorepo на React Native / web. Backend написан самостоятельно.',
      stack: ['React', 'React Native', 'TypeScript', 'Telegram Mini Apps'],
      links: [
        { label: 'Telegram-бот', href: 'https://t.me/MindFullTaro_bot' },
      ],
      accent: 'mist',
    },
    {
      id: 'elandic',
      title: 'Elandic',
      subtitle: 'Видеопродакшн-агентство',
      description:
        'Сайт видеопродакшн-агентства: реклама и бренд-контент. Адаптивная вёрстка, аккуратный UI и быстрая загрузка медиа.',
      stack: ['React', 'TypeScript', 'Next.js'],
      links: [{ label: 'Открыть сайт', href: 'https://elandic.com/' }],
      accent: 'zinc',
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Открытый код и pet-проекты',
      description:
        'Репозитории, домашние работы ШРИ, CLI-утилиты и эксперименты. Смотрите код, архитектуру и подход к задачам.',
      stack: ['TypeScript', 'React', 'Node.js', 'Python'],
      links: [{ label: 'Профиль', href: 'https://github.com/AntsiborDaniil' }],
      accent: 'ink',
    },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'TanStack Query', 'Zustand', 'HTML5', 'CSS3', 'SCSS', 'Tailwind', 'Storybook'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express', 'REST API', 'Zod', 'Telegram Bot API'],
    },
    {
      title: 'Инфраструктура',
      items: ['Git', 'Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions', 'ESLint', 'Playwright', 'Grafana', 'ELK', 'Vite', 'Webpack'],
    },
  ],
  achievements: [
    { value: '1.5+', label: 'года коммерческого опыта' },
    { value: '10+', label: 'сайтов под ключ' },
    { value: '~100%', label: 'e2e-покрытие микросервиса в Циан' },
    { value: 'ШРИ', label: 'Яндекс · выпускник' },
  ],
  testimonials: [
    {
      id: 'znves',
      quote:
        'Даниил сделал фронтенд ZNVES с нуля — каталог, корзина, кабинет, интеграции. Всё выглядит цельно, быстро и готово к продакшену. Работать было комфортно на каждом этапе.',
      name: 'Геннадий',
      role: 'Основатель',
      company: 'ZNVES',
    },
    {
      id: 'landing',
      quote:
        'Заказывал лендинг под ключ. Получил аккуратную вёрстку, нормальную скорость и понятную структуру. Правки вносились быстро, результат совпал с ожиданиями.',
      name: 'Даниил',
      role: 'Заказчик',
      company: 'лендинг',
    },
    {
      id: 'mindful',
      quote:
        'По Mindful закрыл и фронт, и backend сам: веб, Telegram Mini App, логика сервиса. Сильный продуктовый подход и ответственность за результат.',
      name: 'Артём',
      role: 'Заказчик',
      company: 'Mindful',
    },
    {
      id: 'elandic',
      quote:
        'По Elandic Даниил быстро вник в задачу и довёл интерфейс до рабочего состояния. Чётко, без лишней воды — именно так хочется работать с разработчиком.',
      name: 'Денис',
      role: 'Заказчик',
      company: 'Elandic',
    },
  ],
  nav: [
    { id: 'about', label: 'Обо мне' },
    { id: 'experience', label: 'Опыт' },
    { id: 'projects', label: 'Проекты' },
    { id: 'testimonials', label: 'Отзывы' },
    { id: 'skills', label: 'Навыки' },
    { id: 'contact', label: 'Контакты' },
  ],
  ui: {
    header: {
      mainNav: 'Основная навигация',
      mobileNav: 'Мобильная навигация',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      switchLang: 'Switch to English',
    },
    hero: {
      aria: 'Главный экран',
      headline: 'Собираю быстрые интерфейсы и сильные продуктовые сайты',
      lead: 'React, TypeScript и Next.js — от pixel-perfect UI до релиза в продакшене.',
      primary: 'Смотреть проекты',
    },
    about: { label: 'Обо мне', title: 'Код, продукт и аккуратная инженерия' },
    experience: { label: 'Опыт', title: 'Где и как я работал' },
    projects: { label: 'Проекты', title: 'Избранные работы' },
    testimonials: {
      label: 'Отзывы',
      title: 'Что говорят о работе',
      prev: 'Предыдущий отзыв',
      next: 'Следующий отзыв',
      item: 'Отзыв',
    },
    skills: { label: 'Навыки', title: 'Стек и инструменты' },
    contact: {
      label: 'Контакты',
      title: 'Давайте сделаем что-то сильное',
      lead: 'Открыт к полной занятости, стажировке и интересным задачам по продуктовой frontend-разработке.',
      phone: 'Телефон',
    },
  },
}

export type Content = typeof ru

const en: Content = {
  meta: {
    title: 'Daniil Streltsov — Product Frontend Developer',
    description:
      'Daniil Streltsov — product frontend developer (React, TypeScript, Next.js). Portfolio, stack, projects and contacts.',
  },
  profile: {
    name: 'Daniil Streltsov',
    brandNav: 'AntsiborDaniil',
    brandHero: 'Daniil Streltsov',
    role: 'Product Frontend Developer',
    tagline: 'React · TypeScript · Next.js',
    about:
      "Hi! I'm Daniil, I'm 20. I've been programming since I was 14 and now have experience working at a BigTech company in large teams. I started my commercial career as a freelancer: I talked to clients a lot, learned to negotiate and to look at a project not only from the technical side but from the product side too — which helps me a lot today.",
    location: 'Moscow',
    education: {
      school: 'NUST MISIS',
      degree: 'Applied Informatics · Bachelor',
      year: '2028',
    },
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'B2' },
    ],
  },
  experience: [
    {
      id: 'cian',
      company: 'Cian',
      role: 'Frontend Developer Intern',
      period: 'June 2026 — present',
      link: 'https://cian.ru',
      highlights: [
        'Debugged and fixed bugs in document workflow — a business-critical part of the microservice',
        'Playwright tests for key scenarios: microservice coverage close to 100%',
        'Designed the front–back contract for a product feature, took part in product groomings',
        'ui-kit changes, Storybook and documentation; reduced the team’s tech debt',
        'Monitored the microservice with ELK and Grafana, helped neighbouring services stay stable',
      ],
    },
    {
      id: 'freelance',
      company: 'Freelance',
      role: 'Fullstack / Frontend Developer',
      period: 'April 2025 — present',
      highlights: [
        'ZNVES online store: full frontend from scratch, REST integration, SSR/SSG, FSD, CSP',
        '10+ turnkey landing pages and multi-page sites (frontend + backend), deployment and support',
        'Telegram bots with Web App / Mini Apps, media processing and content generation',
        'CI/CD (GitHub Actions + Docker), code review and architecture improvements',
      ],
    },
    {
      id: 'yandex',
      company: 'Yandex · SHRI',
      role: 'Yandex Interface Development School',
      period: 'June — August 2025',
      link: 'https://yandex.ru/jobs/',
      highlights: [
        'Infrastructure on Yandex Cloud and workflow setup',
        'Interface internationalization (Arabic and English)',
        'Sped up a Node server with chunking, added global state to a web app',
        'E2E (Playwright), unit and integration tests, rendering optimization with the Performance API',
      ],
    },
  ],
  projects: [
    {
      id: 'znves',
      title: 'ZNVES',
      subtitle: 'Clothing online store',
      description:
        'Full frontend from scratch: catalog, cart, checkout, account and favorites. Pixel-perfect UI, FSD, CSP, Telegram Login, Yandex Maps and Metrica.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'SCSS Modules', 'TanStack Query', 'Zustand'],
      links: [{ label: 'Visit site', href: 'https://znves.ru/' }],
      accent: 'zinc',
    },
    {
      id: 'mindful',
      title: 'Mindful',
      subtitle: 'Online tarot · Mini App',
      description:
        'Web app and Telegram Mini App: spreads, card of the day, card library, goals and affirmations. React Native / web monorepo. Backend written by me.',
      stack: ['React', 'React Native', 'TypeScript', 'Telegram Mini Apps'],
      links: [
        { label: 'Telegram bot', href: 'https://t.me/MindFullTaro_bot' },
      ],
      accent: 'mist',
    },
    {
      id: 'elandic',
      title: 'Elandic',
      subtitle: 'Video production agency',
      description:
        'Website for a video production agency: advertising and brand content. Responsive layout, clean UI and fast media loading.',
      stack: ['React', 'TypeScript', 'Next.js'],
      links: [{ label: 'Visit site', href: 'https://elandic.com/' }],
      accent: 'zinc',
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Open source and pet projects',
      description:
        'Repositories, SHRI homework, CLI utilities and experiments. Take a look at the code, architecture and approach to problems.',
      stack: ['TypeScript', 'React', 'Node.js', 'Python'],
      links: [{ label: 'Profile', href: 'https://github.com/AntsiborDaniil' }],
      accent: 'ink',
    },
  ],
  skillGroups: [
    { title: 'Frontend', items: ru.skillGroups[0].items },
    { title: 'Backend', items: ru.skillGroups[1].items },
    { title: 'Infrastructure', items: ru.skillGroups[2].items },
  ],
  achievements: [
    { value: '1.5+', label: 'years of commercial experience' },
    { value: '10+', label: 'turnkey websites' },
    { value: '~100%', label: 'e2e coverage of a microservice at Cian' },
    { value: 'SHRI', label: 'Yandex · graduate' },
  ],
  testimonials: [
    {
      id: 'znves',
      quote:
        'Daniil built the ZNVES frontend from scratch — catalog, cart, account, integrations. Everything feels cohesive, fast and production-ready. Working together was comfortable at every stage.',
      name: 'Gennady',
      role: 'Founder',
      company: 'ZNVES',
    },
    {
      id: 'landing',
      quote:
        'I ordered a turnkey landing page. Got clean markup, good speed and a clear structure. Revisions were quick, and the result matched my expectations.',
      name: 'Daniil',
      role: 'Client',
      company: 'landing page',
    },
    {
      id: 'mindful',
      quote:
        'On Mindful he handled both frontend and backend on his own: web, Telegram Mini App, service logic. Strong product mindset and ownership of the result.',
      name: 'Artem',
      role: 'Client',
      company: 'Mindful',
    },
    {
      id: 'elandic',
      quote:
        'On Elandic, Daniil quickly got into the task and brought the interface to a working state. Clear and to the point — exactly how you want to work with a developer.',
      name: 'Denis',
      role: 'Client',
      company: 'Elandic',
    },
  ],
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  ui: {
    header: {
      mainNav: 'Main navigation',
      mobileNav: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLang: 'Переключить на русский',
    },
    hero: {
      aria: 'Hero',
      headline: 'I build fast interfaces and strong product websites',
      lead: 'React, TypeScript and Next.js — from pixel-perfect UI to production release.',
      primary: 'View projects',
    },
    about: { label: 'About', title: 'Code, product and careful engineering' },
    experience: { label: 'Experience', title: 'Where and how I’ve worked' },
    projects: { label: 'Projects', title: 'Selected work' },
    testimonials: {
      label: 'Reviews',
      title: 'What clients say',
      prev: 'Previous review',
      next: 'Next review',
      item: 'Review',
    },
    skills: { label: 'Skills', title: 'Stack and tools' },
    contact: {
      label: 'Contact',
      title: 'Let’s build something great',
      lead: 'Open to full-time roles, internships and interesting product frontend challenges.',
      phone: 'Phone',
    },
  },
}

export const content: Record<Locale, Content> = { ru, en }
