$(document).ready(modalPopup);

function modalPopup() {
    var modalBody = $("<div>", {
        "class": "modal",
        "role": "dialog",
        on: {
            "click": makeSquares
        }
    });
    var modalContent = $("<div>", {
        "class": "modal-content",
    });
    var greeting = $("<div>", {
        "class": "modal-body",
        text: "Welcome to my page!"
    });
    modalContent.append(greeting);
    modalBody.append(modalContent);
    $("body").append(modalBody);
}

function makeSquares() {
    for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
        var row = $("<div>").addClass("row");
        for (var squareIndex = 0; squareIndex < 3; squareIndex++) {
            var square = $("<div>").addClass("square");
            row.append(square);
        }
        $("section").append(row);
    }
}