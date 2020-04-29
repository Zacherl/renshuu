import Exercise1 from "@/components/topics/Exercise1.vue";
import { VueConstructor } from "vue";

const exercises = {
  exercise1: Exercise1,
  exercise2: Exercise1
};

export const COURSES = ["TINF19B4", "TINF19B5"];

export const TOPICS: { [key: string]: { [key: string]: VueConstructor } } = {
  topic1: exercises,
  topic2: exercises,
  topic3: exercises
};
