
//
//
// $(".p1").click(function(){
//     $(this).hide();
// });
//
// $("#btn").click(function(){
//   $("p").show();
// });
//
// $("#menuBtn").click(function(){
//     $("#menu").slideToggle();
// });
// var cuvint,numarul;
// $("#txt").click(function(){
//   cuvint = $("#input1").val();
//   numarul = $("#input2").val();
//   var stringu='';
//   for(var i=0;i<numarul;i++){
//     stringu+="<h3>"+cuvint+"</h3>";
//   }
//   $("#txt").html(stringu);
// });
//
// $(".txt").click(function() {
//   $(this).slideToggle(3000);
// })
// $(document).ready(function(){
//      $(".submenu").hide();
// });
//
// $("#btnForMenu").click(function() {
//   $("#menu").slideToggle();
// })
//
// $(".elem").click(function(){
//   $(this).find("ul").slideToggle();
// })
//
// $("#txt1").click(function() {
//   $("div").animate({right:'100px'});
// })
const server_data = {
    "totalItems": 24,
    "totalPages": 2,
    "currentPage": 0,
    "books": [
        {
            "id": 10,
            "title": "Arta subtila a nepasarii",
            "authorName": "Mark Manson",
            "language": "English",
            "status": "BUSY",
            "tags": [
                "memoir",
                "bad-quality",
                "biography",
                "case",
                "poetry"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_10.png"
        },
        {
            "id": 8,
            "title": "A saptea dorinta",
            "authorName": "Kate Messner",
            "language": "Romanian",
            "status": "FREE",
            "tags": [
                "adventure",
                "good-quality",
                "action",
                "case"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_8.jpg"
        },
        {
            "id": 19,
            "title": "Atomic Habits new",
            "authorName": "James Clear",
            "language": "Russian",
            "status": "FREE",
            "tags": [
                "good-quality",
                "perfect",
                "biography",
                "poetry"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_19.jpg"
        },
        {
            "id": 28,
            "title": "Book Title",
            "authorName": "Author Author",
            "language": "Romanian",
            "status": "FREE",
            "tags": [
                "memoir",
                "bad-quality",
                "new-tag",
                "case"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_28.jpg"
        },
        {
            "id": 27,
            "title": "Book Title",
            "authorName": "Author Author",
            "language": "English",
            "status": "FREE",
            "tags": [
                "memoir",
                "perfect",
                "bad-quality",
                "tagnew"
            ],
            "bookImageUrl": null
        },
        {
            "id": 3,
            "title": "De trei ori tu",
            "authorName": "Federico Moccia",
            "language": "English",
            "status": "FREE",
            "tags": [
                "adventure",
                "romance",
                "good-quality",
                "mystery",
                "perfect"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_3.jpg"
        },
        {
            "id": 13,
            "title": "Eating in the Age of Dieting",
            "authorName": "Rujuta Diwerkar",
            "language": "English",
            "status": "FREE",
            "tags": [
                "good-quality",
                "perfect",
                "biography",
                "guide"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_13.png"
        },
        {
            "id": 18,
            "title": "Greenlights",
            "authorName": "Matthew McConaughey",
            "language": "English",
            "status": "FREE",
            "tags": [
                "adventure",
                "good-quality",
                "history",
                "biography",
                "case"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_18.jpg"
        },
        {
            "id": 25,
            "title": "Harry Potter and the Chamber of Secrets",
            "authorName": "Joanne Rowling",
            "language": "English",
            "status": "FREE",
            "tags": [
                "adventure",
                "magic",
                "good-quality",
                "fantasy",
                "spiral",
                "action",
                "wizards"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_25.jpg"
        },
        {
            "id": 16,
            "title": "Harry Potter and The Philosopher's Stone",
            "authorName": "Joanne Rowling",
            "language": "English",
            "status": "FREE",
            "tags": [
                "adventure",
                "magic",
                "fantasy",
                "captivating",
                "bad-quality",
                "action",
                "case",
                "wizards"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_16.jpg"
        },
        {
            "id": 7,
            "title": "Homo Deus",
            "authorName": "Harari Yuval Noah Noah",
            "language": "English",
            "status": "FREE",
            "tags": [
                "science-fiction",
                "good-quality",
                "perfect",
                "biography",
                "thriller"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_7.jpg"
        },
        {
            "id": 24,
            "title": "Humans",
            "authorName": "Brandon Stanton",
            "language": "Spanish",
            "status": "FREE",
            "tags": [
                "adventure",
                "memoir",
                "good-quality",
                "perfect",
                "action",
                "new-book"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_24.jpg"
        },
        {
            "id": 15,
            "title": "Jane Eyre",
            "authorName": "Charlotte Bronte",
            "language": "English",
            "status": "FREE",
            "tags": [
                "romance",
                "drama",
                "good-quality",
                "classic",
                "perfect",
                "emotional"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_15.jpg"
        },
        {
            "id": 20,
            "title": "Let That Thing Go",
            "authorName": "Monica Sweeney",
            "language": "German",
            "status": "FREE",
            "tags": [
                "science-fiction",
                "perfect",
                "bad-quality",
                "biography",
                "thriller"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_20.jpg"
        },
        {
            "id": 4,
            "title": "Memoriile unei gheise",
            "authorName": "Arthur Golden",
            "language": "English",
            "status": "FREE",
            "tags": [
                "adventure",
                "romance",
                "memoir",
                "good-quality",
                "case"
            ],
            "bookImageUrl": "https://book-sharing-internship.herokuapp.com/book/files/book_4.jpg"
        }
    ]
}

function getAllBooks() {
    $.ajax({
        url: "https://book-sharing-internship.herokuapp.com/all-books",
        method: "GET",
        username: "test123",
        password: "test123test123",
        beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Basic ' + btoa('test123:test123test123'));
     },
        success: response => {
            alert("Succes");
        },
        error: () => {
            alert("Something went wrong:");
        }
    })
}


function display_all_books(){
  books = server_data.books;
  var html = '';
   $.each(books, (index, book) => {
     html += '<li>'+book.title+'</li>';
   });
   $("#book_items").html(html);
}
