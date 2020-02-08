document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("button");
    btn.addEventListener("click", greet);
});

function greet() {
    const name = document.getElementById("nameField").value;
    if(name === "") alert("Witaj, Użytkowniku");
    else alert("Witaj, " + name);
}

function notificate(poz) {
    alert("Wybrano pozycję numer " + poz);
}

$(document).ready(function() {
    $("#form").validate({
        rules: {
            name: "required",
            surname: "required",
            email: {
                required: true,
                email: true
            },
            lucky_digit: {
                required: true,
                min: 0,
                max: 9
            }
        },
        messages: {
            name: {
                required: "Podaj swoje imię!"
            },
            surname: {
                required: "Podaj swoje nazwisko!"
            },
            email: {
                required: "Podaj adres e-mail!",
                email: "To nie jest prawidłowy adres e-mail!"
            },
            lucky_digit: {
                required: "Podaj swoją szczęśliwą cyfrę!",
                min: "Podaj wartość nieujemną!",
                max: "Podałeś liczbę, a wymagana jest cyfra!"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $("#button1").mouseover(function() {
        $(this).html("Jednak nie :)");
    });
    $("#button1").mouseout(function() {
        $(this).html("Guzik");
    });

    $("#button2").mouseover(function() {
        $(this).css("background-color", "darkorchid");
    });
    $("#button2").mouseout(function() {
        $(this).css("background-color", "");
    });

    $("#button3").mouseover(function() {
        $(this).css("background-image", "url(Random_Bash.png)");
        $(this).css("width", "107px");
        $(this).css("height", "76px");
        $(this).css("color", "red");
        $(this).html("Nje klikamj nmie")
    });
    $("#button3").mouseout(function() {
        $(this).css("background-image", "");
        $(this).css("width", "");
        $(this).css("height", "");
        $(this).css("color", "");
        $(this).html("Guzik");
    });
});