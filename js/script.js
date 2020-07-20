// *************************************************************** jquery goes here
// $(function() {
//uncomment this line to fade out the red box on page load

// $(".red-box").fadeOut(2000);
// $(".blue-box").fadeOut(2000);
// $(".green-box").fadeOut(2000);

// $(".red-box").fadeIn(2000);
// $(".blue-box").fadeIn(2000);
// $(".green-box").fadeIn(2000);

// $(".red-box").fadeTo(2000, 0.3);
// $(".blue-box").fadeTo(4000, 0.3);
// $(".green-box").fadeTo(5000, 0.3);

// $(".green-box").fadeToggle();
// $(".blue-box").fadeToggle();
// $(".red-box").fadeToggle();

// ******************************************************* hiding the elements

// $(function() {
// $(".blue-box").hide();
// $(".blue-box").fadeOut(2000);
// $(".blue-box").show(1000);

// $(".blue-box").hide(3000);
// });

// ************************************************ sliding elements up and down

// $(function() {
//     $(".blue-box").slideUp(2000);
//     $(".blue-box").slideDown(1000);

// $(".green-box").slideUp(1000);
// $(".green-box").slideDown(100);
// $(".red-box").slideUp(2000);
// $(".red-box").slideDown(100);

//     $("p").hide();
//     $("p").slideDown(1000);
//     $("p").slideToggle(1000);
//     $("p").slideToggle(1000);
// });

// ***********************************************************  moving elements

// $(function() {
//     $(".blue-box").animate({
//             "margin-left": "400px",
//         },
//         1000,
//         "linear"
//     );
// });

// **********************************************************  creative animations

// $(function() {
//     $(".blue-box").animate({
//             "margin-left": "400px",
//             opacity: "0",
//             height: "50px",
//             width: "50px",
//             "margin-top": "50px",
//         },
//         1000,
//         "linear"
//     );
// });

// $(function() {
//     $("p").animate({
//             "font-size": "20px",
//         },
//         1000
//     );
// });
//
//
//
//
//
//
//
//

// ************************************************  delaying and chaining animations

// $(function() {
//     $(".red-box").fadeTo(1000, 0.2);
//     $(".blue-box").delay(1000).fadeTo(1000, 0.5);
//     $(".green-box").fadeTo(1000, 0.8).fadeOut(1000).delay(1000).fadeIn(3000);
// });

// another way of delaying and  timings or callback functions

// $(function() {
//     $(".red-box").fadeTo(1000, 0, function() {
//         $(".blue-box").fadeTo(1000, 0, function() {
//             $(".green-box").fadeTo(1000, 0);
//         });
//     });
// });

//
//
//
// *************************************************************  lightbox

// $(function() {
//     $(".lightbox").delay(1000).fadeIn(1000).delay(1000).fadeOut(1000);
// });

//
//
//
//
//
//
//
// ***********************************************  using css in jquery
//
//
//
//
// $(function() {
// $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
// $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("p, h2, input").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");

//     $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
// })
//

//
//
//
//
//

// ******************************************* jquery method for traversal
//

//

// $(function() {
// $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").parents().css("background-color", "rgba(180, 180, 30, 0.8)");
//  $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8)");
//   $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");

// })

// ********************************************************** challenge
// $(function() {
//     $(":header").next().css("background-color", "rgba(180, 180, 30, 0.8)");
//     $("input[type= 'text']").css("background-color", "rgba(180, 180, 30, 0.8)");

// })

// ********************************************************************* jquery methods for filtering

// $(function() {
//$("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li").filter(function(index) {
//     return index % 3 === 0;
// }).css("background-color", "rgba(180, 180, 30, 0.8)");

//  $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
//   $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li").eq(0).css("background-color", "rgba(180, 180, 30, 0.8)");
//  $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");

//  $("li").not(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
// });

// ************************************************************************* Dom

// *************************************************************************** adding new elements into the dom

