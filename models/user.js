import { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    require: [true, 'Введите кооректный email'],
  },
  username: {
    type: String,
    unique: [true, 'Имя уже занято, пожалуйста придумайте другое!'],
    require: [true, 'Введите имя пользователя!'],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', userSchema);
export default User;
