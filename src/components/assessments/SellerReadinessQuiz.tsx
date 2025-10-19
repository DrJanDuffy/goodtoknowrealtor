'use client';

import React, { useState } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { SellerReadinessResults } from './SellerReadinessResults';
import { saveLead } from '@/lib/lead-storage';

interface SellerReadinessQuizProps {
  onQuizComplete: (score: number, answers: Record<string, string | string[]>, contact: { name: string; email: string; phone?: string }) => void;
}

// Seller-specific questions
const sellerQuestions = [
  {
    id: 'q1_equity_position',
    text: "Do you have significant equity in your current home (typically 20% or more)?",
    type: 'single-choice' as const,
    options: [
      { value: 'yes_significant', label: 'Yes, I have 20%+ equity.', score: 10 },
      { value: 'some_equity', label: 'I have some equity, but less than 20%.', score: 5 },
      { value: 'little_equity', label: 'I have little to no equity.', score: 0 },
    ],
  },
  {
    id: 'q2_market_timing',
    text: "Are you familiar with current Las Vegas market conditions and seasonal trends?",
    type: 'single-choice' as const,
    options: [
      { value: 'very_familiar', label: 'Yes, I track the market regularly.', score: 10 },
      { value: 'somewhat', label: 'I have a general understanding.', score: 5 },
      { value: 'not_familiar', label: 'No, I need to learn more.', score: 0 },
    ],
  },
  {
    id: 'q3_home_condition',
    text: "How would you rate your home's current condition for selling?",
    type: 'single-choice' as const,
    options: [
      { value: 'excellent', label: 'Excellent - move-in ready.', score: 10 },
      { value: 'good', label: 'Good - minor updates needed.', score: 7 },
      { value: 'fair', label: 'Fair - some repairs needed.', score: 3 },
      { value: 'poor', label: 'Poor - major work required.', score: 0 },
    ],
  },
  {
    id: 'q4_staging_readiness',
    text: "Is your home staged and ready for showings?",
    type: 'single-choice' as const,
    options: [
      { value: 'fully_staged', label: 'Yes, professionally staged.', score: 10 },
      { value: 'self_staged', label: 'Yes, staged by myself.', score: 7 },
      { value: 'partially', label: 'Partially staged.', score: 4 },
      { value: 'not_staged', label: 'No, not staged yet.', score: 0 },
    ],
  },
  {
    id: 'q5_pricing_strategy',
    text: "Do you have a clear pricing strategy based on recent comparable sales?",
    type: 'single-choice' as const,
    options: [
      { value: 'yes_researched', label: 'Yes, based on recent comps.', score: 10 },
      { value: 'general_idea', label: 'I have a general idea.', score: 5 },
      { value: 'no_strategy', label: 'No, I need help with pricing.', score: 0 },
    ],
  },
  {
    id: 'q6_competition_awareness',
    text: "Are you aware of competing properties in your neighborhood?",
    type: 'single-choice' as const,
    options: [
      { value: 'very_aware', label: 'Yes, I know what\'s on the market.', score: 10 },
      { value: 'somewhat', label: 'I have some awareness.', score: 5 },
      { value: 'not_aware', label: 'No, I haven\'t checked.', score: 0 },
    ],
  },
  {
    id: 'q7_financial_preparation',
    text: "Have you calculated your net proceeds and closing costs?",
    type: 'single-choice' as const,
    options: [
      { value: 'yes_detailed', label: 'Yes, detailed calculations done.', score: 10 },
      { value: 'rough_estimate', label: 'I have a rough estimate.', score: 5 },
      { value: 'no_calculation', label: 'No, I need help calculating.', score: 0 },
    ],
  },
  {
    id: 'q8_next_home_plan',
    text: "Do you have a plan for your next home (buying, renting, relocating)?",
    type: 'single-choice' as const,
    options: [
      { value: 'yes_planned', label: 'Yes, I have a clear plan.', score: 10 },
      { value: 'working_on_it', label: 'I\'m working on it.', score: 5 },
      { value: 'no_plan', label: 'No, I haven\'t figured it out.', score: 0 },
    ],
  },
  {
    id: 'q9_timeline_flexibility',
    text: "How flexible is your timeline for selling?",
    type: 'single-choice' as const,
    options: [
      { value: 'very_flexible', label: 'Very flexible - no rush.', score: 10 },
      { value: 'somewhat', label: 'Somewhat flexible.', score: 7 },
      { value: 'tight_timeline', label: 'I have a tight timeline.', score: 3 },
      { value: 'urgent', label: 'I need to sell quickly.', score: 0 },
    ],
  },
  {
    id: 'q10_motivation',
    text: "What is your primary motivation for selling?",
    type: 'single-choice' as const,
    options: [
      { value: 'upgrade', label: 'Upgrading to a larger/better home.', score: 10 },
      { value: 'downsize', label: 'Downsizing for retirement/lifestyle.', score: 8 },
      { value: 'relocate', label: 'Relocating for work/family.', score: 6 },
      { value: 'financial', label: 'Financial reasons/need cash.', score: 4 },
      { value: 'investment', label: 'Investment opportunity.', score: 7 },
    ],
  },
  // Big 5 Qualification Questions
  {
    id: 'q11_current_situation',
    text: "Which best describes your current selling situation?",
    type: 'single-choice' as const,
    options: [
      { value: 'first_time_seller', label: 'First-time home seller.', score: 0 },
      { value: 'experienced_seller', label: 'Experienced seller (sold before).', score: 0 },
      { value: 'investor', label: 'Real estate investor.', score: 0 },
      { value: 'inheritance', label: 'Selling inherited property.', score: 0 },
      { value: 'divorce', label: 'Selling due to divorce/separation.', score: 0 },
    ],
  },
  {
    id: 'q12_desired_outcome',
    text: "What is your most important desired outcome for selling in the next 90 days?",
    type: 'single-choice' as const,
    options: [
      { value: 'maximize_profit', label: 'Maximize profit from the sale.', score: 0 },
      { value: 'quick_sale', label: 'Sell quickly and efficiently.', score: 0 },
      { value: 'understand_market', label: 'Better understand the market value.', score: 0 },
      { value: 'prepare_home', label: 'Get home ready for sale.', score: 0 },
      { value: 'find_agent', label: 'Find the right listing agent.', score: 0 },
    ],
  },
  {
    id: 'q13_biggest_concern',
    text: "What is your biggest concern about selling your home?",
    type: 'single-choice' as const,
    options: [
      { value: 'pricing', label: 'Getting the right price.', score: 0 },
      { value: 'timing', label: 'Timing the market correctly.', score: 0 },
      { value: 'preparation', label: 'Preparing the home for sale.', score: 0 },
      { value: 'competition', label: 'Competing with other sellers.', score: 0 },
      { value: 'process', label: 'Understanding the selling process.', score: 0 },
    ],
  },
  {
    id: 'q14_preferred_support',
    text: "What type of support would be most helpful for you?",
    type: 'single-choice' as const,
    options: [
      { value: 'full_service', label: 'Full-service agent to handle everything.', score: 0 },
      { value: 'pricing_help', label: 'Help with pricing and market analysis.', score: 0 },
      { value: 'staging_advice', label: 'Staging and preparation guidance.', score: 0 },
      { value: 'marketing', label: 'Marketing and exposure strategy.', score: 0 },
      { value: 'negotiation', label: 'Negotiation and closing support.', score: 0 },
    ],
  },
  {
    id: 'q15_additional_info',
    text: "Is there anything else you'd like us to know about your selling situation?",
    type: 'text' as const,
  },
];

