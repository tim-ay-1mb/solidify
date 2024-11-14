import admin from "firebase-admin";

if (!admin.apps.length) {
  console.log("fdas");
  console.log(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
  );
  console.log(serviceAccount);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    projectId: "solidify-9f2c4",
  });
}

export default admin;
