import SurveyForm from '../containers/SurveyForm';
import NotePage from '../containers/NotePage';

export const Home = '/';
export const Note = '/note';
export const Survey = '/survey';

export default [
  {
    path: Note,
    name: 'Note',
    exact: true,
    component: NotePage,
  },
  {
    path: Survey,
    name: 'Survey',
    exact: true,
    component: SurveyForm,
  },
  {
    path: Home,
    name: 'Home',
    exact: true,
    component: SurveyForm,
  },
];
