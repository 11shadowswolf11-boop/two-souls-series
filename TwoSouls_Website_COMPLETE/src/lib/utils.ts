import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...i: ClassValue[]) { return twMerge(clsx(i)); }

export const ease = {
  luxury:   [0.25, 0.46, 0.45, 0.94] as const,
  reveal:   [0.16, 1,    0.3,  1   ] as const,
  cinematic:[0.77, 0,    0.175,1   ] as const,
};
