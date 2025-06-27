import { Card, CardContent } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: typeof UserIcon;
};

export default function FeatureCard({
  description,
  icon: Icon,
  title,
}: FeatureCardProps) {
  return (
    <Card className="border-neutral-200 hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
