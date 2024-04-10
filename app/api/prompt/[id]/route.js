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
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response(JSON.stringify('Подсказка не найдена'), {
        status: 404,
      });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify('Не удалось обновить подсказку😢'), {
      status: 500,
    });
  }
};

//DELETE (delete)
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);
    return new Response('Подсказка успешно удалена', { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify('Не удалось удалить подсказку😢'), {
      status: 500,
    });
  }
};
