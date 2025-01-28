const sendButton = document.querySelector(".send__button");
const arrayString = document.querySelector(".array");
const result = document.querySelector(".result");

function returnLongName() {
    sendButton.addEventListener("click", () => {
        const stringArray = arrayString.value.split(","); // Разделяем строку на массив по запятой
        const longestName = stringArray.reduce(function(longest, current) {
            return current.trim().length > longest.length ? current.trim() : longest;
        }, ""); // Начальное значение - пустая строка

        result.textContent = `Самое длинная фраза: ${longestName}`;
    });
}

returnLongName();
