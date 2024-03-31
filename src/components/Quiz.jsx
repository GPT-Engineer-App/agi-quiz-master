import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useToast } from "@/components/ui/use-toast";

const Quiz = ({ questionCount }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const { toast } = useToast();

  // Normally you would fetch these questions from your server or have them stored locally
  const quizQuestions = [
    // Add your meme-y questions here
  ];

  useEffect(() => {
    // Randomly pick the requested number of questions from the quizQuestions array
    setQuestions(quizQuestions.sort(() => 0.5 - Math.random()).slice(0, questionCount));
  }, [questionCount]);

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      toast({
        title: "No Answer Selected",
        description: "Please select an answer to proceed.",
        duration: 2000,
      });
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleQuizComplete = () => {
    toast({
      title: "Congratulations!",
      description: "You have completed the quiz!",
      duration: 4000,
    });
    // Add celebration animations here
  };

  return (
    <div>
      {questions.length > 0 && currentQuestion < questions.length ? (
        <Card>
          <CardContent className="text-center">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">{questions[currentQuestion].question}</h2>
              <div className="flex flex-col">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <Button key={index} variant={selectedAnswer === answer ? "primary" : "default"} onClick={() => handleAnswerSelect(answer)}>
                    {answer}
                  </Button>
                ))}
              </div>
            </div>
            <Button onClick={handleNextQuestion}>Next Question</Button>
          </CardContent>
        </Card>
      ) : (
        handleQuizComplete()
      )}
    </div>
  );
};

export default Quiz;