// $(function() {
//$("ul ul:first").append("<li>i am gonna be the sub item</li>");
// or
// $("<li>i am gonna be the sub itemmm</li>").appendTo($("ul ul:first"));
//$("ul ul:first").prepend("<li>i am gonna be the sub item</li>");
//  $("#content").prepend("<h4> hello nonu </h4>");
//  $(".red-box").after("<div class='red-box'>another red box</div>");
// $(".red-box").before("<div class='red-box'>another red box</div>");
// $("p").after($("#list"));
//
// challenge
//
// $(".red-box").after("<div class='red-box'>another red box</div>");
// $(".blue-box").after("<div class='blue-box'>another blue box</div>");
// $(".green-box").after("<div class='green-box'>another green box</div>");
// $(".red-box").fadeOut(2000);
// $(".blue-box").fadeOut(2000);
// $(".green-box").fadeOut(2000);
// });

//
//
//
//
//
// *********************************************************** removing elements

// $(function() {
//  $("li").remove();
// $("form").children().not("input:text, textarea, br").remove();
// var detachedListItem = $("li").detach();
// $("#content").append(detachedListItem);
//
// $("p:first").empty();
// it completely removes the text
// });

//
//

//

// ****************************************************************** manipulating attributes and properties
//
//
//
//

// $(function() {
// attr(), prop(), val()
//   var specialLink = $("#special-link");
//   console.log(specialLink.attr("href"));
//   console.log(specialLink.attr("title"));
//   specialLink.attr(
//     "href",
//     "https://www.google.com/search?q=java+program+list+to+start&oq=j&aqs=chrome.0.69i59j69i57j35i39l2j0l3j69i60.887j0j7&sourceid=chrome&ie=UTF-8"
//   );
//
// var checkbox = $("input:checkbox");
// console.log(checkbox.prop("checked"));
// console.log(checkbox.attr("checked"));
//
//
//
//
// var textInput = $("input:text");
// console.log(textInput.val());

// var range = $("input[type='range']");
// console.log(range.val());
// });

//
//
//
// ************************************************************ image slideshow

//
//

// $(function() {
//     var galleryimage = $(".gallery").find("img").first();

//     var images = [
//         "images/menonu.jpg",
//         "images/menonu2.jpg",
//         "images/menonu3.jpg",
//     ];

//     var i = 0;

//     setInterval(function() {
//         i = (i + 1) % images.length;
//         galleryimage.fadeOut(function() {
//             $(this).attr("src", images[i]);
//             $(this).fadeIn();
//         });
//         console.log(galleryimage.attr("src"));
//     }, 2000);
// });

//[
// **************************************************************** changing css properties of elements

// $(function() {
//     $(".gallery").css("display", "none"); // or use .hide()

//     var redBox = $(".red-box");
//     console.log(redBox.css("width")); // gives 80px
//     console.log(redBox.width()); // 80 not the unit

//     redBox.css("background-color", "#AA7700");
//     $("p").css("font-size", "18px");

// redBox.css("width", "+=20px");

//     var properties = $("p").css(["font-size", "line-height", "color"]);
//     console.log(properties);
//     console.log(properties["font-size"]);

//     redBox.css("user-select", "none"); // we are not able to select text red in red box
// });

//
//
//
//
//
//
// ***************************************************** adding and removing css classes

// $(function() {
//     $("a").addClass("fancy-link"); // it adds animation effect
//     $("p:first").addClass("large emphasize"); // it increases font size and color

//     $("li li").addClass(function(index) {
//         $(this).addClass("item-" + index);
//     });

//     $(".red-box").removeClass("red-box").addClass("blue-box");
// });

//
//
//
//
//
// ********************************************* changing the data of an element

// $(function() {
//     var gallery = $(".gallery");
//     var images = [
//         "images/menonu.jpg",
//         "images/menoonu2.jpg",
//         "images/menonu3.jpg",
//     ];

//     gallery.data("availableImages", images);

//     console.log(gallery.data("availableImages"));
//     gallery.data("name", "the awesome gallery");
//     console.log(gallery.data());
//     gallery.removeData("name");
//     console.log(gallery.data());

