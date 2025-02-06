export default interface ACStatus {
    historicalData: [];
    currentTemp: number;
    currentHumidity: number;
    isRunning: boolean;
    mode: 'cool' | 'warm';
    targetTemp: number;
   }