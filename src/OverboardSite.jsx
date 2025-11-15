
import React from "react";
import { motion } from "framer-motion";
import {
  Anchor,
  Download,
  Ship,
  Cpu,
  Gauge,
  Radio,
  Swords, 
  Shield,
  Waves,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
  Info,
  Check,
} from "lucide-react";

import logo from "./assets/logo.png";

// Container wrapper
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
);

// Eyebrow badge
const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-sky-900/60 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-white/10">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

// Section titles
const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    {eyebrow && <Badge>{eyebrow}</Badge>}
    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-base leading-relaxed text-sky-100/80">{subtitle}</p>
    )}
  </div>
);

// Background ocean animation
const OceanBackdrop = () => (
  <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">

    {/* Deep gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-slate-950 to-slate-950" />

    {/* Brighter visible wave layer */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-48 opacity-60 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"%3E%3Cpath fill=\"%230aa7e9\" fill-opacity=\"1\" d=\"M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,154.7C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\"/%3E%3C/svg%3E')] bg-repeat-x"
      animate={{ x: [0, -500, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />

    {/* Far wave layer (slower parallax) */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-56 opacity-30 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"%3E%3Cpath fill=\"%2300c4ff\" fill-opacity=\"0.5\" d=\"M0,64L80,74.7C160,85,320,107,480,117.3C640,128,800,128,960,112C1120,96,1280,64,1360,53.3L1440,43L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\"/%3E%3C/svg%3E')] bg-repeat-x"
      animate={{ x: [0, -900, 0] }}
      transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
    />
  </div>
);





// Feature card
const Feature = ({ icon: Icon, title, text }) => (
  <div className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10">
    <div className="mb-3 inline-flex rounded-xl bg-sky-400/10 p-2 ring-1 ring-sky-400/20">
      <Icon className="h-5 w-5 text-sky-300" />
    </div>
    <h3 className="text-base font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-sky-100/80">{text}</p>
  </div>
);

// Requirements rows
const RequirementRow = ({ label, value }) => (
  <div className="flex items-start justify-between gap-4 border-b border-white/10 py-3 text-sm">
    <span className="text-sky-200/90">{label}</span>
    <span className="font-medium text-white">{value}</span>
  </div>
);

// Roadmap checklist
const RoadmapItem = ({ done, title, detail }) => (
  <div className="relative rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
    <div className="flex items-center gap-3">
      <div className={`grid h-6 w-6 place-items-center rounded-full ${done ? "bg-emerald-500/20 ring-1 ring-emerald-400/40" : "bg-white/10 ring-1 ring-white/20"}`}>
        <Check className={`h-3.5 w-3.5 ${done ? "text-emerald-300" : "text-sky-300"}`} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        {detail && <p className="text-xs text-sky-200/80">{detail}</p>}
      </div>
    </div>
  </div>
);

// MAIN EXPORT
export default function OverboardSite() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent text-sky-100">
      <OceanBackdrop />

      {/* HERO */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src={logo}
                alt="OVERBOARD Logo"
                className="h-32 w-32 rounded-2xl shadow-xl shadow-black/40 border border-white/10 -mt-14 mb-6"
                style={{ marginLeft: "-6px" }}
              />



              <Badge>Multiplayer Naval Combat</Badge>

              <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
                OVERBOARD
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-sky-100/80">
                Master the winds, outmaneuver your rivals, and send them to a watery grave. OVERBOARD is a fast‑paced online ship battle where last captain standing rules the sea.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/downloads/OVERBOARD-Windows.zip"
                  download
                  className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 ring-1 ring-white/10 transition hover:brightness-110 active:scale-[0.99]"
                >
                  <Download className="h-5 w-5" /> Download for Windows
                </a>

                <a
                  href="/downloads/OVERBOARD-mac.zip"
                  download
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
                >
                  <Download className="h-5 w-5" /> Download for macOS
                </a>

                <a
                  href="#join"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-sky-200 ring-1 ring-white/20 transition hover:bg-white/10"
                >
                  <Anchor className="h-5 w-5" /> Join the crew
                </a>
              </div>

              
            </div>

            {/* SHIP CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-900/30 via-slate-900/40 to-slate-950 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-400/10 ring-1 ring-sky-300/20">
                      <Ship className="h-6 w-6 text-sky-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">OVERBOARD TRAILER </h3>
                    </div>
                  </div>
                </div>

                <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-sky-900/40 to-slate-900/40">
                  <video className="h-full w-full object-cover" src="/trailer.mp4" controls />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <p className="text-[11px] uppercase tracking-wide text-sky-300/70">Mode</p>
                    <p className="text-sm font-semibold text-white">Last Captain Standing</p>
                  </div>

                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <p className="text-[11px] uppercase tracking-wide text-sky-300/70">Players</p>
                    <p className="text-sm font-semibold text-white">2–4 Online</p>
                  </div>

                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <p className="text-[11px] uppercase tracking-wide text-sky-300/70">Status</p>
                    <p className="text-sm font-semibold text-white">In Development</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="What makes OVERBOARD fun?"
            title="Sink or be sunk"
            subtitle="Arcade naval combat with tight controls, satisfying cannon fire, and dramatic last‑man‑standing finishes."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Feature icon={Swords} title="Tactical Broadsides" text="Time your turns to unleash devastating broadsides while keeping your hull out of harms way." />
            <Feature icon={Gauge} title="Wind & Drift" text="Ride gusts and manage direction, momentum matters when the sea gets rough." />
            <Feature icon={Radio} title="Online Lobbies" text="Hop in with friends for interactive multiplayer battles." />
            <Feature icon={Shield} title="Defence & Discipline" text="Balance aggression and survival, watch your back at all times." />
          </div>
        </Container>
      </section>

      {/* Downloads & Checksums */}
      <section id="download" className="relative py-16">
        <Container>
          <SectionTitle
            eyebrow="Play it your way"
            title="Download OVERBOARD"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-400/10 ring-1 ring-sky-300/20">
                  <Download className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Windows (x64)</h3>
                  <p className="text-sm text-sky-200/80">ZIP or installer (.exe)</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/downloads/OVERBOARD-Windows.zip" download className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 font-semibold text-white shadow ring-1 ring-white/10 hover:brightness-110">
                  <Download className="h-4 w-4" /> Download ZIP
                </a>
                <a href="/downloads/OVERBOARD-Setup.exe" download className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
                  <Download className="h-4 w-4" /> Installer (.exe)
                </a>
              </div>
              <p className="mt-3 text-xs text-sky-300/70">Checksum (SHA‑256): <span className="font-mono">— to be filled on release —</span></p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-400/10 ring-1 ring-sky-300/20">
                  <Download className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">macOS (Intel & Apple Silicon)</h3>
                  <p className="text-sm text-sky-200/80">.dmg or .zip — notarize for Gatekeeper</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/downloads/OVERBOARD-mac.zip" download className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 font-semibold text-white shadow ring-1 ring-white/10 hover:brightness-110">
                  <Download className="h-4 w-4" /> Download ZIP
                </a>
                <a href="/downloads/OVERBOARD.dmg" download className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
                  <Download className="h-4 w-4" /> Disk Image (.dmg)
                </a>
              </div>
              <p className="mt-3 text-xs text-sky-300/70">Checksum (SHA‑256): <span className="font-mono">— to be filled on release —</span></p>
            </div>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="relative py-16">
        <Container>
          <SectionTitle eyebrow="Can your ship handle it?" title="System requirements" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white"><Cpu className="h-5 w-5 text-sky-300"/> Minimum</h3>
              <RequirementRow label="OS" value="Windows 10 64‑bit / macOS 12+" />
              <RequirementRow label="CPU" value="Intel i5 / Ryzen 3 / Apple M1" />
              <RequirementRow label="RAM" value="8 GB" />
              <RequirementRow label="GPU" value="GTX 960 / RX 560 / Apple M1 (integrated)" />
              <RequirementRow label="Storage" value="2 GB available" />
              <RequirementRow label="Network" value="Broadband, stable ping" />
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white"><Waves className="h-5 w-5 text-sky-300"/> Recommended</h3>
              <RequirementRow label="OS" value="Windows 11 64‑bit / macOS 13+" />
              <RequirementRow label="CPU" value="Intel i7 / Ryzen 5 / Apple M2" />
              <RequirementRow label="RAM" value="16 GB" />
              <RequirementRow label="GPU" value="GTX 1660 / RX 6600 / Apple M2" />
              <RequirementRow label="Storage" value="2 GB SSD space" />
              <RequirementRow label="Network" value="Wired Ethernet recommended" />
            </div>
          </div>
        </Container>
      </section>

      {/* Roadmap */}
      <section className="relative py-16">
        <Container>
          <SectionTitle eyebrow="Dev log" title="Roadmap to launch" subtitle="Expected release date: 12/31/2025" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <RoadmapItem done title="Core movement & camera" detail="Ship physics, camera follow, drift smoothing" />
              <RoadmapItem done={false} title="Cannons & hit detection" detail="Damage model, cooldowns, impact VFX" />
              <RoadmapItem done={false} title="Health, UI, sinking animation" detail="Death state and last‑man‑standing win" />
              <RoadmapItem done title="Networking polish" detail="Lag compensation, spawn logic, lobby flow" />
            </div>
            <div className="space-y-3">
              <RoadmapItem done={false} title="Minimap" detail="Icon tracking" />
              <RoadmapItem done title="Audio & music" detail="SFX mix, volume sliders, theme loop" />
              <RoadmapItem done={false} title="Build" detail="Windows/mac builds, smoke tests, crash logs" />
              <RoadmapItem done={false} title="Release site and trailer" detail="All final preparations for launch" />
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter / CTA */}
      <section id="join" className="relative py-16">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-900/30 via-slate-900/40 to-slate-950 p-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              
              {/* LEFT SIDE */}
              <div>
                <h3 className="text-2xl font-bold text-white">Join the OVERBOARD crew</h3>
                <p className="mt-2 text-sm text-sky-200/80">
                  Get updates when new builds drop. (Form not wired yet.)
                </p>

                <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="user@gmail.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-sky-300/60 outline-none focus:border-sky-300/40"
                  />
                  <button
                    type="button"
                    className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:brightness-110"
                  >
                    Notify me
                  </button>
                </form>
              </div>

              {/* RIGHT SIDE */}
              <div className="grid gap-3 sm:grid-cols-2">
                
                {/* Community */}
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-wide text-sky-300/70">Community</p>
                  <div className="mt-2 flex flex-col gap-3">

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20"
                    >
                      <Instagram className="h-4 w-4" /> Instagram
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* Footer */}
      <footer className="relative border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-sky-200/70">
              <Ship className="h-4 w-4 text-sky-300"/>
              <span>OVERBOARD</span>
              <span className="opacity-60">© {new Date().getFullYear()}</span>
            </div>
            <nav className="flex items-center gap-5 text-sm text-sky-200/70">
              <a className="hover:text-white" href="#download">Download</a>
              <a className="hover:text-white" href="#join">Join</a>
              <a className="hover:text-white" href="#">Privacy</a>
              <a className="hover:text-white" href="#">Terms</a>
            </nav>
          </div>
        </Container>
      </footer>
    </main>
  );
}
