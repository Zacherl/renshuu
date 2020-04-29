import { Exercise } from "@/models/exercise";

export interface Topic {
  key: string;
  exercises: Exercise[];
}
