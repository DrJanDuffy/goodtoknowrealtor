// Lead storage and management system for assessments

export interface AssessmentLead {
  id: string;
  assessmentType: 'buyer-readiness' | 'seller-readiness' | 'neighborhood-match' | 'investment-roi';
  timestamp: string;
  contactInfo: {
    name: string;
    email: string;
    phone?: string;
    location?: string;
  };
  answers: Record<string, string>;
  score: number;
  results: {
    level: string;
    insights: string[];
    nextStep: string;
  };
  ipAddress?: string;
  userAgent?: string;
  referrer?: string;
}

// In-memory storage for development (replace with database in production)
let leads: AssessmentLead[] = [];

export function storeLead(lead: AssessmentLead): void {
  // Add unique ID
  lead.id = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  lead.timestamp = new Date().toISOString();
  
  // Store lead
  leads.push(lead);
  
  // Log for development
  console.log('New lead stored:', lead);
  
  // In production, this would save to database
  // await saveToDatabase(lead);
}

export function getLeads(): AssessmentLead[] {
  return leads;
}

export function getLeadById(id: string): AssessmentLead | undefined {
  return leads.find(lead => lead.id === id);
}

export function getLeadsByType(type: string): AssessmentLead[] {
  return leads.filter(lead => lead.assessmentType === type);
}

// Lead segmentation based on score
export function segmentLeads(): {
  hot: AssessmentLead[];
  warm: AssessmentLead[];
  cold: AssessmentLead[];
} {
  return {
    hot: leads.filter(lead => lead.score >= 71),
    warm: leads.filter(lead => lead.score >= 41 && lead.score <= 70),
    cold: leads.filter(lead => lead.score <= 40)
  };
}

// Analytics functions
export function getAssessmentStats() {
  const total = leads.length;
  const segments = segmentLeads();
  
  return {
    total,
    hot: segments.hot.length,
    warm: segments.warm.length,
    cold: segments.cold.length,
    conversionRate: total > 0 ? ((segments.hot.length + segments.warm.length) / total * 100).toFixed(1) : '0',
    averageScore: total > 0 ? (leads.reduce((sum, lead) => sum + lead.score, 0) / total).toFixed(1) : '0'
  };
}

// Email notification system (placeholder)
export function sendLeadNotification(lead: AssessmentLead): void {
  // In production, this would send email to Dr. Janet Duffy
  console.log(`📧 LEAD ALERT: ${lead.contactInfo.name} scored ${lead.score}% on ${lead.assessmentType} assessment`);
  console.log(`📞 Contact: ${lead.contactInfo.email} ${lead.contactInfo.phone || ''}`);
  console.log(`🎯 Next Step: ${lead.results.nextStep}`);
}

// Export lead data for CRM integration
export function exportLeadsForCRM(): string {
  return JSON.stringify(leads, null, 2);
}
