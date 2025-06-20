
import { QuestionCard } from "./QuestionCard";

interface QuestionSectionProps {
  title: string;
  description: string;
  questions: string[];
  answeredQuestions: {[key: number]: boolean};
  notes: {[key: number]: string};
  onToggleQuestion: (index: number) => void;
  onUpdateNote: (index: number, note: string) => void;
}

export const QuestionSection = ({
  title,
  description,
  questions,
  answeredQuestions,
  notes,
  onToggleQuestion,
  onUpdateNote
}: QuestionSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      {/* Column Headers */}
      <div className="bg-gray-50 rounded-lg p-4 border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Questions</span>
          <span className="text-sm font-medium text-gray-700 mr-2">Notes</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            index={index}
            isAnswered={answeredQuestions[index] || false}
            note={notes[index] || ""}
            onToggle={() => onToggleQuestion(index)}
            onNoteChange={(note) => onUpdateNote(index, note)}
          />
        ))}
      </div>
    </div>
  );
};
