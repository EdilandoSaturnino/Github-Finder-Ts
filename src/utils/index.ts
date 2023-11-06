import axios from 'axios';

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchUser = async (username: string) => {
  return axios.get(`${GITHUB_API_URL}/users/${username}`);
};

export const fetchRepos = async (username: string) => {
  return axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
};
