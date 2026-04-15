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
};

type PersonaCardsProps = {
  personas: string; // JSON string
  hmw?: string;
  "hmw-answer"?: string;
  accent?: "violet" | "lime" | "sky" | "etrade" | "black";
  /** Use the same visual style as key takeaway cards (`bg-zinc-100 p-5 ring-1`). */
  variant?: "frosted" | "keycards";
  /** Right column title (default: Notes). */
  rightColumnHeading?: string;
  /** Layout for the participant cards. */
  layout?: "stack" | "grid-2";
};

export function PersonaCards({
  personas,
  hmw,
  "hmw-answer": hmwAnswer,
  accent = "violet",
  variant = "frosted",
  rightColumnHeading = "Notes",
  layout = "stack",
}: PersonaCardsProps) {
  let parsed: Persona[] = [];
  try {
    parsed = JSON.parse(personas);
  } catch {
    return null;
  }

  const isLime = accent === "lime";
  const isSky = accent === "sky";
  const isEtrade = accent === "etrade";
  const isBlack = accent === "black";
  const isKeycards = variant === "keycards";

  const keyCardClass = "rounded-xl bg-zinc-100 p-5 ring-1 ring-zinc-200/70";
  const keyHeadingClass =
    "mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500";
  const keyBodyClass = "text-[0.85rem] leading-relaxed text-zinc-800";

  return (
    <div className="mt-6 space-y-6">
      {/* Target users — buddy-style frosted cards */}
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
                : cn(
                    "relative overflow-hidden rounded-2xl border-[0.5px]",
                    isBlack
                      ? "border-white/10 bg-zinc-950/70 shadow-[0_18px_55px_-28px_rgba(0,0,0,0.65)] ring-1 ring-black/40"
                      : "border-white/70 shadow-[0_2px_28px_-14px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/35"
                  )
            )}
          >
            {!isKeycards && (
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
                          alt={`${p.name} — participant portrait`}
                          className="h-full w-full object-cover object-top contrast-[1.03]"
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
              </div>

              {/* Right: notes / frustrations */}
              <div
                className={cn(
                  "min-w-0 flex-1 border-t pt-6 md:border-l md:border-t-0 md:pl-9 md:pt-1",
                  isKeycards ? "border-zinc-200/70" : isBlack ? "border-white/10" : "border-zinc-200/70"
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
        <div
          className={cn(
            isKeycards ? keyCardClass : "relative overflow-hidden rounded-2xl p-6 ring-1",
            !isKeycards &&
              (isBlack
                ? "bg-zinc-950/70 ring-black/35"
                : isLime
                  ? "bg-lime-500/[0.08] ring-lime-400/40"
                  : isSky || isEtrade
                    ? "bg-[#0F8EC7]/[0.08] ring-[#0F8EC7]/35"
                    : "bg-violet-500/[0.08] ring-violet-300/35")
          )}
        >
          {!isKeycards && isBlack && (
            <>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 backdrop-blur-xl backdrop-saturate-150"
                aria-hidden
              />
            </>
          )}
          <p
            className={cn(
              isKeycards
                ? keyHeadingClass
                : cn(
                    "relative mb-3 font-mono text-[9px] uppercase tracking-[0.18em]",
                    isBlack
                      ? "text-white/60"
                      : isLime
                        ? "text-lime-800/90"
                        : isSky || isEtrade
                          ? "text-[#0F8EC7]"
                          : "text-violet-700/85"
                  )
            )}
          >
            How Might We
          </p>
          <p
            className={cn(
              isKeycards
                ? "max-w-3xl text-[0.95rem] font-normal leading-relaxed text-zinc-950"
                : cn(
                    "relative max-w-3xl text-[0.95rem] font-normal leading-relaxed",
                    isBlack
                      ? "text-white"
                      : isLime
                        ? "text-lime-950"
                        : isSky || isEtrade
                          ? "text-sky-950"
                          : "text-violet-950"
                  )
            )}
          >
            {hmw}
          </p>
          {hmwAnswer && (
            <p
              className={cn(
                isKeycards
                  ? "mt-3 text-[0.8rem] leading-relaxed text-zinc-600"
                  : cn(
                      "relative mt-3 text-[0.8rem] leading-relaxed",
                      isBlack
                        ? "text-white/70"
                        : isLime
                          ? "text-lime-900/75"
                          : isSky || isEtrade
                            ? "text-sky-900/75"
                            : "text-violet-800/70"
                    )
              )}
            >
              {hmwAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
