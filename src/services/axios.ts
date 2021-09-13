import axios from 'axios';

export const firebaseApi = axios.create({
  baseURL: 'https://us-central1-sign-one-step-auth.cloudfunctions.net/',
});