//     var firstPar = $("p:first");
//     console.log(firstPar.data("mydata"));
// });

//
//
//
//
//
//
// ************************************************* retrieving and changing the content of an element

// $(function() {
// text() , html()

//     var firstPar = $("p:first");
//     console.log(firstPar.text());
//     console.log(firstPar.html());

//     firstPar.text("<strong>hello nonu</strong>");
//     firstPar.html("<strong>hello nonu</strong>");

//     firstPar.html(firstPar.html() + "i love u nonu"); // string concatination
// });

//
//
//
//
// ******************************************** Adding click handlers

// $(function() {
//     $("#btn-click")
// .fadeOut(2000)
// .fadeIn(2000)
// .delay(1000)
//         .click(function(event) {
//             console.log(event);
//             alert("button was clicked");
//         });

//
//     $(".red-box").click(function() {
//         $(this)
//             .fadeTo(1000, 0.9)
//             .delay(1000)
//             .fadeTo(1000, 0.9)
//             .fadeOut(1000)
//             .fadeIn(2000);
//     });
// });

//
//
//
// ********************************* Adding hover handlers and adding mouseenter and mouseleaving handlers
//

// $(function() {
// :hover
// $("#btn-hover").hover(function() {
//     alert("button was hovered");
// });

// $(".green-box").hover(function() {
//     $(".green-box").text("hovered");
// or use
//     $(this).text("hovered");
// });

// var blueBox = $(".blue-box");
// blueBox.mouseenter(function() {
//     $(this).stop().fadeOut(2000);
// });

// blueBox.mouseleave(function() {
//     $(this).stop().fadeIn();
// });

// hover(handlerIn , handlerOut)

//     blueBox.hover(
//         function() {
//             $(this).stop().fadeOut(2000);
//         },
//         function() {
//             $(this).stop().fadeIn();
//         }
//     );
// });

//
//
//
//
//
// ****************************************************adding the same handler for multiple events

// **************************************************** modularizing events
// $(function() {
// .on("click", function() {...........})
//     function logEvent() {
//         console.log("mouse was clicked or key was pressed");
//     }

//     $("html").on("click keydown", logEvent);

//     var images = [
//         "images/menonu.jpg",
//         "images/menonu2.jpg",
//         "images/menonu3.jpg",
//     ];

//     var i = 0;
//     $(".gallery")
//         .find("img")//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         .on("click", function() {
//             i = (i + 1) % images.length;
//             $(this).fadeOut(function() {
//                 $(this).attr("src", images[i], fadeIn());
//             });
//         });
// });

//
//
//
//
// ************************************************* Delegated events

// $(function() {
// $("p").click(function() {
//     $(this).fadeOut();
// });
// $("#content").append("< p > this is dynamically added paragraph. < /p>");

// delegated events
//     $("#content").on("click", "p", function() {
//         $(this).fadeOut();
//     });
//     $("#content").append("<p> this is dynamically added paragraph. </p>");

//     $("body").on("mouseenter", "li", function() {
//         $(this).css("color", "#666");
//     });

//     $("#content").on("mouseenter", "h2", function() {
//         $(this).css("color", "#dadada");
//     });
// });

// ******************************************************** passing additional data to events

// $(function() {
//     $("#btn-click").click({
//             user: "abc",
//         },
//         function(event) {
//             greetUser(event.data);
//             alert("welcome back" + user);
//         }
//     );

//     function greetUser(userdata) {
//         username = userdata.user || "anonymous";
//         alert("welcome  back " + username);
//     }
// });

//
//
//
//
// ********************************************************** activity imp

// $(function() {
//     var galleryItems = $(".gallery").find("img");
//     galleryItems.css("width", "33%").css("opacity", "70%");

//     galleryItems.mouseenter(function() {
//         $(this).stop().fadeTo(500, 1);
//     });

