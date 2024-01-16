export interface IDonation {
  id: number;
  projectId: number | null;
  email: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProject {
  id: number;
  is_test: boolean;
  image: string;
  location: string;
  goal: number;
  createdAt: Date;
  updatedAt: Date;
  stripe_price_id_en: string;
  title_en: string;
  details_en: string;
  description_en: string;
  stripe_price_id_es: string;
  title_es: string;
  details_es: string;
  description_es: string;
  donations: IDonation[];
  _count: {
    donations: number;
  };
}

export interface IDocument {
  name: string;
  displayName: string;
}

export interface IGalery {
  album: string;
  displayName: string;
  date: string;
}

export interface Photo{
  id: number;
  src: string;
  preview: string;
  description: string;
}

export interface CommonClassProps {
  className?: string
}
