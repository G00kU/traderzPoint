import { getTradingViewNewsAPI } from "../../apiConfig";

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
export const getTradingViewNews = {
  method: "GET",
  url: getTradingViewNewsAPI,
  params: {
    page: "1",
    per_page: "20",
    category: "base",
    country: "us",
    locale: "en",
  },
  headers: {
    "X-RapidAPI-Key": process.env.TRADERZ_POINT_API_KEY_RAPIDAPI,
    "X-RapidAPI-Host": "trading-view.p.rapidapi.com",
  },
};
