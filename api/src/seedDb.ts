import mongoose from 'mongoose';
import { getCategory } from "./db/categories";

console.log('Creating category');

// new mongoose.Types.ObjectId('65cb950dd49267343fbea963');

// 65cb950dd49267343fbea963

getCategory(new mongoose.Types.ObjectId('65cb950dd49267343fbea963')).then((category) => {
    console.log(category);
    console.log('Category created');
}).catch((error) => {
    console.error('Error creating category: ', error);
});





// import { createCategory } from './db/categories';

// createCategory({
//     name: 'Test Category',
//     description: 'This is a test category'
// }).then((category) => {
//     console.log(category);
//     console.log('Category created');
// }).catch((error) => {
//     console.error('Error creating category: ', error);
// });
