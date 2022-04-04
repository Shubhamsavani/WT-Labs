document.getElementById('submit_btn').onclick = function () {
    ret = cb_count()
    console.log(ret)
    if (ret[0]) {
        var output_div = document.getElementById('output')
        output_div.innerHTML = ret[1];
    }
}

function cb_count() {
    var input = document.getElementsByTagName('input');
    var count = 0;
    var selected = '';
    for (var i = 0; i < input.length; i++) {
        if (input[i].type == 'checkbox' && input[i].checked) {
            count++;
            selected = selected + input[i].value + '<br>';
        }
    }
    if (count < 2) {
        alert("Select atleast 2 hobbies")
        return [false, selevcted];
    }
    else {
        return [true, selected];
    }
}