//     galleryItems.mouseleave(function() {
//         $(this).stop().fadeTo(500, 0.7);
//     });

//     galleryItems.click(function() {
//         var source = $(this).attr("src");
//         var image = $("<img>").attr("src", source).css("width", "100%");
//         $(".lightbox").empty().append(image).fadeIn(2000);
//     });

//     $(".lightbox").click(function() {
//         $(this).stop().fadeOut();
//     });
// });

//
//
//
//
//
// ******************************************************* Handling keydown and keyup events

// $(function() {
// keypress() - evil

//     $("html").keydown(function() {
//         console.log(event.which);
//     });

//     var ARROW_RIGHT = 39;
//     $("html").keydown(function(event) {
//         if (event.which === ARROW_RIGHT) {
//             $(".blue-box").stop().animate({
//                 marginLeft = "+=10px"
//             }, 50)
//         }
//     })
// });

// ********************************************** focus and blur events

// $(function() {
//     var inputFields = $("input:text, input:password, textarea");
//     inputFields.focus(function() {
//         $(this).css("box-shadow", "0 0 14px #666");
//     });

//     inputFields.blur(function() {
//         $(this).css("box-shadow", "none");
//     });

//     $("#name").blur(function() {
//         var text = $(this).val();
//         if (text.length < 3) {
//             $(this).css("box-shadow", "0 0 14px #881");
//         } else {
//             $(this).css("box-shadow", "0 0 14px #181");
//         }
//     });
// });

//
//
//
//
// ************************************************* using the change event

// $(function() {
//     $("#checkbox").change(function() {
//         var isChecked = $(this).is(":checked");
//         if (isChecked) {
//             $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
//         } else {
//             $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
//         }
//     });
//     $("#selection").change(function() {
//         var selectedOption = $(this).find(":selected").text();
//         alert(selectedOption);
//     })
// });

//
//
//
//
//
// ********************************************************** handling the selected button

// $(function() {
//     $("#form").submit(function(event) {
//         var textarea = $("#message");
//         if (textarea.val().trim() == "") {
//             textarea.css("box-shadow", "0 0 4px #811");
//             event.preventDefault();
//         } else {
// form submitted
//         }
//     });
// });

//
//
//
//
//
// ************************************************* complete form validation on submit

// $(function() {
//     var form = $("#form");
//     enableFastFeedback(form);
//     form.submit(function(event) {
//         var name = $("#name").val();
//         var password = $("#password").val();
//         var message = $("#message").val();
//         var checked = $("#checkbox").is(":checked");

//         validateNameField(name, event);
//         validatePasswordField(password, event);
//         validateMessageField(message, event);
//         validateCheckboxField(checked, event);
//     });
// });

// function enableFastFeedback(formElement) {
//     var nameInput = formElement.find("#name");
//     var passwordInput = formElement.find("#password");
//     var messageInput = formElement.find("#message");
//     var checkboxInput = formElement.find("#checkbox");

//     nameInput.blur(function(event) {
//         var name = $(this).val();
//         validateNameField(name, event);

//         if (!isValidName(name)) {
//             $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//         } else {
//             $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #060" });
//         }
//     });

//     passwordInput.blur(function(event) {
//         var password = $(this).val();
//         validatePasswordField(password, event);

//         if (!isValidPassword(password)) {
//             $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//         } else {
//             $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #060" });
//         }
//     });

//     messageInput.blur(function(event) {
//         var message = $(this).val();
//         validateMessageField(message, event);

//         if (!isValidMessage(message)) {
//             $(this).css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//         } else {
//             $(this).css({ "box-shadow": "0 0 4px #181", border: "1px solid #060" });
//         }
//     });

//     checkboxInput.change(function(event) {
//         var isChecked = $(this).is(":checked");
//         validateCheckboxField(isChecked, event);

//         if (!isChecked) {
//             $(this)
//                 .add("label[for= 'cb']")
//                 .css({ "box-shadow": "0 0 4px #811", border: "1px solid #600" });
//         } else {
//             $(this)
//                 .add("label[for= 'cb']")
//                 .css({ "box-shadow": "0 0 4px #181", border: "1px solid #060" });
//         }
//     });
// }

