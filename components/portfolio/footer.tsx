export function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-medium text-white">
            Abdullah Eanam Khan · Data & BI Analyst | UIUC
          </p>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Abdullah Eanam Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
