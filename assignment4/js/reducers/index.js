import {useSelector} from 'react-redux';

// fetch sessiondata reducer state
export const useSessionStore = () => useSelector(state => state?.sessionData);
