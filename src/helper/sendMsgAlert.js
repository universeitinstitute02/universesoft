import Swal from "sweetalert2";


export async function sendMsgAlert() {
    return await Swal.fire({
        allowOutsideClick: false,
        title: 'Are you sure?',
        text: "You won't be send this this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, send message!'
    });

}