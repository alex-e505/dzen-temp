import { Mail, Phone, MapPin, Building2, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function CompanyInfo() {
  return (
    <div className="space-y-8">
      {/* Основная информация */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Основная информация
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Название компании
              </p>
              <p className="text-base">dzen.team</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">ИП</p>
              <p className="text-base">Тихонов Алексей Витальевич</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">ИНН</p>
              <p className="text-base">210102678333</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                ОГРНИП
              </p>
              <p className="text-base">325210000046556</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Статус
              </p>
              <p className="text-base">Солофаундер (этап развития)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Сфера деятельности
              </p>
              <p className="text-base">Партнёр-интегратор amoCRM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Контактная информация */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Контактная информация
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a
                href="mailto:main@dzen.team"
                className="text-base hover:underline"
              >
                main@dzen.team
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <a href="tel:+79373933038" className="text-base hover:underline">
                +7 (937) 393-30-38
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-muted-foreground"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              <a
                href="https://t.me/tihnpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:underline"
              >
                @tihnpro
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
              <p className="text-base">РФ Чувашская Республика г. Чебоксары</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Направления деятельности */}
      <Card>
        <CardHeader>
          <CardTitle>Направления деятельности</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li>
              <p className="font-medium">Интеграции amoCRM</p>
              <p className="text-sm text-muted-foreground">
                Настройка и внедрение CRM-систем
              </p>
            </li>
            <Separator />
            <li>
              <p className="font-medium">Автоматизация</p>
              <p className="text-sm text-muted-foreground">
                Оптимизация бизнес-процессов клиентов
              </p>
            </li>
            <Separator />
            <li>
              <p className="font-medium">Консалтинг</p>
              <p className="text-sm text-muted-foreground">
                Консультации по доработке и настройке amoCRM
              </p>
            </li>
            <Separator />
            <li>
              <p className="font-medium">Техническая поддержка</p>
              <p className="text-sm text-muted-foreground">
                Сопровождение внедренных решений
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Услуги */}
      <Card>
        <CardHeader>
          <CardTitle>Услуги</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Настройка и внедрение amoCRM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Интеграция с внешними сервисами</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Автоматизация воронок продаж</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Настройка отчетности и аналитики</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Обучение команды работе с CRM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Техническая поддержка и сопровождение</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Банковские реквизиты */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Банковские реквизиты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">ИП</p>
                <p className="text-base">Тихонов Алексей Витальевич</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">ИНН</p>
                <p className="text-base font-mono">210102678333</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  ОГРНИП
                </p>
                <p className="text-base font-mono">325210000046556</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Р/С</p>
                <p className="text-base font-mono">40802810120000682113</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Банк
                </p>
                <p className="text-base">ООО &quot;Банк Точка&quot;</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">БИК</p>
                <p className="text-base font-mono">044525104</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">К/С</p>
                <p className="text-base font-mono">30101810745374525104</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Телефон
                </p>
                <p className="text-base">+7 (937) 393-30-38</p>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Юридический адрес
              </p>
              <p className="text-base">
                РФ Чувашская Республика г. Чебоксары
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Тарифы по разработке для amoCRM */}
      <Card>
        <CardHeader>
          <CardTitle>Тарифы по разработке для amoCRM</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Стоимость работ при расчете по часовой ставке.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Разработка и модификация программ ЭВМ</span>
                <span className="font-mono text-lg">5 500 ₽/час</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Адаптация и модификация программ ЭВМ</span>
                <span className="font-mono text-lg">5 000 ₽/час</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Сопровождение и техническая поддержка amoCRM</span>
                <span className="font-mono text-lg">4 000 ₽/час</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

