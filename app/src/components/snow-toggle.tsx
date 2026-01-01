import { useSnowfallStore } from "@/stores/snowfall-store";
import { Snowflake } from "lucide-react";
import { Button } from "./ui/button";

export function SnowfallToggle() {
  const enabled = useSnowfallStore((s) => s.enabled);
  const toggle = useSnowfallStore((s) => s.toggle);

  return (
    <Button variant="ghost" aria-label="Toggle theme" onClick={toggle}>
      <Snowflake className="h-5 w-5" /> {enabled ? "ON" : "OFF"}
    </Button>
  );
}
