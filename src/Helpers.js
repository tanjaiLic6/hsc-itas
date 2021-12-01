import swal from 'sweetalert';


export const areYouSure=async()=>await swal("Are you sure?", {
    buttons: ["No", "Yes"],
  });


