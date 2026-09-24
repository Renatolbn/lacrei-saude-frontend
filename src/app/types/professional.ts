export type ProfessionalCardProps = {
  id: number;
  name: string;
  specialty: string;
  location: string;
  online: boolean;
  image: string;
  description: string;
};

export type  ProfessionalProfile = ProfessionalCardProps & {
  formation: string[];
  about: string;
  workTopics: string[];
};