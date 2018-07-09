const SEARCH = 'SEARCH';

export function search(value){
    return {
        type: SEARCH,
        payload: value
    }
}