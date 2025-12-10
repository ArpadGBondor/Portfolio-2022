import axios from 'axios';
import { getDoc, doc } from 'firebase/firestore';
import { getFirebase } from '../firebase.lazy';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const firebase_collections = {
  CONTACT: 'contact',
  PAGE: 'page',
};

export async function getPage(id) {
  const { db } = await getFirebase();

  const docRef = doc(db, firebase_collections.PAGE, id);
  const snapshot = await getDoc(docRef);

  const data = { id: snapshot.id, ...snapshot.data() };

  if (!snapshot.exists()) {
    return await axios.get(`/api/page?pageId=${id}`); // fallback to backend function
  }

  return { data };
}

export async function getContacts(type) {
  const { db } = await getFirebase();

  const contactsQuery = query(
    collection(db, firebase_collections.CONTACT),
    where('type', '==', type)
  );

  const contactSnap = await getDocs(contactsQuery);

  if (contactSnap.empty) {
    return await axios.get(`/api/contact?type=${type}`); // fallback to backend function
  }

  const data = contactSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return { data };
}
