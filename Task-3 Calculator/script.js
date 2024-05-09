let res = document.getElementById("result");

function display(num) {
    res.value += num;
};

function Calculate() {
    try {
        res.value = eval(res.value);
    }
    catch (e) {
        alert('Invalid Input');
    }
};

function Del(){
    
};

function Clear(){
    res.value=''
};

function Del() {
    res.value = res.value.slice(0, -1);
}