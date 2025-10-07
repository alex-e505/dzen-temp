import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";

export default function PrivacyPolicyPage() {
  // Читаем MD файл
  const markdownPath = path.join(process.cwd(), "docs", "privacy-policy.md");
  const markdownContent = fs.readFileSync(markdownPath, "utf8");
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-8">
          {/* Заголовок */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-muted/30 to-muted/60 rounded-xl p-6 border">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg font-semibold text-foreground">
                      Версия 1.0
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground ml-5">
                    от 7 октября 2025 г.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Дата вступления в силу:
                  </p>
                  <p className="font-medium text-foreground">
                    7 октября 2025 г.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />
          
          {/* Содержимое политики конфиденциальности */}
          <div className="prose prose-gray dark:prose-invert max-w-none lg:max-w-[850px] lg:mx-auto">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
          
          <Separator />

          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              Настоящая Политика конфиденциальности является неотъемлемой частью 
              пользовательского соглашения сайта Dzen.Team.
            </p>
            <p>
              Настоящая Политика размещена в сети Интернет по адресу: 
              <a 
                href="https://docs.dzen.team/privacy-policy" 
                className="text-primary hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://docs.dzen.team/privacy-policy
              </a>
            </p>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
