import { AlertTriangleIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

type OverdueAlertProps = {
  count: number;
};

export default function OverdueAlert({ count }: OverdueAlertProps) {
  return (
    <Alert
      variant="destructive"
      className="bg-destructive/85 text-white border-red-400"
    >
      <AlertTriangleIcon className="size-4 text-white" />
      <AlertTitle className="text-white">
        {count} overdue transaction(s)
      </AlertTitle>
    </Alert>
  );
}
