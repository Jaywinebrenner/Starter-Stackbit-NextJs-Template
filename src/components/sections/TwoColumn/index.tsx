import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function TwoColumn(props) {
    console.log("TwoColumn props", props);

    return (
        <div className='two-col' {...getDataAttrs(props)}>
            <h1 data-sb-field-path=".title">{props.title}</h1>
            <h4 data-sb-field-path=".subtitle">{props.subtitle}</h4>
            <div className='two-col-wrapper'>
                <div data-sb-field-path=".left">{props.left}</div>
                <div data-sb-field-path=".right">{props.right}</div>
            </div>
        </div>
    );
}
