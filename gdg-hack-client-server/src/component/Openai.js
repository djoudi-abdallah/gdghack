// 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
import OpenAI from "openai";

const apiKey = "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";

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
const skills = "UI UX , web dev , backend , frontend";



const challenges =
  "Challenge 01: Event Management Platform Your first challenge will be to reinvent event management by creating a comprehensive platform that serves as a true innovation hub. This platform is designed for a variety of competitive events, including hackathons and ideathons. Consider a world in which event tracking, submission, and judging are not just duties, but experiences. Break free from the usual and envisage a more intricate and individualized judgment system, pulling inspiration from Devpost while forging its own path. And that's not all, imagine this platform seamlessly integrating a dashboard that provides audiences with an overview of previous initiatives. It's time to transform the way we arrange and experience events!. challenge 02 : For the second task, you'll begin on an innovative journey as you create a ground-breaking platform developed just for code reviewers. Consider a platform that uses a code file as its canvas and turns the review process into an art form. This is more than a tool, it is a dynamic platform that expertly validates contribution guidelines. Dive into the world of code quality, unit tests, and coding standards. Code reviewers and developers, prepare for a report that goes beyond the surface, delivering a thorough summary of code contributions. This is more than simply a challenge, it is an opportunity to shape the future of code review platforms . Challenge 03: Meeting & Posting Assistance Last but not least Join the AI revolution in management with an app that is more than just an assistant; it is a dynamic tool for meeting and post optimization. Consider a managerial experience in which AI takes the lead in suggesting meeting times based on subtle indicators such as Discord logs, seasonal patterns, and user choice. But this technology does more than just assist, it also provides statistical insights, overviews, and agenda planning capabilities. It's time to let AI transform the management landscape!";

export const main = async () => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful mentor." },
        {
          role: "user",
          content: `what do u think about the challenge ${challenges} that a person can solve correspond to the description of these skills that we have : ${skills} just in 6 lines and make it simple  `,
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

main();

