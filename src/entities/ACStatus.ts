import Data from "./Data";

export default interface ACStatus {
    historicalData: Data[];
  currentTemp: number;
  currentHumidity: number;
  isRunning: boolean;
  mode: 'cool' | 'warm';
  targetTemp: number;
}