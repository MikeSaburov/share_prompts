import mongoose from 'mongoose';

let isConnected = false; //отслеживает состояние соединения к БД

// Подключение к БД
export const connectToDB = async () => {
  // Строгий запрс к БД
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('MongoDB alrady is connect');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('DB connect');
  } catch (error) {
    console.log(error);
  }
};
