export interface SpecialNeeds {
  isUnderSpecialNeedsProgram: boolean;
  withDiagnosis: Diagnosis | null;
  withChronicDisease: ChronicDisease | null;
  withVisualImpairment: VisualImpairment | null;
  withManifestations: Manifestation | null;
  hasPwdId: boolean;
}

export enum Diagnosis {
  ADHD = 'Attention Deficit Hyperactivity Disorder',
  ASD = 'Autism Spectrum Disorder',
  CerebralPalsy = 'Cerebral Palsy',
  EmotionalBehaviorDisorder = 'Emotional-Behavior Disorder',
  HearingImpairment = 'Hearing Impairment',
  IntelectualDisability = 'Intellectual Disability',
  LearningDisability = 'Learning Disability',
  multipleDisabilities = 'Multiple Disability',
  PhysicalHandicap = 'Orthopedic/Physical Handicap',
  SpeechDisorder = 'Speech/Language Disorder',
}

export enum ChronicDisease {
  Cancer = 'Cancer',
  NonCancer = 'Non-Cancer',
}

export enum VisualImpairment {
  Blind = 'Blind',
  LowVision = 'Low Vision',
}

export enum Manifestation {
  DifficultyInApplyingKnowledge = 'Difficulty in Applying Knowledge',
  DifficultyInCommunication = 'Difficulty in Communicating',
  DifficultyInInterpersonalBehavior = 'Difficulty in Displaying Interpersonal Behavior',
  DifficultyInHearing = 'Difficulty in Hearing',
  DifficultyInMobility = 'Difficulty in Mobility (Walking, Climbing and Grasping)',
  DifficultyInPerforming = 'Difficulty in Performing Adaptive Skills (Self-Care)',
  DifficultyInRemembering = 'Difficulty in Remembering, Concentrating, Paying Attention and Understanding',
  DifficultyInSeeing = 'Difficulty in Seeing',
}
