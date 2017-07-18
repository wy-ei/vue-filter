/**
 * Replaces new line to br tag based on regex /\r\n/g -> this can be overwritten by passing
 * your own regex as second param.
 *
 * returns a single sting best printed as raw html.
 *
 * Vue 1.0  <p> {{{ text | nl2br }}} </p>
 *
 * Vue 2.0  <p v-html="$options.filters.nl2br(text)"></p>
 * NOTE: v-html does not support the piped filter syntax so directly access the filter function.
 */

function nl2br(text, reg = /\n\r/g) {
  if (text && text !== null) {
    let i, s = '', lines = text.split(reg), l = lines.length;

    for (i = 0; i < l; ++i) {
      s += lines[i];
      (i !== l - 1) && (s += '<br/>');
    }

    return s;
  }
  return text;
}

module.exports =  nl2br;
