import Swal from "sweetalert2";

export async function  updateAlert (data) {
    return Swal.fire({
        title: "Are you sure?",
        text: "Are you sure update this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
        inputValue:data,
    })
}
