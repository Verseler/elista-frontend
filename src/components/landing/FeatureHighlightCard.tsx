import { CheckCircleIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

export default function FeatureHighlightCard({ children }: PropsWithChildren) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
      <p className="text-gray-700 text-lg">{children}</p>
    </div>
  );
}
