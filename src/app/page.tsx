import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocumentCard } from "@/components/document-card"
import { CompanyInfo } from "@/components/company-info"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  const documents = [
    {
      title: "Политика обработки персональных данных",
      url: "/privacy-policy",
    },
    {
      title: "Согласие на обработку персональных данных",
      url: process.env.NEXT_PUBLIC_CONSENT_URL || "",
    },
    {
      title: "Публичная оферта на возмездное оказание услуг",
      url: process.env.NEXT_PUBLIC_OFFER_URL || "",
    },
    {
      title: "Соглашение об использовании электронного документооборота",
      url: process.env.NEXT_PUBLIC_EDO_URL || "",
    },
    {
      title: "Сублицензионный договор-оферта с amoCRM",
      url: process.env.NEXT_PUBLIC_AMOCRM_URL || "",
    },
    {
      title: "Сублицензионный договор-оферта с Команда F5",
      url: process.env.NEXT_PUBLIC_F5_URL || "",
    },
    {
      title: "Тарифы по разработке для amoCRM",
      url: process.env.NEXT_PUBLIC_TARIFFS_URL || "",
    },
    {
      title: "Соглашение о неразглашении информации",
      url: process.env.NEXT_PUBLIC_NDA_URL || "",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Заголовок для мобильных */}
          <h1 className="text-2xl font-bold mb-4 sm:hidden">
            Юридическая информация
          </h1>

          {/* Описание страницы */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground max-w-3xl">
              На этой странице собраны юридические документы компании Dzen.Team —
              партнёра-интегратора amoCRM, специализирующегося на интеграциях и
              автоматизации бизнес-процессов.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Документы */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Юридические документы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {documents.map((doc, index) => (
                <DocumentCard key={index} title={doc.title} url={doc.url} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Документы будут доступны в ближайшее время. Для получения
              документов прямо сейчас, пожалуйста, свяжитесь с нами по электронной
              почте{" "}
              <a
                href="mailto:main@dzen.team"
                className="underline hover:text-foreground"
              >
                main@dzen.team
              </a>
            </p>
          </section>

          <Separator className="my-8" />

          {/* Информация о компании */}
          <section>
            <h2 className="text-2xl font-bold mb-6">О компании</h2>
            <CompanyInfo />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
