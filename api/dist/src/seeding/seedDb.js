"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("../db/categories");
const words_1 = require("../db/words");
const bson_1 = require("bson");
const seedWords_1 = require("./seedWords");
console.log("seeding db...");
(0, categories_1.createCategory)({
    name: 'violence',
    description: 'Contains violent content'
});
(0, categories_1.createCategory)({
    name: "insult",
    description: "contains insults"
});
(0, categories_1.createCategory)({
    name: "pornography",
    description: "contains sexually explicit content"
});
const listOfWordList = [seedWords_1.pornWords, seedWords_1.violanceWords, seedWords_1.insultWords];
for (let listWord of listOfWordList) {
    for (let word of listWord) {
        (0, words_1.createWord)({
            content: word,
            categoryId: new bson_1.ObjectId("65cc7c8ea91c7af974942b99")
        });
    }
}
console.log('Database seeded!');
//# sourceMappingURL=seedDb.js.map