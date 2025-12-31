/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: contactsubmissions
 * Interface for ContactSubmissions
 */
export interface ContactSubmissions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  email?: string;
  /** @wixFieldType text */
  subject?: string;
  /** @wixFieldType text */
  message?: string;
  /** @wixFieldType text */
  inquiryType?: string;
  /** @wixFieldType datetime */
  submissionDate?: Date | string;
}


/**
 * Collection ID: marketusecases
 * Interface for MarketUseCases
 */
export interface MarketUseCases {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  segmentName?: string;
  /** @wixFieldType text */
  segmentDescription?: string;
  /** @wixFieldType text */
  useCaseTitle?: string;
  /** @wixFieldType text */
  useCaseBenefits?: string;
  /** @wixFieldType image */
  segmentImage?: string;
  /** @wixFieldType text */
  keyBenefitHighlight?: string;
}


/**
 * Collection ID: teammembers
 * Interface for TeamMembers
 */
export interface TeamMembers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  role?: string;
  /** @wixFieldType text */
  background?: string;
  /** @wixFieldType image */
  profilePicture?: string;
  /** @wixFieldType url */
  linkedInUrl?: string;
  /** @wixFieldType text */
  conradChallengeRole?: string;
}
