import Swal from "sweetalert2";

export default class Alerts {
  static async deleteUnauthorized() {
    let res = await Swal.fire({
      title: "Sorry you are not authorized to close this bug",
      icon: "error",
    });
  }

  static async closeConfirm() {
    let res = await Swal.fire({
      title: "Are you sure you want to close?",
      icon: "warning",
    });

    return res.value;
  }
}
