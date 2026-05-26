import mongoose from "mongoose";

export async function registerDbPlugin(app) {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is required");
  }

  await mongoose.connect(mongoUri, {
    autoIndex: true
  });

  app.decorate("mongoose", mongoose);

  app.addHook("onClose", async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  });
}
