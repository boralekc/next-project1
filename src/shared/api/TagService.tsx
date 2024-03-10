const API_URL = 'http://localhost:1337/api';
const API_TOKEN = process.env.API_TOKEN;

export const tagAPI = {
    async getTags() {
        try {
            const response = await fetch(`${API_URL}/tags?populate=*`, {
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
}