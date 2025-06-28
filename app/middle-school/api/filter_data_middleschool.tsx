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
      { id: "yApugC9cU8yNrknG", name: "Barnes and Noble" },
      { id: "pWURKzsQW0NYBKem", name: "Cricket - Muse Magazine" },
      {id: "UjBmLkTqD8FzWvPx", name: "Frontiers for Young Minds"},
      { id: "B1DKDDNmgsn2YxLR", name: "Highlights" },
      { id: "dEAeZQKTYKBGKNtx", name: "Kids Discover" },
      { id: "9yjaj8rPtW8bsae8", name: "Magazine Line" },
      { id: "r4vRFpceW7JwLIM8", name: "National Geographic" },
      { id: "QsPiVnKrWjC3RuYz", name: "Nemours TeensHealth" },
      { id: "lAu8a2MaMmvCAQYR", name: "Science Journal for Kids" },
      { id: "mFHHY7nUhLZ8ZPkz", name: "School Reading List" },
      { id: "5ZDBexOR9JRA1mrx", name: "Scholastic Magazines+" },
      { id: "KmbvIf2ev89jQtUY", name: "TheSchoolRun" },
      { id: "VmMkCdUxLYp9ZODX", name: "Time Magazine for Kids" },
      { id: "XzNbGwLpTkY4HfLJ", name: "US News" },
    ],
    ageRangeList: [
      { id: "ByVwRmQsG2ZdNfKu", name: "10-12 years old" },
      { id: "HmX7PzJwVkG9QnLc", name: "12-15 years old" },
    ],
  };
  
  