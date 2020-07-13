import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'a-for-test': {
          caption: 'a-for-test',
          title: 'a-for-test',
          'i-i-s-jjjhhjhjhjhjhjh-cat-l': {
            caption: 'i-i-s-jjjhhjhjhjhjhjh-cat-l',
            title: 'i-i-s-jjjhhjhjhjhjhjh-cat-l'
          },
          'i-i-s-jjjhhjhjhjhjhjh-dog-l': {
            caption: 'i-i-s-jjjhhjhjhjhjhjh-dog-l',
            title: 'i-i-s-jjjhhjhjhjhjhjh-dog-l'
          },
          'i-i-s-jjjhhjhjhjhjhjh-animal-l': {
            caption: 'i-i-s-jjjhhjhjhjhjhjh-animal-l',
            title: 'i-i-s-jjjhhjhjhjhjhjh-animal-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
