import {
  BarChart3,
  Briefcase,
  Camera,
  Code2,
  Globe2,
  Pencil,
  Wrench,
  Zap,
} from "lucide-react";
import type { Subteam } from "@/data/subteams";

const map = {
  wrench: Wrench,
  pencil: Pencil,
  code: Code2,
  lightning: Zap,
  briefcase: Briefcase,
  camera: Camera,
  globe: Globe2,
  chart: BarChart3,
} as const;

export function SubteamIcon({ icon }: Pick<Subteam, "icon">) {
  const I = map[icon];
  return <I className="h-7 w-7 text-gold" aria-hidden />;
}
