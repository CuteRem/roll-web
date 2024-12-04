$(function () {
    $('[data-toggle="tab"]').tab(); // 初始化 Bootstrap tabs
});




function rollNumber() {
    const count = parseInt($("#number-count").val());
    const min = parseInt($("#number-min").val());
    const max = parseInt($("#number-max").val());

    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    $("#number-result").text(result.join(", "));
}


function rollTrueFalse() {

    const result = Math.random() < 0.5 ? "True" : "False";
    $("#true-false-result").text(result);

    // 添加动画类
    $("#true-false-result").addClass("animate__animated animate__flipInX");

    // 移除动画类以备下次动画
    setTimeout(() => {
        $("#true-false-result").removeClass("animate__animated animate__flipInX");
    }, 1000); // 动画持续时间后移除
}


let customOptions = [];

function addOption() {
    const option = $("#custom-option").val();
    if (option) {
        customOptions.push(option);
        $("#custom-options-list").append(`<li class="list-group-item">${option}</li>`);
        $("#custom-option").val(""); // 清空输入框
    }

}

function rollCustom() {
    const count = parseInt($("#custom-count").val());
    const result = [];


    if (customOptions.length === 0) {
        $("#custom-result").text("请添加选项");
        return;
    }


    let availableOptions = [...customOptions]; // 创建一个副本，避免修改原始数组

    for (let i = 0; i < count; i++) {
        if (availableOptions.length === 0) {
            break; // 所有选项都已抽取完毕
        }

        const randomIndex = Math.floor(Math.random() * availableOptions.length);
        result.push(availableOptions[randomIndex]);


        if (count <= availableOptions.length && i < count -1) { //如果选项数量大于等于抽取数量，则不重复抽取
            availableOptions.splice(randomIndex, 1)
        }
    }

    $("#custom-result").text(result.join(", "));
}
