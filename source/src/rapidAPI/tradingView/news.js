import { getTradingViewNewsAPI } from "../../apiConfig";

export const tradingViewNewsColumns = [
  {
    field: "title",
    headerName: "HeadLines",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "shortDescription",
    headerName: "Description",
    headerAlign: "center",
    flex: 0.5,
  },
  {
    flex: 0.5,
    field: "provider",
    headerName: "Source",
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
    "X-RapidAPI-Key": process.env.REACT_APP_TRADERZ_POINT_API_KEY_RAPIDAPI,
    "X-RapidAPI-Host": "trading-view.p.rapidapi.com",
  },
};
