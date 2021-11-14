import {useSelector} from 'react-redux';

export const useSessionStore = () => useSelector(state => state?.sessionData);
