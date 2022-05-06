import {domReady} from '@roots/sage/client';
import TableFilter from 'tablefilter';
/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);

var tf = new TableFilter(document.querySelector('.my-table'), {
    base_path: 'path/to/my/scripts/tablefilter/'
});
tf.init();

