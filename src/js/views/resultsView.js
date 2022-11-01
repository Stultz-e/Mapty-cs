import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = '';
  // _data;

  _generateMarkup() {
    // console.log(this._data);
    // maps the data connecting it to a for each method, result becomes the data object
    return this._data.map(recipe => previewView.render(recipe, false)).join('');
  }
}

export default new ResultsView();
