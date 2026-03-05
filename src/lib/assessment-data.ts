// Vegas Home Buyer Readiness Assessment - Questions & Scoring Logic

export interface QuestionOption {
  label: string;
  value: string;
  points: number;
}

export interface AssessmentQuestion {
  id: string;
  type: 'contact' | 'multiple-choice' | 'text' | 'range';
  category: 'contact' | 'best-practices' | 'qualification';
  question: string;
  description?: string;
  required: boolean;
  options?: QuestionOption[];
  placeholder?: string;
  min?: number;
  max?: number;
}

export const buyerReadinessQuestions: AssessmentQuestion[] = [
  // Contact Information (Questions 1-4)
  {
    id: 'name',
    type: 'contact',
    category: 'contact',
    question: "What's your name?",
    description: "Let's personalize your experience",
    required: true,
    placeholder: 'First and Last Name'
  },
  {
    id: 'email',
    type: 'contact',
    category: 'contact',
    question: "What's your email address?",
    description: "We'll send your personalized results here",
    required: true,
    placeholder: 'your@email.com'
  },
  {
    id: 'phone',
    type: 'contact',
    category: 'contact',
    question: "What's your phone number?",
    description: "Optional - for faster response to your questions",
    required: false,
    placeholder: '(702) 555-1234'
  },
  {
    id: 'location',
    type: 'text',
    category: 'contact',
    question: "Where are you currently located?",
    description: "City or neighborhood",
    required: false,
    placeholder: 'e.g., Henderson, North Las Vegas'
  },

  // Best Practices Questions (Questions 5-14) - 10 points each
  {
    id: 'credit-score',
    type: 'multiple-choice',
    category: 'best-practices',
    question: "What's your credit score range?",
    description: "Credit score is crucial for mortgage approval",
    required: true,
    options: [
      { label: 'Below 580', value: 'below-580', points: 0 },
      { label: '580-619', value: '580-619', points: 3 },
      { label: '620-659', value: '620-659', points: 6 },
      { label: '660-699', value: '660-699', points: 8 },
      { label: '700+', value: '700-plus', points: 10 },
      { label: "I don't know", value: 'unknown', points: 0 }
    ]
  },
  {
    id: 'down-payment',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'How much have you saved for a down payment?',
    description: 'Typical Vegas homes need $16,800-$96,000 down',
    required: true,
    options: [
      { label: 'Less than $5,000', value: 'under-5k', points: 0 },
      { label: '$5,000 - $15,000', value: '5k-15k', points: 3 },
      { label: '$15,000 - $30,000', value: '15k-30k', points: 6 },
      { label: '$30,000 - $60,000', value: '30k-60k', points: 8 },
      { label: '$60,000+', value: '60k-plus', points: 10 },
      { label: 'Just getting started', value: 'just-starting', points: 0 }
    ]
  },
  {
    id: 'pre-approval',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'Are you pre-approved for a mortgage?',
    description: 'Pre-approval shows sellers you\'re serious',
    required: true,
    options: [
      { label: 'Yes, I have a pre-approval letter', value: 'yes', points: 10 },
      { label: 'In process', value: 'in-process', points: 5 },
      { label: 'Not yet', value: 'not-yet', points: 0 },
      { label: "I don't know what that is", value: 'dont-know', points: 0 }
    ]
  },
  {
    id: 'budget',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'Do you have a clear budget in mind?',
    description: 'Knowing your budget saves time and stress',
    required: true,
    options: [
      { label: 'Yes, I know exactly what I can afford', value: 'yes-exact', points: 10 },
      { label: 'Yes, I have a general range', value: 'yes-range', points: 7 },
      { label: 'Somewhat, need help clarifying', value: 'need-help', points: 3 },
      { label: 'No, still figuring it out', value: 'no', points: 0 }
    ]
  },
  {
    id: 'neighborhood-research',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'Have you researched Vegas neighborhoods?',
    description: 'Location is everything in real estate',
    required: true,
    options: [
      { label: 'Yes, I know where I want to live', value: 'yes-specific', points: 10 },
      { label: 'I have 2-3 areas in mind', value: 'few-areas', points: 7 },
      { label: 'Just starting to look', value: 'starting', points: 3 },
      { label: 'No, I need guidance', value: 'need-guidance', points: 0 }
    ]
  },
  {
    id: 'market-knowledge',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'How familiar are you with current Vegas market trends?',
    description: 'Market knowledge helps you make smart offers',
    required: true,
    options: [
      { label: 'Very familiar - I track the market regularly', value: 'very-familiar', points: 10 },
      { label: 'Somewhat familiar', value: 'somewhat', points: 6 },
      { label: 'Basic understanding', value: 'basic', points: 3 },
      { label: 'Not familiar at all', value: 'not-familiar', points: 0 }
    ]
  },
  {
    id: 'hoa-awareness',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'Are you familiar with HOA fees in Las Vegas?',
    description: 'HOAs are common in Vegas communities',
    required: true,
    options: [
      { label: 'Yes, I understand HOA costs and benefits', value: 'yes-understand', points: 10 },
      { label: 'Somewhat, but want to learn more', value: 'somewhat', points: 5 },
      { label: 'No, what are HOA fees?', value: 'no', points: 0 }
    ]
  },
  {
    id: 'pool-costs',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'Have you considered pool maintenance costs?',
    description: 'Pools are great but add $100-200/month in Vegas',
    required: true,
    options: [
      { label: 'Yes, I\'ve factored it into my budget', value: 'yes-budgeted', points: 10 },
      { label: 'Somewhat aware of the costs', value: 'somewhat', points: 5 },
      { label: 'No, I haven\'t thought about it', value: 'no', points: 0 },
      { label: 'I don\'t want a pool', value: 'no-pool', points: 10 }
    ]
  },
  {
    id: 'gaming-industry',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'Do you work in gaming/hospitality industry?',
    description: 'Special mortgage programs available for casino employees',
    required: true,
    options: [
      { label: 'Yes', value: 'yes', points: 5 },
      { label: 'No', value: 'no', points: 0 }
    ]
  },
  {
    id: 'nevada-tax',
    type: 'multiple-choice',
    category: 'best-practices',
    question: 'Do you understand Nevada\'s no income tax benefit?',
    description: 'Nevada has no state income tax - big savings!',
    required: true,
    options: [
      { label: 'Yes, I understand the tax advantages', value: 'yes', points: 10 },
      { label: 'Somewhat', value: 'somewhat', points: 5 },
      { label: 'No, tell me more', value: 'no', points: 0 }
    ]
  },

  // Big 5 Qualification Questions (Questions 15-19)
  {
    id: 'current-situation',
    type: 'multiple-choice',
    category: 'qualification',
    question: 'Which best describes your current situation?',
    description: 'This helps us personalize your recommendations',
    required: true,
    options: [
      { label: 'First-time home buyer', value: 'first-time', points: 0 },
      { label: 'Move-up buyer (already own)', value: 'move-up', points: 0 },
      { label: 'Real estate investor', value: 'investor', points: 0 },
      { label: 'Relocating to Las Vegas', value: 'relocating', points: 0 },
      { label: 'Relocating from California', value: 'relocating-ca', points: 0 }
    ]
  },
  {
    id: 'desired-outcome',
    type: 'multiple-choice',
    category: 'qualification',
    question: 'What would you most like to achieve in the next 90 days?',
    description: 'Your top priority',
    required: true,
    options: [
      { label: 'Find my dream home', value: 'find-home', points: 0 },
      { label: 'Get pre-approved for a mortgage', value: 'pre-approval', points: 0 },
      { label: 'Better understand the Vegas market', value: 'understand-market', points: 0 },
      { label: 'Compare neighborhoods', value: 'compare-neighborhoods', points: 0 },
      { label: 'Make an offer on a property', value: 'make-offer', points: 0 }
    ]
  },
  {
    id: 'biggest-obstacle',
    type: 'multiple-choice',
    category: 'qualification',
    question: 'What\'s your biggest obstacle to buying?',
    description: 'What\'s holding you back?',
    required: true,
    options: [
      { label: 'Down payment / saving enough', value: 'down-payment', points: 0 },
      { label: 'Credit score issues', value: 'credit', points: 0 },
      { label: 'Don\'t know where to start', value: 'knowledge', points: 0 },
      { label: 'Timing / market conditions', value: 'timing', points: 0 },
      { label: 'Competition from other buyers', value: 'competition', points: 0 },
      { label: 'Finding the right neighborhood', value: 'neighborhood', points: 0 }
    ]
  },
  {
    id: 'preferred-solution',
    type: 'multiple-choice',
    category: 'qualification',
    question: 'Which solution would suit you best?',
    description: 'How do you prefer to work?',
    required: true,
    options: [
      { label: 'DIY - I want resources to figure it out myself', value: 'diy', points: 0 },
      { label: 'Consultation - I need expert advice', value: 'consultation', points: 0 },
      { label: 'Full-service - Handle everything for me', value: 'full-service', points: 0 },
      { label: 'Investment guidance - I\'m buying as an investment', value: 'investment', points: 0 }
    ]
  },
  {
    id: 'additional-info',
    type: 'text',
    category: 'qualification',
    question: 'Is there anything else we should know about your situation?',
    description: 'Share anything that would help us serve you better (optional)',
    required: false,
    placeholder: 'e.g., I need to close by a specific date, I have unique circumstances, etc.'
  }
];

