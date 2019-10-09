import axios from "axios";

class classApi {
  constructor() {
    this.apiError = [];
    this.token = "JGJgsjhsjhsjhJGJHGjgsjhgsjsjhH"
    this.herokuTpe = "http://localhost:3000";
  }

  getChart = async (a, b, c) => {
    try {
      // return await axios.get(
      //   this.herokuTpe +
      //     "/chart?autorizacion=" +
      //     this.token +
      //     "&inversion=" +
      //     a +
      //     "&idpackage=" +
      //     b +
      //     "&packcount=" +
      //     c
      // );
      return {
        data: {
          anual: [
            1890,
            2247.21,
            2671.93,
            3176.93,
            3777.37,
            4491.29,
            5340.14,
            6349.43,
            7549.47,
            8976.32,
            10672.85,
            12690.02
          ],
          mensual: [
            175,
            208.08,
            247.4,
            294.16,
            349.76,
            415.86,
            494.46,
            587.91,
            699.03,
            831.14,
            988.23,
            1175
          ]
        }
      };
    } catch (e) {
      console.log(e);
      return this.apiError;
    }
  };
}

export default classApi;
