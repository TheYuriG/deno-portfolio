//? Base type for array of visualization steps
import { visualizationStep } from "./VisualizationStep.ts";

//? Define all data that a visualization page must contain
export interface savedVisualization {
  expressions: visualizationStep[];
  title: string;
  description: string;
  slug: string;
}
