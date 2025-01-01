const saveButton = document.getElementById('save-button');
const resultDisplay = document.getElementById('result-display');

saveButton.addEventListener('click', () => {
    let result = "커핑 결과:\n";

    // 향
    result += "향: ";
    const aromaCheckboxes = document.querySelectorAll('#aroma-text, input[type="checkbox"][value!="기타향"]:checked');
    aromaCheckboxes.forEach(checkbox => result += checkbox.value + ", ");
    result += "\n";
    // 맛
    result += "맛: ";
    const tasteCheckboxes = document.querySelectorAll('#taste-text, input[type="checkbox"][value!="기타맛"]:checked');
    tasteCheckboxes.forEach(checkbox => result += checkbox.value + ", ");
    result += "\n";
    // 느낌
    result += "느낌: ";
    const feelCheckboxes = document.querySelectorAll('#feel-text, input[type="checkbox"][value!="기타느낌"]:checked');
    feelCheckboxes.forEach(checkbox => result += checkbox.value + ", ");
    result += "\n";
    // 선호도
    const preference = document.querySelector('input[name="preference"]:checked');
    result += preference ? `선호도: ${preference.value}위\n` : "선호도: 선택 안 함\n";

    resultDisplay.textContent = result;
});
