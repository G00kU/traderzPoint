export const newsColumns = [
  {
    field: "title",
    headerName: "HeadLines",
    flex: 1,
    minWidth: 400,
    headerAlign: "center",
  },
  {
    field: "shortDescription",
    headerName: "Description",
    width: 500,
    headerAlign: "center",
  },
  {
    field: "provider",
    headerName: "Source",
    width: 300,
    headerAlign: "center",
    renderCell: (params) => {
      return params?.row?.link ? (
        <a href={`${params?.row?.link}`} target="_blank">
          {params.value}
        </a>
      ) : (
        <p>{params.value}</p>
      );
    },
  },
];
export const getNews = {
  method: "GET",
  url: "https://trading-view.p.rapidapi.com/news/list",
  params: {
    page: "1",
    per_page: "20",
    category: "base",
    country: "us",
    locale: "en",
  },
  headers: {
    "X-RapidAPI-Key": "8c19ad59ecmshe21fd5e9a2d54f8p1e8e35jsn471fedd47f97",
    "X-RapidAPI-Host": "trading-view.p.rapidapi.com",
  },
};
