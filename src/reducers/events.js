// lodash.js 配列を欲しい形に整形する
// 今回はmapKey仕様でkeyを作成
import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
    switch (action.type){
        case READ_EVENTS:
            return (_.mapKeys(action.response.data, 'id'))
        default:
            return state
    }
}