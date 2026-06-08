const navItems = ["Home", "About", "Ceremonies", "Contact"];

const services = [
  {
    title: "Love",
    description: "Marriage Ceremonies & Vow Renewals",
  },
  {
    title: "Life",
    description: "Blessings, Milestones & Sacred Gatherings",
  },
  {
    title: "Legacy",
    description: "Celebrations of Life & Memorial Services",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <div className="luxury-shell relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="gold-orb gold-orb-primary" />
          <div className="gold-orb gold-orb-secondary" />
          <div className="gold-line top-28" />
        </div>

        <header className="relative z-10 flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-md sm:px-6">
          <a className="flex items-center gap-3" href="#" aria-label="RevDrJess home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b35d]/35 bg-[#d8b35d]/10 shadow-[0_0_28px_rgba(216,179,93,0.28)]">
              <img src="/images/favicon.png" alt="" className="h-8 w-8 rounded-full object-contain" />
            </span>
            <span className="font-serif text-xl tracking-[0.16em] text-white sm:text-2xl">RevDrJess</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.24em] text-white/68 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#f5d58a]">
                {item}
              </a>
            ))}
          </nav>
        </header>

        <section id="home" className="relative z-10 flex flex-1 flex-col items-center justify-center py-24 text-center sm:py-28 lg:py-32">
          <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d8b35d]/25 bg-[#d8b35d]/10 px-5 py-2 text-xs uppercase tracking-[0.34em] text-[#f5d58a] shadow-[0_0_38px_rgba(216,179,93,0.16)]">
            <span className="h-px w-8 bg-[#d8b35d]" />
            Honouring Love, Life & Legacy
            <span className="h-px w-8 bg-[#d8b35d]" />
          </p>

          <h1 className="max-w-5xl font-serif text-5xl font-normal leading-[0.95] tracking-[-0.04em] text-balance text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Ceremonies for Life&apos;s Most Meaningful Moments
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
            Weddings, vow renewals, celebrations of life, memorials, blessings, and spiritual ceremonies led with warmth, presence, and reverence.
          </p>

          <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <a href="#contact" className="gold-button w-full sm:w-auto">
              Book a Consultation
            </a>
            <a href="#ceremonies" className="ghost-button w-full sm:w-auto">
              Explore Ceremonies
            </a>
          </div>
        </section>

        <section id="ceremonies" className="relative z-10 grid gap-5 pb-16 sm:pb-20 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="service-card group">
              <div className="mb-8 h-px w-14 bg-gradient-to-r from-[#f5d58a] to-transparent transition-all duration-300 group-hover:w-24" />
              <h2 className="font-serif text-3xl text-white sm:text-4xl">{service.title}</h2>
              <p className="mt-5 text-base leading-7 text-white/64">{service.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
