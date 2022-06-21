import axios from 'axios';
import { useQuery } from 'react-query';

const URL = 'http://www.boredapi.com/api/activity/';

const fetchActivity = () => axios.get(URL);

export const useSuggestActivityQuery = () => useQuery('suggest-activity', fetchActivity);
