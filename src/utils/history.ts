/*
 * @Author: your name
 * @Date: 2022-01-15 16:15:51
 * @LastEditTime: 2022-01-15 16:33:08
 * @LastEditors: your name
 * @Description:
 */
/**
 * history.push(path, [state])
 * history.replace(path, [state])
 * history.go(n)
 * history.goBack()
 * history.goForward()
 *
 * history.listen(func) // listen for changes to the current location
 *
 */
import { createBrowserHistory } from 'history';

const HISTORY = createBrowserHistory();

export default HISTORY;
