import errorHandler from './errorHandler';
import successHandler from './successHandler';
import progressHandler from './progressHandler';
import view from '../view';

function responseHandler(response) {
  view.domActions.resetResultBlock();

  switch (response.status) {
    case 'error':
      return errorHandler(response);
    case 'success':
      return successHandler();
    case 'progress':
      return progressHandler(response);
    default:
      return false;
  }
}

export default responseHandler;
