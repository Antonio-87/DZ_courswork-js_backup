/**
 * Класс Yandex
 * Используется для управления облаком.
 * Имеет свойство HOST
 * */
class Yandex {
  static HOST = 'https://cloud-api.yandex.net/v1/disk';

  /**
   * Метод формирования и сохранения токена для Yandex API
   */
  static getToken(){
    let token = localStorage.getItem('token')? localStorage.getItem('token'): prompt('Введите токен Яндекс диска:');
    if (token) {
      localStorage.setItem('token', token);
    }
    return token;
  }

  /**
   * Метод загрузки файла в облако
   */
  static uploadFile(path, url, callback){
    createRequest(`${this.HOST}/resources/upload/?path=${path}&url=${url}`, {
      method: 'POST',
      headers: {'Authorization': `OAuth ${this.getToken()}`},
    },callback);
  }

  /**
   * Метод удаления файла из облака
   */
  static removeFile(path, callback){

  }

  /**
   * Метод получения всех загруженных файлов в облаке
   */
  static getUploadedFiles(callback){

  }

  /**
   * Метод скачивания файлов
   */
  static downloadFileByUrl(url){

  }
}