// function validateNameField(name, event) {
//     if (!isValidName(name)) {
//         $("#name-feedback").text("please enter at least two characters");
//         event.preventDefault();
//     } else {
//         $("#name-feedback").text("");
//     }
// }

// function validatePasswordField(password, event) {
//     if (!isValidPassword(password)) {
//         $("#password-feedback").text(
//             "the password should have at least 6 characters and contains a character "
//         );
//         event.preventDefault();
//     } else {
//         $("#password-feedback").text("");
//     }
// }

// function validateMessageField(message, event) {
//     if (!isValidMessage(message)) {
//         $("#message-feedback").text("please enter a message");
//         event.preventDefault();
//     } else {
//         $("#message-feedback").text("");
//     }
// }

// function validateCheckboxField(isChecked, event) {
//     if (!isChecked) {
//         $("#checkbox-feedback").text("please agree to this");
//         event.preventDefault();
//     } else {
//         $("#checkbox-feedback").text("");
//     }
// }

// function isValidName(name) {
//     return name.length >= 2;
// }

// function isValidPassword(password) {
//     return password.length >= 6 && /.*[0-9].*/.test(password);
// }

// function isValidMessage(message) {
//     return message.trim() != "";
// }

//
//
//
//
// ************************************************  ajax

// $(function() {
//     $("#code").load("js/script.js");

//     $("#code").load("vjfjf.php", function(response, status) {
//         if (status == "error") {
//             alert("could not find");
//         }
//         console.log(response);
//     });
// });

//
//
//
//
//
// ************************************************************************************************

// retrieving flickr images through the its api

// $(function() {
// JSON data ,  we use $.getJSON() function
// {
//     key: value,
//     key: value
// }
//     var flickrApiUrl =
//         "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

//     $.getJSON(flickrApiUrl, {
// options...
//             tags: "sun, beach",
//             tagmode: "any",
//             format: "json",
//         })
//         .done(function(data) {
// success
//             console.log(data);
//             $.each(data.items, function(index, item) {
//                 console.log(item);
//                 $("<img>").attr("src", item.media.m).appendTo("#flickr");
//             });
//         })
//         .fail(function() {
//             alert("ajax call failed");
//         });
// });

//
//
//
//
//
//
//  ******************************************************************************************

// coding activity retrieving pokemon data from the poke api

// $(function() {
//     var pokeApiUrl = "https://pokeapi.co/api/v2/generation/1";
//     var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
//     $.getJSON(pokeApiUrl)
//         .done(function(data) {
//             console.log(data);
//             $.each(data.pokemon_species, function(index, pokemon) {
//                 var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
//                 var link = $("<a>")
//                     .attr("id", pokemon.name)
//                     .attr("href", "#")
//                     .append($("<strong>").text(name));
//                 var par = $("<p>")
//                     .html("Pokemon_species no. " + (index + 1) + " is ")
//                     .append(link);

//                 link.click(function(event) {
//                     $.getJSON(pokemonByName + pokemon.name).done(function(details) {
//                         console.log(details);
//                         var pokemonDiv = $("#pokemon-details");
//                         pokemonDiv.empty();
//                         pokemonDiv.append("<h2>" + name + "</h2>");
//                         pokemonDiv.append(
//                             "<img src='" + details.sprites.front_default + "'>"
//                         );
//                         pokemonDiv.append(
//                             "<img src='" + details.sprites.back_default + "'>"
//                         );
//                         pokemonDiv.append(
//                             "<img src='" + details.sprites.front_shiny + "'>"
//                         );
//                         pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
//                     });

//                     event.preventDefault();
//                 });
//                 par.appendTo("#pokemon");
//             });
//         })
//         .fail(function() {
//             console.log("request to poke api failed");
//         })
//         .always(function() {
//             console.log("pokemon is awesome");
//         });
// });