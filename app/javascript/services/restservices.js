import axios from 'axios';
import auth from './auth'

export default {
	get(url, withCredentials = true) {
		if(withCredentials)
			return axios.get(url, { 
				headers: { Authorization: "Bearer " + auth.getToken() } });
		return axios.get(url);
	},
	post(url, body, withCredentials = true) {
		if(withCredentials)
			return axios.post(url, body, { 
				headers: { Authorization: "Bearer " + auth.getToken() } });
		return axios.post(url, body);
	}
}