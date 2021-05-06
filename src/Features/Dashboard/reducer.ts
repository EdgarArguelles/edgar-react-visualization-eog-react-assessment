import { createSlice, PayloadAction } from 'redux-starter-kit';

export type ApiErrorAction = {
  error: string;
};

export type Metric = {
  name: string;
  isSelected: boolean;
};

export type Measurement = {
  metric: string;
  value: number;
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
        metric => state.realtimeMeasurements.find(measurement => measurement.metric === metric) || { metric, value: 0 },
      );
    },
    setRealtimeMeasurements: (state, action: PayloadAction<Measurement>) => {
      state.realtimeMeasurements = state.realtimeMeasurements.map(measurement =>
        measurement.metric === action.payload.metric ? action.payload : measurement,
      );
    },
    metricsDataReceived: (state, action: PayloadAction<string[]>) => {
      state.metrics = action.payload.map(name => ({ name, isSelected: false }));
    },
    apiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
