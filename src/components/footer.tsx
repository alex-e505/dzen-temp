export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="text-center sm:text-left">
            © 2025 Dzen.Team — Все права защищены
          </div>
          <div className="text-center sm:text-right flex flex-wrap justify-center sm:justify-end gap-2">
            <span className="whitespace-nowrap">ИНН: 210102678333</span>
            <span className="hidden sm:inline">|</span>
            <span className="whitespace-nowrap">ОГРНИП: 325210000046556</span>
            <span className="hidden sm:inline">|</span>
            <span className="whitespace-nowrap">dzen.team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

