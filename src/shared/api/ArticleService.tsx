// const API_URL = 'http://localhost:1337/api';
// const API_TOKEN = process.env.API_TOKEN;

// export const articleAPI = {
//     async getArticles() {
//         try {
//             const response = await fetch(`${API_URL}/articles`, {
//                 headers: {
//                     Authorization: `Bearer ${API_TOKEN}`,
//                 },
//                 next: {revalidate: 3}
//             });
//             const articles = await response.json();
//             return articles;
//         } catch (error) {
//             console.error('Error fetching articles:', error);
//             throw error; // Пробросить ошибку для обработки во внешнем коде
//         }
//     },
// };
const API_URL = 'http://localhost:1337/api';
const API_TOKEN = process.env.API_TOKEN;

export const articleAPI = {
    async getArticles() {
        try {
            const response = await fetch(`${API_URL}/articles?populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: { revalidate: 3 }
            });
            const { data } = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error; // Пробросить ошибку для обработки во внешнем коде
        }
    },

    async getOneArticle(slug: string) {
        try {
            const response = await fetch(`${API_URL}/articles?filters[slug]=${slug}&populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                next: { revalidate: 3 }
            });
            const { data } = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error; // Пробросить ошибку для обработки во внешнем коде
        }
    },
};
