'use client';

import { useState } from 'react';
import { buyerReadinessQuestions, calculateScore, getResultsData, generateInsights } from '@/lib/assessment-data';
import { storeLead, sendLeadNotification } from '@/lib/lead-storage';
import { AssessmentQuestion } from '@/lib/assessment-data';

interface QuizQuestionProps {
  question: AssessmentQuestion;
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  progress: number;
}

export function QuizQuestion({ 
  question, 
  value, 
  onChange, 
  onNext, 
  onPrevious, 
  isFirst, 
  isLast, 
  progress 
}: QuizQuestionProps) {
  const [isValid, setIsValid] = useState(false);

  const handleChange = (newValue: string) => {
    onChange(newValue);
    setIsValid(newValue.trim() !== '');
  };

  const handleNext = () => {
    if (isValid || !question.required) {
      onNext();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isValid) {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {progress} of {buyerReadinessQuestions.length}</span>
            <span>{Math.round(progress / buyerReadinessQuestions.length * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(progress / buyerReadinessQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {question.question}
            </h2>
            {question.description && (
              <p className="text-gray-600 text-lg">
                {question.description}
              </p>
            )}
          </div>

          {/* Answer Input */}
          {question.type === 'contact' || question.type === 'text' ? (
            <div className="space-y-4">
              <input
                type={question.id === 'email' ? 'email' : 'text'}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={question.placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              {question.id === 'phone' && (
                <p className="text-sm text-gray-500">
                  Optional - helps us respond faster to your questions
                </p>
              )}
            </div>
          ) : question.type === 'multiple-choice' ? (
            <div className="space-y-3">
              {question.options?.map((option) => (
                <label
                  key={option.value}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    value === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => handleChange(e.target.value)}
                    className="sr-only"
                  />
                  <span className="text-gray-900 font-medium">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          ) : null}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={onPrevious}
              disabled={isFirst}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                isFirst
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={question.required && !isValid}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
                question.required && !isValid
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              }`}
            >
              {isLast ? 'Get My Results' : 'Next →'}
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center text-gray-500 text-sm">
          <div className="flex items-center justify-center space-x-4">
            <span className="flex items-center">
              <span className="text-gray-500 text-lg">🔒</span>
              Secure & Private
            </span>
            <span className="flex items-center">
              <span className="text-gray-500 text-lg">⚡</span>
              Instant Results
            </span>
            <span className="flex items-center">
              <span className="text-gray-500 text-lg">ℹ️</span>
              Free Assessment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
