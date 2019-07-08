export const tagsQuery = `
        {
            tags2 {
                cowId
                tag
            }
        }
    `;

export const userQuery = `
    {
        user(userId: "1") {
            email
            firstName
            lastName
        }
    }
`;