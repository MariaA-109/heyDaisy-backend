const multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");
const { v4: uuidv4 } = require("uuid");

const firebaseUploader = multer({
  storage: FirebaseStorage({
    bucketName: "heydaisy-9c85a.appspot.com",
    credentials: {
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY,
      projectId: process.env.PROJECT_ID,
    },
    public: true,
    nameSuffix: `-${uuidv4()}`,

    rules: [
      {
        object: "*",
        methods: {
          read: true,
          write: true,
        },
      },
    ],
  }),
});

module.exports = firebaseUploader;