// Scoring logic
export function calculateScore(answers: Record<string, string>): number {
  let totalPoints = 0;
  const maxPoints = 100;

  buyerReadinessQuestions.forEach(question => {
    if (question.category === 'best-practices' && question.options) {
      const selectedOption = question.options.find(opt => opt.value === answers[question.id]);
      if (selectedOption) {
        totalPoints += selectedOption.points;
      }
    }
  });

  return Math.round((totalPoints / maxPoints) * 100);
}

export interface AssessmentInsight {
  icon: string;
  text: string;
}

// Results interpretation
export function getResultsData(score: number, answers: Record<string, string>) {
  if (score >= 0 && score <= 40) {
    return {
      level: 'not-ready',
      color: 'red',
      title: 'Building Your Foundation',
      message: 'You have strong motivation, but there are some key areas to address before you\'re ready to buy.',
      icon: '🏗️',
      nextStepTitle: 'Your Next Step',
      nextStepDescription: 'Download our comprehensive First-Time Buyer Guide and join our weekly email series to build your readiness.',
      ctaText: 'Get Your Free Guide',
      ctaLink: '/buyer-guide',
      ctaPhone: true
    };
  } else if (score >= 41 && score <= 70) {
    return {
      level: 'getting-there',
      color: 'yellow',
      title: 'You\'re On the Right Track',
      message: 'You\'ve made good progress and have a solid foundation. With some focused effort, you\'ll be ready soon.',
      icon: '🎯',
      nextStepTitle: 'Your Next Step',
      nextStepDescription: 'Join our monthly First-Time Buyer Workshop to address your remaining questions and get personalized guidance.',
      ctaText: 'Reserve Your Workshop Spot',
      ctaLink: '/contact',
      ctaPhone: true
    };
  } else {
    return {
      level: 'ready',
      color: 'green',
      title: 'Congratulations - You\'re Ready!',
      message: 'You\'ve done your homework and are well-prepared to start your home search. Let\'s find your perfect Vegas home!',
      icon: '🎉',
      nextStepTitle: 'Your Next Step',
      nextStepDescription: 'Schedule a one-on-one property tour with Dr. Janet Duffy. We\'ll show you homes that match your criteria.',
      ctaText: 'Schedule Property Tour',
      ctaLink: '/contact',
      ctaPhone: true,
      urgent: true
    };
  }
}

