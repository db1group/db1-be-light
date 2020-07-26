import Responsibility from './responsibility';

export default interface Role {
  id: number;
  description: string;
  responsibilities: Responsibility[];
}
