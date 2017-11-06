// $(element).method();

// $('h1').hide();
// targeting specific class/id
// $('.heading2').hide();

// $(parent child).method(property, attribute)
// all spans in p, add red
// $('p span').css('color', 'red')

// In list id, on element li, grab first list and change it to red
// $('#list li:first').css('color', 'red');
// $('#list li:last').css('color', 'green');
// $('#list li:even').css('background-color', 'yellow');
// $('#list li:odd').css('background-color', '#cccccc');

// Choose every 3rd item
// $('#list li:nth-child(3n)').css('list-style', 'none');

// $(type).method()
// hides all input type = 'button'
// $(':button').hide()

// targets all hrefs 
// $('[href').css('color', 'red');

// targets specific href
// $('a[href="https://yahoo.com').css('color', 'green');

// hides everything
// $('*').hide();


// ****** EVENTS ***** //


// Mouse Event

// $('#btn1').click(function(){
//     alert('Button Clicked!');
// });

// same as above using on method
// $('#btn1').on('click', function(){
//     alert('Button Clicked');
// });

// $('#btn1').click(function(){
//     // hides and show
//     $('.para1').toggle();
//     // $('.para1').hide();
// });

// $('#btn2').click(function(){
//     $('.para1').show();
// });

// dblclick - double click to invoke function
// $('#btn1').dblclick(function(){
//     $('.para1').toggle();
// });

// $('#btn1').hover(function(){
//     $('.para1').toggle();
// });

// two codes below are same as above
// $('#btn1').on('mouseenter', function(){
//     $('.para1').toggle();
// });

// $('#btn1').on('mouseleave', function(){
//     $('.para1').toggle();
// })


// $('#btn1').on('mousemove', function(){
//     $('.para1').toggle();
// })

// $('#btn1').on('mousedown', function(){
//     $('.para1').toggle();
// });

// $('#btn1').on('mouseup', function(){
//     $('.para1').toggle();
// });

// e - you can look at information on console.
// $('#btn1').click(function(e){
//     alert(e.currentTarget.id);
//     alert(e.currentTarget.innerHTML);
//     alert(e.currentTarget.outerHTML);
//     alert(e.currentTarget.className);
// });

// $(document).on('mousemove', function(e){
//     $('#coords').html('Coords: Y: '+e.clientY+" X: "+e.clientX);
// });

// $('input').focus(function(){
//     // alert('Focus');
//     // This = 'input'
//     $(this).css('background', 'pink');
// });

// $('input').blur(function(){
//     // alert('Focus');
//     // This = 'input'
//     $(this).css('background', 'white');
// });

// $('input').keyup(function(e){
//     console.log(e.target.value);
// })

// $('select#gender').change(function(){
//     // alert('Changed');
//     alert(e.target.value);
// });

// $('#form').submit(function(e){
//     // prevents it from submitting
//     e.preventDefault();
//     var name = $('input#name').val();
//     console.log('Submitted')
//     console.log(name);
// })


// ****** DOM MANIPULATION ***** //

// $(document).ready(function(){
//     $('p.para1').css({color:'red', background:'#ccc'});
//     $('p.para2').addClass('myClass');

//     $('p.para2').removeClass('myClass');
//     $('#btn1').click(function(){
//         $('p.para2').toggleClass('myClass');
//     });

//     // inputs text
//     // $('#myDiv').text('Hello World');
//     $('#myDiv').html('<h3>Hello World</h3>');
//     alert($('#myDiv').text());
// });

// adds it at the end of the list
// $('ul').append('<li>Append List Item</li>');

// // adds it to beginning of the list
// $('ul').prepend('<li>Prepend List Item</li>');

// $('.para1').appendTo('.para2');
// $('.para1').prependTo('.para2');

// // added before ul tag
// $('ul').before('<h4>Hello</h4>');

// // added after ul tag
// $('ul').after('<h4>World</h4>');

// // empties the list inside the ul
// $('ul').empty();

// // takes ul completely out
// $('ul').detach();

// // add attribute to target
// $('a').attr('target', '_blank');
// alert($('a').attr('href'));
// $('a').removeAttr('target');

// wrap h1 tags to p
// $('p').wrap('<h1>')

// // wrapping all p tags into one h1 tag
// $('p').wrapAll('<h1>')


// if/else forloop

// $('#newItem').keyup(function(e){
//     // which gets the keycode
//     var code = e.which;
//     if(code == 13){
//         e.preventDefault();
//         $('ul').append('<li>'+e.target.value+'</li>')
//     } 
// });


// var myArr = ['Brad', 'Kelley', 'Nate', 'Jose'];

// // $.each(arr, function(index, value))
// $.each(myArr, function(i, val){
//     $('#users').append('<li>'+val+'</li>')
// })

// var newArr = $('ul#list li').toArray();
// // console.log(newArr);
// $.each(newArr, function(i, val){
//     console.log(val.innerHTML);
// });

/*
$('#btnFadeOut').click(function(){
    // fadeOut(timer) = slow fast or miliseconds
    $('#box').fadeOut(3000, function(){
        // callback function - when initial function is done, do next one
        $('#btnFadeOut').text('Its Gone');
    });

    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(3000);
    });
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000);
    });
})

$('#btnSlideDown').click(function(){
    // fadeOut(timer) = slow fast or miliseconds
    $('#box').slideDown(3000, function(){
        // callback function - when initial function is done, do next one
        $('#btnFadeOut').text('Its Gone');
    });

    $('#btnSlideUp').click(function(){
        $('#box').slideUp(3000);
    });
    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(1000);
    });

    $('#btnStop').click(function(){
        $('#box').stop();
    });

    $('#moveRight').click(function(){
        $('#box2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '0.5',
        });
    });

    $('#moveLeft').click(function(){
        $('#box2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '1'
        })
    })

    $('#moveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left: 0
        });
        box.animate({
            top: 0
        });
    })
})
*/

// ****** AJAX ***** //

// load method

// $('#result').load('test.html', function(responseTxt, statusTxt, xhr){
//     if(statusTxt == "success"){
//         alert('It went fine');
//     } else if(statusTxt == "error"){
//         alert("Error: "+xhr.statusText)
//     }
// });

// get method

// $.get('test.html', function(data){
//     $('#result').html(data);
// });

// $.getJSON('users.json', function(data){
//     $.each(data, function(i, user){
//         $('ul#users').append('<li>'+user.firstName+'</li>')
//     })
// })

// ajax method

// $.ajax({
//     method:'GET',
//     url:'https://jsonplaceholder.typicode.com/posts',
//     dataType: 'json'
// }).done(function(data){
//     console.log(data);
//     $.map(data, function(post, i){
//         $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>')
//     })
// })

// $('#postForm').submit(function(e){
//     e.preventDefault();

//     var title = $('#title').val();
//     var body = $('#body').val();
//     var url = $(this).attr('action');

//     $.post(url, {title:title, body:body}).done(function(data){
//         console.log('Post Saved');
//         console.log(data);
//     })
// })