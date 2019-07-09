export const tagsQuery = `
        {
            tags2 {
                cowId
                tag
            }
        }
    `;

export const userQuery = (userId: number ) => `
    {
        user(userId: "${userId}") {
            email
            firstName
            lastName
        }
    }
`;