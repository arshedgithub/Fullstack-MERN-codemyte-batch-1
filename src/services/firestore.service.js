import {
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

class FirestoreService {
    // Products collection
    async getProducts() {
        try {
            const productsRef = collection(db, 'products');
            const q = query(productsRef, orderBy('createdAt', 'desc'));
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            throw new Error('Failed to fetch products');
        }
    }

    async getProduct(productId) {
        try {
            const productRef = doc(db, 'products', productId);
            const productSnap = await getDoc(productRef);

            if (productSnap.exists()) {
                return {
                    id: productSnap.id,
                    ...productSnap.data()
                };
            }
            return null;
        } catch (error) {
            throw new Error('Failed to fetch product');
        }
    }

    async addProduct(productData) {
        try {
            const productsRef = collection(db, 'products');
            const docRef = await addDoc(productsRef, {
                ...productData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
            return docRef.id;
        } catch (error) {
            throw new Error('Failed to add product');
        }
    }

    async updateProduct(productId, updates) {
        try {
            const productRef = doc(db, 'products', productId);
            await updateDoc(productRef, {
                ...updates,
                updatedAt: serverTimestamp()
            });
        } catch (error) {
            throw new Error('Failed to update product');
        }
    }

    async deleteProduct(productId) {
        try {
            const productRef = doc(db, 'products', productId);
            await deleteDoc(productRef);
        } catch (error) {
            throw new Error('Failed to delete product');
        }
    }
}

export default new FirestoreService();
