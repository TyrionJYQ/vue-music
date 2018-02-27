/* *
* singer：歌手
* playing: 播放
*fullScreen：播放器是否全屏
*playlist 播放列表
*sequenceList 播放列表
*mode 播放模式
* 歌曲索引
 */
import {playMode} from 'common/js/config'
import {loadSearch, loadPlaySongs, loadFavorite} from 'common/js/cache'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlaySongs(),
  favoriteList: loadFavorite()
}
export default state