export const SellerReadinessQuiz: React.FC<SellerReadinessQuizProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const totalQuestions = sellerQuestions.length;

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    const currentQuestion = sellerQuestions[currentQuestionIndex];
    if (currentQuestion.type !== 'text' && !answers[currentQuestion.id]) {
      alert('Please select an answer before proceeding.');
      return;
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const calculateScore = () => {
    let score = 0;
    sellerQuestions.forEach((q) => {
      if (q.type === 'single-choice' && q.options) {
        const selectedOption = q.options.find((opt) => opt.value === answers[q.id]);
        if (selectedOption) {
          score += selectedOption.score;
        }
      }
    });
    return score;
  };

  const handleSubmit = async () => {
    const score = calculateScore();
    setFinalScore(score);
    setQuizCompleted(true);

    // Save lead
    await saveLead({
      name: contactInfo.name,
      email: contactInfo.email,
      phone: contactInfo.phone || undefined,
      assessmentId: 'seller-readiness',
      score,
      answers,
      timestamp: new Date().toISOString(),
    });

    onQuizComplete(score, answers, contactInfo);
  };

  if (quizCompleted) {
    return <SellerReadinessResults score={finalScore} />;
  }

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Vegas Home Seller Readiness Assessment</h2>
        <p className="text-lg text-gray-700 mb-6">Answer 15 questions to discover if you're ready to sell your Las Vegas home and maximize your profit.</p>
        <button
          onClick={() => setQuizStarted(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Start Your Assessment
        </button>
      </div>
    );
  }

  const currentQuestion = sellerQuestions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl">
      <div className="mb-6">
        <p className="text-sm text-gray-600 text-center">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-green-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {currentQuestionIndex === 0 ? ( // Special handling for contact info
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactInfo.name}
                onChange={handleContactChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-lg p-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleContactChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-lg p-3"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contactInfo.phone}
                onChange={handleContactChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-lg p-3"
              />
            </div>
          </div>
        </div>
      ) : (
        <QuizQuestion
          question={currentQuestion}
          currentAnswer={answers[currentQuestion.id]}
          onAnswerChange={(answer) => handleAnswerChange(currentQuestion.id, answer)}
        />
      )}

      <div className="flex justify-between mt-8">
        {currentQuestionIndex > 0 && (
          <button
            onClick={handleBack}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Back
          </button>
        )}
        {currentQuestionIndex < totalQuestions - 1 ? (
          <button
            onClick={handleNext}
            className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-150 ease-in-out"
            disabled={currentQuestionIndex === 0 && (!contactInfo.name || !contactInfo.email)}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-150 ease-in-out"
            disabled={currentQuestionIndex === 0 && (!contactInfo.name || !contactInfo.email)}
          >
            Get My Results!
          </button>
        )}
      </div>
    </div>
  );
};
