import { useMediaQuery as useMediaQueryOriginal } from "@mantine/hooks";
import { atom } from "jotai";
import { selectAtom } from "jotai/utils";

/* Mantineと一致させる: https://mantine.dev/theming/responsive */
const map = {
  xs: "576px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1400px",
} as const;

export const mediaQuery = atom<boolean>(false);

export const useMediaQuery = atom<null, keyof typeof map>(
  null,
  (get, set, update) => {
    const query = update;
    const initialValue: Parameters<typeof useMediaQueryOriginal>[1] = true;

    set(
      mediaQuery,
      useMediaQueryOriginal(`(min-width: ${map[query]})`, initialValue)
    );
  }
);
