$(document).ready(function(){
    $(document).on('click','.photoShareBtn', function (e){
        e.preventDefault();
        $('.photoShare').toggleClass('d-none');
    })
    $(document).on('click','.see-more', function (e){
        e.preventDefault();
        $(this).parent().html('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,' +
        'dignissimos libero ut perferendis, delectus eum sunt reprehenderit pariatur distinctio voluptatibus '+ 
        'facere eius nam voluptatem quas! Aliquid iusto accusantium, nemo libero consequatur reprehenderit sit voluptates dolore, ' +
        'voluptatem eius quasi culpa eum rerum numquam quae nobis voluptatum delectus beatae, ex rem totam fugit perspiciatis optio saepe. '+
        'Minima consequuntur deleniti, architecto, nam vel nisi odit nesciunt ducimus tempora dolorem asperiores adipisci, soluta earum mollitia. '+
        'Mollitia temporibus aperiam consequuntur autem laboriosam provident? Voluptas illo cupiditate veniam, esse dicta in ex voluptatibus, '+
        'asperiores impedit dolor similique ipsum sapiente tempore eaque quae dolorem perspiciatis veritatis harum! <a href="#" class="see-less ms-2">See less</a></p>');
    })
    $(document).on('click','.see-less', function (e){
        e.preventDefault();
        $(this).parent().html('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus <a href="#" class="see-more ms-2">See more</a></p>');
    })
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
})