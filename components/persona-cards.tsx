"use client";

import { cn } from "@/lib/cn";

/**
 * Rendered by MDX via <persona-cards> custom element.
 * Props come in as HTML attributes (all strings).
 *
 * Usage in MDX:
 *   <persona-cards
 *     personas='[{"name":"Cindy","description":"..."},{"name":"Ash","bullets":["…","…"]}]'
 *   Optional: rightColumnHeading="Frustrations" (default Notes).
 *     hmw="How might we ...?"
 *     hmw-answer="By ..."
 *   ></persona-cards>
 */
type Persona = {
  name: string;
  /** Public URL (e.g. `/eidolon/cindy.png`). Omit for generic silhouette. */
  photo?: string;
  age?: string;
  role?: string;
  /** Prose body when `bullets` is omitted. */
  description?: string;
  /** Buddy-style list (dots); when present, shown instead of `description`. */
  bullets?: string[];
  /** Small italic credit shown inside the card below the role (e.g. "Generated with Gemini"). */
  photoCaption?: string;
  /** Optional zoom for the portrait (e.g. 1.5 zooms in). Defaults to 1. */
  photoScale?: number;
  /** Optional vertical nudge for the portrait (e.g. "-40%" moves it up). */
  photoOffsetY?: string;
};

type PersonaCardsProps = {
  personas: string; // JSON string
  hmw?: string;
  "hmw-answer"?: string;
  accent?: "violet" | "lime" | "sky" | "etrade" | "black" | "olive" | "beige";
  /** `liquid`: nav-style frosted glass + shimmer; `frosted`: white blur panel. */
  variant?: "frosted" | "keycards" | "liquid";
  /** Right column title (default: Notes). */
  rightColumnHeading?: string;
  /** Layout for the participant cards. */
  layout?: "stack" | "grid-2";
  className?: string;
};

