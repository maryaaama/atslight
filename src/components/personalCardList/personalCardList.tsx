import React from "react";

interface Question {
  id: number;
  questionValue: string;
  answer: string;
}

interface Questionnaire {
  title: string;
  questions: Question[];
}

interface PersonalCardListProps {
  questionnaires: Questionnaire[];
}

const PersonalCardList: React.FC<PersonalCardListProps> = ({
  questionnaires,
}) => {
  return (
    <div>
      {questionnaires.map((questionnaire, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-bold mb-4 mr-1 text-right">
            {questionnaire.title}
          </h2>
          <div className="border-b border-slate-300"></div>
          {questionnaire.questions.map((question) => (
            <div key={question.id} className="mt-4 flex w-full">
              <p className="w-1/2 text-base mx-2 text-justify justify-center">
                {question.questionValue} :
              </p>
              <p className="w-1/2 text-base mx-2 text-justify justify-center">
                {question.answer}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PersonalCardList;
