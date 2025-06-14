import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4">
      <div className="relative w-20 h-20">
        <Loader2 size={64} className="text-cyan-100 animate-spin" />
      </div>
    </div>
  );
}
