export interface IFilter {
    id: string;
    name: string;
}

export interface IResult {
    statusList: IFilter[];
    sourcesList: IFilter[];
    ageRangeList?: IFilter[];
}
export const filterData: IResult = {
    statusList: [
        {
            id: "rNtJ7GnFBy4jgyUC",
            name: "Unread",
        },
        {
            id: "Karlh7QHaQrS7G3c",
            name: "Finish Reading",
        },
    ],
    sourcesList: [
        { id: "yApugC9cU8yNrknG", name: "Johns Hopkins Medicine" },
        { id: "pWURKzsQW0NYBKem", name: "Nemours TeensHealth" },
        {id: "UjBmLkTqD8FzWvPx", name: "Science Journal for Teens"},
        { id: "B1DKDDNmgsn2YxLR", name: "Scholastic Magazines+" },
        { id: "dEAeZQKTYKBGKNtx", name: "TheSchoolRun" },
        { id: "9yjaj8rPtW8bsae8", name: "US Education" },
        { id: "r4vRFpceW7JwLIM8", name: "US News" },
    ],
    ageRangeList: [
        { id: "ByVwRmQsG2ZdNfKu", name: "16-18 years old" },
        { id: "HmX7PzJwVkG9QnLc", name: "18-20 years old" },
    ],
};