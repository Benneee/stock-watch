import axios from "axios";

export const fetchData = async (companyData) => {
  let time = "19:59";
  let date = "2020-07-17";

  let url = `https://sandbox.tradier.com/v1/markets/timesales?symbol=${companyData}&interval=1min&start=${date} ${time}&end=${date} ${time}&session_filter=all`;
  try {
    const {
      data: { series },
    } = await axios.get(
      url,

      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer Vy8fLhiAyRiTTaJLbPWPlAppg2hu",
        },
      }
    );
    const modifiedData = {
      data: series.data,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
