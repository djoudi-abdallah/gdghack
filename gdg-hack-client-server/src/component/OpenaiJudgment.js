// 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
import OpenAI from "openai";

const apiKey = "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";

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
const description = "we will do our best with a website using OpenAI and our skills to make an optimised and a helpful platform for event managment";
const challenge = "Challenge 01: Create an event management platform that revolutionizes the way we plan and experience competitive events. Incorporate a personalized judgment system and integrate a dashboard for previous initiatives. Skills needed: UI/UX, web development, backend, frontend."





export const main_ai = async () => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful judge." },
        {
          role: "user",
          content: `give me a mark from 10 correspond to this description : ${description} for this challenge ${challenge} during a hackathon (i need u to give me just a mark with very short explain (just in a paragraph of 3 lines ) and analyse to give the correct mark )`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

main_ai();

