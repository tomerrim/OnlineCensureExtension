import { createCategory } from "../db/categories";
import { createWord } from "../db/words";
import { ObjectId } from 'bson';
import { insultWords, pornWords, violanceWords } from "./seedWords";

console.log("seeding db...");

createCategory({
    name: 'violence',
    description: 'Contains violent content'
});
createCategory({
    name: "insult",
    description: "contains insults"
})
createCategory({
    name: "pornography",
    description: "contains sexually explicit content"
})

const listOfWordList = [pornWords, violanceWords, insultWords]

for (let listWord of listOfWordList) {
    for (let word of listWord) {
        createWord({
            content: word,
            categoryId: new ObjectId("65cc7c8ea91c7af974942b99")
        });
    }
}

console.log('Database seeded!');
