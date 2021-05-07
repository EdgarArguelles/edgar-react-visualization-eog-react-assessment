import { createSlice, PayloadAction } from 'redux-starter-kit';

export type ApiErrorAction = {
  error: string;
};

export type Metric = {
  name: string;
  isSelected: boolean;
  unit: string;
  history: Measurement[];
};

export type HistoryResponse = {
  metric: string;
  measurements: Measurement[];
};

export type Measurement = {
  metric: string;
  value: number;
  at: number;
  unit: string;
};

export type MetricsState = {
  metrics: Metric[];
  realtimeMeasurements: Measurement[];
};

const initialState: MetricsState = {
  metrics: [],
  realtimeMeasurements: [],
};

const slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeSelection: (state, action: PayloadAction<string[]>) => {
      state.metrics.forEach(metric => (metric.isSelected = action.payload.includes(metric.name)));
      state.realtimeMeasurements = action.payload.map(
        metric =>
          state.realtimeMeasurements.find(measurement => measurement.metric === metric) || {
            metric,
            value: 0,
            at: 0,
            unit: '',
          },
      );
    },
    setMeasurementHistory: (state, action: PayloadAction<HistoryResponse[]>) => {
      action.payload.forEach(history => {
        const metric = state.metrics.find(({ name }) => name === history.metric);
        if (metric) {
          metric.history = history.measurements;
          const firstValue = metric.history[0];
          if (firstValue) metric.unit = firstValue.unit;
        }
      });
    },
    setRealtimeMeasurements: (state, action: PayloadAction<Measurement>) => {
      state.realtimeMeasurements = state.realtimeMeasurements.map(measurement =>
        measurement.metric === action.payload.metric ? action.payload : measurement,
      );
    },
    metricsDataReceived: (state, action: PayloadAction<string[]>) => {
      state.metrics = action.payload.map(name => ({ name, isSelected: false, unit: '', history: [] }));
    },
    apiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
