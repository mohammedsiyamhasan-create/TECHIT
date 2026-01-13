
export enum AppTab {
  HOME = 'home',
  CHAT = 'chat',
  IMAGE = 'image',
  CONTACT = 'contact'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: Date;
}
