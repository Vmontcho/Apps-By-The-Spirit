import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

// Initialize Firebase Admin if not already initialized
if (!getApps().length) {
  try {
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT_KEY || ''
    );

    if (!serviceAccount || !Object.keys(serviceAccount).length) {
      throw new Error('Invalid service account configuration');
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
    throw new Error('Failed to initialize Firebase Admin');
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Get user data from Firestore first
    const db = admin.firestore();
    const userDoc = await db.collection('users').doc(id).get();
    const userData = userDoc.data();

    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Delete user from Authentication if UID exists
    if (userData.uid) {
      try {
        await admin.auth().deleteUser(userData.uid);
      } catch (authError: any) {
        console.error('Error deleting user from Authentication:', authError);
        // Return specific error message for auth deletion failure
        return NextResponse.json(
          { 
            error: 'Failed to delete user from authentication',
            details: authError.message || 'Unknown authentication error'
          },
          { status: 500 }
        );
      }
    }

    // Delete user from Firestore
    try {
      await db.collection('users').doc(id).delete();
    } catch (firestoreError: any) {
      console.error('Error deleting user from Firestore:', firestoreError);
      return NextResponse.json(
        { 
          error: 'Failed to delete user from database',
          details: firestoreError.message || 'Unknown database error'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { 
        error: 'Failed to delete user',
        details: error.message || 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
}