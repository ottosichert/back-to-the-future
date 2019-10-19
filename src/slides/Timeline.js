import React from 'react';

import { CodePane, Slide } from '../components';

/* sources 17.10.2019:
- https://www.w3.org/Style/CSS20/
- https://developer.mozilla.org/en-US/docs/Archive/CSS3
- https://en.wikipedia.org/wiki/JavaScript
- https://en.wikipedia.org/wiki/ECMAScript
- https://en.wikipedia.org/wiki/Cascading_Style_Sheets

1996 - CSS 1, JavaScript
1997 - ECMAScript 1
1998 - CSS 2, ECMAScript 2
1999 - ECMAScript 3
2002 - CSS 2.1
2005 - SASS
2006 - jQuery
2007 - MooTools
2009 - ECMAScript 5, CoffeeScript, LESS
2010 - Stylus
2011 - CSS 3
2015 - ECMAScript 6
2016 - ECMAScript 7
2017 - CSS 4, ECMAScript 8
2018 - ECMAScript 9

*/

export default () => (
  <Slide>
    <CodePane lang="git">{`
+ Timeline of JavaScript and CSS standards and language extensions

  'JavaScript'                                                      'ECMAScript 9'
   |                                                                            |
   |  'ECMAScript 1'                  CoffeeScript               'ECMAScript 8' |
   |   |                                         |                           |  |
   |   | 'ECMAScript 2'            MooTools      |           'ECMAScript 7'  |  |
   |   |  |                               |      |                       |   |  |
   |   |  |  'ECMAScript 3'      jQuery   |      |        'ECMAScript 6' |   |  |
   |   |  |   |                       |   |      |                    |  |   |  |
   |   |  |   |                       |   |     'ECMAScript 5'        |  |   |  |
   |   |  |   |                       |   |      |                    |  |   |  |
# 1996   1998   2000   2002   2004   2006   2008   2010   2012   2014   2016   2018
#    1997   1999   2001   2003   2005   2007   2009   2011   2013   2015   2017   2019
   |      |             |         |              |  |   |                    |
   |      |             |         SASS           |  |   |                    |
   |      |             |                        |  |   |                    |
   |      |             |                     LESS  |   |                    |
   |      |             |                           |   |                    |
   |      |            'CSS 2.1'               Stylus   |                    |
   |      |                                             |                    |
   |     'CSS 2'                                   'CSS 3'                   |
   |                                                                         |
  'CSS 1'                                                               'CSS 4'
    `}</CodePane>
  </Slide>
);
