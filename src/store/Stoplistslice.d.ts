export type StopListItem = {
  name: string;
  reason: string;
  comment: string;
  time: string;
};

export type StopListState = {
  items: StopListItem[];
};

export function addToStopList(item: StopListItem): {
  type: string;
  payload: StopListItem;
};

export function returnToMenu(name: string): {
  type: string;
  payload: string;
};

declare const stopListReducer: (
  state: StopListState | undefined,
  action: { type: string; payload?: unknown }
) => StopListState;

export default stopListReducer;