import { FileText, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DocumentCardProps {
  title: string
  url?: string
}

export function DocumentCard({ title, url }: DocumentCardProps) {
  const CardWrapper = url ? "a" : "div"
  const cardProps = url
    ? {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "block transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer",
      }
    : {
        className: "cursor-default",
      }

  return (
    <CardWrapper {...cardProps}>
      <Card className="h-full">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-start justify-between gap-2 text-base">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
              <span className="leading-tight">{title}</span>
            </div>
            {url && (
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
            )}
          </CardTitle>
        </CardHeader>
      </Card>
    </CardWrapper>
  )
}

