export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-background text-foreground font-sans px-6 py-24">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Bienvenido a <span className="text-primary">Anclora Press UI</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
          Crea, personaliza y exporta ebooks con plantillas inteligentes, cubiertas dinámicas y exportación en múltiples formatos.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/editor"
            className="inline-flex items-center px-6 py-2 rounded-full bg-primary text-white font-medium hover:opacity-90 transition"
          >
            Empezar ahora
          </a>
          <a
            href="/docs"
            className="inline-flex items-center px-6 py-2 rounded-full border border-border text-foreground hover:bg-muted transition"
          >
            Documentación
          </a>
        </div>
      </div>
    </main>
  )
}