export function PersonaCards({
  personas,
  hmw,
  "hmw-answer": hmwAnswer,
  accent = "violet",
  variant = "frosted",
  rightColumnHeading = "Notes",
  layout = "stack",
  className,
}: PersonaCardsProps) {
  let parsed: Persona[] = [];
  try {
    parsed = JSON.parse(personas);
  } catch {
    return null;
  }

  const isLime = accent === "lime";
  const isOlive = accent === "olive";
  const isBeige = accent === "beige";
  const isSky = accent === "sky";
  const isEtrade = accent === "etrade";
  const isBlack = accent === "black";
  const isKeycards = variant === "keycards";
  const isLiquid = variant === "liquid";

  const liquidShellClass = isLiquid
    ? isBlack
      ? cn(
          "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/15",
          "bg-zinc-950/40 shadow-[0_18px_55px_-28px_rgba(0,0,0,0.65)] ring-1 ring-black/40 backdrop-blur-2xl backdrop-saturate-125"
        )
      : isLime
        ? cn(
            "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
            "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(132,204,22,0.28),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
            "ring-1 ring-lime-300/50 backdrop-blur-2xl backdrop-saturate-125"
          )
        : isBeige
          ? cn(
              "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
              "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(189,133,53,0.22),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
              "ring-1 ring-[#ddd2b8]/70 backdrop-blur-2xl backdrop-saturate-125"
            )
          : isOlive
            ? cn(
                "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
                "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(47,70,52,0.28),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
                "ring-1 ring-[#2f4634]/30 backdrop-blur-2xl backdrop-saturate-125"
              )
            : isSky || isEtrade
              ? cn(
                  "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
                  "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(15,142,199,0.24),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
                  "ring-1 ring-sky-200/45 backdrop-blur-2xl backdrop-saturate-125"
                )
              : cn(
                  "relative isolate overflow-hidden rounded-2xl border-[0.5px] border-white/55",
                  "bg-white/[0.26] shadow-[0_10px_40px_-16px_rgba(76,29,149,0.22),inset_0_1px_0_0_rgba(255,255,255,0.45)]",
                  "ring-1 ring-violet-200/40 backdrop-blur-2xl backdrop-saturate-125"
                )
    : null;

  const keyCardClass = "rounded-xl bg-zinc-100 p-5 ring-1 ring-zinc-200/70";
  const keyHeadingClass =
    "mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500";
  const keyBodyClass = "text-[0.85rem] leading-relaxed text-zinc-800";

  return (
    <div className={cn("mt-6 space-y-6", className)}>
      {/* Target users, buddy-style frosted cards */}
      <div
        className={cn(
          layout === "grid-2" ? "grid grid-cols-1 gap-6 lg:grid-cols-2" : "space-y-6"
        )}
      >
        {parsed.map((p) => (
          <div
            key={p.name}
            className={cn(
              "mx-auto flex w-full flex-col",
              layout === "grid-2" ? "max-w-none" : "max-w-[min(44rem,100%)]",
              isKeycards
                ? keyCardClass
                : isLiquid
                  ? liquidShellClass
                  : cn(
                      "relative overflow-hidden rounded-2xl border-[0.5px]",
                      isBlack
                        ? "border-white/10 bg-zinc-950/70 shadow-[0_18px_55px_-28px_rgba(0,0,0,0.65)] ring-1 ring-black/40"
                        : "border-white/70 shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/35"
                    )
            )}
          >
            {!isKeycards && isLiquid && (
              <>
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b",
                    isBlack
                      ? "from-white/10 via-white/[0.03] to-transparent"
                      : isLime
                        ? "from-white/30 via-white/[0.06] to-lime-100/[0.14]"
                        : isBeige
                          ? "from-white/30 via-white/[0.06] to-[#f5ead2]/20"
                          : isOlive
                            ? "from-white/30 via-white/[0.06] to-[#e3ead9]/14"
                            : isSky || isEtrade
                              ? "from-white/30 via-white/[0.06] to-sky-100/[0.14]"
                              : "from-white/30 via-white/[0.06] to-violet-100/[0.12]"
                  )}
                  aria-hidden
                />
                <div
                  className="liquid-glass-nav-shimmer pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
                  aria-hidden
                />
              </>
            )}
            {!isKeycards && !isLiquid && (
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 backdrop-blur-xl",
                  isBlack ? "bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent" : "bg-white/50"
                )}
                aria-hidden
              />
            )}
            <div
              className={cn(
                isKeycards
                  ? "flex flex-col gap-8 md:flex-row md:items-start md:gap-10"
                  : "relative z-[1] flex flex-col gap-8 p-6 md:flex-row md:items-start md:gap-10 md:p-7"
              )}
            >
              {/* Left: participant strip */}
              <div className="flex w-full shrink-0 flex-col items-center text-center md:w-[38%] md:max-w-[15.5rem]">
                <p
                  className={cn(
                    "font-sans text-[9px] font-medium uppercase tracking-[0.22em]",
                    isKeycards
                      ? "text-zinc-500"
                      : isBlack
                        ? "text-white/60"
                        : isLime
                          ? "text-lime-700"
                          : isBeige
                            ? "text-[#8b7355]"
                            : isOlive
                              ? "text-[#2f4634]"
                              : isSky || isEtrade
                                ? "text-[#0F8EC7]"
                                : "text-violet-600"
                  )}
                >
                  Participant
                </p>
                <div className="relative mx-auto mt-4">
                  <span
                    className={cn(
                      "pointer-events-none absolute -left-3 top-[20%] select-none text-[15px] leading-none",
                      isKeycards
                        ? "text-zinc-400"
                        : isBlack
                          ? "text-white/55"
                          : isLime
                            ? "text-lime-500/90"
                            : isBeige
                              ? "text-[#bd8535]/90"
                              : isOlive
                                ? "text-[#2f4634]/90"
                                : isSky || isEtrade
                                  ? "text-[#0F8EC7]/90"
                                  : "text-violet-400/90"
                    )}
                    aria-hidden
                  >
                    ✦
                  </span>
                  <span
                    className={cn(
                      "pointer-events-none absolute -right-3 top-[20%] select-none text-[15px] leading-none",
                      isKeycards
                        ? "text-zinc-300"
                        : isBlack
                          ? "text-white/45"
                          : isLime
                            ? "text-emerald-500/85"
                            : isBeige
                              ? "text-[#c4a574]/85"
                              : isOlive
                                ? "text-[#2f4634]/70"
                                : isSky || isEtrade
                                  ? "text-cyan-400/85"
                                  : "text-fuchsia-400/85"
                    )}
                    aria-hidden
                  >
                    ✦
                  </span>
                  <div
                    className={cn(
                      "relative h-[7.75rem] w-[7.75rem] overflow-hidden rounded-full p-[3px] shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)] ring-2",
                      isKeycards
                        ? "bg-zinc-950 ring-zinc-200/70"
                        : isBlack
                        ? "bg-zinc-950 ring-white/15"
                        : isLime
                          ? "bg-lime-500 ring-lime-200/75"
                          : isBeige
                            ? "bg-[#b89a6a] ring-[#ddd2b8]/80"
                            : isOlive
                              ? "bg-[#2f4634] ring-[#2f4634]/30"
                              : isSky || isEtrade
                                ? "bg-[#0F8EC7] ring-sky-200/75"
                                : "bg-violet-600 ring-violet-200/70"
                    )}
                  >
                    <div
                      className={cn(
                        "h-full w-full overflow-hidden rounded-full",
                        isKeycards ? "bg-zinc-100" : isBlack ? "bg-zinc-900" : "bg-zinc-100"
                      )}
                    >
                      {p.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.photo}
                          alt={`${p.name}, participant portrait`}
                          className="h-full w-full object-cover object-top contrast-[1.03]"
                          style={
                            p.photoScale || p.photoOffsetY
                              ? {
                                  transform: [p.photoOffsetY ? `translateY(${p.photoOffsetY})` : "", p.photoScale ? `scale(${p.photoScale})` : ""].join(" ").trim(),
                                  transformOrigin: "center top",
                                }
                              : undefined
                          }
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <svg
                            viewBox="0 0 64 64"
                            className={cn(
                              "h-[72%] w-[72%]",
                              isKeycards
                                ? "text-zinc-300"
                                : isBlack
                                  ? "text-white/35"
                                  : isLime
                                    ? "text-lime-400"
                                    : isBeige
                                      ? "text-[#ddd2b8]"
                                      : isOlive
                                        ? "text-[#2f4634]/70"
                                        : isSky || isEtrade
                                          ? "text-sky-200"
                                          : "text-violet-300"
                            )}
                            aria-hidden
                          >
                            <circle cx="32" cy="24" r="12" fill="currentColor" />
                            <ellipse cx="32" cy="52" rx="20" ry="14" fill="currentColor" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p
                  className={cn(
                    "mt-5 text-base font-medium leading-tight tracking-[-0.02em] md:text-[1.05rem]",
                    isKeycards ? "text-zinc-950" : isBlack ? "text-white" : "text-zinc-950"
                  )}
                >
                  {p.name}
                </p>
                {p.age && (
                  <p
                    className={cn(
                      "mt-2 text-[0.72rem] leading-snug md:text-[0.75rem]",
                      isKeycards ? "text-zinc-600" : isBlack ? "text-white/65" : "text-zinc-600"
                    )}
                  >
                    {p.age} Years Old
                  </p>
                )}
                {p.role && (
                  <p
                    className={cn(
                      "text-[0.72rem] leading-snug md:text-[0.75rem]",
                      isKeycards ? "text-zinc-600" : isBlack ? "text-white/65" : "text-zinc-600"
                    )}
                  >
                    {p.role}
                  </p>
                )}
                {p.photoCaption && (
                  <p
                    className={cn(
                      "mt-3 font-sans text-[0.65rem] italic leading-snug",
                      isLiquid && !isBlack
                        ? isLime
                          ? "text-lime-700/55"
                          : isBeige
                            ? "text-[#8b7355]/55"
                            : isOlive
                              ? "text-[#2f4634]/55"
                              : isSky || isEtrade
                                ? "text-[#0F8EC7]/55"
                                : "text-violet-600/55"
                        : "text-zinc-400"
                    )}
                  >
                    {p.photoCaption}
                  </p>
                )}
              </div>

              {/* Right: notes / frustrations */}
              <div
                className={cn(
                  "min-w-0 flex-1 border-t pt-6 md:border-l md:border-t-0 md:pl-9 md:pt-1",
                      isKeycards
                    ? "border-zinc-200/70"
                    : isBlack
                      ? "border-white/10"
                      : isLiquid
                        ? isLime
                          ? "border-lime-200/50"
                          : isBeige
                            ? "border-[#ddd2b8]/70"
                            : isOlive
                              ? "border-[#2f4634]/30"
                              : isSky || isEtrade
                                ? "border-sky-200/50"
                                : "border-violet-200/50"
                        : "border-zinc-200/70"
                )}
              >
                <h3
                  className={cn(
                    "text-[0.95rem] font-medium",
                    isKeycards ? "text-zinc-950" : isBlack ? "text-white" : "text-zinc-950"
                  )}
                >
                  {rightColumnHeading}
                </h3>
                {p.bullets && p.bullets.length > 0 ? (
                  <ul
                    className={cn(
                      "mt-3 space-y-3 text-left text-[0.78rem] font-normal leading-relaxed",
                      isKeycards ? "text-zinc-800" : isBlack ? "text-white/80" : "text-zinc-800"
                    )}
                  >
                    {p.bullets.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className={cn(
                            "mt-[0.45em] h-1.5 w-1.5 flex-shrink-0 rounded-full",
                            isKeycards
                              ? "bg-zinc-800"
                              : isBlack
                                ? "bg-white/70"
                                : isLime
                                  ? "bg-lime-600"
                                  : isBeige
                                    ? "bg-[#bd8535]"
                                    : isOlive
                                      ? "bg-[#2f4634]"
                                      : isSky || isEtrade
                                        ? "bg-[#0F8EC7]"
                                        : "bg-violet-600"
                          )}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : p.description ? (
                  <p
                    className={cn(
                      "mt-3 text-left text-[0.78rem] font-normal leading-relaxed",
                      isKeycards ? "text-zinc-800" : isBlack ? "text-white/80" : "text-zinc-800"
                    )}
                  >
                    {p.description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How Might We */}
      {hmw && (
        <div id="how-might-we" className={cn("mt-16 scroll-mt-24", isKeycards && keyCardClass)}>
          <p className={cn("mb-3 font-mono text-[9px] uppercase tracking-[0.18em]", isKeycards ? keyHeadingClass : "text-[#A0A0A0]")}>
            How Might We
          </p>
          <p className={cn(
            "text-[clamp(1.4rem,3vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em]",
            isKeycards
              ? "text-zinc-950"
              : isBlack
                ? "text-white"
                : "text-zinc-950"
          )}>
            {hmw}
          </p>
          {hmwAnswer && (
            <p className={cn(
              "mt-4 text-[0.85rem] leading-relaxed",
              isKeycards
                ? "text-zinc-600"
                : isBlack
                  ? "text-white/70"
                  : "text-zinc-500"
            )}>
              {hmwAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
