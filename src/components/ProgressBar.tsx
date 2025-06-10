
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

export const ProgressBar = ({ current, total, label }: ProgressBarProps) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{current} of {total}</span>
      </div>
      <Progress value={percentage} className="h-2" />
      {current === total && total > 0 && (
        <p className="text-green-600 text-sm mt-2 font-medium">🎉 All questions completed!</p>
      )}
    </div>
  );
};
