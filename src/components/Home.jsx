import Navbar from "./Navbar";

export default function Home() {
  return (
    <main
      id="home"
      className="h-screen min-h-svh w-full overflow-hidden bg-white"
    >
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-full pt-[72px]">
        <div className="mx-auto h-full max-w-[1440px]">

          <div className="grid h-full grid-cols-1 lg:grid-cols-[52%_48%]">

            {/* ================= LEFT CONTENT ================= */}
            <div className="relative flex h-full flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16">

              {/* Background decoration */}
              <div className="absolute left-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-[#edf4fc] blur-3xl opacity-70" />

              <div className="relative z-10">

                {/* Small Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c5d8ed] bg-white px-4 py-2 text-xs font-semibold text-[#102c52] shadow-sm">
                  <span>Learn</span>
                  <span className="text-[#b20d3a]">•</span>
                  <span>Practice</span>
                  <span className="text-[#b20d3a]">•</span>
                  <span>Grow</span>
                </div>

                {/* Heading */}
                <h1 className="max-w-[650px] text-[42px] font-extrabold leading-[1.03] tracking-[-1.5px] text-[#102f59] sm:text-[52px] lg:text-[54px] xl:text-[64px]">
                  Speak English
                  <br />
                  <span className="text-[#b20d3a]">
                    With Confidence
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-[590px] text-base leading-7 text-[#263f5d] sm:text-lg">
                  Improve your English speaking, communication and public speaking skills with ACE English Academy.
                </p>

                {/* CTA Buttons */}
                <div className="mt-7 flex flex-wrap gap-4">

                  {/* <a
                    href="#contact"
                    className="group flex items-center gap-3 rounded-lg bg-[#b20d3a] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#b20d3a]/20 transition-all hover:-translate-y-1 hover:bg-[#980831]"
                  >
                    WhatsApp Us
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a> */}

                  <a
                    href="https://wa.me/918955641261"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border-2 border-[#102f59] bg-white px-6 py-3 text-sm font-bold text-[#102f59] transition-all hover:bg-[#102f59] hover:text-white"
                  >
                    <img src="./icons/wa.svg" alt="" className="h-[22px]"/>
                    WhatsApp Us
                  </a>
                </div>

                {/* ================= FEATURE BAR ================= */}
                <div className="mt-8 grid max-w-[790px] grid-cols-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/50 sm:grid-cols-4">

                  <Feature
                    icon={<OnlineIcon />}
                    text={
                      <>
                        Online & Offline
                        <br />
                        Classes
                      </>
                    }
                  />

                  <Feature
                    icon={<PeopleIcon />}
                    text={
                      <>
                        All Age
                        <br />
                        Groups
                      </>
                    }
                  />

                  <Feature
                    icon={<TrainerIcon />}
                    text={
                      <>
                        Experienced
                        <br />
                        Language Trainer
                      </>
                    }
                  />

                  <Feature
                    icon={<ChatIcon />}
                    text={
                      <>
                        Interview &
                        <br />
                        Communication Skills
                      </>
                    }
                  />

                </div>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative hidden h-full overflow-hidden lg:block">

              {/* Background */}
              <div className="absolute inset-0 bg-[#eaf2fb]" />

              {/* Decorative curved shape */}
              <div className="absolute left-[-80px] top-0 z-20 h-full w-[150px] skew-x-[-15deg] bg-[#102f59]" />

              <div className="absolute left-[-45px] top-0 z-30 h-full w-[25px] skew-x-[-15deg] bg-[#b20d3a]" />

              {/* Girl Image */}
              <img
                src="/images/girl.png"
                alt="English language trainer"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#eaf2fb]/30 via-transparent to-transparent" />

              
            </div>

            {/* ================= MOBILE IMAGE ================= */}
            <div className="relative block h-[300px] overflow-hidden lg:hidden">

              <div className="absolute inset-0  bg-[#eaf2fb]" />

              <img
                src="/images/girl.png"
                alt="English language trainer"
                className="absolute inset-0 h-full w-full object-contain object-center "
              />

              {/* Mobile gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f59]/30 to-transparent" />

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   FEATURE COMPONENT
========================================================= */

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 border-b border-slate-100 px-3 py-3 last:border-0 sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf4fc] text-[#102f59]">
        {icon}
      </div>

      <span className="text-[11px] font-bold leading-4 text-[#17375f] sm:text-xs">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   ICONS
========================================================= */

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 8.5c.3 2 2.2 4 4.2 4.5" />
    </svg>
  );
}

function OnlineIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 18v3" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15 15c3.3 0 6 2 6 5" />
    </svg>
  );
}

function TrainerIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8 8 0 0 1-3.5-.8L4 20l1.5-4A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M8 11h8" />
      <path d="M8 8h5" />
    </svg>
  );
}