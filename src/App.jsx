import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useToast } from "@/components/ui/use-toast";
import Quiz from "@/components/Quiz.jsx";
import "./App.css";

function App() {
  const [questionCount, setQuestionCount] = useState(5);
  const { toast } = useToast();

  const handleStartQuiz = () => {
    const quizToast = toast({
      title: "Quiz Started!",
      description: `You have selected ${questionCount} questions.`,
      duration: 4000,
    });

    // The quiz component will handle everything from here
    // Including showing questions, handling answers and celebrating at the end.
    // We're just triggering the toast to indicate the start of the quiz.
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card>
        <CardHeader>
          <CardTitle>AGI Fun Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <label htmlFor="question-count" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Select number of questions:
            </label>
            <select id="question-count" value={questionCount} onChange={(e) => setQuestionCount(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <Button onClick={handleStartQuiz}>Start Quiz</Button>
        </CardContent>
      </Card>
      <Quiz questionCount={questionCount} />
    </div>
  );
}

export default App;
