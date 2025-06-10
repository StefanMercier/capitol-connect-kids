
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface QuestionCardProps {
  question: string;
  index: number;
  isAnswered: boolean;
  note: string;
  onToggle: () => void;
  onNoteChange: (note: string) => void;
}

export const QuestionCard = ({
  question,
  index,
  isAnswered,
  note,
  onToggle,
  onNoteChange
}: QuestionCardProps) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  return (
    <div className={`bg-white rounded-lg border shadow-sm transition-all duration-200 ${
      isAnswered ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-blue-200'
    }`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Checkbox
            id={`question-${index}`}
            checked={isAnswered}
            onCheckedChange={onToggle}
            className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
          />
          <div className="flex-1 min-w-0">
            <label
              htmlFor={`question-${index}`}
              className={`text-sm leading-relaxed cursor-pointer block ${
                isAnswered 
                  ? 'text-green-800 line-through opacity-75' 
                  : 'text-gray-900'
              }`}
            >
              {question}
            </label>
          </div>
          <Collapsible open={isNotesOpen} onOpenChange={setIsNotesOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3">
              <Textarea
                placeholder="Add notes about the answer or your thoughts..."
                value={note}
                onChange={(e) => onNoteChange(e.target.value)}
                className="min-h-20 text-sm resize-none"
              />
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        {note && !isNotesOpen && (
          <div className="mt-2 ml-8 p-2 bg-gray-50 rounded text-xs text-gray-600 border-l-2 border-blue-200">
            <strong>Note:</strong> {note.length > 100 ? `${note.substring(0, 100)}...` : note}
          </div>
        )}
      </div>
    </div>
  );
};
