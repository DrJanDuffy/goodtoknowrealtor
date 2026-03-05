'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AssessmentQuestion } from '@/lib/assessment-data';
import { ICONS_BY_ASSESSMENT_TYPE } from '@/lib/assessment-data';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface AssessmentFormProps {
  type: 'buyer' | 'seller' | 'investor';
}

export function AssessmentForm({ type }: AssessmentFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const buyerQuestions = [
    {
      id: 'budget',
      question: 'What is your approximate budget range?',
      type: 'select',
      options: [
        { value: 'under-300k', label: 'Under $300K' },
        { value: '300k-500k', label: '$300K - $500K' },
        { value: '500k-750k', label: '$500K - $750K' },
        { value: '750k-1m', label: '$750K - $1M' },
        { value: '1m-plus', label: '$1M+' },
      ],
    },
    {
      id: 'timeline',
      question: 'When are you looking to buy?',
      type: 'select',
      options: [
        { value: 'immediately', label: 'Immediately' },
        { value: 'within-1-month', label: 'Within 1 Month' },
        { value: 'within-3-months', label: 'Within 3 Months' },
        { value: 'within-6-months', label: 'Within 6 Months' },
        { value: 'just-exploring', label: 'Just Exploring' },
      ],
    },
    {
      id: 'neighborhoods',
      question: 'Which areas are you most interested in?',
      type: 'checkbox',
      options: [
        { value: 'summerlin', label: 'Summerlin' },
        { value: 'henderson', label: 'Henderson' },
        { value: 'north-las-vegas', label: 'North Las Vegas' },
        { value: 'green-valley', label: 'Green Valley' },
        { value: 'downtown', label: 'Downtown Las Vegas' },
        { value: 'no-preference', label: 'No Preference' },
      ],
    },
    {
      id: 'property-type',
      question: 'What type of property are you looking for?',
      type: 'select',
      options: [
        { value: 'single-family', label: 'Single Family Home' },
        { value: 'condo', label: 'Condominium' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'luxury', label: 'Luxury Estate' },
        { value: 'new-construction', label: 'New Construction' },
      ],
    },
    {
      id: 'must-haves',
      question: 'What are your must-have features?',
      type: 'checkbox',
      options: [
        { value: 'pool', label: 'Pool' },
        { value: 'garage', label: 'Garage' },
        { value: 'yard', label: 'Large Yard' },
        { value: 'updated-kitchen', label: 'Updated Kitchen' },
        { value: 'master-suite', label: 'Master Suite' },
        { value: 'home-office', label: 'Home Office' },
      ],
    },
  ];

  const sellerQuestions = [
    {
      id: 'timeline',
      question: 'When are you looking to sell?',
      type: 'select',
      options: [
        { value: 'immediately', label: 'Immediately' },
        { value: 'within-1-month', label: 'Within 1 Month' },
        { value: 'within-3-months', label: 'Within 3 Months' },
        { value: 'within-6-months', label: 'Within 6 Months' },
        { value: 'just-exploring', label: 'Just Exploring' },
      ],
    },
    {
      id: 'property-value',
      question: 'What do you think your home is worth?',
      type: 'select',
      options: [
        { value: 'under-300k', label: 'Under $300K' },
        { value: '300k-500k', label: '$300K - $500K' },
        { value: '500k-750k', label: '$500K - $750K' },
        { value: '750k-1m', label: '$750K - $1M' },
        { value: '1m-plus', label: '$1M+' },
      ],
    },
    {
      id: 'reason-selling',
      question: 'What is your main reason for selling?',
      type: 'select',
      options: [
        { value: 'upsizing', label: 'Upsizing' },
        { value: 'downsizing', label: 'Downsizing' },
        { value: 'relocation', label: 'Relocation' },
        { value: 'investment', label: 'Investment Opportunity' },
        { value: 'life-change', label: 'Life Change' },
      ],
    },
    {
      id: 'property-condition',
      question: 'How would you describe your property\'s condition?',
      type: 'select',
      options: [
        { value: 'excellent', label: 'Excellent - Move-in Ready' },
        { value: 'good', label: 'Good - Minor Updates Needed' },
        { value: 'fair', label: 'Fair - Some Repairs Needed' },
        { value: 'needs-work', label: 'Needs Work - Major Updates' },
      ],
    },
  ];

  const investorQuestions = [
    {
      id: 'investment-type',
      question: 'What type of investment interests you most?',
      type: 'select',
      options: [
        { value: 'rental-properties', label: 'Rental Properties' },
        { value: 'fix-flip', label: 'Fix & Flip' },
        { value: 'luxury-rentals', label: 'Luxury Rentals' },
        { value: 'multi-family', label: 'Multi-Family Properties' },
        { value: 'commercial', label: 'Commercial Real Estate' },
      ],
    },
    {
      id: 'budget',
      question: 'What is your investment budget?',
      type: 'select',
      options: [
        { value: 'under-300k', label: 'Under $300K' },
        { value: '300k-500k', label: '$300K - $500K' },
        { value: '500k-1m', label: '$500K - $1M' },
        { value: '1m-plus', label: '$1M+' },
      ],
    },
    {
      id: 'experience',
      question: 'What is your real estate investment experience?',
      type: 'select',
      options: [
        { value: 'beginner', label: 'Beginner - First Investment' },
        { value: 'some-experience', label: 'Some Experience - 1-3 Properties' },
        { value: 'experienced', label: 'Experienced - 4+ Properties' },
        { value: 'expert', label: 'Expert - Building Portfolio' },
      ],
    },
    {
      id: 'timeline',
      question: 'When are you looking to make your investment?',
      type: 'select',
      options: [
        { value: 'immediately', label: 'Immediately' },
        { value: 'within-3-months', label: 'Within 3 Months' },
        { value: 'within-6-months', label: 'Within 6 Months' },
        { value: 'within-1-year', label: 'Within 1 Year' },
      ],
    },
  ];

  const questions = type === 'buyer' ? buyerQuestions : 
                   type === 'seller' ? sellerQuestions : 
                   investorQuestions;

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Track completion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'assessment_complete', {
        event_category: 'lead_generation',
        event_label: `${type}_assessment`,
        value: 1,
      });
    }

    // Store results
    const assessmentData = {
      type,
      answers,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    };

    console.log('Assessment completed:', assessmentData);
    // In a real implementation, this would go to your CRM
  };

  if (isCompleted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <IconSymbol symbol='🎉' className='text-4xl mb-4 text-green-600' ariaLabel='Celebration icon' />
        <h3 className="text-xl font-bold text-green-800 mb-2">Assessment Complete!</h3>
        <p className="text-green-700 mb-4">
          Thank you for completing the assessment. Dr. Jan Duffy will review your responses and provide personalized recommendations.
        </p>
        <div className="space-y-2 text-sm text-green-600">
          <p className='flex items-center justify-center gap-2'>
            <IconSymbol symbol='📞' className='h-4 w-4' ariaLabel='Phone icon' />
            Call (702) 222-1964 for immediate assistance
          </p>
          <p className='flex items-center justify-center gap-2'>
            <IconSymbol symbol='📧' className='h-4 w-4' ariaLabel='Email icon' />
            Check your email for your personalized report
          </p>
        </div>
        <button
          onClick={() => {
            setIsCompleted(false);
            setCurrentStep(0);
            setAnswers({});
          }}
          className="mt-4 text-green-600 hover:text-green-800 underline"
        >
          Take Assessment Again
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">
            {type === 'buyer' ? 'Buyer Readiness Assessment' :
             type === 'seller' ? 'Seller Readiness Assessment' :
             'Investment Readiness Assessment'}
          </h3>
          <span className="text-sm text-gray-500">
            {currentStep + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`bg-blue-600 h-2 rounded-full transition-all duration-300 ${
              progress === 100 ? 'w-full' : 
              progress >= 75 ? 'w-3/4' : 
              progress >= 50 ? 'w-1/2' : 
              progress >= 25 ? 'w-1/4' : 'w-0'
            }`}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {currentQuestion.question}
        </h4>

        {currentQuestion.type === 'select' && (
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={answers[currentQuestion.id] === option.value}
                  onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                  className="mr-3"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}

        {currentQuestion.type === 'checkbox' && (
          <div className="space-y-2">
            {currentQuestion.options.map((option) => (
              <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={answers[currentQuestion.id]?.includes(option.value) || false}
                  onChange={(e) => {
                    const currentAnswers = answers[currentQuestion.id] || [];
                    if (e.target.checked) {
                      handleAnswer(currentQuestion.id, [...currentAnswers, option.value]);
                    } else {
                      handleAnswer(currentQuestion.id, currentAnswers.filter((a: string) => a !== option.value));
                    }
                  }}
                  className="mr-3"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={currentStep === questions.length - 1 ? handleSubmit : handleNext}
          disabled={!answers[currentQuestion.id]}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}
        </button>
      </div>
    </div>
  );
}
