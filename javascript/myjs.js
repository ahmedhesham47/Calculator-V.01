function showOnScreen(num) {
    document.form.textview.value = document.form.textview.value + num; 
}

function equal() {
    var value = document.form.textview.value; 
    if (value) {
        document.form.textview.value = eval(value);    
    }
}

function clean() {
    document.form.textview.value = "";
}