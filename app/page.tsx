import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

const credentials = [
  "Reverend & Minister",
  "Doctor of Metaphysics",
  "Doctor of Spiritual Counseling",
  "Clinical Hypnotherapist",
  "Spiritual Life Coach",
  "Published Author",
  "20+ Years as an Entrepreneur & Educator",
  "Founder of The New Simulation Ministry",
  "Creator of Earth School",
];

const ceremonies = [
  "Marriage Ceremonies",
  "Vow Renewals",
  "Celebrations of Life",
  "Memorial Services",
  "Spiritual Ceremonies",
  "House Blessings",
  "Baby Blessings",
  "Sacred Milestones",
];

const ceremonyMenu = [
  {
    title: "Simple Signing Ceremony",
    price: "$222",
    description: "A simple, elegant legal signing ceremony for couples who want something easy, meaningful, and beautiful.",
  },
  {
    title: "Classic Marriage Ceremony",
    price: "$444",
    description: "A timeless wedding ceremony with warmth, presence, traditional structure, and elegance.",
  },
  {
    title: "Personalized Love Story Ceremony",
    price: "$777",
    description: "A custom ceremony written around the couple’s story, energy, values, and vision for marriage.",
  },
  {
    title: "Spiritual Ceremony",
    price: "$888",
    description: "A sacred ceremony with spiritual language, blessing, intention, prayer, ritual, or meaningful symbolic elements.",
  },
  {
    title: "Luxury Signature Ceremony",
    price: "$1,111",
    description: "A premium ceremony experience with deeper customization, spiritual guidance, personalized wording, and a refined ceremonial flow.",
  },
  {
    title: "Destination Ceremony",
    price: "Starting at $2,222",
    description: "For couples seeking a meaningful ceremony in a special location. Travel, timing, and custom details quoted separately.",
  },
  {
    title: "Vow Renewal Ceremony",
    price: "$555",
    description: "A beautiful ceremony to honour love, growth, healing, recommitment, and the next chapter together.",
  },
  {
    title: "Celebration of Life / Memorial Ceremony",
    price: "Starting at $444",
    description: "A heartfelt ceremony to honour a loved one’s life, legacy, memory, and continuing spiritual presence.",
  },
  {
    title: "House Blessing",
    price: "$222",
    description: "A peaceful blessing to clear, honour, and welcome energy into a home or sacred space.",
  },
  {
    title: "Baby Blessing",
    price: "$222",
    description: "A loving ceremony to welcome and bless a new soul entering the family.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <div className="luxury-shell relative mx-auto w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
        <div className="sparkle-field" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="gold-orb gold-orb-primary" />
          <div className="gold-orb gold-orb-secondary" />
          <div className="gold-orb gold-orb-tertiary" />
          <div className="gold-line top-28" />
          <div className="gold-line bottom-[22rem]" />
        </div>

        <header className="relative z-10 flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-md sm:px-6">
          <a className="flex items-center gap-3" href="#home" aria-label="RevDrJess home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b35d]/40 bg-[#d8b35d]/10 shadow-[0_0_28px_rgba(216,179,93,0.28)]">
              <Image src="/images/favicon.png" alt="" width={32} height={32} className="rounded-full object-contain" priority />
            </span>
            <span>
              <span className="block font-serif text-xl tracking-[0.16em] text-white sm:text-2xl">RevDrJess</span>
              <span className="hidden text-[0.62rem] uppercase tracking-[0.28em] text-[#f5d58a]/80 sm:block">Honouring Love, Life & Legacy</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.24em] text-white/68 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#f5d58a]">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="home" className="hero-cloud-stage relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="cloud-glow cloud-glow-hero" aria-hidden="true" />
          <div className="cloud-glow cloud-glow-pearl" aria-hidden="true" />
          <div className="cloud-glow cloud-glow-cream" aria-hidden="true" />
          <div className="hero-light" aria-hidden="true" />
          <div className="hero-sparkles" aria-hidden="true" />
          <div className="hero-copy relative z-10 text-center lg:text-left">
            <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d8b35d]/25 bg-[#d8b35d]/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[#f5d58a] shadow-[0_0_38px_rgba(216,179,93,0.16)]">
              <span className="h-px w-8 bg-[#d8b35d]" />
              Honouring Love, Life & Legacy
            </p>

            <h1 className="hero-title max-w-5xl font-serif text-5xl font-normal leading-[0.95] tracking-[-0.04em] text-balance text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Rev. Dr. Jessica Simmonds
            </h1>

            <p className="mt-6 font-serif text-3xl leading-tight text-[#f5d58a] sm:text-4xl">Ceremonies for Love, Life & Legacy</p>

            <p className="mt-6 max-w-3xl text-sm font-semibold uppercase leading-7 tracking-[0.18em] text-white/72 sm:text-base">
              Reverend. Minister. Doctor of Metaphysics. Doctor of Spiritual Counseling. Clinical Hypnotherapist. Spiritual Life Coach. Published Author.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
              For life’s most meaningful thresholds, Rev. Dr. Jessica Simmonds creates sacred, personal, and deeply intentional ceremonies for weddings, vow renewals, celebrations of life, memorials, blessings, and spiritual milestones.
            </p>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start">
              <a href="#contact" className="gold-button w-full sm:w-auto">
                Book a Consultation
              </a>
              <a href="#menu" className="ghost-button w-full sm:w-auto">
                View Ceremony Menu
              </a>
            </div>
          </div>

          <aside className="hero-card relative z-10 mx-auto w-full max-w-xl p-6 sm:p-8">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#d8b35d]/25" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-white/10" />
            <div className="relative rounded-[2rem] border border-[#d8b35d]/25 bg-black/35 p-8 text-center shadow-2xl shadow-black/40 sm:p-10">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#f5d58a]/45 bg-[#d8b35d]/10 shadow-[0_0_54px_rgba(216,179,93,0.26)]">
                <Image src="/images/favicon.png" alt="RevDrJess logo" width={82} height={82} className="rounded-full object-contain" priority />
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.34em] text-[#f5d58a]">Sacred Ceremony Artistry</p>
              <p className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">Personal. Elegant. Deeply Intentional.</p>
              <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#d8b35d] to-transparent" />
              <p className="mt-8 text-base leading-8 text-white/68">
                A refined ceremonial presence for love, remembrance, blessings, transformation, and life’s sacred transitions.
              </p>
            </div>
          </aside>
        </section>

        <section id="about" className="section-panel relative z-10 my-10 p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">About Rev. Dr. Jess</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">Meet Rev. Dr. Jessica Simmonds</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/72">
              <p>
                Rev. Dr. Jessica Simmonds brings warmth, presence, spiritual depth, and decades of experience guiding people through transformation, healing, beauty, business, teaching, and sacred life transitions. As a Reverend, Minister, Doctor of Metaphysics, Doctor of Spiritual Counseling, Clinical Hypnotherapist, Spiritual Life Coach, published author, entrepreneur, and educator, Jessica creates ceremonies that feel personal, meaningful, elegant, and unforgettable.
              </p>
              <p>
                She does not offer cookie-cutter ceremonies. She creates intentional experiences that honour love, life, legacy, soul connection, family, grief, joy, commitment, and the sacred human experience.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential) => (
              <article key={credential} className="credential-card">
                <span className="credential-mark">✦</span>
                <h3>{credential}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="relative z-10 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Ceremony Services</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">Ceremonies for Sacred Life Moments</h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ceremonies.map((ceremony) => (
              <article key={ceremony} className="service-card group">
                <div className="mb-8 h-px w-14 bg-gradient-to-r from-[#f5d58a] to-transparent transition-all duration-300 group-hover:w-24" />
                <h3 className="font-serif text-3xl leading-tight text-white">{ceremony}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="menu" className="relative z-10 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Investment</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">Ceremony Menu</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {ceremonyMenu.map((item) => (
              <article key={item.title} className="pricing-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-serif text-3xl leading-tight text-white">{item.title}</h3>
                  <p className="shrink-0 rounded-full border border-[#d8b35d]/30 bg-[#d8b35d]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#f5d58a]">
                    {item.price}
                  </p>
                </div>
                <p className="mt-5 text-base leading-7 text-white/68">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="cta-panel relative z-10 my-16 overflow-hidden px-7 py-14 text-center sm:px-10 sm:py-16 lg:px-16">
          <p className="eyebrow">Begin the Conversation</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">Let’s Create Something Meaningful Together</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
            Whether you are celebrating love, honouring a life, blessing a home, or marking a sacred transition, Rev. Dr. Jessica Simmonds can help create a ceremony that feels personal, elevated, and deeply meaningful.
          </p>
          <div className="mt-10">
            <a href="#contact" className="gold-button">
              Book a Consultation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
