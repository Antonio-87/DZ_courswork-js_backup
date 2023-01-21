/**
 * Основная функция для совершения запросов по Yandex API.
 * */
const createRequest = (url, options={}) => {
    fetch(url, options).then(response => {
        if (response.ok) {
            response.json().then(resp => {
                callback(resp);
            })
        } else {
            alert('Ошибка в HTTP:' + response.status);
        }
    });
};
