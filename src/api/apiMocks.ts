export function mockApiDiarysAll(): any {
    return [
        {
            id: 0,
            member: {
                id: 0,
                name: "user_name",
                email: "user_email",
                picture: "picture_url",
                role: "GUEST",
                refreshToken: "string",
                gender: "gender",
                illness: "illness",
                type: "type",
            },
            date: "2024-02-18",
            diaryEmojis: [
                {
                    emoji: "GOOD",
                    count: 2,
                },
            ],
            categories: [
                {
                    id: 0,
                    categoryCode: "string",
                    category: "category1",
                    midCategory: "mid1",
                    color: "#F4C0CF",
                    visible: true,
                },                
                {
                    id: 0,
                    categoryCode: "string",
                    category: "category1",
                    midCategory: "mid2",
                    color: "#F9DCE4",
                    visible: true,
                },
                {
                    id: 1,
                    categoryCode: "string",
                    category: "category2",
                    midCategory: "mid3",
                    color: "#ACDABD",
                    visible: true,
                },
            ],
        },
        {
            id: 1,
            member: {
                id: 0,
                name: "user_name",
                email: "user_email",
                picture: "picture_url",
                role: "GUEST",
                refreshToken: "string",
                gender: "gender",
                illness: "illness",
                type: "type",
            },
            date: "2024-02-18",
            diaryEmojis: [
                {
                    emoji: "LOVE",
                    count: 3,
                },
                {
                    emoji: "CHECK",
                    count: 1,
                },
            ],
            categories: [
                {
                    id: 0,
                    categoryCode: "string",
                    category: "category1",
                    midCategory: "mid1",
                    color: "#F4C0CF",
                    visible: true,
                },                
                {
                    id: 0,
                    categoryCode: "string",
                    category: "category1",
                    midCategory: "mid2",
                    color: "#F9DCE4",
                    visible: true,
                },
                {
                    id: 1,
                    categoryCode: "string",
                    category: "category2",
                    midCategory: "mid3",
                    color: "#ACDABD",
                    visible: true,
                },
            ],
        }
    ];
}