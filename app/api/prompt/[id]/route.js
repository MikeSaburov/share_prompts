import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

//GET (read)

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate('creator');

    if (!prompt) {
      return new Response(JSON.stringify('Подсказка не найдена'), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify('Не удалось получить все подсказки😢'), {
      status: 500,
    });
  }
};

//PATCH (update)

//DELETE (delete)