// Generate personalized insights based on answers
export function generateInsights(answers: Record<string, string>, score: number): AssessmentInsight[] {
  const insights: AssessmentInsight[] = [];

  // Credit score insight
  const creditScore = answers['credit-score'];
  if (creditScore === '700-plus') {
    insights.push({ icon: '✅', text: 'Excellent credit score - you\'ll qualify for the best mortgage rates' });
  } else if (creditScore === '660-699' || creditScore === '620-659') {
    insights.push({ icon: '⚠️', text: 'Good credit, but improving to 700+ could save you thousands in interest' });
  } else if (creditScore === 'unknown') {
    insights.push({ icon: '❗', text: 'Check your credit score ASAP - it\'s crucial for mortgage approval' });
  } else {
    insights.push({ icon: '❗', text: 'Credit score needs work - we can connect you with credit repair resources' });
  }

  // Down payment insight
  const downPayment = answers['down-payment'];
  if (downPayment === '60k-plus' || downPayment === '30k-60k') {
    insights.push({ icon: '✅', text: 'Strong down payment savings - you have excellent buying power' });
  } else if (downPayment === '15k-30k') {
    insights.push({ icon: '💡', text: 'You\'re on track! Nevada has programs to help with down payment assistance' });
  } else {
    insights.push({ icon: '💰', text: 'Focus on saving - we can show you down payment assistance programs' });
  }

  // Market knowledge insight
  const marketKnowledge = answers['market-knowledge'];
  if (marketKnowledge === 'very-familiar') {
    insights.push({ icon: '✅', text: 'Great market knowledge - you understand Vegas real estate trends' });
  } else if (marketKnowledge === 'not-familiar') {
    insights.push({ icon: '📚', text: 'Market knowledge gap - understanding trends helps you make better offers' });
  }

  // Neighborhood insight
  const neighborhoodResearch = answers['neighborhood-research'];
  if (neighborhoodResearch === 'yes-specific') {
    insights.push({ icon: '✅', text: 'You know where you want to live - that focus will speed up your search' });
  } else if (neighborhoodResearch === 'need-guidance') {
    insights.push({ icon: '🗺️', text: 'Take our Neighborhood Match Quiz to find your perfect Vegas community' });
  }

  // Pre-approval insight
  const preApproval = answers['pre-approval'];
  if (preApproval === 'yes') {
    insights.push({ icon: '✅', text: 'Pre-approved and ready - sellers will take your offers seriously' });
  } else {
    insights.push({ icon: '🎯', text: 'Getting pre-approved is your #1 priority - it shows you\'re serious' });
  }

  // Return top 3 insights
  return insights.slice(0, 3);
}
