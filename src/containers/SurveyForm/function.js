import { FirebaseApp } from '../../utils/firebase';

export default history => async input => {
  FirebaseApp.submit(input).then(_ => history.push(`/note`));
};
