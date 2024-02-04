export const logger = (store: any) => (next: any) => (action: any) => {
    next(action);
};