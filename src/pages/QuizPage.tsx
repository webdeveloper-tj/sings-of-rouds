import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import db from "../../db/db.json";
import db_eng from "../../db/dbeng.json";

interface Question {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

const QuizPage = () => {
  const { i18n, t } = useTranslation();

  const isTajik = i18n.language === "tj";
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Get signs from appropriate language database
  const { roadSigns } = isTajik ? db : db_eng;

  // Flatten all signs with category info
  const allSigns: Question[] = Object.entries(roadSigns).flatMap(
    ([category, signs]) =>
      signs.map((sign) => ({
        ...sign,
        category,
      }))
  );

  // Load questions when language changes
  useEffect(() => {
    const shuffled = [...allSigns].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setQuestions(selected);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [i18n.language]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === questions[currentQuestionIndex].name) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < 9) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1300);
  };

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-100 to-blue-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-600"></div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Result View
  if (showResult) {
    const knowledgeStatus =
      score === 10
        ? t("excellent")
        : score >= 7
        ? t("good")
        : t("needs_improvement");

    const statusColor =
      score === 10
        ? "bg-green-500"
        : score >= 7
        ? "bg-yellow-500"
        : "bg-red-500";

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-blue-100 p-6">
        <div className="max-w-xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            {t("your_score")}: {score}/10
          </h2>
          <p
            className={`text-white font-semibold py-2 px-4 rounded-full inline-block mb-6 ${statusColor}`}
          >
            {knowledgeStatus}
          </p>
          <button
            className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
            onClick={() => {
              const reshuffled = [...allSigns]
                .sort(() => Math.random() - 0.5)
                .slice(0, 10);
              setQuestions(reshuffled);
              setCurrentQuestionIndex(0);
              setScore(0);
              setSelectedAnswer(null);
              setShowResult(false);
            }}
          >
            {t("try_again")}
          </button>
        </div>
      </div>
    );
  }

  // Question View
  const choices = [...allSigns]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((item) => item.name);

  // Ensure correct answer is in choices
  if (!choices.includes(currentQuestion.name)) {
    choices[Math.floor(Math.random() * 3)] = currentQuestion.name;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-xl w-full p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          {t("question")} {currentQuestionIndex + 1} / 10
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={currentQuestion.image}
            alt={currentQuestion.name}
            className="w-40 h-40 object-contain bg-orange-50 p-4 rounded-xl"
          />
        </div>

        <div className="grid gap-4">
          {choices.map((choice, index) => {
            const isCorrect = selectedAnswer && choice === currentQuestion.name;
            const isWrong =
              selectedAnswer === choice && choice !== currentQuestion.name;

            return (
              <button
                key={index}
                className={`w-full px-4 py-3 rounded-xl border text-left transition-colors ${
                  isCorrect
                    ? "bg-green-100 border-green-400 text-green-800"
                    : isWrong
                    ? "bg-red-100 border-red-400 text-red-800"
                    : "bg-white border-orange-200 text-slate-700 hover:bg-orange-50"
                }`}
                onClick={() => handleAnswer(choice)}
                disabled={!!selectedAnswer}
              >
                {choice}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
