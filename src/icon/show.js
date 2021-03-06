/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import Icon from './icon.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';
import type {IconPropsT} from './types.js';
import {ThemeContext} from '../styles/theme-provider.js';

export default function Show(props: IconPropsT) {
  return (
    <ThemeContext.Consumer>
      {theme =>
        theme.icons && theme.icons.Show ? (
          <theme.icons.Show
            title="Show"
            viewBox="0 0 20 20"
            {...omitDollarPrefixedKeys(props)}
          />
        ) : (
          <Icon title="Show" viewBox="0 0 20 20" {...props}>
            <path d="M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" />
          </Icon>
        )
      }
    </ThemeContext.Consumer>
  );
}
