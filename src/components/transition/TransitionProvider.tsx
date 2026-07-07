"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/*
  Branded route transitions.
  click → cover slides in (350ms, logo stroke-draws + wordmark staggers)
  → router.push → min-hold (~450ms) → cover slides out (350ms).
  Also plays once as a first-visit splash (sessionStorage flag).
  prefers-reduced-motion → no overlay, instant navigation.
*/

const TransitionContext = createContext<{ navigate: (href: string) => void }>({
  navigate: () => {},
});

export const useTransitionNav = () => useContext(TransitionContext);

const COVER_MS = 380;
const HOLD_MS = 480;

function BrandSplash() {
  return (
    <div className="flex flex-col items-center gap-7">
      <svg viewBox="0 0 32 32" fill="none" className="h-24 w-24 text-accent" aria-hidden>
        <motion.path
          d="M3 21c5-8 21-8 26 0"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />
        <motion.path
          d="M9 15.6V25M23 15.6V25M16 13.2V25"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.45, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.circle
          cx="16"
          cy="7"
          r="3"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="flex overflow-hidden text-4xl font-bold tracking-tight text-ink" aria-label="BridgeEd Ghana">
        {"BridgeEd Ghana".split("").map((ch, i) => (
          <motion.span
            key={i}
            className={i >= 6 && i < 8 ? "text-accent-deep" : undefined}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.25 + i * 0.028,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [covering, setCovering] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const coverStart = useRef(0);

  // First-visit splash (once per session).
  const [splash, setSplash] = useState(false);
  useEffect(() => {
    if (reduce) return;
    try {
      if (!sessionStorage.getItem("bridgeed-splash")) {
        sessionStorage.setItem("bridgeed-splash", "1");
        setSplash(true);
        const t = setTimeout(() => setSplash(false), 1150);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage unavailable — skip splash */
    }
  }, [reduce]);

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname) return;
      if (reduce) {
        router.push(href);
        return;
      }
      pendingHref.current = href;
      coverStart.current = performance.now();
      setCovering(true);
      // Push after the cover fully hides the page.
      setTimeout(() => {
        if (pendingHref.current) router.push(pendingHref.current);
      }, COVER_MS);
    },
    [pathname, reduce, router],
  );

  // Reveal once the new route is mounted, after the minimum hold.
  useEffect(() => {
    if (!covering || pendingHref.current === null) return;
    if (pathname === pendingHref.current) {
      const elapsed = performance.now() - coverStart.current;
      const wait = Math.max(COVER_MS + HOLD_MS - elapsed, 0);
      const t = setTimeout(() => {
        pendingHref.current = null;
        setCovering(false);
        window.scrollTo({ top: 0, behavior: "instant" });
      }, wait);
      return () => clearTimeout(t);
    }
  }, [pathname, covering]);

  const overlayVisible = covering || splash;

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {overlayVisible && (
          <motion.div
            key="route-cover"
            className="fixed inset-0 z-[100] grid place-items-center bg-bg"
            initial={splash ? { opacity: 1 } : { y: "100%" }}
            animate={{ y: 0, opacity: 1 }}
            exit={splash ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: COVER_MS / 1000, ease: [0.72, 0, 0.24, 1] }}
            aria-hidden
          >
            <BrandSplash />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
