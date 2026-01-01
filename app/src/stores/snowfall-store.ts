import { create } from "zustand";
import {persist} from "zustand/middleware"

interface SnowfallState {
  enabled: boolean;
  initialized: string;

  initFromTheme: (theme: string) => void;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
}

export const useSnowfallStore = create<SnowfallState>()(
  persist(
    (set, get) => ({
      enabled: false,
      initialized: '',

      initFromTheme: (theme) => {
        const { initialized } = get();
        if (initialized === theme) return;

        set({
          enabled: theme === "dark",
          initialized: theme,
        });
      },

      toggle: () =>
        set((state) => ({
          enabled: !state.enabled,
        })),

      setEnabled: (value) =>
        set({
          enabled: value,
        }),
    }),
    {
      name: "ui:snowfall",
      partialize: (state) => ({
        enabled: state.enabled,
      }),
    }
  )
);

