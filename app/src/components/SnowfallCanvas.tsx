import { useSnowfallStore } from "@/stores/snowfall-store";
import { Snowfall } from "react-snowfall";

export default function SnowfallCanvas() {
  const store = useSnowfallStore();
  if (!store.enabled) return;
  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: "100",
      }}
      color="#fff"
      snowflakeCount={200}
    />
  );
}
