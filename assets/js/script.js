$(document).ready(function(){
    $(document).on('click', '.photoShareBtn', function (e){
        e.preventDefault();
        $('.photoShare').toggleClass('d-none');

    })
})