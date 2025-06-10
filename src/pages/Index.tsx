
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuestionSection } from "@/components/QuestionSection";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";

const representativeQuestions = [
  "How do you become a Senator/House Representative?",
  "Why did you want to become a Senator/House Representative?",
  "What did you do before you were elected?",
  "Have you met the President?",
  "How long can you be a Senator/House Representative?",
  "Do you like your job?",
  "What do you do as a Senator/House Representative?",
  "How many Senators/House Representatives are there?",
  "What is the leadership for the Senate/House of Representatives?",
  "Who can become a Senator/House Representative?",
  "What surprised you the most about this job?",
  "What is the toughest part of the job?",
  "What is the easiest part of the job?",
  "What's your favorite part of D.C.?",
  "Do you live in D.C.?",
  "Will you run for re-election?",
  "We've heard that some Senators/House Representatives end up sleeping in their offices… Is that what it's like for you?",
  "Do you miss being in (Your State)?",
  "How long did it take you to get familiar or master all of the 'parliamentary' process?"
];

const staffQuestions = [
  "Do you like working with the Senator/House Representative?",
  "How do you like your job?",
  "What is the pay like?",
  "Why did you get into working with the Senator/House Representative?",
  "Are the hours long?",
  "Do you want to run for Senator/House Representative one day?",
  "Is the work hard?",
  "What does your job entail?",
  "Do you like working in D.C.?",
  "What is your favorite part about working at the Capitol?"
];

const Index = () => {
  const [representativeAnswered, setRepresentativeAnswered] = useState<{[key: number]: boolean}>({});
  const [staffAnswered, setStaffAnswered] = useState<{[key: number]: boolean}>({});
  const [representativeNotes, setRepresentativeNotes] = useState<{[key: number]: string}>({});
  const [staffNotes, setStaffNotes] = useState<{[key: number]: string}>({});

  const toggleRepresentativeQuestion = (index: number) => {
    setRepresentativeAnswered(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleStaffQuestion = (index: number) => {
    setStaffAnswered(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const updateRepresentativeNote = (index: number, note: string) => {
    setRepresentativeNotes(prev => ({
      ...prev,
      [index]: note
    }));
  };

  const updateStaffNote = (index: number, note: string) => {
    setStaffNotes(prev => ({
      ...prev,
      [index]: note
    }));
  };

  const representativeProgress = Object.values(representativeAnswered).filter(Boolean).length;
  const staffProgress = Object.values(staffAnswered).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 pb-6">
        <Tabs defaultValue="representatives" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="representatives" className="flex flex-col gap-1">
              <span>Representatives</span>
              <span className="text-xs opacity-70">{representativeProgress}/{representativeQuestions.length}</span>
            </TabsTrigger>
            <TabsTrigger value="staff" className="flex flex-col gap-1">
              <span>Staff & Interns</span>
              <span className="text-xs opacity-70">{staffProgress}/{staffQuestions.length}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="representatives" className="space-y-4">
            <ProgressBar 
              current={representativeProgress} 
              total={representativeQuestions.length}
              label="Questions Asked"
            />
            <QuestionSection
              title="Questions for Your Representative or Senator"
              description="Take advantage of this opportunity to learn about those who dedicate themselves to public service. Keep questions focused on learning about the job rather than political issues."
              questions={representativeQuestions}
              answeredQuestions={representativeAnswered}
              notes={representativeNotes}
              onToggleQuestion={toggleRepresentativeQuestion}
              onUpdateNote={updateRepresentativeNote}
            />
          </TabsContent>
          
          <TabsContent value="staff" className="space-y-4">
            <ProgressBar 
              current={staffProgress} 
              total={staffQuestions.length}
              label="Questions Asked"
            />
            <QuestionSection
              title="Questions for Staff and Interns"
              description="Staffers and interns are important players in supporting elected officials. Learn from their experiences and career paths."
              questions={staffQuestions}
              answeredQuestions={staffAnswered}
              notes={staffNotes}
              onToggleQuestion={toggleStaffQuestion}
              onUpdateNote={updateStaffNote}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
