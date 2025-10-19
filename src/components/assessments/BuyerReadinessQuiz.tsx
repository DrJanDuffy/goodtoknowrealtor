'use client';

import { useState, useEffect } from 'react';
import { buyerReadinessQuestions, calculateScore, getResultsData, generateInsights } from '@/lib/assessment-data';
import { storeLead, sendLeadNotification } from '@/lib/lead-storage';
import { QuizQuestion } from './QuizQuestion';
import { BuyerReadinessResults } from './BuyerReadinessResults';

export function BuyerReadinessQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = buyerReadinessQuestions[currentQuestionIndex];
  const progress = currentQuestionIndex + 1;

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < buyerReadinessQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz complete - calculate results and store lead
      setIsLoading(true);
      
      setTimeout(() => {
        const score = calculateScore(answers);
        const resultsData = getResultsData(score, answers);
        const insights = generateInsights(answers, score);
        
        // Store lead
        const lead = {
          assessmentType: 'buyer-readiness' as const,
          contactInfo: {
            name: answers.name || '',
            email: answers.email || '',
            phone: answers.phone || '',
            location: answers.location || ''
          },
          answers,
          score,
          results: {
            level: resultsData.level,
            insights,
            nextStep: resultsData.nextStepDescription
          },
          ipAddress: '', // Would get from request in production
          userAgent: navigator.userAgent,
          referrer: document.referrer
        };
        
        storeLead(lead);
        sendLeadNotification(lead);
        
        setIsComplete(true);
        setIsLoading(false);
      }, 1000); // Simulate processing time
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Auto-detect location (simplified for demo)
  useEffect(() => {
    if (currentQuestionIndex === 3 && !answers.location) {
      // In production, would use IP geolocation API
      setAnswers(prev => ({
        ...prev,
        location: 'Las Vegas Area'
      }));
    }
  }, [currentQuestionIndex, answers.location]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Calculating Your Results</h2>
          <p className="text-gray-600">Analyzing your responses...</p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const score = calculateScore(answers);
    const resultsData = getResultsData(score, answers);
    const insights = generateInsights(answers, score);
    
    return (
      <BuyerReadinessResults 
        score={score}
        resultsData={resultsData}
        insights={insights}
        answers={answers}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      value={answers[currentQuestion.id] || ''}
      onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
      onNext={handleNext}
      onPrevious={handlePrevious}
      isFirst={currentQuestionIndex === 0}
      isLast={currentQuestionIndex === buyerReadinessQuestions.length - 1}
      progress={progress}
    />
  );
}
