
export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

// Added SuggestedPost interface for the Gemini marketing strategy response
export interface SuggestedPost {
  topic: string;
  description: string;
}

// Added StrategyResponse interface for the Gemini marketing strategy response
export interface StrategyResponse {
  targetAudience: string;
  contentThemes: string[];
  suggestedPosts: SuggestedPost[];
  growthStrategy: string;
}
