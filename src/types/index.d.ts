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
