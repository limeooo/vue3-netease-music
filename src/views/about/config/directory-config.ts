/* eslint-disable no-irregular-whitespace */
export const directoryConfig = `
.
├── README.md
├── auto-imports.d.ts
├── commitlint.config.js
├── components.d.ts
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── animation.less
│   │   │   ├── base
│   │   │   │   ├── initialization.less
│   │   │   │   └── normalize.less
│   │   │   ├── common.less
│   │   │   ├── index.less
│   │   │   ├── mixin.less
│   │   │   └── theme
│   │   │       ├── types.ts
│   │   │       ├── variables-dark.ts
│   │   │       ├── variables-red.ts
│   │   │       └── variables-white.ts
│   │   ├── img
│   │   │   ├── 404.png
│   │   │   └── 404_cloud.png
│   │   └── svg
│   │       ├── arrow-back.svg
│   │       ├── arrow-forward.svg
│   │       ├── close.svg
│   │       ├── delete.svg
│   │       ├── download.svg
│   │       ├── expand.svg
│   │       ├── github.svg
│   │       ├── great.svg
│   │       ├── header-fullscreen-cancel.svg
│   │       ├── header-fullscreen.svg
│   │       ├── header-home.svg
│   │       ├── loading-audio.svg
│   │       ├── loading-error.svg
│   │       ├── menu-icon-0.svg
│   │       ├── menu-icon-1.svg
│   │       ├── menu-icon-2.svg
│   │       ├── menu-icon-3.svg
│   │       ├── menu-icon-4.svg
│   │       ├── menu-icon-5.svg
│   │       ├── menu-icon.svg
│   │       ├── mv-player.svg
│   │       ├── player-cycle.svg
│   │       ├── player-list.svg
│   │       ├── player-next.svg
│   │       ├── player-pause.svg
│   │       ├── player-play-empty.svg
│   │       ├── player-play.svg
│   │       ├── player-prev.svg
│   │       ├── player-random.svg
│   │       ├── player-sequential.svg
│   │       ├── player-sm.svg
│   │       ├── player-volume-close.svg
│   │       ├── player-volume.svg
│   │       ├── rubbish.svg
│   │       ├── search.svg
│   │       ├── share.svg
│   │       ├── shrink.svg
│   │       └── theme-skin.svg
│   ├── components
│   │   ├── banner
│   │   │   └── Banner.vue
│   │   ├── base
│   │   │   └── SvgIcon.vue
│   │   ├── comment-list
│   │   │   ├── CommentList.vue
│   │   │   └── CommentListItem.vue
│   │   ├── descriptions
│   │   │   └── Descriptions.vue
│   │   ├── mv-list
│   │   │   ├── MvList.vue
│   │   │   └── MvListItem.vue
│   │   ├── play-list
│   │   │   ├── PlayList.vue
│   │   │   └── PlayListItem.vue
│   │   ├── song-list
│   │   │   ├── SongList.vue
│   │   │   └── SongListItem.vue
│   │   └── tabs
│   │       └── Tabs.vue
│   ├── env.d.ts
│   ├── global
│   │   ├── config.ts
│   │   └── types.ts
│   ├── layout
│   │   ├── Layout.vue
│   │   ├── header
│   │   │   ├── Header.vue
│   │   │   └── components
│   │   │       ├── HeaderButton.vue
│   │   │       ├── HeaderNavgitor.vue
│   │   │       ├── HeaderSearch.vue
│   │   │       ├── HeaderSearchTags.vue
│   │   │       └── HeaderTheme.vue
│   │   ├── menu
│   │   │   ├── Menu.vue
│   │   │   └── components
│   │   │       ├── MenuList.vue
│   │   │       └── MenuUser.vue
│   │   └── player
│   │       ├── Player.vue
│   │       └── components
│   │           ├── PlayerControl.vue
│   │           ├── PlayerInfo.vue
│   │           ├── PlayerList.vue
│   │           ├── PlayerLyric.vue
│   │           ├── PlayerProgress.vue
│   │           └── PlayerSetting.vue
│   ├── main.ts
│   ├── modules
│   │   ├── dayjs.ts
│   │   ├── flexable.ts
│   │   ├── loading-hot-search.ts
│   │   ├── loading-user-info.ts
│   │   ├── notification.ts
│   │   ├── register-direnctive.ts
│   │   ├── svg-icons-register.ts
│   │   └── vue-lazyload-next.ts
│   ├── router
│   │   └── index.ts
│   ├── service
│   │   ├── artist
│   │   │   ├── index.ts
│   │   │   ├── translate.ts
│   │   │   └── types.ts
│   │   ├── comment
│   │   │   ├── index.ts
│   │   │   ├── translate.ts
│   │   │   └── types.ts
│   │   ├── config.ts
│   │   ├── discovery
│   │   │   ├── index.ts
│   │   │   ├── translate.ts
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   ├── mv
│   │   │   ├── index.ts
│   │   │   ├── translate.ts
│   │   │   └── types.ts
│   │   ├── playlist
│   │   │   ├── index.ts
│   │   │   ├── translate.ts
│   │   │   └── types.ts
│   │   ├── request
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   ├── search
│   │   │   ├── index.ts
│   │   │   ├── translate.ts
│   │   │   └── types.ts
│   │   ├── song
│   │   │   ├── index.ts
│   │   │   ├── translate.ts
│   │   │   └── types.ts
│   │   └── user
│   │       ├── index.ts
│   │       ├── translate.ts
│   │       └── types.ts
│   ├── store
│   │   ├── index.ts
│   │   └── module
│   │       ├── discovery.ts
│   │       ├── mvdetail.ts
│   │       ├── mvs.ts
│   │       ├── player.ts
│   │       ├── playlistdetail.ts
│   │       ├── playlists.ts
│   │       ├── search.ts
│   │       ├── songs.ts
│   │       └── user.ts
│   ├── utils
│   │   └── index.ts
│   └── views
│       ├── 404.vue
│       ├── about
│       │   ├── about.vue
│       │   └── config
│       │       ├── author-config.ts
│       │       ├── dependencies-config.ts
│       │       ├── directory-config.ts
│       │       ├── index.ts
│       │       ├── specification-config.ts
│       │       └── stacks-config.ts
│       ├── discovery
│       │   └── discovery.vue
│       ├── mvdetail
│       │   ├── components
│       │   │   ├── MvInfo.vue
│       │   │   └── MvPlayer.vue
│       │   └── mvdetail.vue
│       ├── mvs
│       │   ├── config
│       │   │   ├── index.ts
│       │   │   └── tabs-config.ts
│       │   └── mvs.vue
│       ├── playlistdetail
│       │   ├── components
│       │   │   └── PlaylistDetailHeader.vue
│       │   └── playlistdetail.vue
│       ├── playlists
│       │   ├── components
│       │   │   └── PlaylistsIntro.vue
│       │   ├── config
│       │   │   ├── index.ts
│       │   │   └── tabs-config.ts
│       │   └── playlists.vue
│       ├── searchresult
│       │   ├── components
│       │   │   ├── SearchMv.vue
│       │   │   ├── SearchPlaylist.vue
│       │   │   └── SearchSong.vue
│       │   └── searchresult.vue
│       ├── songs
│       │   ├── config
│       │   │   ├── index.ts
│       │   │   └── tabs-config.ts
│       │   └── songs.vue
│       └── userplaylist
│           └── userplaylist.vue
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
`
