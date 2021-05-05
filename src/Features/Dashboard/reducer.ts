import { createSlice, PayloadAction } from 'redux-starter-kit';

export type ApiErrorAction = {
  error: string;
};

export type Metric = {
  name: string;
  isSelected: boolean;
};

export type MetricsState = {
  metrics: Metric[];
};

const initialState: MetricsState = {
  metrics: [],
};

const slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeSelection: (state, action: PayloadAction<string[]>) => {
      state.metrics.forEach(metric => (metric.isSelected = action.payload.includes(metric.name)));
    },
    metricsDataReceived: (state, action: PayloadAction<string[]>) => {
      state.metrics = action.payload.map(name => ({ name, isSelected: false }));
    },
    apiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
