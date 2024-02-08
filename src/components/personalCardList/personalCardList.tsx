import React from "react";

interface Question {
  id: number;
  questionValue: string;
  answer: string; // Assuming you have an answer for each question
}

interface Questionnaire {
  title: string;
  questions: Question[];
}

interface PersonalCardListProps {
  questionnaires: Questionnaire[]; // Now expects multiple questionnaires
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
          {questionnaire.questions.map((question) => (
            <div key={question.id} className="mb-2 flex">
              <p className="text-base mx-2">{question.questionValue} :</p>
              <p className="text-base mx-2">{question.answer}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PersonalCardList;
