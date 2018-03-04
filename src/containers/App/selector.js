import { createSelector } from 'reselect';

export const selectAppDomain = () => (state) => state.get('app');

export const getDrawer = () => createSelector(
    selectAppDomain(),
    (appState) =>  appState.get('drawer')
);
