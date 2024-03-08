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
    match: [
      /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Неверное имя, имя должно содержать от 8 до 20 символов и должно быть уникальным!',
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', userSchema);
export default User;
