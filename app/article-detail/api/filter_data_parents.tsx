export interface IFilter {
    id: string;
    name: string;
  }
  
  export interface IResult {
    statusList: IFilter[];
    sourcesList: IFilter[];
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
        
      { id: "yApugC9cU8yNrknG1", name: "Chicago Parents" },
      { id: "pWURKzsQW0NYBKem2", name: "HealthyChildren Magazine" },
      { id: "kjdDFDNmgsn2YxLR3", name: "John Hopkins Childrens Center" },
      { id: "B1DKDDNmgsn2YxLR4", name: "Nemours KidsHealth For Parents" },
      { id: "9yjaj8rPtW8bsae85", name: "The Mum Educates" },
      { id: "r4vRFpceW7JwLIM86", name: "US News" }
    ],
  };
  