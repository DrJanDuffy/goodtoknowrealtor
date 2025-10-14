'use client';

import { useState, useEffect } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

interface MortgageCalculation {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  principal: number;
  interestRate: number;
  term: number;
}

interface MortgageCalculatorProps {
  initialPrice?: number;
  className?: string;
}

export function MortgageCalculator({ initialPrice = 500000, className = '' }: MortgageCalculatorProps) {
  const [homePrice, setHomePrice] = useState(initialPrice);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(6000);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [hoaFees, setHoaFees] = useState(0);
  // PMI state (currently unused but kept for future feature)
  // const [pmi, setPmi] = useState(0);
  const [calculation, setCalculation] = useState<MortgageCalculation | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { announce } = useScreenReaderAnnouncements();

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      // Handle 0% interest rate
      const monthlyPayment = principal / numberOfPayments;
      const totalPayment = principal;
      const totalInterest = 0;

      setCalculation({
        monthlyPayment,
        totalInterest,
        totalPayment,
        principal,
        interestRate,
        term: loanTerm
      });
      return;
    }

    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    setCalculation({
      monthlyPayment,
      totalInterest,
      totalPayment,
      principal,
      interestRate,
      term: loanTerm
    });
  };

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const downPaymentPercent = (downPayment / homePrice) * 100;
  const monthlyPropertyTax = propertyTax / 12;
  const monthlyInsurance = homeInsurance / 12;
  const monthlyPmi = downPaymentPercent < 20 ? (principal * 0.005) / 12 : 0;
  
  const totalMonthlyPayment = calculation ? 
    calculation.monthlyPayment + monthlyPropertyTax + monthlyInsurance + hoaFees + monthlyPmi : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleInputChange = (field: string, value: number) => {
    switch (field) {
      case 'homePrice':
        setHomePrice(value);
        announce(`Home price updated to ${formatCurrency(value)}`, 'polite');
        break;
      case 'downPayment':
        setDownPayment(value);
        announce(`Down payment updated to ${formatCurrency(value)}`, 'polite');
        break;
      case 'interestRate':
        setInterestRate(value);
        announce(`Interest rate updated to ${value}%`, 'polite');
        break;
      case 'loanTerm':
        setLoanTerm(value);
        announce(`Loan term updated to ${value} years`, 'polite');
        break;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Mortgage Calculator</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn btn-secondary"
          aria-expanded={isExpanded.toString()}
          aria-controls="detailed-breakdown"
        >
          {isExpanded ? 'Hide' : 'Show'} Details
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <label htmlFor="home-price" className="block text-sm font-medium text-gray-700 mb-2">
              Home Price *
            </label>
            <input
              id="home-price"
              type="number"
              value={homePrice}
              onChange={(e) => handleInputChange('homePrice', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-describedby="home-price-help"
            />
            <div id="home-price-help" className="text-xs text-gray-500 mt-1">
              Enter the purchase price of the home
            </div>
          </div>

          <div>
            <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment *
            </label>
            <input
              id="down-payment"
              type="number"
              value={downPayment}
              onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-describedby="down-payment-help"
            />
            <div id="down-payment-help" className="text-xs text-gray-500 mt-1">
              Amount: {formatCurrency(downPayment)} ({downPaymentPercent.toFixed(1)}%)
            </div>
          </div>

          <div>
            <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (%) *
            </label>
            <input
              id="interest-rate"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-describedby="interest-rate-help"
            />
            <div id="interest-rate-help" className="text-xs text-gray-500 mt-1">
              Current average rate: 6.5% - 7.5%
            </div>
          </div>

          <div>
            <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term (Years) *
            </label>
            <select
              id="loan-term"
              value={loanTerm}
              onChange={(e) => handleInputChange('loanTerm', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={25}>25 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>

          {/* Additional Costs */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Additional Monthly Costs</h3>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="property-tax" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Tax (Annual)
                </label>
                <input
                  id="property-tax"
                  type="number"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="home-insurance" className="block text-sm font-medium text-gray-700 mb-1">
                  Home Insurance (Annual)
                </label>
                <input
                  id="home-insurance"
                  type="number"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="hoa-fees" className="block text-sm font-medium text-gray-700 mb-1">
                  HOA Fees (Monthly)
                </label>
                <input
                  id="hoa-fees"
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Monthly Payment Breakdown</h3>
            
            {calculation && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Principal & Interest:</span>
                  <span className="font-semibold text-lg">{formatCurrency(calculation.monthlyPayment)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Property Tax:</span>
                  <span>{formatCurrency(monthlyPropertyTax)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Home Insurance:</span>
                  <span>{formatCurrency(monthlyInsurance)}</span>
                </div>
                
                {monthlyPmi > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">PMI:</span>
                    <span>{formatCurrency(monthlyPmi)}</span>
                  </div>
                )}
                
                {hoaFees > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">HOA Fees:</span>
                    <span>{formatCurrency(hoaFees)}</span>
                  </div>
                )}
                
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg text-gray-900">Total Monthly Payment:</span>
                    <span className="font-bold text-xl text-blue-900">{formatCurrency(totalMonthlyPayment)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Breakdown */}
          <div 
            id="detailed-breakdown"
            className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            aria-hidden={!isExpanded}
          >
            {calculation && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Loan Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span>{formatCurrency(calculation.principal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest:</span>
                    <span>{formatCurrency(calculation.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Payments:</span>
                    <span>{formatCurrency(calculation.totalPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span>{calculation.interestRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Term:</span>
                    <span>{calculation.term} years</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              className="w-full btn btn-primary"
              aria-label="Get pre-approved for a mortgage"
            >
              Get Pre-Approved
            </button>
            <button
              className="w-full btn btn-secondary"
              aria-label="Contact Dr. Janet Duffy about financing options"
            >
              Contact Agent
            </button>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This calculator provides estimates only. Actual loan terms may vary based on credit score, 
          income, debt-to-income ratio, and other factors. Consult with a qualified mortgage professional for personalized rates and terms.
        </p>
      </div>
    </div>
  );
}
