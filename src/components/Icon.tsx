"use client";

import {
  WifiSlash,
  WifiHigh,
  Desktop,
  GraduationCap,
  Medal,
  BookOpen,
  Cpu,
  Buildings,
  Briefcase,
  Bank,
  GlobeHemisphereEast,
  Target,
  Eye,
  TrendUp,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkle,
  EnvelopeSimple,
  Phone,
  MapPin,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";

const map: Record<string, PhosphorIcon> = {
  WifiSlash,
  WifiHigh,
  Desktop,
  GraduationCap,
  Medal,
  BookOpen,
  Cpu,
  Buildings,
  Briefcase,
  Bank,
  GlobeHemisphereEast,
  Target,
  Eye,
  TrendUp,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkle,
  EnvelopeSimple,
  Phone,
  MapPin,
};

export function Icon({
  name,
  size = 22,
  weight = "regular",
  className,
}: {
  name: string;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}) {
  const Cmp = map[name];
  if (!Cmp) return null;
  return <Cmp size={size} weight={weight} className={className} />;
}
