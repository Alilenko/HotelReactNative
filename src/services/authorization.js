import { initializeApp} from 'firebase/app';
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTIVqnp0_S_sAZvpxzUUuRxMkVgFt9Y_I",
  authDomain: "hotelproject-e7ae2.firebaseapp.com",
  projectId: "hotelproject-e7ae2",
  storageBucket: "hotelproject-e7ae2.appspot.com",
  messagingSenderId: "276483175058",
  appId: "1:276483175058:web:3ebf23f26e7bede4beac4b"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
