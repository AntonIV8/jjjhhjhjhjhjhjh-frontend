import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISjjjhhjhjhjhjhjhAnimalLForm from './forms/i-i-s-jjjhhjhjhjhjhjh-animal-l';
import IISjjjhhjhjhjhjhjhCatLForm from './forms/i-i-s-jjjhhjhjhjhjhjh-cat-l';
import IISjjjhhjhjhjhjhjhDogLForm from './forms/i-i-s-jjjhhjhjhjhjhjh-dog-l';
import IISjjjhhjhjhjhjhjhAnimalEForm from './forms/i-i-s-jjjhhjhjhjhjhjh-animal-e';
import IISjjjhhjhjhjhjhjhCatEForm from './forms/i-i-s-jjjhhjhjhjhjhjh-cat-e';
import IISjjjhhjhjhjhjhjhDogEForm from './forms/i-i-s-jjjhhjhjhjhjhjh-dog-e';
import IISjjjhhjhjhjhjhjhAnimalModel from './models/i-i-s-jjjhhjhjhjhjhjh-animal';
import IISjjjhhjhjhjhjhjhCatModel from './models/i-i-s-jjjhhjhjhjhjhjh-cat';
import IISjjjhhjhjhjhjhjhDogModel from './models/i-i-s-jjjhhjhjhjhjhjh-dog';
import IISjjjhhjhjhjhjhjhPawsModel from './models/i-i-s-jjjhhjhjhjhjhjh-paws';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-jjjhhjhjhjhjhjh-animal': IISjjjhhjhjhjhjhjhAnimalModel,
    'i-i-s-jjjhhjhjhjhjhjh-cat': IISjjjhhjhjhjhjhjhCatModel,
    'i-i-s-jjjhhjhjhjhjhjh-dog': IISjjjhhjhjhjhjhjhDogModel,
    'i-i-s-jjjhhjhjhjhjhjh-paws': IISjjjhhjhjhjhjhjhPawsModel
  },

  'application-name': 'A for test',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'A for test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'A for test',
          title: 'A for test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'a-for-test': {
          caption: 'AForTest',
          title: 'AForTest',
          'i-i-s-jjjhhjhjhjhjhjh-cat-l': {
            caption: 'Cat',
            title: ''
          },
          'i-i-s-jjjhhjhjhjhjhjh-dog-l': {
            caption: 'Dog',
            title: ''
          },
          'i-i-s-jjjhhjhjhjhjhjh-animal-l': {
            caption: 'Animal',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-jjjhhjhjhjhjhjh-animal-l': IISjjjhhjhjhjhjhjhAnimalLForm,
    'i-i-s-jjjhhjhjhjhjhjh-cat-l': IISjjjhhjhjhjhjhjhCatLForm,
    'i-i-s-jjjhhjhjhjhjhjh-dog-l': IISjjjhhjhjhjhjhjhDogLForm,
    'i-i-s-jjjhhjhjhjhjhjh-animal-e': IISjjjhhjhjhjhjhjhAnimalEForm,
    'i-i-s-jjjhhjhjhjhjhjh-cat-e': IISjjjhhjhjhjhjhjhCatEForm,
    'i-i-s-jjjhhjhjhjhjhjh-dog-e': IISjjjhhjhjhjhjhjhDogEForm
  },

});

export default translations;
